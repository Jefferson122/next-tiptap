"use client";

import { useState, useEffect, useRef } from "react";
//Section Speak
import ReadAloud from "@/components/Data1/1.Speaking/1.ReadAloud";
import repeatsentences from "@/components/Data1/1.Speaking/2.RepeatSentence";
import describeimage from "@/components/Data1/1.Speaking/3.DescribeImage";
import RetellLecture from "@/components/Data1/1.Speaking/4.RetellLecture";
import Answershortquestion from "@/components/Data1/1.Speaking/5.AnswerShortQuestion";
import readings from "@/components/Data1/1.Speaking/6.SummarizeGroupdiscussion";
import respondSituations from "@/components/Data1/1.Speaking/7.RespondtoaSituation";
import SummarizeWrittentext from "@/components/Data1/2.Writing/1.SummarizeWrittenText";
import Essay from "@/components/Data1/2.Writing/2.Essay";

// Section Writing
import FillInTheBlanks from "@/components/Data1/3.Reading/1.FillintheBlanks(RW)"

//Section Listening
import WritingDictation from "@/components/Data1/4.Listening/6.WritefromDictation";


// coloca esto en la parte superior, donde defines las interfaces
export interface BlankOption {
  options: string[];
  correct?: string;
}

interface Exercise {
  text: string | string[];
  userSelections?: string[]; // <-- NECESARIO para RW
  blanks?: BlankOption[];              // opciones por hueco
  audio?: string;
  image?: string;
  userInput?: string;
  score?: string;
  type?: "ReadAloud" |"repeatsentences"|"DescribeImage" | "RetellLecture"|"AnswerShortQuestion"|"respond_to_situation"|"summarize"|"Essay"|"FillInTheBlanks"|"SummarizeWrittentext"|"WritingDictation" |  string; // <-- aquí
}

