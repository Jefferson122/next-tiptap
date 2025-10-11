"use client";

import { useState, useRef } from "react";

export default function ReadAloud({ question, onResult }: { question: string; onResult?: (r:any)=>void }) {
  const [alignmentVisible, setAlignmentVisible] = useState(false);
  const [results, setResults] = useState<any[]>([]);
  const [recording, setRecording] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    audioChunksRef.current = [];

    recorder.ondataavailable = (e) => audioChunksRef.current.push(e.data);
    recorder.onstop = async () => {
      setRecording(false);
      const blob = new Blob(audioChunksRef.current, { type: "audio/webm" });
      const formData = new FormData();
      formData.append("file", blob, "recording.webm");
      formData.append("modelo", question);

      const resp = await fetch("https://backend1-exyd.onrender.com/upload-audio/", {
        method: "POST",
        body: formData,
      });
      const data = await resp.json();
      setResults((prev) => [...prev, data]);
      if (onResult) onResult(data);
    };

    recorder.start();
    setRecording(true);
    mediaRecorderRef.current = recorder;
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current?.state === "recording") mediaRecorderRef.current.stop();
  };

  return (
    <div className="mt-6">
      <p className="text-lg font-semibold mb-2">{question}</p>

      <div className="flex gap-2 mb-2">
        <button onClick={startRecording} disabled={recording} className="bg-green-600 text-white px-3 py-1 rounded">
          Start
        </button>
        <button onClick={stopRecording} disabled={!recording} className="bg-red-600 text-white px-3 py-1 rounded">
          Stop
        </button>
      </div>

      <button
        onClick={() => setAlignmentVisible((v) => !v)}
        className="bg-purple-600 text-white px-3 py-1 rounded mb-2"
      >
        Toggle Alignment
      </button>

      {alignmentVisible && results.length > 0 && (
        <div
          className="p-2 border rounded bg-gray-50 dark:bg-gray-800"
          dangerouslySetInnerHTML={{
            __html: results[results.length - 1].alignment
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

      <div className="mt-4">
        <h3 className="font-semibold">Results:</h3>
        {results.map((r, i) => (
          <div key={i} className="mt-2 p-2 border rounded bg-white dark:bg-gray-900">
            <p>Global Score: {r.global_score}</p>
            <p>
              Content: {r.content_score}, Pronunciation: {r.pronunciation_score}, Fluency: {r.fluency_score}
            </p>
            {r.url_audio && <audio controls src={r.url_audio} className="mt-1 w-full" />}
            {r.url_visual && <img src={r.url_visual} alt="Fluency" className="mt-1 max-h-40" />}
          </div>
        ))}
      </div>
    </div>
  );
}
