import { v2 as cloudinary } from "cloudinary";
import { NextResponse, NextRequest } from "next/server";

export const dynamic = "force-dynamic";

// Configuración de Cloudinary (usa variables de entorno)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Helper para subir un archivo a Cloudinary
async function uploadToCloudinary(file: File, buffer: Buffer) {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        public_id: file.name.split(/\.\w+$/)[0], // nombre sin extensión
        resource_type: "image",
        invalidate: true,
      },
      (error, result) => (error ? reject(error) : resolve(result))
    );
    uploadStream.end(buffer);
  });
}

// ---------- GET: listar imágenes ----------
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
    return NextResponse.json(
      { error: "Failed to fetch images" },
      { status: 500 }
    );
  }
}

// ---------- POST: imagen o audio con scoring dinámico ----------
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const modelo = formData.get("modelo") as string | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // ---------- AUDIO ----------
    if (modelo) {
      // Simulación de transcripción
      const transcript = modelo
        .split(" ")
        .map((w) => (Math.random() < 0.8 ? w : "")) // 80% chance correcto
        .join(" ")
        .trim();

      const expectedWords = modelo.split(" ");
      const saidWords = transcript.split(" ");
      const alignment = expectedWords.map((word, i) => ({
        expected: word,
        said: saidWords[i] || "",
        status: saidWords[i] === word ? "correct" : "missing",
      }));

      const content_score = Math.round(
        (alignment.filter((a) => a.status === "correct").length /
          expectedWords.length) *
          100
      );
      const pronunciation_score = content_score;
      const fluency_score = Math.round(Math.random() * 20 + 80); // aleatorio 80-100
      const global_score = Math.round(
        (content_score + pronunciation_score + fluency_score) / 3
      );

      return NextResponse.json({
        transcript,
        alignment,
        content_score,
        pronunciation_score,
        fluency_score,
        global_score,
        url_audio: "",
        url_visual: "",
      });
    }

    // ---------- IMAGEN ----------
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const result: any = await uploadToCloudinary(file, buffer);

    return NextResponse.json({
      id: result.public_id,
      url: result.secure_url,
      created_at: result.created_at,
      bytes: result.bytes,
      format: result.format,
      display_name: result.display_name || result.public_id,
      width: result.width,
      height: result.height,
    });
  } catch (error) {
    console.error("Error uploading file or processing audio:", error);
    return NextResponse.json(
      { error: "Failed to upload file or process audio" },
      { status: 500 }
    );
  }
}
