"use client";

import { useState, useEffect, useRef } from "react";
import WritingDictation from "@/components/data/repeatsentences";

interface Result {
  global_score: number;
  content_score: number;
  pronunciation_score: number;
  fluency_score: number;
  alignment?: any[];
  url_audio?: string;
  url_visual?: string;
}

export default function RepeatSentences() {
  const [current, setCurrent] = useState(0);
  const [recording, setRecording] = useState(false);
  const [results, setResults] = useState<(Result | null)[]>([]);
  const [alignmentVisible, setAlignmentVisible] = useState(false);
  const [prepareCountdown, setPrepareCountdown] = useState(3);
  const [isPreparing, setIsPreparing] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const sentences = WritingDictation;

  // 🎯 Preparar antes de reproducir audio
  useEffect(() => {
    setIsPreparing(true);
    setPrepareCountdown(3);

    const prepInterval = setInterval(() => {
      setPrepareCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(prepInterval);
          setIsPreparing(false);
          // Reproducir audio original
          if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(() => {
              console.log("⚠️ Autoplay bloqueado por navegador");
            });
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(prepInterval);
  }, [current]);

  // 🎙️ Grabar respuesta del usuario
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      audioChunksRef.current = [];

      recorder.ondataavailable = (e) => audioChunksRef.current.push(e.data);
      recorder.onstop = async () => {
        setRecording(false);
        const blob = new Blob(audioChunksRef.current, { type: "audio/webm" });

        const formData = new FormData();
        formData.append("file", blob, "recording.webm");
        formData.append("modelo", sentences[current].text);

        const resp = await fetch("https://backend1-exyd.onrender.com/upload-audio/", {
          method: "POST",
          body: formData,
        });

        const data = await resp.json();
        const updated = [...results];
        updated[current] = data;
        setResults(updated);
      };

      recorder.start();
      setRecording(true);
      mediaRecorderRef.current = recorder;
    } catch (error) {
      console.error("🎤 Error al acceder al micrófono:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current?.state === "recording") {
      mediaRecorderRef.current.stop();
    }
  };

  // 🔁 Navegación entre ejercicios
  const next = () => setCurrent((p) => Math.min(p + 1, sentences.length - 1));
  const back = () => setCurrent((p) => Math.max(p - 1, 0));

  const currentResult = results[current];

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-900 dark:text-gray-100">
        🔁 Repeat Sentences (Speech Evaluation)
      </h2>

      <div className="p-4 border rounded bg-gray-50 dark:bg-gray-800 mb-4">
        {/* Contador de preparación */}
        {isPreparing ? (
          <p className="text-lg font-bold text-red-600">Prepare: {prepareCountdown}...</p>
        ) : (
          <p className="text-lg font-bold text-green-600">Listen and Repeat!</p>
        )}

        {/* Audio original */}
        <audio
          ref={audioRef}
          controls
          src={sentences[current].audio}
          className="w-full mt-2 mb-3"
        />

        {/* Controles de grabación */}
        <div className="flex gap-2 mb-2">
          <button
            onClick={startRecording}
            disabled={recording}
            className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
          >
            🎙️ Start
          </button>
          <button
            onClick={stopRecording}
            disabled={!recording}
            className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
          >
            ⏹️ Stop
          </button>
          <button
            onClick={() => setAlignmentVisible((v) => !v)}
            disabled={!currentResult}
            className="bg-purple-600 text-white px-3 py-1 rounded hover:bg-purple-700"
          >
            Toggle Alignment
          </button>
        </div>

        {/* Resultado */}
        {currentResult && (
          <div className="p-2 border rounded bg-white dark:bg-gray-900 mt-2">
            <p>🎯 Global Score: {currentResult.global_score}</p>
            <p>
              Content: {currentResult.content_score}, Pronunciation:{" "}
              {currentResult.pronunciation_score}, Fluency:{" "}
              {currentResult.fluency_score}
            </p>
            {currentResult.url_audio && (
              <audio
                controls
                src={currentResult.url_audio}
                className="mt-2 w-full"
              />
            )}
            {currentResult.url_visual && (
              <img
                src={currentResult.url_visual}
                alt="Fluency"
                className="mt-2 max-h-40"
              />
            )}
          </div>
        )}

        {/* Alineación palabra por palabra */}
        {alignmentVisible && currentResult?.alignment && (
          <div
            className="p-2 border rounded bg-gray-50 dark:bg-gray-800 mt-2"
            dangerouslySetInnerHTML={{
              __html: currentResult.alignment
                .map((w: any) => {
                  const color =
                    w.status === "correct"
                      ? "green"
                      : w.status === "missing"
                      ? "red"
                      : "orange";
                  return `<span style="color:${color}">${w.said || "❌"}</span>`;
                })
                .join(" "),
            }}
          />
        )}
      </div>

      {/* Controles de navegación */}
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={back}
          disabled={current === 0}
          className="flex-1 bg-gray-600 text-white py-2 rounded hover:bg-gray-700 disabled:opacity-50"
        >
          ⬅️ Back
        </button>
        <button
          onClick={next}
          disabled={current === sentences.length - 1}
          className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:opacity-50"
        >
          Next ➡️
        </button>
      </div>
    </div>
  );
}
