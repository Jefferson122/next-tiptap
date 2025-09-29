"use client";
import { useState, useEffect, useRef } from "react";

interface AudioPracticeProps {
  questions: { title: string; text: string }[];
}

export default function AudioPractice({ questions }: AudioPracticeProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [allResults, setAllResults] = useState<any[][]>([]);
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

  useEffect(() => { localStorage.setItem("sessionId", sessionIdRef.current); startTimer(); }, []);
  useEffect(() => resetTimer(), [currentQuestion]);

  const clearTimer = () => timerRef.current && clearInterval(timerRef.current);
  const resetTimer = () => { stopRecording(); clearTimer(); startTimer(); };

  const startTimer = () => {
    clearTimer();
    setTimer(40);
    timerRef.current = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) { clearTimer(); playBeep(); startRecording(); return 0; }
        return prev-1;
      });
    }, 1000);
  };

  const playBeep = () => {
    const context = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = context.createOscillator();
    const gainNode = context.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(1000, context.currentTime);
    osc.connect(gainNode);
    gainNode.connect(context.destination);
    osc.start(); osc.stop(context.currentTime + 0.2);
  };

  const handleStartClick = () => { clearTimer(); setTimer(0); playBeep(); startRecording(); };

  const startRecording = async () => {
    if (recording || !questions[currentQuestion]) return;
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    audioChunksRef.current = [];

    recorder.ondataavailable = e => audioChunksRef.current.push(e.data);
    recorder.onstart = () => { setRecording(true); setTimeout(()=>{ if(recorder.state==="recording") recorder.stop(); },30000); };
    recorder.onstop = async () => {
      setRecording(false);
      const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
      const formData = new FormData();
      formData.append("file", audioBlob, "recording.webm");
      formData.append("modelo", questions[currentQuestion].text);
      formData.append("session_id", sessionIdRef.current);

      try {
        const resp = await fetch("https://backend1-exyd.onrender.com/upload-audio/", { method: "POST", body: formData });
        const data = await resp.json();
        if(data.error) return alert("Error: "+data.error);

        setAllResults(prev => {
          const copy = [...prev];
          copy[currentQuestion] = [...(copy[currentQuestion]||[]), data];
          return copy;
        });
        loadResult(currentQuestion);
      } catch(err){ console.error(err); }
    };
    recorder.start();
    mediaRecorderRef.current = recorder;
  };

  const stopRecording = () => mediaRecorderRef.current?.state==="recording" && mediaRecorderRef.current.stop();

  const loadResult = (idx:number) => {
    const dataArray = allResults[idx] || [];
    if(dataArray.length>0){
      const data = dataArray[dataArray.length-1];
      setPronDetail(data.alignment.map((w:any)=>{
        const color = w.status==="correct"?"green":w.status==="missing"?"red":"orange";
        return `<span style="color:${color}; margin-right:2px">${w.said||"❌"}</span>`;
      }).join(" "));
    } else { setPronDetail(""); setPronEsp(""); }
  };

  const nextQuestion = () => setCurrentQuestion(prev=>Math.min(prev+1,questions.length-1));
  const prevQuestion = () => setCurrentQuestion(prev=>Math.max(prev-1,0));
  const retryTest = () => { setCurrentQuestion(0); setAllResults(Array(questions.length).fill([])); setPronDetail(""); setPronEsp(""); resetTimer(); };

  const toggleFullscreen = async () => {
    if(!containerRef.current) return;
    if(!isFullscreen) try { await containerRef.current.requestFullscreen(); setIsFullscreen(true); } catch(e){ console.error(e); }
    else try { await document.exitFullscreen(); setIsFullscreen(false); } catch(e){ console.error(e); }
  };

  return (
    <div ref={containerRef}>
      {questions.length===0 ? <p>No questions yet.</p> : (
        <div>
          <div className="mb-2">{questions[currentQuestion].text}</div>
          <div className="mb-2">⏱ {timer}s</div>
          <div className={`mb-4 ${recording?'text-red-600':'text-gray-700'}`}>{recording?"🎤 Recording...":"🎤 Ready"}</div>
          <div className="flex gap-2 mb-4">
            <button onClick={prevQuestion} disabled={currentQuestion===0}>Back</button>
            <button onClick={handleStartClick} disabled={recording}>Start</button>
            <button onClick={stopRecording} disabled={!recording}>Stop</button>
            <button onClick={nextQuestion} disabled={currentQuestion===questions.length-1}>Next</button>
            <button onClick={retryTest}>Retry</button>
          </div>

          <div>
            <button onClick={()=>setAlignmentVisible(v=>!v)}>Toggle Alignment</button>
            {alignmentVisible && <div dangerouslySetInnerHTML={{__html:pronDetail}} />}
          </div>

          <div>
            <h3>Results:</h3>
            {(allResults[currentQuestion]||[]).slice().reverse().map((res,i)=>(
              <div key={i}>
                <p>Global Score: {res.global_score}</p>
                <p>Content: {res.content_score}, Pronunciation: {res.pronunciation_score}, Fluency: {res.fluency_score}</p>
                {res.url_audio && <audio controls src={res.url_audio} />}
                {res.url_visual && <img src={res.url_visual} alt="Fluency Graph" />}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
