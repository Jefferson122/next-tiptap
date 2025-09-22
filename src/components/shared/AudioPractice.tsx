"use client";

import { useState, useEffect, useRef } from "react";

const AudioPractice = () => {
  const QUESTIONS = [
    "As a child, I used to spend hours playing in my grandmother's garden. She had an array of colorful flowers and herbs growing throughout the yard, and she would teach me about each one. She had a particular love of lavender, and I remember her telling me stories about how she used to dry it and make sachets to put in her drawers.",
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

  useEffect(() => { localStorage.setItem("sessionId", sessionIdRef.current); }, []);

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
        const resp = await fetch("http://localhost:10000/upload-audio/", { method: "POST", body: formData });
        const data = await resp.json();
        if (data.error) return alert("Error: " + data.error);

        setResults(prev => [...prev, data]);

        // Alignment tipo karaoke
        setPronDetail(data.alignment.map((w: any) => {
          const color = w.status === "correct" ? "green" : w.status === "missing" ? "red" : "orange";
          return `<span style="color:${color}; margin-right:2px">${w.said || "❌"}</span>`;
        }).join(" "));

        // Espanglización fonética
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
  const retryTest = () => { setCurrentQuestion(0); setResults([]); setPronDetail(""); setPronEsp(""); };

  // Función de espanglización fonética
  const espanglizarAmericano = (text: string) => {
    const dic: Record<string,string> = { "child":"chaild","i":"ai","used":"iust","to":"tu","hours":"áuers","playing":"pleiing","my":"mai","grandmother":"grandmozer","garden":"gárden","she":"shi","had":"jad","array":"arrei","flowers":"fláuers","herbs":"érbs","growing":"gróuin","throughout":"zruáut","would":"wuud","teach":"tíich","me":"mi","about":"abaut","each":"íich","one":"uan","particular":"partíkíular","love":"lov","lavender":"lávender","remember":"rimembér","telling":"télin","stories":"stóris","dry":"drai","make":"meik","sachets":"sáshets","drawers":"drórs","the":"ze","of":"ov"};
    const phraseDict: Record<string,string> = { "grandmother's garden":"grandmozerz gárden", "throughout the yard":"zruáut ze yard", "would teach me":"wuud tíich mi", "as a child":"as a chaild", "in my":"in mai" };
    
    // Reemplazar frases completas
    for(let phrase in phraseDict){ text = text.replace(new RegExp(phrase,"gi"), phraseDict[phrase]); }

    // Reglas fonéticas generales
    const reglas = (word: string) => {
      let w = word.toLowerCase();
      w = w.replace(/th/g,'z').replace(/ph/g,'f').replace(/ow/g,'au').replace(/ou/g,'au').replace(/er/g,'ér').replace(/ar/g,'ar').replace(/a/g,'á').replace(/o/g,'ó').replace(/i/g,'í').replace(/e/g,'é').replace(/u/g,'u');
      return w;
    }

    return text.split(/\s+/).map(w=>{
      let clean = w.replace(/[^a-zA-Z']/g,"");
      let punct = w.replace(/[a-zA-Z']/g,"");
      let isCapital = w[0] && w[0] === w[0].toUpperCase();
      let esp = clean.toLowerCase().endsWith("'s") ? (dic[clean.slice(0,-2).toLowerCase()] || reglas(clean.slice(0,-2))) + "s" : dic[clean.toLowerCase()] || reglas(clean);
      if(isCapital && esp.length>0) esp = esp[0].toUpperCase() + esp.slice(1);
      return esp + punct;
    }).join(" ");
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto my-6">
      <h2 className="text-lg font-bold mb-4">Read aloud the text below:</h2>
      <div className="mb-4 p-4 border border-gray-200 rounded">{QUESTIONS[currentQuestion]}</div>

      <div className={`mb-4 p-4 text-center rounded border ${recording ? 'border-red-500 bg-red-100 text-red-700 font-bold' : 'border-gray-300 bg-gray-50 text-gray-700'}`}>
        {recording ? "🎤 Recording..." : "🎤 Ready to record"}
      </div>

      <div className="flex gap-2 mb-4">
        <button onClick={startRecording} disabled={recording} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Start</button>
        <button onClick={stopRecording} disabled={!recording} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Stop</button>
        <button onClick={nextQuestion} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Next</button>
        <button onClick={retryTest} className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700">Retry</button>
      </div>

      <div className="mb-4">
        <button onClick={()=>setAlignmentVisible(v=>!v)} className="underline text-sm">Toggle Alignment</button>
        {alignmentVisible && <div className="mt-2 p-2 border border-gray-200 rounded" dangerouslySetInnerHTML={{ __html: pronDetail }}></div>}
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
            {r.url_audio && <audio controls src={r.url_audio} className="w-full mt-2 rounded" />}
            {r.url_visual && <img src={r.url_visual} alt="Fluency Graph" className="w-full mt-2 rounded" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AudioPractice;
