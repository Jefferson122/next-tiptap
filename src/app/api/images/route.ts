import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { createCanvas } from "canvas";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const dynamic = "force-dynamic";

// ---------- Funciones de scoring ----------
function wordAlignment(modelo: string, intento: string) {
  const modeloWords = modelo.toLowerCase().split(" ");
  const intentoWords = intento.toLowerCase().split(" ");
  return modeloWords.map((w, i) => ({
    expected: w,
    said: intentoWords[i] || "-",
    status: intentoWords[i] === w ? "correct" : "incorrect",
  }));
}

function contentScore(modelo: string, intento: string) {
  const matched = intento
    .split(" ")
    .filter((w) => modelo.toLowerCase().includes(w.toLowerCase())).length;
  return Math.round((100 * matched) / Math.max(1, intento.split(" ").length));
}

function pronunciationScore(alignment: any[]) {
  if (!alignment.length) return 0;
  const totalCorrect = alignment.filter((a) => a.status === "correct").length;
  return Math.round((totalCorrect / alignment.length) * 100);
}

function fluencyScore() {
  return Math.floor(70 + Math.random() * 30);
}

// ---------- Generar imagen de fluidez ----------
async function generateWaveformImage(): Promise<Buffer> {
  const width = 600;
  const height = 200;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");

  // Fondo
  ctx.fillStyle = "#f5f5f5";
  ctx.fillRect(0, 0, width, height);

  // Línea de onda simulada
  ctx.strokeStyle = "#4f46e5";
  ctx.lineWidth = 2;
  ctx.beginPath();
  for (let x = 0; x < width; x++) {
    const y = height / 2 + Math.sin(x / 15) * 50 * Math.random();
    if (x === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();

  return canvas.toBuffer("image/png");
}

// ---------- GET: listar imágenes subidas ----------
export async function GET() {
  try {
    const { resources } = await cloudinary.search
      .expression("resource_type:image")
      .sort_by("created_at", "desc")
      .execute();

    const map = resources.map((item: any) => ({
      id: item.public_id,
      url: item.secure_url,
      created_at: item.created_at,
      bytes: item.bytes,
      format: item.format,
      display_name: item.display_name || item.public_id,
      width: item.width,
      height: item.height,
    }));

    return NextResponse.json(map);
  } catch (error) {
    console.error("Error fetching images:", error);
    return NextResponse.json({ error: "Failed to fetch images" }, { status: 500 });
  }
}

// ---------- POST: audio o imagen ----------
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const modelo = formData.get("modelo") as string | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // --- Audio + scoring ---
    if (modelo) {
      const transcript = modelo; // simulación
      const alignment = wordAlignment(modelo, transcript);
      const cScore = contentScore(modelo, transcript);
      const pScore = pronunciationScore(alignment);
      const fScore = fluencyScore();
      const globalScore = Math.round(cScore * 0.45 + pScore * 0.3 + fScore * 0.25);

      // Generar imagen de fluidez
      const imgBuffer = await generateWaveformImage();

      // Subir imagen a Cloudinary
      const visualResult: any = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { resource_type: "image", public_id: `waveform_${Date.now()}` },
          (error, result) => {
            if (error) reject(error);
            else resolve(result);
          }
        );
        uploadStream.end(imgBuffer);
      });

      return NextResponse.json({
        transcript,
        alignment,
        content_score: cScore,
        pronunciation_score: pScore,
        fluency_score: fScore,
        global_score: globalScore,
        url_audio: "", // opcional: si subes audio real, pones la URL
        url_visual: visualResult.secure_url || "",
      });
    }

    // --- Imagen ---
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const result: any = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          public_id: file.name.split(/\.\w+$/)[0],
          resource_type: "image",
          invalidate: true,
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      uploadStream.end(buffer);
    });

    return NextResponse.json(result);

  } catch (error) {
    console.error("Error uploading file or processing audio:", error);
    return NextResponse.json(
      { error: "Failed to upload file or process audio" },
      { status: 500 }
    );
  }
}