export default function StudyMenu() {
  const sections = {
    "Speaking and Writing":  [
      { name: "Read Aloud", timePerQ: 90, instructions: "Read the text aloud clearly." },
      { name: "Repeat Sentence", timePerQ: 40, instructions: "Listen and repeat the sentence exactly." },
      { name: "Describe Image", timePerQ: 60, instructions: "Describe the image in detail using full sentences." },
      { name: "Respond to a Situation", timePerQ: 90, instructions: "Respond appropriately to the situation using full sentences." },
      { name: "Retell Lecture", timePerQ: 90, instructions: "Listen and retell the lecture in your own words." },
      { name: "Summarize Group Discussion", timePerQ: 120, instructions: "Summarize the main points of the group discussion clearly." },
      { name: "Answer Short Question", timePerQ: 15, instructions: "Answer the question briefly and clearly." },
      { name: "Summarize Written Text", timePerQ: 600, instructions: "Summarize the text in your own words within 1-2 sentences." },
      { name: "Write Essay", timePerQ: 1200, instructions: "Write a well-structured essay on the given topic." }
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

  const [activeSection, setActiveSection] = useState<keyof typeof sections>("Speaking and Writing");
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

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const sessionIdRef = useRef(localStorage.getItem("sessionId") || Date.now().toString());
  const containerRef = useRef<HTMLDivElement>(null);

  const handleChange = (key: string, value: string) => {
    const cleanValue = parseInt(value.replace(/^0+/, ""), 10) || 0;
    setCounts({ ...counts, [key]: cleanValue });
  };

  const handleStartClick = () => { startRecording(); };

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
      const cleanText = (text: string) =>
        text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
      
      // formData.append("modelo", cleanText(questions[currentQuestion].text));
      formData.append(
        "modelo",
        cleanText(
          Array.isArray(questions[currentQuestion].text)
            ? questions[currentQuestion].text.join(" ")
            : questions[currentQuestion].text
        )
      );
      
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

  // Mostrar resultado de read aloud / repeat sentence
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
          } else if (section === "Speaking and Writing" && taskName === "Read Aloud") {
            // Después:
            q.push({
              text: ReadAloud[qIndex % ReadAloud.length].text,
              type: "ReadAloud",
            });
            
          } 
          else if (section === "Speaking and Writing" && taskName === "Repeat Sentence") {
            // 🔹 Tomamos las últimas `count` frases, empezando por la última
            const sentenceIndex = repeatsentences.length - i; // <-- cambia aquí
            const sentence = repeatsentences[sentenceIndex];
          
            q.push({
              text: `${sentence.text}`,
              audio: sentence.audio,
              type: "repeatsentences",
            });
          }
          
          else if (section === "Speaking and Writing" && taskName === "Describe Image") {
            const img = describeimage[qIndex % describeimage.length];
            q.push({
              text: img.text,
              image: img.image,       // ✅ Agregamos la URL de Cloudinary
              type: "DescribeImage",
            });
          }

          else if (section === "Speaking and Writing" && taskName === "Retell Lecture") {
            // 🔹 Tomamos las últimas `count` frases, empezando por la última
            const sentenceIndex1 = RetellLecture.length - i; // <-- cambia aquí
            const sentence1 = RetellLecture[sentenceIndex1];
          
            q.push({
              text: `${sentence1.text}`,
              audio: sentence1.audio,
              type: "RetellLecture",
            });
          }

          else if (section === "Speaking and Writing" && taskName === "Answer Short Question") {
            const questionData = Answershortquestion[qIndex % Answershortquestion.length];
            q.push({
                text: questionData.question,
                audio: questionData.audio,
                userInput: "",
                type: "AnswerShortQuestion",
                score: "",
            });
          }
          
          else if (
            section === "Speaking and Writing" && taskName === "Summarize Group Discussion") {
            const index = readings.length - i;  // Descendente
            const sentence = readings[index];
          
            q.push({
              text: sentence.text,     // texto oculto
              audio: sentence.audio[0],     // monólogo combinado
              type: "summarize",
            });
          }

          else if (
            section === "Speaking and Writing" && taskName === "Respond to a Situation") {
            const index = respondSituations.length - i;  // Descendente
            const RespondSituation = respondSituations[index];
          
            q.push({
              text: RespondSituation.situation,     // texto oculto
              type: "respond_to_situation",
            });
          }

          else if (
            section === "Speaking and Writing" && taskName === "Summarize Written Text") {
            const index = SummarizeWrittentext.length - i;  // Descendente
            const SummarizeWrittentext1 = SummarizeWrittentext[index];
          
            q.push({
              text: SummarizeWrittentext1.text,     // texto oculto
              type: "SummarizeWrittentext",
            });
          }

          else if (
            section === "Speaking and Writing" && taskName === "Write Essay") {
            const index = Essay.length - i;  // Descendente
            const Essay1 = Essay[index];
          
            q.push({
              text: Essay1.text,     // texto oculto
              type: "Essay",
            });
          }

                    // --- dentro de handleGenerateInstructions, junto a los otros else if ---
          else if (section === "Reading" && taskName === "Fill in the Blanks (RW)") {
            const index = FillInTheBlanks.length - 1 - i; // descendente seguro
            const item = FillInTheBlanks[index];

            q.push({
              text: item.text,            // aquí item.text debe ser string[] (segmentos)
              blanks: item.blanks,        // array de opciones para cada hueco
              userSelections: Array(item.blanks?.length || 0).fill(""), // inicializa vacíos
              type: "FillInTheBlanks",
            } as Exercise);
          }

          
          
          
    
          qIndex++;
        }
      }
    });
    

    setInstructions(result.trim());
    setQuestions(q);
    setAllResults(Array(q.length).fill([]));
    setCurrentQuestion(0);
  };

  // función para actualizar la selección de un blank
  const handleBlankChange = (qIdx: number, blankIdx: number, value: string) => {
    setQuestions(prev => {
      const copy = [...prev];
      const question = { ...copy[qIdx] } as any;
      question.userSelections = question.userSelections ? [...question.userSelections] : [];
      question.userSelections[blankIdx] = value;
      copy[qIdx] = question;
      return copy;
    });
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


  // Controles de dictado
  const handleInputChange = (value: string) => {
    const updated = [...questions];
    updated[currentQuestion].userInput = value;
    setQuestions(updated);
  };

  // const checkScore = () => {
  //   const updated = [...questions];
  //   updated[currentQuestion].score = scoreWords(
  //     // updated[currentQuestion].text,
  //     updated[currentQuestion].userInput || ""
  //   );
  //   setQuestions(updated);
  // };
  // const checkScore = () => {
  //   const updated = [...questions];
  
  //   // Convertir el texto a string si viene como array (solo si quisieras usarlo)
  //   const modelo = Array.isArray(updated[currentQuestion].text)
  //     ? updated[currentQuestion].text.join(" ")
  //     : updated[currentQuestion].text;
  
  //   updated[currentQuestion].score = scoreWords(updated[currentQuestion].userInput || "");
  
  //   setQuestions(updated);
  // };
  
  const checkScore = () => {
    const updated = [...questions];
  
    // seguridad: existe la pregunta actual
    if (currentQuestion < 0 || currentQuestion >= updated.length) return;
  
    // casteo local con las propiedades que necesitamos
    const qCurr = { ...(updated[currentQuestion] as Exercise) } as Exercise & {
      userSelections?: string[];
      blanks?: BlankOption[];
      text?: string | string[];
      userInput?: string;
    };
  
    // Si es FillInTheBlanks -> comparamos userSelections con blanks[].correct
    if (qCurr.type === "FillInTheBlanks") {
      const blanks = qCurr.blanks || [];
      const selections = qCurr.userSelections || [];
  
      const total = blanks.length;
      let correct = 0;
  
      for (let i = 0; i < total; i++) {
        const correctAns = (blanks[i]?.correct || "").toString().trim().toLowerCase();
        const userAns = (selections[i] || "").toString().trim().toLowerCase();
        if (correctAns && userAns && userAns === correctAns) correct++;
      }
  
      const percent = total === 0 ? 0 : Math.round((correct / total) * 100);
      qCurr.score = `${correct}/${total} (${percent}%)`;
  
      // guarda los cambios de vuelta
      updated[currentQuestion] = qCurr;
      setQuestions(updated);
      return;
    }
  
    // Resto de tipos: tratamos texto que puede ser string | string[]
    const modelo = Array.isArray(qCurr.text) ? qCurr.text.join(" ") : (qCurr.text || "");
    const intento = (qCurr.userInput || "").toString();
  
    // usa scoreWords(modelo, intento)
    qCurr.score = scoreWords(modelo, intento);
  
    updated[currentQuestion] = qCurr;
    setQuestions(updated);
  };

  

  const nextQuestion = () => setCurrentQuestion(prev=>Math.min(prev+1,questions.length-1));
  const prevQuestion = () => setCurrentQuestion(prev=>Math.max(prev-1,0));
  const retryTest = () => { handleGenerateInstructions(); };

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

  useEffect(() => {
    const ping = setInterval(() => {
      fetch("https://backend1-exyd.onrender.com/").catch(() => {});
    }, 300000); // cada 5 minutos
    return () => clearInterval(ping);
  }, []);
  
  
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
                    <p className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                      Read aloud fluency with good pronunciation for get a good score.
                    </p>
                    {/* Contador debajo del texto */}
                    
                    <p className="text-lg mb-2">{q.text}</p>

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
                
                      <p className="text-red-600 font-semibold mb-2">
                        🎧 Listen and repeat when ready
                      </p>
                      {/* 🔹 NUEVO: Número de pregunta justo debajo */}
                      <p className="text-blue-700 font-semibold mb-2">
                              Question {currentQuestion + 1}:
                      </p>
                
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
              
              case "DescribeImage":
                    return (
                      <div className="text-center">
                        <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100">
                          Describe the following image as best as possible:
                        </h3>
                  
                        {/* Imagen */}
                        <img
                          src={q.image}
                          alt="Describe this"
                          className="mx-auto max-h-80 rounded-lg shadow mb-4"
                        />
                  
                        {/* 🔹 Botón Show/Hide Answer */}
                        <button
                          onClick={() => toggleShowText(currentQuestion)}
                          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition mb-3"
                        >
                          {showTextStates[currentQuestion] ? "Hide Answer" : "Show Answer"}
                        </button>
                  
                        {/* 🔹 Texto descriptivo */}
                        {showTextStates[currentQuestion] && (
                          <div className="mt-2 mb-3 p-3 border rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-lg text-left max-w-3xl mx-auto">
                            {q.text}
                          </div>
                        )}
                  
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
                  
                        {/* 📊 Resultados (como ReadAloud y Repeat Sentence) */}
                        <div className="mt-6">
                          {(allResults[currentQuestion] || [])
                            .slice()
                            .reverse()
                            .map((res, i) => (
                              <div
                                key={i}
                                className="mt-2 p-3 border rounded bg-white dark:bg-gray-800 text-left"
                              >
                                <p>Global Score: {res.global_score}</p>
                                <p>
                                  Content: {res.content_score}, Pronunciation:{" "}
                                  {res.pronunciation_score}, Fluency: {res.fluency_score}
                                </p>
                  
                                {/* 🎧 Audio grabado */}
                                {res.url_audio && (
                                  <audio controls src={res.url_audio} className="mt-1 w-full" />
                                )}
                  
                                {/* 📈 Imagen de pronunciación */}
                                {res.url_visual && (
                                  <img
                                    src={res.url_visual}
                                    alt="Pronunciation Graph"
                                    className="mt-2 max-h-40"
                                  />
                                )}
                              </div>
                            ))}
                        </div>
                  
                        {/* 🔹 Detalle de pronunciación (palabra por palabra) */}
                        {pronDetail && (
                          <div
                            className="mt-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-left"
                            dangerouslySetInnerHTML={{ __html: pronDetail }}
                          />
                        )}
                      </div>
                    );
              
              case "RetellLecture":
                  return (
                    <div className="mb-4 p-4 border rounded bg-gray-50 dark:bg-gray-800">
                      <p className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                        Listen carefully and retell the lecture.
                      </p>
                
                      <p className="text-red-600 font-semibold mb-2">
                        🎧 Listen and retell the lecture
                      </p>
                      {/* 🔹 NUEVO: Número de pregunta justo debajo */}
                      <p className="text-blue-700 font-semibold mb-2">
                              Question {currentQuestion + 1}:
                      </p>
                
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
        
              case "AnswerShortQuestion":
                    return (
                      <div className="mb-4 p-4 border rounded bg-gray-50 dark:bg-gray-800">
                        <p className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                          Answer the question by saying the word aloud.
                        </p>
                  
                        {/* Número de pregunta */}
                        <p className="text-blue-700 font-semibold mb-2">
                          Question {currentQuestion + 1}:
                        </p>
                  
                        {/* Audio de la pregunta */}
                        <audio ref={audioRef} controls src={q.audio} className="w-full mb-2" />

                        {/* Botones para grabar la respuesta */}
                        <div className="flex gap-2 mt-2 mb-2">
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
                  
                        {/* Botón compacto Show/Hide para Pregunta + Respuesta */}
                        <button
                          onClick={() => toggleShowText(currentQuestion)}
                          className="mb-2 px-3 py-1 bg-yellow-400 dark:bg-yellow-600 text-black dark:text-white font-semibold rounded-full hover:bg-yellow-500 dark:hover:bg-yellow-700 transition"
                        >
                          {showTextStates[currentQuestion] ? "Hide Q&A" : "Show Q&A"}
                        </button>

                        {/* Bloque que contiene Pregunta + Respuesta */}
                        {showTextStates[currentQuestion] && (
                          <div className="mt-2 p-3 border rounded bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-lg">
                            {/* Pregunta */}
                            <p className="font-semibold mb-2 text-blue-700">Question:</p>
                            <p className="mb-4">{questions[currentQuestion].text}</p>

                            {/* Respuesta */}
                            <p className="font-semibold mb-2 text-green-700">Answer:</p>
                            <p>{Answershortquestion[currentQuestion].answer}</p>
                          </div>
                        )}
                  
                        {/* Resultado de la evaluación de la palabra */}
                        {pronDetail && (
                          <div
                            className="mt-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-left text-lg font-semibold"
                            dangerouslySetInnerHTML={{ __html: pronDetail }}
                          />
                        )}
                  
                        {/* Mostrar resultados del backend (opcional) */}
                        <div className="mt-4">
                          {(allResults[currentQuestion] || [])
                            .slice()
                            .reverse()
                            .map((res, i) => (
                              <div key={i} className="mt-2 p-2 border rounded bg-white dark:bg-gray-700">
                                <p>Global Score: {res.global_score}</p>
                                <p>
                                  Content: {res.content_score}, Pronunciation: {res.pronunciation_score}, Fluency: {res.fluency_score}
                                </p>
                                {res.url_audio && (
                                  <audio controls src={res.url_audio} className="mt-1 w-full" />
                                )}
                              </div>
                            ))}
                        </div>
                      </div>
                    );
                  
              case "summarize":
                      return (
                        <div className="mb-4 p-4 border rounded bg-gray-50 dark:bg-gray-800">
                    
                          {/* Título */}
                          <p className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                            Summarize the discussion in one or two sentences.
                          </p>
                    
                          {/* Número */}
                          <p className="text-blue-700 font-semibold mb-2">
                            Question {currentQuestion + 1}:
                          </p>
                    
                          {/* Audio del grupo (monólogo de varias voces) */}
                          <audio
                            ref={audioRef}
                            controls
                            src={q.audio}
                            className="w-full mb-3"
                          />
                    
                          {/* Controles de grabación */}
                          <div className="flex gap-2 mt-2 mb-2">
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
                    
                          {/* Botón mostrar/ocultar resumen */}
                          <button
                            onClick={() => toggleShowText(currentQuestion)}
                            className="mb-2 px-3 py-1 bg-yellow-400 dark:bg-yellow-600 
                            text-black dark:text-white font-semibold rounded-full 
                            hover:bg-yellow-500 dark:hover:bg-yellow-700 transition"
                          >
                            {showTextStates[currentQuestion] ? "Hide Summary" : "Show Summary"}
                          </button>
                    
                          {/* Bloque de texto del Summary (oculto por defecto) */}
                          {showTextStates[currentQuestion] && (
                            <div className="mt-2 p-3 border rounded bg-white dark:bg-gray-900 
                            text-gray-800 dark:text-gray-200 text-lg">
                              <p className="font-semibold mb-2 text-blue-700">Summary Response:</p>
                              <p>{q.text}</p>
                            </div>
                          )}
                    
                          {/* Resultado PTE */}
                          {pronDetail && (
                            <div
                              className="mt-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg 
                              text-left text-lg font-semibold"
                              dangerouslySetInnerHTML={{ __html: pronDetail }}
                            />
                          )}
                    
                          {/* Historial resultados */}
                          <div className="mt-4">
                            {(allResults[currentQuestion] || [])
                              .slice()
                              .reverse()
                              .map((res, i) => (
                                <div key={i} className="mt-2 p-2 border rounded bg-white dark:bg-gray-700">
                                  <p>Global Score: {res.global_score}</p>
                                  <p>
                                    Content: {res.content_score},
                                    Pronunciation: {res.pronunciation_score},
                                    Fluency: {res.fluency_score}
                                  </p>
                                  {res.url_audio && (
                                    <audio controls src={res.url_audio} className="mt-1 w-full" />
                                  )}
                                </div>
                              ))}
                          </div>
                        </div>
                      );
                
                      
              case "respond_to_situation":
                        return (
                          <div className="mb-4 p-4 border border-gray-200 dark:border-gray-700 rounded bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                              Respond to a situation:
                            </h3>
                            
                            {/* 🔹 Mostrar el texto del escenario */}
                            <div className="mb-4">
                              <p className="font-medium text-gray-700 dark:text-gray-300">
                                Situation:
                              </p>
                              <p className="text-lg">{q.text}</p>
                            </div>
                      
                            {/* 🔹 Botón para grabar respuesta */}
                            <div className="mt-4 flex items-center gap-4">
                              <button
                                onClick={recording ? stopRecording : startRecording}
                                className={`px-4 py-2 rounded font-semibold text-white ${
                                  recording ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-700"
                                }`}
                              >
                                {recording ? "Stop Recording" : "Start Recording"}
                              </button>
                            </div>
                      
                            {/* 🔹 Mostrar el resultado de la grabación si hay */}
                            <div className="mt-4">
                              <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                                Previous Responses:
                              </h3>
                              {(allResults[currentQuestion] || []).length === 0 ? (
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                  No responses recorded yet.
                                </p>
                              ) : (
                                (allResults[currentQuestion] || [])
                                  .slice()
                                  .reverse()
                                  .map((res, i) => (
                                    <div
                                      key={i}
                                      className="mt-2 p-2 border rounded bg-white dark:bg-gray-900"
                                    >
                                      <p>Global Score: {res.global_score}</p>
                                      {res.url_audio && (
                                        <audio controls src={res.url_audio} className="mt-1 w-full" />
                                      )}
                                    </div>
                                  ))
                              )}
                            </div>
                          </div>
                        );
               
              case "SummarizeWrittentext":
                          return (
                            <div className="mb-4 p-4 border rounded bg-gray-50 dark:bg-gray-800">
                              <p className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                {q.type === "SummarizeWrittentext"
                                  ? "Write a Summarize on the given topic."
                                  : "Write your answer below:"}
                              </p>

                              {/* Texto de referencia */}
                              {q.text && (
                                <div className="mb-3 p-3 border rounded bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
                                  {q.text}
                                </div>
                              )}

                              {/* Área de escritura */}
                              <textarea
                                value={q.userInput || ""}
                                onChange={(e) => handleInputChange(e.target.value)}
                                className="w-full p-3 border rounded-lg bg-white dark:bg-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                rows={6}
                                placeholder="Type your answer here..."
                              />

                              {/* Contador de palabras */}
                              <p className="mt-2 text-right text-sm text-gray-500 dark:text-gray-300">
                                Word count: {(q.userInput?.trim().split(/\s+/).filter(Boolean).length) || 0}
                              </p>

                              {/* Botón para calcular score (opcional) */}
                              <button
                                onClick={checkScore}
                                className="mt-3 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                              >
                                Check Score
                              </button>

                              {/* Resultado */}
                              {/* {q.score && (
                                <p className="mt-2 font-semibold text-gray-800 dark:text-gray-100">
                                  Score: {q.score}
                                </p>
                              )} */}
                            </div>

                          );
                                            
              case "Essay":
                          return (
                            <div className="mb-4 p-4 border rounded bg-gray-50 dark:bg-gray-800">
                              <p className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                                {q.type === "Essay"
                                  ? "Write a well-structured essay on the given topic."
                                  : "Write your answer below:"}
                              </p>

                              {/* Texto de referencia */}
                              {q.text && (
                                <div className="mb-3 p-3 border rounded bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200">
                                  {q.text}
                                </div>
                              )}

                              {/* Área de escritura */}
                              <textarea
                                value={q.userInput || ""}
                                onChange={(e) => handleInputChange(e.target.value)}
                                className="w-full p-3 border rounded-lg bg-white dark:bg-gray-700 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                rows={6}
                                placeholder="Type your answer here..."
                              />

                              {/* Contador de palabras */}
                              <p className="mt-2 text-right text-sm text-gray-500 dark:text-gray-300">
                                Word count: {(q.userInput?.trim().split(/\s+/).filter(Boolean).length) || 0}
                              </p>

                              {/* Botón para calcular score (opcional) */}
                              <button
                                onClick={checkScore}
                                className="mt-3 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                              >
                                Check Score
                              </button>

                              {/* Resultado */}
                              {/* {q.score && (
                                <p className="mt-2 font-semibold text-gray-800 dark:text-gray-100">
                                  Score: {q.score}
                                </p>
                              )} */}
                            </div>

                          );
                                  
              case "WritingDictation":
                return (
                  <div className="mb-4">
                    <p className="text-red-600 font-semibold mb-2">
                      📝 Listen and write what you hear
                    </p>


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

              case "FillInTheBlanks":
                  return (
                    <div className="mb-4 p-4 border rounded bg-gray-50 dark:bg-gray-800">
                      <p className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                        Fill in the blanks — selecciona la opción correcta en cada hueco.
                      </p>
                
                      {/* Texto con selects intercalados */}
                      <div className="mb-3 p-3 border rounded bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-lg">
                        {Array.isArray(q.text) ? (
                          q.text.map((segment, idx) => {
                            // Los select aparecen entre segmentos: el número de selects = blanks.length
                            // Cada segment se muestra y si existe un blank después de él, renderizamos select
                            const blank = q.blanks && q.blanks[idx];
                            return (
                              <span key={idx} className="inline">
                                <span>{segment}</span>
                                {blank ? (
                                  <span className="mx-1 inline-block align-middle">
                                    <select
                                      value={(q.userSelections && q.userSelections[idx]) || ""}
                                      onChange={(e) => handleBlankChange(currentQuestion, idx, e.target.value)}
                                      className="blank border rounded px-2 py-1 text-sm"
                                    >
                                      <option value="">—</option>
                                      {blank.options.map((opt, oi) => (
                                        <option key={oi} value={opt}>{opt}</option>
                                      ))}
                                    </select>
                                  </span>
                                ) : null}
                              </span>
                            );
                          })
                        ) : (
                          // fallback si text es string (no lo normal para este tipo)
                          <p>{q.text}</p>
                        )}
                      </div>
                
                      {/* Botones: verificar / mostrar respuestas */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => {
                            // calculamos score rápido: cuantos correctos
                            const blanks = q.blanks || [];
                            const selections = q.userSelections || [];
                            let correct = 0;
                            blanks.forEach((b, bi) => {
                              if (selections[bi] && b.correct && selections[bi] === b.correct) correct++;
                            });
                            const total = blanks.length;
                            const score = `${correct}/${total} (${total ? Math.round((correct/total)*100) : 0}%)`;
                            // guardamos el score en questions
                            setQuestions(prev => {
                              const copy = [...prev];
                              copy[currentQuestion] = { ...copy[currentQuestion], score, userSelections: selections };
                              return copy;
                            });
                          }}
                          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                        >
                          Check Score
                        </button>
                
                        {/* <button
                          onClick={() => {
                            // mostrar respuestas correctas
                            setQuestions(prev => {
                              const copy = [...prev];
                              const qCopy = { ...copy[currentQuestion] } as any;
                              qCopy.userSelections = (qCopy.blanks || []).map(b => b.correct || "");
                              copy[currentQuestion] = qCopy;
                              return copy;
                            });
                          }}
                          className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600"
                        >
                          Show Answers
                        </button>
                 */}

                        <button
                          onClick={() => {
                            setQuestions(prev =>
                              prev.map((item, idx) =>
                                idx !== currentQuestion
                                  ? item
                                  : {
                                      ...item,
                                      // userSelections es un arreglo con las respuestas correctas (o "" si no hay)
                                      userSelections: (item.blanks ?? []).map(b => b.correct ?? ""),
                                    }
                              )
                            );
                          }}
                          className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600"
                        >
                          Show Answers
                        </button>

                        {/* Mostrar score actual si existe */}
                        {q.score && (
                          <div className="ml-auto font-semibold text-gray-800 dark:text-gray-200">
                            Score: {q.score}
                          </div>
                        )}
                      </div>
                
                      {/* Historial / info */}
                      <div className="mt-4">
                        {/* opcional: mostrar selección actual */}
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Selecciones: {(q.userSelections || []).join(" | ")}
                        </p>
                      </div>
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