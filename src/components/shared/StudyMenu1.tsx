"use client";

import { useState, useEffect, useRef } from "react";
import ReadAloud from "@/components/data/ReadAloud";
import WritingDictation from "@/components/data/WritingDictation";
import repeatsentences from "@/components/data/repeatsentences";



interface Exercise {
  text: string;
  audio?: string;
  userInput?: string;
  score?: string;
  type?: "ReadAloud" | "WritingDictation" |"repeatsentences"|string; // <-- aquí
}

export default function StudyMenu() {
  const sections = {
    Speaking: [
      { name: "Read Aloud", timePerQ: 90, instructions: "Read the text aloud clearly." },
      { name: "Repeat Sentence", timePerQ: 40, instructions: "Listen and repeat the sentence exactly." },
      { name: "Describe Image", timePerQ: 60, instructions: "Describe the image in detail using full sentences." },
      { name: "Retell Lecture", timePerQ: 90, instructions: "Listen and retell the lecture in your own words." },
      { name: "Answer Short Question", timePerQ: 15, instructions: "Answer the question briefly and clearly." },
    ],
    Writing: [
      { name: "Summarize Written Text", timePerQ: 600, instructions: "Summarize the text in your own words within 1-2 sentences." },
      { name: "Essay", timePerQ: 1200, instructions: "Write a well-structured essay on the given topic." },
      { name: "Dictation", timePerQ: 60, instructions: "Listen and write exactly what you hear." },
    ],
    Reading: [
      { name: "Fill in the Blanks (RW)", timePerQ: 120, instructions: "Complete the missing words in the text." },
      { name: "Multiple Choice, Multiple Answer", timePerQ: 120, instructions: "Select all answers that apply." },
      { name: "Re-order Paragraphs", timePerQ: 150, instructions: "Arrange the paragraphs in the correct order." },
      { name: "Fill in the Blanks", timePerQ: 120, instructions: "Fill in the missing words." },
      { name: "Multiple Choice, Single Answer", timePerQ: 90, instructions: "Select the correct answer." },
    ],
    Listening: [
      { name: "Summarize Spoken Text", timePerQ: 600, instructions: "Summarize the spoken text in writing." },
      { name: "Multiple Choice, Multiple Answer", timePerQ: 120, instructions: "Select all correct options." },
      { name: "Fill in the Blanks", timePerQ: 150, instructions: "Complete the missing words from the audio." },
      { name: "Highlight Correct Summary", timePerQ: 120, instructions: "Choose the summary that matches the audio." },
      { name: "Select Missing Word", timePerQ: 90, instructions: "Identify the missing word in the sentence." },
      { name: "Write from Dictation", timePerQ: 60, instructions: "Write exactly what you hear from the dictation." },
    ],
  };

  const [activeSection, setActiveSection] = useState<keyof typeof sections>("Speaking");
  const [counts, setCounts] = useState(
    Object.fromEntries(
      Object.entries(sections).flatMap(([section, tasks]) =>
        tasks.map((task) => [`${section}-${task.name}`, 0])
      )
    )
  );

  const [questions, setQuestions] = useState<Exercise[]>([]);
  const [instructions, setInstructions] = useState("");

  // Audio / Dictation
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [allResults, setAllResults] = useState<any[][]>([]);
  const [recording, setRecording] = useState(false);
  const [alignmentVisible, setAlignmentVisible] = useState(false);
  const [espVisible, setEspVisible] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [pronDetail, setPronDetail] = useState("");
  const [pronEsp, setPronEsp] = useState("");
  const [timer, setTimer] = useState(40);
  const [prepareCountdown, setPrepareCountdown] = useState(3);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isPreparing, setIsPreparing] = useState(true);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const sessionIdRef = useRef(localStorage.getItem("sessionId") || Date.now().toString());
  const containerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const prepRef = useRef<NodeJS.Timeout | null>(null);

  const handleChange = (key: string, value: string) => {
    const cleanValue = parseInt(value.replace(/^0+/, ""), 10) || 0;
    setCounts({ ...counts, [key]: cleanValue });
  };

  // Timer
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => { 
    localStorage.setItem("sessionId", sessionIdRef.current); 
    startTimer(); 
  }, []);

  useEffect(() => resetTimer(), [currentQuestion]);
  const clearTimer = () => timerRef.current && clearInterval(timerRef.current);
  const resetTimer = () => { stopRecording(); clearTimer(); startTimer(); setPrepareCountdown(3); setTimeElapsed(0); };
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

  // Grabación
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
          const arr = copy[currentQuestion] || [];
          copy[currentQuestion] = [...arr, data];
          // 🔹 Carga el resultado inmediatamente con los datos actuales:
          setPronDetail(data.alignment.map((w:any)=>{
            const color = w.status==="correct"?"green":w.status==="missing"?"red":"orange";
            return `<span style="color:${color}; margin-right:2px">${w.said||"❌"}</span>`;
          }).join(" "));
          return copy;
        });        
        loadResult(currentQuestion);
      } catch(err){ console.error(err); }
    };
    recorder.start();
    mediaRecorderRef.current = recorder;
  };
  const stopRecording = () => mediaRecorderRef.current?.state==="recording" && mediaRecorderRef.current.stop();

  // Mostrar resultado
  const loadResult = (idx:number) => {
    const dataArray = allResults[idx];
    if(dataArray.length>0){
      const data = dataArray[dataArray.length-1];
      setPronDetail(data.alignment.map((w:any)=>{
        const color = w.status==="correct"?"green":w.status==="missing"?"red":"orange";
        return `<span style="color:${color}; margin-right:2px">${w.said||"❌"}</span>`;
      }).join(" "));
    } else { setPronDetail(""); setPronEsp(""); }
  };

  // Generar preguntas e instrucciones
  const handleGenerateInstructions = () => {
    let result = "";
    let qIndex = 0;
    const q: Exercise[] = [];
  
    Object.entries(counts).forEach(([key, count]) => {
      const [section, taskName] = key.split("-");
      const task = sections[section as keyof typeof sections].find(t => t.name === taskName);
    
      if (task && count > 0) {
        for (let i = 1; i <= count; i++) {
          result += `${task.name} - Pregunta ${i}: ${task.instructions}\n`;
    
          if (taskName === "listen" || taskName === "Write from Dictation") {
            const dict = WritingDictation[qIndex % WritingDictation.length];
            q.push({
              text: dict.text,
              audio: dict.audio,
              userInput: "",
              score: "0/0",
              type: "WritingDictation",
            });
          } else if (section === "Speaking" && taskName === "Read Aloud") {
            q.push({
              text: ReadAloud[qIndex % ReadAloud.length],
              type: "ReadAloud",
            });
          } else if (section === "Speaking" && taskName === "Repeat Sentence") {
            const sentence = repeatsentences[qIndex % repeatsentences.length]; // 🔹 Aquí dentro
            q.push({
              text: sentence.text,
              audio: sentence.audio,
              type: "repeatsentences",
            });
          }
    
          qIndex++;
        }
      }
    });
    

    setInstructions(result.trim());
    setQuestions(q);
    setAllResults(Array(q.length).fill([]));
    setCurrentQuestion(0);
    setPrepareCountdown(3);
    setTimeElapsed(0);
    setIsPreparing(true);
  };

  // Scoring para dictado
  const scoreWords = (modelo: string, intento: string) => {
    const clean = (text: string) =>
      text.toLowerCase().replace(/[^a-z0-9]/gi, "").trim();

    const modeloPal = modelo.split(/\s+/).map(clean).filter(Boolean);
    const intentoPal = intento.split(/\s+/).map(clean).filter(Boolean);

    const total = modeloPal.length;
    if (total === 0) return "0/0";

    const modeloCount: Record<string, number> = {};
    modeloPal.forEach((w) => (modeloCount[w] = (modeloCount[w] || 0) + 1));

    let correct = 0;
    intentoPal.forEach((w) => {
      if (modeloCount[w] > 0) {
        correct++;
        modeloCount[w]--;
      }
    });

    return `${correct}/${total} (${Math.round((correct / total) * 100)}%)`;
  };

  // Estado independiente para el nuevo countdown
  const [countdown30, setCountdown30] = useState(30);
  const countdownRef = useRef<NodeJS.Timeout | null>(null);
  const [countdownRunning, setCountdownRunning] = useState(false);

  // Iniciar countdown de 30s
  const startCountdown30 = () => {
    clearCountdown30(); // Asegura que no haya otro timer corriendo
    setCountdown30(30);
    setCountdownRunning(true);

    countdownRef.current = setInterval(() => {
      setCountdown30(prev => {
        if (prev <= 1) {
          clearCountdown30();
          playBeep(); // Sonido al terminar
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // Limpiar countdown
  const clearCountdown30 = () => {
    if (countdownRef.current) clearInterval(countdownRef.current);
    setCountdownRunning(false);
  };

  // Controles de dictado
  const handleInputChange = (value: string) => {
    const updated = [...questions];
    updated[currentQuestion].userInput = value;
    setQuestions(updated);
  };

  const checkScore = () => {
    const updated = [...questions];
    updated[currentQuestion].score = scoreWords(
      updated[currentQuestion].text,
      updated[currentQuestion].userInput || ""
    );
    setQuestions(updated);
  };

  const nextQuestion = () => setCurrentQuestion(prev=>Math.min(prev+1,questions.length-1));
  const prevQuestion = () => setCurrentQuestion(prev=>Math.max(prev-1,0));
  const retryTest = () => { handleGenerateInstructions(); };

  // Timer de dictado
  useEffect(() => {
    setIsPreparing(true);
    setPrepareCountdown(3);
    setTimeElapsed(0);

    if(questions[currentQuestion]?.audio){
      const prepInterval = setInterval(() => {
        setPrepareCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(prepInterval);
            setIsPreparing(false);
            if (audioRef.current) audioRef.current.play().catch(()=>{});
            return 0;
          }
          return prev-1;
        });
      }, 1000);
      return () => clearInterval(prepInterval);
    } else {
      setIsPreparing(false);
    }
  }, [currentQuestion]);

  useEffect(() => {
    if (!isPreparing && questions[currentQuestion]?.userInput !== undefined) {
      const timer = setInterval(() => setTimeElapsed(prev=>prev+1), 1000);
      return () => clearInterval(timer);
    }
  }, [isPreparing, currentQuestion]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}m : ${s}s`;
  };
    // Al inicio del componente
  const [showTextStates, setShowTextStates] = useState<boolean[]>(
    () => questions.map(() => false)
  );

  // Función para toggle
  const toggleShowText = (idx: number) => {
    const copy = [...showTextStates];
    copy[idx] = !copy[idx];
    setShowTextStates(copy);
  };


  
  return (
    <div className="mt-6 bg-white dark:bg-[#1e1e2f] rounded-2xl shadow-xl p-6 sm:p-8 max-w-full sm:max-w-7xl mx-auto border border-gray-100 dark:border-gray-700">
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">📊 Study Planner</h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
        {Object.keys(sections).map(sec=>(
          <button key={sec} onClick={()=>setActiveSection(sec as keyof typeof sections)}
            className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-xl font-semibold flex items-center gap-1 sm:gap-2 transition-all duration-200 text-sm sm:text-base ${
              activeSection===sec?"bg-blue-600 text-white shadow-md scale-105":"bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"}`}>
            {sec}
          </button>
        ))}
      </div>

      {/* Tasks */}
      <div className="space-y-3 sm:space-y-4">
        {sections[activeSection].map(task=>{
          const key=`${activeSection}-${task.name}`;
          return (
            <div key={key} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
              <span className="font-medium text-gray-700 dark:text-gray-200 mb-1 sm:mb-0">{task.name}</span>
              <div className="flex items-center gap-2 sm:gap-3">
                <input type="number" min="0" className="w-28 sm:w-32 border rounded-lg px-2 py-1 text-center shadow-sm focus:ring-2 focus:ring-blue-400 outline-none dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                  value={counts[key]} onChange={e=>handleChange(key,e.target.value)} />
                <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-300">{task.timePerQ}s / pregunta</span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Total y Generate */}
      <div className="mt-6 sm:mt-8 p-4 sm:p-5 bg-blue-50 dark:bg-blue-900 rounded-xl text-center border border-blue-100 dark:border-blue-700">
        <p className="text-sm sm:text-lg font-semibold text-gray-700 dark:text-gray-200">⏳ Tiempo total estimado:</p>
        <p className="text-2xl sm:text-3xl font-bold text-blue-700 dark:text-blue-300 mt-1 sm:mt-2">{formatTime(Object.values(counts).reduce((a,b)=>a+b*40,0))}</p>
        <button onClick={handleGenerateInstructions} className="mt-4 px-5 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition">Generate</button>
      </div>
    {/* Audio / Dictation Practice */}
      <div className="mt-8" ref={containerRef}>
        {questions.length===0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            ⚠️ No has agregado preguntas todavía.
          </p>
        ) : (
          <div>

          {/* 🔹 Render según tipo de pregunta */}
          {(() => {
            const q = questions[currentQuestion];

            switch (q.type) {
              case "ReadAloud":
                return (
                  <div className="mb-4 p-4 border border-gray-200 dark:border-gray-700 rounded bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 break-words">
                    <p className="text-lg font-semibold mb-2">{q.text}</p>

                    <div className="mt-3">
                      <button
                        onClick={() => setAlignmentVisible((v) => !v)}
                        className="px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
                      >
                        Toggle Alignment
                      </button>

                      {alignmentVisible && (
                        <div
                          className="mt-2 p-2 border rounded bg-gray-100 dark:bg-gray-900"
                          dangerouslySetInnerHTML={{ __html: pronDetail }}
                        />
                      )}
                    </div>

                    <div className="mt-4">
                      <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                        Results:
                      </h3>
                      {(allResults[currentQuestion] || [])
                        .slice()
                        .reverse()
                        .map((res, i) => (
                          <div
                            key={i}
                            className="mt-2 p-2 border rounded bg-white dark:bg-gray-800"
                          >
                            <p>Global Score: {res.global_score}</p>
                            <p>
                              Content: {res.content_score}, Pronunciation:{" "}
                              {res.pronunciation_score}, Fluency: {res.fluency_score}
                            </p>
                            {res.url_audio && (
                              <audio controls src={res.url_audio} className="mt-1 w-full" />
                            )}
                            {res.url_visual && (
                              <img
                                src={res.url_visual}
                                alt="Fluency Graph"
                                className="mt-1 max-h-40"
                              />
                            )}
                          </div>
                        ))}
                    </div>

                    <div className="flex gap-2 mt-4">
                      <button
                        onClick={handleStartClick}
                        disabled={recording}
                        className="flex-1 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
                      >
                        Start
                      </button>
                      <button
                        onClick={stopRecording}
                        disabled={!recording}
                        className="flex-1 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 disabled:opacity-50"
                      >
                        Stop
                      </button>
                    </div>
                  </div>
                );

              case "repeatsentences":
                  return (
                    <div className="mb-4 p-4 border rounded bg-gray-50 dark:bg-gray-800">
                      <p className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                        Listen carefully and repeat the sentence exactly.
                      </p>
                
                      {isPreparing ? (
                        <p className="font-bold text-red-600 mb-2 text-lg">
                          Prepare: {prepareCountdown}...
                        </p>
                      ) : (
                        <p className="font-bold text-red-600 mb-2 text-lg">Repeat now!</p>
                      )}
                
                      {/* 🎧 Audio */}
                      <audio ref={audioRef} controls src={q.audio} className="w-full mb-2" />
                
                      {/* 🔹 Mostrar texto del modelo */}
                      <button
                        onClick={() => toggleShowText(currentQuestion)}
                        className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition mb-3"
                      >
                        {showTextStates[currentQuestion] ? "Hide Text" : "Show Text"}
                      </button>
                
                      {showTextStates[currentQuestion] && (
                        <div className="mt-2 mb-3 p-3 border rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-lg">
                          {q.text}
                        </div>
                      )}
                
                      {/* 🔹 Alignment Toggle (igual que Read Aloud) */}
                      <div className="mt-3">
                        <button
                          onClick={() => setAlignmentVisible((v) => !v)}
                          className="px-3 py-1 bg-purple-600 text-white rounded hover:bg-purple-700 transition"
                        >
                          Toggle Alignment
                        </button>
                
                        {alignmentVisible && (
                          <div
                            className="mt-2 p-2 border rounded bg-gray-100 dark:bg-gray-900"
                            dangerouslySetInnerHTML={{ __html: pronDetail }}
                          />
                        )}
                      </div>
                
                      {/* 🎯 Resultados */}
                      <div className="mt-4">
                        {(allResults[currentQuestion] || [])
                          .slice()
                          .reverse()
                          .map((res, i) => (
                            <div
                              key={i}
                              className="mt-2 p-2 border rounded bg-white dark:bg-gray-700"
                            >
                              <p>Global Score: {res.global_score}</p>
                              <p>
                                Content: {res.content_score}, Pronunciation: {res.pronunciation_score},
                                Fluency: {res.fluency_score}
                              </p>
                
                              {/* 🎧 Audio grabado */}
                              {res.url_audio && (
                                <audio controls src={res.url_audio} className="mt-1 w-full" />
                              )}
                
                              {/* 📈 Gráfico de pronunciación */}
                              {res.url_visual && (
                                <img
                                  src={res.url_visual}
                                  alt="Fluency Graph"
                                  className="mt-2 max-h-40"
                                />
                              )}
                            </div>
                          ))}
                      </div>
                
                      {/* 🎙 Controles */}
                      <div className="flex gap-2 mt-4">
                        <button
                          onClick={handleStartClick}
                          disabled={recording}
                          className="flex-1 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 disabled:opacity-50"
                        >
                          Start
                        </button>
                        <button
                          onClick={stopRecording}
                          disabled={!recording}
                          className="flex-1 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 disabled:opacity-50"
                        >
                          Stop
                        </button>
                      </div>
                    </div>
                  );
                
              case "WritingDictation":
                return (
                  <div className="mb-4">
                    {isPreparing ? (
                      <p className="font-bold text-red-600 mb-2 text-lg">
                        Prepare: {prepareCountdown}...
                      </p>
                    ) : (
                      <p className="font-bold text-red-600 mb-2 text-lg">
                        Time: {formatTime(timeElapsed)}
                      </p>
                    )}

                    <audio ref={audioRef} controls src={q.audio} className="w-full mb-2" />

                    <textarea
                      value={q.userInput || ""}
                      onChange={(e) => handleInputChange(e.target.value)}
                      placeholder="Write your attempt here..."
                      className="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-200 mb-2"
                      rows={3}
                    />

                    <div className="flex gap-2 mb-2">
                      <button
                        onClick={checkScore}
                        className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition"
                      >
                        Check Score
                      </button>
                    </div>

                    {q.score && (
                      <p
                        className={`font-bold ${
                          q.score.startsWith("0") ? "text-red-500" : "text-green-500"
                        }`}
                      >
                        Score: {q.score}
                      </p>
                    )}
                  </div>
                );

              default:
                return (
                  <div className="p-4 border rounded bg-yellow-50 text-gray-800 dark:bg-gray-800">
                    <p>⚠️ Tipo de ejercicio no soportado aún: {q.type}</p>
                  </div>
                );
            }
          })()}

            {/* Navigation */}
            <div className="flex flex-wrap gap-2 mb-4 mt-4">
              <button onClick={prevQuestion} disabled={currentQuestion===0} className="flex-1 bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 disabled:opacity-50">Back</button>
              <button onClick={nextQuestion} disabled={currentQuestion===questions.length-1} className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50">Next</button>
              <button onClick={retryTest} className="flex-1 bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700">Retry</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}