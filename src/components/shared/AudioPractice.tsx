"use client";

import { useState, useEffect, useRef } from "react";

const AudioPractice = () => {
  const QUESTIONS = [
    "As a child, I used to spend hours playing in my grandmother's garden...",
    "In Germany, over 100,000 tons of diapers are discarded each year...",
    "Around 250 million years ago, 700 species of reptiles..."
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [results, setResults] = useState<any[]>([]);
  const [recording, setRecording] = useState(false);
  const [alignmentVisible, setAlignmentVisible] = useState(false);
  const [espVisible, setEspVisible] = useState(false);
  const [pronDetail, setPronDetail] = useState("");
  const [pronEsp, setPronEsp] = useState("");

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const sessionIdRef = useRef(localStorage.getItem("sessionId") || Date.now().toString());

  useEffect(() => {
    localStorage.setItem("sessionId", sessionIdRef.current);
  }, []);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    audioChunksRef.current = [];

    recorder.ondataavailable = e => audioChunksRef.current.push(e.data);
    recorder.onstart = () => setRecording(true);
    recorder.onstop = async () => {
      setRecording(false);
      const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
      const formData = new FormData();
      formData.append("file", audioBlob, "recording.webm");
      formData.append("modelo", QUESTIONS[currentQuestion]);
      formData.append("session_id", sessionIdRef.current);

      try {
        const resp = await fetch("/api/images", { method: "POST", body: formData });
        const data = await resp.json();
        if (data.error) return alert("Error: " + data.error);

        setResults(prev => [...prev, data]);
        setPronDetail(data.alignment.map((w:any)=>w.said).join(" "));
        setPronEsp(espanglizarAmericano(QUESTIONS[currentQuestion]));
      } catch (err) {
        console.error(err);
      }
    };

    recorder.start();
    mediaRecorderRef.current = recorder;
  };

  const stopRecording = () => mediaRecorderRef.current?.state === "recording" && mediaRecorderRef.current.stop();
  const nextQuestion = () => setCurrentQuestion(prev => Math.min(prev + 1, QUESTIONS.length - 1));
  const retryTest = () => {
    setCurrentQuestion(0);
    setResults([]);
    setPronDetail("");
    setPronEsp("");
  };

  const espanglizarAmericano = (text: string) => {
    const dic: Record<string,string> = {
      "child":"chaild","i":"ai","used":"iust","to":"tu","hours":"áuers"
    };
    return text.split(" ").map(w=>dic[w.toLowerCase()]||w).join(" ");
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto my-6">
      <h2 className="text-lg font-bold mb-4">Read aloud the text below:</h2>
      <div className="mb-4 p-4 border border-gray-200 rounded">{QUESTIONS[currentQuestion]}</div>

      <div className="flex gap-2 mb-4">
        <button onClick={startRecording} disabled={recording} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Start</button>
        <button onClick={stopRecording} disabled={!recording} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Stop</button>
        <button onClick={nextQuestion} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Next</button>
        <button onClick={retryTest} className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700">Retry</button>
      </div>

      <div className="mb-4">
        <button onClick={()=>setAlignmentVisible(v=>!v)} className="underline text-sm">Toggle Alignment</button>
        {alignmentVisible && <div className="mt-2 p-2 border border-gray-200 rounded">{pronDetail}</div>}
      </div>

      <div className="mb-4">
        <button onClick={()=>setEspVisible(v=>!v)} className="underline text-sm">Toggle Espanglización</button>
        {espVisible && <div className="mt-2 p-2 border border-gray-200 rounded italic bg-yellow-50">{pronEsp}</div>}
      </div>

      <div>
        <h3 className="font-semibold mb-2">Results:</h3>
        {results.map((r,i)=>(
          <div key={i} className="border border-gray-200 p-3 mb-3 rounded">
            <p><strong>Global Score:</strong> {r.global_score}</p>
            <p>Content: {r.content_score}, Pronunciation: {r.pronunciation_score}, Fluency: {r.fluency_score}</p>
            {r.url_audio && <audio controls src={r.url_audio} className="w-full mt-2"></audio>}
            {r.url_visual && <img src={r.url_visual} alt="Fluency Graph" className="w-full mt-2 rounded" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AudioPractice;
