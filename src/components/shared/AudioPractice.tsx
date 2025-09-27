"use client";

import { useState, useEffect, useRef } from "react";
import QUESTIONS from "@/components/data/questions"; // ajusta la ruta según tu estructura

const AudioPractice = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [allResults, setAllResults] = useState<(any | null)[]>(Array(QUESTIONS.length).fill(null));
  const [recording, setRecording] = useState(false);
  const [alignmentVisible, setAlignmentVisible] = useState(false);
  const [espVisible, setEspVisible] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [pronDetail, setPronDetail] = useState("");
  const [pronEsp, setPronEsp] = useState("");
  const [timer, setTimer] = useState(40); // Cronómetro en segundos

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const sessionIdRef = useRef(localStorage.getItem("sessionId") || Date.now().toString());
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    localStorage.setItem("sessionId", sessionIdRef.current);
    startTimer(); // Inicia cronómetro al cargar primera pregunta
  }, []);

  useEffect(() => {
    // Reinicia cronómetro al cambiar de pregunta
    resetTimer();
  }, [currentQuestion]);

  const playBeep = () => {
    const context = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();
  
    oscillator.type = "sine"; // tipo de sonido
    oscillator.frequency.setValueAtTime(1000, context.currentTime); // 1000 Hz
    oscillator.connect(gainNode);
    gainNode.connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + 0.2); // 0.2 segundos
  };
  

  const startTimer = () => {
    clearTimer();
    setTimer(40);
    timerRef.current = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          clearTimer();
          playBeep();       // suena el pitido
          startRecording(); // Inicia grabación automáticamente cuando llega a 0
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Nueva función para el botón Start
const handleStartClick = () => {
  clearTimer();      // Detiene el cronómetro actual
  setTimer(0);       // Pone el cronómetro en 0 inmediatamente
  playBeep();        // Opcional: pitido al inicio
  startRecording();  // Inicia grabación de 30 segundos
};

  const clearTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const resetTimer = () => {
    stopRecording(); // Detener grabación previa
    clearTimer();
    startTimer();
  };

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;
    if (!isFullscreen) {
      try { await containerRef.current.requestFullscreen(); setIsFullscreen(true); } 
      catch (err) { console.error("Fullscreen failed:", err); }
    } else {
      try { await document.exitFullscreen(); setIsFullscreen(false); } 
      catch (err) { console.error("Exit fullscreen failed:", err); }
    }
  };

  const startRecording = async () => {
    if (recording) return;
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    audioChunksRef.current = [];

    recorder.ondataavailable = e => audioChunksRef.current.push(e.data);
    recorder.onstart = () => {
      setRecording(true);
  
      // Limitar la grabación a 30 segundos
      setTimeout(() => {
        if (recorder.state === "recording") recorder.stop();
      }, 30_000); // 30 segundos
    };
    recorder.onstop = async () => {
      setRecording(false);
      const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
      const formData = new FormData();
      formData.append("file", audioBlob, "recording.webm");
      formData.append("modelo", QUESTIONS[currentQuestion]);
      formData.append("session_id", sessionIdRef.current);

      try {
        const resp = await fetch("https://backend1-exyd.onrender.com/upload-audio/", { method: "POST", body: formData });
        const data = await resp.json();
        if (data.error) return alert("Error: " + data.error);

        setAllResults(prev => {
          const copy = [...prev];
          copy[currentQuestion] = data;
          return copy;
        });

        loadResult(currentQuestion);

      } catch (err) { console.error(err); }
    };

    recorder.start();
    mediaRecorderRef.current = recorder;
  };

  const stopRecording = () => mediaRecorderRef.current?.state === "recording" && mediaRecorderRef.current.stop();

  const loadResult = (idx: number) => {
    const data = allResults[idx];
    if (data) {
      setPronDetail(data.alignment.map((w: any) => {
        const color = w.status === "correct" ? "green" : w.status === "missing" ? "red" : "orange";
        return `<span style="color:${color}; margin-right:2px">${w.said || "❌"}</span>`;
      }).join(" "));
      setPronEsp(espanglizarAmericano(QUESTIONS[idx]));
    } else {
      setPronDetail("");
      setPronEsp("");
    }
  };

  const nextQuestion = () => setCurrentQuestion(prev => Math.min(prev+1, QUESTIONS.length-1));
  const prevQuestion = () => setCurrentQuestion(prev => Math.max(prev-1,0));
  const retryTest = () => { setCurrentQuestion(0); setAllResults(Array(QUESTIONS.length).fill(null)); setPronDetail(""); setPronEsp(""); resetTimer(); };

  const espanglizarAmericano = (text: string) => {
    const dic: Record<string,string> = { "child":"chaild","i":"ai","used":"iust","to":"tu","hours":"áuers","playing":"pleiing","my":"mai","grandmother":"grandmozer","garden":"gárden","she":"shi","had":"jad","array":"arrei","flowers":"fláuers","herbs":"érbs","growing":"gróuin","throughout":"zruáut","would":"wuud","teach":"tíich","me":"mi","about":"abaut","each":"íich","one":"uan","particular":"partíkíular","love":"lov","lavender":"lávender","remember":"rimembér","telling":"télin","stories":"stóris","dry":"drai","make":"meik","sachets":"sáshets","drawers":"drórs","the":"ze","of":"ov"};
    const phraseDict: Record<string,string> = { "grandmother's garden":"grandmozerz gárden", "throughout the yard":"zruáut ze yard", "would teach me":"wuud tíich mi", "as a child":"as a chaild", "in my":"in mai" };
    for(const phrase in phraseDict){ text = text.replace(new RegExp(phrase,"gi"), phraseDict[phrase]); }
    const reglas = (word: string) => {
      let w = word.toLowerCase();
      w = w.replace(/th/g,'z').replace(/ph/g,'f').replace(/ow/g,'au').replace(/ou/g,'au').replace(/er/g,'ér').replace(/ar/g,'ar').replace(/a/g,'á').replace(/o/g,'ó').replace(/i/g,'í').replace(/e/g,'é').replace(/u/g,'u');
      return w;
    }
    return text.split(/\s+/).map(w=>{
      const phrase = w;
      const clean = phrase.replace(/[^a-zA-Z']/g,"");
      const punct = phrase.replace(/[a-zA-Z']/g,"");
      const isCapital = phrase[0] && phrase[0] === phrase[0].toUpperCase();
      let esp = clean.toLowerCase().endsWith("'s") ? (dic[clean.slice(0,-2).toLowerCase()] || reglas(clean.slice(0,-2))) + "s" : dic[clean.toLowerCase()] || reglas(clean);
      if(isCapital && esp.length>0) esp = esp[0].toUpperCase() + esp.slice(1);
      return esp + punct;
    }).join(" ");
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto my-6" ref={containerRef}>
      
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">Read aloud the text below:</h2>
        <button onClick={toggleFullscreen} className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300">
          {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
        </button>
      </div>

      <div className="mb-2 p-4 border border-gray-200 rounded">{QUESTIONS[currentQuestion]}</div>

      {/* Cronómetro en rojo */}
      <div className="mb-4 text-center font-bold text-red-600 text-xl">
        ⏱ {timer}s
      </div>

      <div className={`mb-4 p-4 text-center rounded border ${recording ? 'border-red-500 bg-red-100 text-red-700 font-bold' : 'border-gray-300 bg-gray-50 text-gray-700'}`}>
        {recording ? "🎤 Recording..." : "🎤 Ready to record"}
      </div>

      <div className="flex gap-2 mb-4">
        <button onClick={prevQuestion} disabled={currentQuestion===0} className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">Back</button>
        <button onClick={handleStartClick} disabled={recording} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Start</button>
        <button onClick={stopRecording} disabled={!recording} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Stop</button>
        <button onClick={nextQuestion} disabled={currentQuestion===QUESTIONS.length-1} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Next</button>
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
        <div className="max-h-60 overflow-y-auto pr-2">
          {allResults[currentQuestion] && (
            <div className="border border-gray-200 p-3 mb-3 rounded bg-white shadow-sm">
              <p><strong>Global Score:</strong> {allResults[currentQuestion]?.global_score}</p>
              <p>
                Content: {allResults[currentQuestion]?.content_score}, Pronunciation: {allResults[currentQuestion]?.pronunciation_score}, 
                Fluency: {allResults[currentQuestion]?.fluency_score}
              </p>
              {allResults[currentQuestion]?.url_audio && (
                <audio controls src={allResults[currentQuestion]?.url_audio} className="w-full mt-2 rounded max-w-full" />
              )}
              {allResults[currentQuestion]?.url_visual && (
                <img
                  src={allResults[currentQuestion]?.url_visual}
                  alt="Fluency Graph"
                  className="w-full mt-2 rounded max-w-full max-h-[300px] object-contain"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AudioPractice;
