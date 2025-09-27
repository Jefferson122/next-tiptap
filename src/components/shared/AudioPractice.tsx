"use client";

import { useState, useEffect, useRef } from "react";
import QUESTIONS from "@/components/data/questions";

const AudioPractice = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [allResults, setAllResults] = useState<any[][]>(
    Array(QUESTIONS.length).fill([]) // Cada pregunta empieza con un array vacío
  );
  const [recording, setRecording] = useState(false);
  const [alignmentVisible, setAlignmentVisible] = useState(false);
  const [espVisible, setEspVisible] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [pronDetail, setPronDetail] = useState("");
  const [pronEsp, setPronEsp] = useState("");
  const [timer, setTimer] = useState(40);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const sessionIdRef = useRef(localStorage.getItem("sessionId") || Date.now().toString());
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    localStorage.setItem("sessionId", sessionIdRef.current);
    startTimer();
  }, []);

  useEffect(() => resetTimer(), [currentQuestion]);

  const playBeep = () => {
    const context = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = context.createOscillator();
    const gainNode = context.createGain();
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(1000, context.currentTime);
    oscillator.connect(gainNode);
    gainNode.connect(context.destination);
    oscillator.start();
    oscillator.stop(context.currentTime + 0.2);
  };

  const startTimer = () => {
    clearTimer();
    setTimer(40);
    timerRef.current = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) { clearTimer(); playBeep(); startRecording(); return 0; }
        return prev - 1;
      });
    }, 1000);
  };

  const handleStartClick = () => { clearTimer(); setTimer(0); playBeep(); startRecording(); };
  const clearTimer = () => timerRef.current && clearInterval(timerRef.current);
  const resetTimer = () => { stopRecording(); clearTimer(); startTimer(); };

  const toggleFullscreen = async () => {
    if (!containerRef.current) return;
    if (!isFullscreen) { try { await containerRef.current.requestFullscreen(); setIsFullscreen(true); } catch (err) { console.error(err); } } 
    else { try { await document.exitFullscreen(); setIsFullscreen(false); } catch (err) { console.error(err); } }
  };

  const startRecording = async () => {
    if (recording) return;
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    audioChunksRef.current = [];

    recorder.ondataavailable = e => audioChunksRef.current.push(e.data);
    recorder.onstart = () => {
      setRecording(true);
      setTimeout(() => { if (recorder.state === "recording") recorder.stop(); }, 30_000);
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
          copy[currentQuestion] = [...copy[currentQuestion], data]; // Guardamos múltiples resultados
          return copy;
        });
        loadResult(currentQuestion);
      } catch (err) { console.error(err); }
    };

    recorder.start();
    mediaRecorderRef.current = recorder;
  };

  const stopRecording = () => mediaRecorderRef.current?.state === "recording" && mediaRecorderRef.current.stop();

  // Mostrar la última grabación en pronDetail/pronEsp
  const loadResult = (idx: number) => {
    const dataArray = allResults[idx];
    if (dataArray.length > 0) {
      const data = dataArray[dataArray.length - 1]; // Última grabación
      setPronDetail(
        data.alignment.map((w: any) => {
          const color = w.status === "correct" ? "green" : w.status === "missing" ? "red" : "orange";
          return `<span style="color:${color}; margin-right:2px">${w.said || "❌"}</span>`;
        }).join(" ")
      );
      setPronEsp(espanglizarAmericano(QUESTIONS[idx]));
    } else {
      setPronDetail(""); setPronEsp("");
    }
  };

  const nextQuestion = () => setCurrentQuestion(prev => Math.min(prev+1, QUESTIONS.length-1));
  const prevQuestion = () => setCurrentQuestion(prev => Math.max(prev-1,0));
  const retryTest = () => { 
    setCurrentQuestion(0); 
    setAllResults(Array(QUESTIONS.length).fill([])); 
    setPronDetail(""); 
    setPronEsp(""); 
    resetTimer(); 
  };

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
    <div ref={containerRef} className="bg-white dark:bg-[#1a1a2e] rounded-lg shadow-md p-4 sm:p-6 max-w-full sm:max-w-3xl mx-auto my-6">
      
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-2 sm:gap-4">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 text-center sm:text-left">Read aloud the text below:</h2>
        <button onClick={toggleFullscreen} className="bg-gray-200 dark:bg-gray-700 dark:text-gray-200 px-3 py-1 rounded hover:bg-gray-300 dark:hover:bg-gray-600">
          {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
        </button>
      </div>

      <div className="mb-2 p-4 border border-gray-200 dark:border-gray-700 rounded bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 break-words">{QUESTIONS[currentQuestion]}</div>

      <div className="mb-4 text-center font-bold text-red-600 dark:text-red-400 text-xl">⏱ {timer}s</div>

      <div className={`mb-4 p-3 text-center rounded border ${recording ? 'border-red-500 bg-red-100 dark:bg-red-800 text-red-700 dark:text-red-300 font-bold' : 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-200'}`}>
        {recording ? "🎤 Recording..." : "🎤 Ready to record"}
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        <button onClick={prevQuestion} disabled={currentQuestion===0} className="flex-1 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 disabled:opacity-50">Back</button>
        <button onClick={handleStartClick} disabled={recording} className="flex-1 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50">Start</button>
        <button onClick={stopRecording} disabled={!recording} className="flex-1 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 disabled:opacity-50">Stop</button>
        <button onClick={nextQuestion} disabled={currentQuestion===QUESTIONS.length-1} className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50">Next</button>
        <button onClick={retryTest} className="flex-1 bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700">Retry</button>
      </div>

      <div className="mb-4">
        <button onClick={()=>setAlignmentVisible(v=>!v)} className="underline text-sm text-gray-700 dark:text-gray-300">Toggle Alignment</button>
        {alignmentVisible && <div className="mt-2 p-2 border border-gray-200 dark:border-gray-700 rounded bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200" dangerouslySetInnerHTML={{ __html: pronDetail }}></div>}
      </div>

      <div className="mb-4">
        <button onClick={()=>setEspVisible(v=>!v)} className="underline text-sm text-gray-700 dark:text-gray-300">Toggle Espanglización</button>
        {espVisible && <div className="mt-2 p-2 border border-gray-200 dark:border-gray-700 rounded italic bg-yellow-50 dark:bg-yellow-800 text-gray-800 dark:text-gray-200">{pronEsp}</div>}
      </div>

      <div>
        <h3 className="font-semibold mb-2 text-gray-800 dark:text-gray-100">Results:</h3>
        <div className="max-h-60 overflow-y-auto pr-2">
          {allResults[currentQuestion]
            .slice()        // Copia del array
            .reverse()      // Mostramos de más reciente a más antiguo
            .map((res, i) => (
              <div key={i} className="border border-gray-200 dark:border-gray-700 p-3 mb-3 rounded bg-white dark:bg-gray-800 shadow-sm">
                <p className="text-gray-800 dark:text-gray-200"><strong>Global Score:</strong> {res.global_score}</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Content: {res.content_score}, Pronunciation: {res.pronunciation_score}, Fluency: {res.fluency_score}
                </p>
                {res.url_audio && <audio controls src={res.url_audio} className="w-full mt-2 rounded max-w-full" />}
                {res.url_visual && <img src={res.url_visual} alt="Fluency Graph" className="w-full mt-2 rounded max-w-full max-h-[300px] object-contain" />}
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AudioPractice;
