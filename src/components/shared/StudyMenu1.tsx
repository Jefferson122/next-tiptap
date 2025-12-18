"use client";
// #region
import { useState, useEffect, useRef } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import React, { Fragment } from "react";
import { saveFeedbackAudio } from "@/components/Creaciones/feedbackAudioDB";

// IDEA NUEVA:
// SUSTITUYE TUS IMPORTS DE DATOS Y UTILS POR ESTOS:
import { sections, exerciseData, Exercise, BlankOption,BlankOptionDrag} from "@/components/shared/dataMenu";

import { formatTime,scoreWords, getDayConfig, generateStudyQuestions // <--- todo el push de texto imagen y audio
} from "@/components/shared/studyUtils";

// Componentes Skpeaking
import ReadAloudComponent from "@/components/shared/Questions/Speaking/ReadAloudComponent";
import RepeatSentenceComponent from "@/components/shared/Questions/Speaking/RepeatSentenceComponent";
import DescribeImageComponent from "@/components/shared/Questions/Speaking/DescribeImageComponent";
import RetellLectureComponent from "@/components/shared/Questions/Speaking/RetellLectureComponent";
import AnswerShortQuestionComponent from "@/components/shared/Questions/Speaking/AnswerShortQuestionComponent";
import SummarizeComponent from "@/components/shared/Questions/Speaking/SummarizeComponent";
import RespondSituationComponent from "@/components/shared/Questions/Speaking/RespondSituationComponent";

// Componentes Writing
import SummarizeWrittenComponent from "@/components/shared/Questions/Writing/SummarizeWrittenComponent";
import EssayComponent from "@/components/shared/Questions/Writing/EssayComponent";
// #endregion

export default function StudyMenu() {
// #region
  ////
  const handleSelectDay = (day: number) => {
    const newCounts = getDayConfig(day);
    setCounts(newCounts);
  };
  
  const handleDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    if (!destination) return;

    setQuestions(prev => {
      const copy = [...prev];
      const q = copy[currentQuestion];
      if (q.type !== "ReorderParagraph" || !q.paragraphs) return prev;
  
      const newOrder = Array.from(q.userOrder ?? q.paragraphs.map((_, idx) => idx));
      const [moved] = newOrder.splice(source.index, 1);
      newOrder.splice(destination.index, 0, moved);
  
      q.userOrder = newOrder;
      copy[currentQuestion] = q;
      return copy;
    });
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
  const handleMCSelection = (qIdx: number, blankIdx: number, option: string) => {
    setQuestions((prev: Exercise[]) => {
      const copy = [...prev];
      const question = { ...copy[qIdx] };
  
      if (!Array.isArray(question.userSelections)) {
        question.userSelections = [];
      }
  
      const arr = new Set(question.userSelections[blankIdx] || []);
  
      if (arr.has(option)) arr.delete(option);
      else arr.add(option);
  
      question.userSelections[blankIdx] = Array.from(arr);
      copy[qIdx] = question;
      return copy;
    });
  };
  const gradeMCQuestion = (qIdx: number) => {
    setQuestions((prev: Exercise[]) => {
      const copy = [...prev];
      const q = copy[qIdx];
  
      if (!q || !q.questions || !q.userSelections) return prev;
  
      const total = q.questions.length;
      let correctCount = 0;
  
      // mcFeedback: array de arrays por opción
      const mcFeedback: number[][] = q.questions.map((questionItem, i) => {
        const userAns: string[] = Array.isArray(q.userSelections?.[i])
          ? (q.userSelections[i] as string[]).map(s => s.trim().toLowerCase())
          : [];
  
        // Obtener correctAnswers de forma segura
        let correctAns: string[] = [];
        if ("correctAnswers" in questionItem && questionItem.correctAnswers) {
          correctAns = questionItem.correctAnswers.map((s: string) => s.trim().toLowerCase());
        } else if ("correctAnswer" in questionItem && questionItem.correctAnswer) {
          correctAns = [questionItem.correctAnswer.trim().toLowerCase()];
        }
  
        // Revisar si la respuesta del usuario es completamente correcta
        const isCorrect =
          correctAns.length === userAns.length && correctAns.every(a => userAns.includes(a));
        if (isCorrect) correctCount++;
  
        // Generar feedback por opción
        return questionItem.options.map(opt => {
          const lowerOpt = opt.trim().toLowerCase();
          if (userAns.includes(lowerOpt)) {
            return correctAns.includes(lowerOpt) ? 1 : -1; // ✅ si correcto, ❌ si incorrecto
          } else {
            return 0; // no seleccionado
          }
        });
      });
  
      q.mcFeedback = mcFeedback;
      q.score = `${correctCount}/${total} (${Math.round((correctCount / total) * 100)}%)`;
  
      copy[qIdx] = q;
      return copy;
    });
  };
  const [instructions, setInstructions] = useState("");
  const checkReorder = (qIdx: number) => {
    setQuestions(prev => {
      const copy = [...prev];
      const q = copy[qIdx];
      const correct = q.correctOrder ?? [];
      const user = q.userOrder ?? [];
      const feedback = correct.map((c, i) => (c === user[i] ? 1 : -1)); // 1 verde, -1 rojo
      setReorderFeedback(feedback);
      const total = correct.length;
      const scoreCount = feedback.filter(f => f === 1).length;
      q.score = `${scoreCount}/${total} (${Math.round((scoreCount/total)*100)}%)`;
      copy[qIdx] = q;
      return copy;
    });
  };
  const showCorrectOrder = (qIdx: number) => {
    setQuestions(prev => {
      const copy = [...prev];
      const q = copy[qIdx];
      q.userOrder = [...(q.correctOrder ?? [])]; // reordena al orden correcto
      copy[qIdx] = q;
  
      setReorderFeedback((q.correctOrder ?? []).map(() => 1)); // todos verdes
      return copy;
    });
  };
  // función para actualizar la selección de un blank
  const handleBlankChange = (qIdx: number, blankIdx: number, value: string) => {
    setQuestions((prev: Exercise[]) => {
      const copy = [...prev];
      const question = { ...copy[qIdx] } as any;
      question.userSelections = question.userSelections ? [...question.userSelections] : [];
      question.userSelections[blankIdx] = value;
      copy[qIdx] = question;
      return copy;
    });
  };

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
        const correctAns = (blanks[i]?.correct ?? "").toString().trim().toLowerCase();
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
    const modelo =
      Array.isArray(qCurr.text)
        ? qCurr.text.join(" ")
        : qCurr.text ?? "";

    const intento = (qCurr.userInput || "").toString();
  
    // usa scoreWords(modelo, intento)
    qCurr.score = scoreWords(modelo, intento);
  
    updated[currentQuestion] = qCurr;
    setQuestions(updated);
  };
  ////// Inicializar con false para cada pregunta
  const [showExplanation, setShowExplanation] = useState<boolean[]>(
    () => questions.map(() => false)
  );
  const toggleExplanation = (idx: number) => {
    setShowExplanation(prev => {
      const copy = [...prev];
      copy[idx] = !copy[idx];
      return copy;
    });
  };
// COMPONENETES DE SINGLE ANSWER
  const handleOCSelection = (qIndex: number, questionIndex: number, option: string) => {
    setQuestions(prev =>
      prev.map((item, idx) =>
        idx !== qIndex
          ? item
          : {
              ...item,
              userSelections: (item.userSelections as string[]).map((sel, i) =>
                i === questionIndex ? option : sel
              )
            }
      )
    );
  };
  const gradeOCQuestion = (qIndex: number) => {
    setQuestions(prev =>
      prev.map((item, idx) => {
        if (idx !== qIndex) return item;
  
        const blanks = item.blanks ?? [];
        const selections = item.userSelections ?? [];

        const correct = blanks.filter((b, i) => selections[i] === b.correct).length;
        const score = `${correct}/${blanks.length}`;

        return { ...item, score };
      })
    );
  };

   // Generar preguntas e instrucciones
   const handleGenerateInstructions = () => {
    // Ahora usamos la función que importamos de studyUtils
    const { instructions: newInstructions, questions: newQuestions } = generateStudyQuestions(counts);
  
    setInstructions(newInstructions);
    setQuestions(newQuestions);
    setAllResults(Array(newQuestions.length).fill([]));
    setCurrentQuestion(0);
  };

/////////////////////////////////////////////////////////////////

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
        // const resp = await fetch("https://backend1-exyd.onrender.com/upload-audio/", { method: "POST", body: formData });
        const resp = await fetch("http://localhost:8000/upload-audio/", { method: "POST", body: formData });
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
  const getRecordedBlob = async (): Promise<Blob | null> => {
    if (audioChunksRef.current.length === 0) return null;
    return new Blob(audioChunksRef.current, { type: "audio/webm" });
  };
  
  // const stopRecording = () => mediaRecorderRef.current?.state==="recording" && mediaRecorderRef.current.stop();
  const stopRecording = async () => {
    mediaRecorderRef.current?.stop();
    setRecording(false);
  
    const audioBlob = await getRecordedBlob(); // tu función que devuelve el Blob de audio
    if (audioBlob) {
      await sendAudioForFeedback(audioBlob);
    }
  };
  
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
  const [reorderFeedback, setReorderFeedback] = useState<number[]>([]);

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

  const nextQuestion = () => setCurrentQuestion(prev=>Math.min(prev+1,questions.length-1));
  const prevQuestion = () => setCurrentQuestion(prev=>Math.max(prev-1,0));
  const retryTest = () => { handleGenerateInstructions(); };

  
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
  const [showAnswers, setShowAnswers] = useState(false);

  // Cantidad disponible por tipo de pregunta
  const availableQuestions: Record<string, number> = {
    // SPEAKING & WRITING
    "Speaking and Writing-Read Aloud": exerciseData["Speaking and Writing-Read Aloud"]?.length || 0,
    "Speaking and Writing-Repeat Sentence": exerciseData["Speaking and Writing-Repeat Sentence"]?.length || 0,
    "Speaking and Writing-Describe Image": exerciseData["Speaking and Writing-Describe Image"]?.length || 0,
    "Speaking and Writing-Respond to a Situation": exerciseData["Speaking and Writing-Respond to a Situation"]?.length || 0,
    "Speaking and Writing-Retell Lecture": exerciseData["Speaking and Writing-Retell Lecture"]?.length || 0,
    "Speaking and Writing-Summarize Group Discussion": exerciseData["Speaking and Writing-Summarize Group Discussion"]?.length || 0,
    "Speaking and Writing-Answer Short Question": exerciseData["Speaking and Writing-Answer Short Question"]?.length || 0,
    "Speaking and Writing-Summarize Written Text": exerciseData["Speaking and Writing-Summarize Written Text"]?.length || 0,
    "Speaking and Writing-Write Essay": exerciseData["Speaking and Writing-Write Essay"]?.length || 0,
  
    // READING
    "Reading-Fill in the Blanks (RW)": exerciseData["Reading-Fill in the Blanks (RW)"]?.length || 0,
    "Reading-Multiple Choice, Multiple Answer": exerciseData["Reading-Multiple Choice, Multiple Answer"]?.length || 0,
    "Reading-Re order Paragraphs": exerciseData["Reading-Re order Paragraphs"]?.length || 0,
    "Reading-Fill in the Blanks": exerciseData["Reading-Fill in the Blanks"]?.length || 0,
    "Reading-Multiple Choice, Single Answer": exerciseData["Reading-Multiple Choice, Single Answer"]?.length || 0,
  
    // LISTENING
    "Listening-Write from Dictation": exerciseData["Listening-Write from Dictation"]?.length || 0,
  };

  ///////////NUEVO WHISPER////////////
  const sendAudioForFeedback = async (audioBlob: Blob) => {
    if (!questions[currentQuestion]) return;
  
    const formData = new FormData();
    formData.append("file", audioBlob, "recording.wav");
  
    const modeloText =
      Array.isArray(questions[currentQuestion].text)
        ? questions[currentQuestion].text.join(" ")
        : questions[currentQuestion].text;
  
    formData.append("modelo", modeloText);
    formData.append("session_id", sessionIdRef.current);
    formData.append("use_whisper", "true");
  
    try {
      const res = await fetch("http://localhost:10001/upload-audio/", {
        method: "POST",
        body: formData,
      });
  
      const data = await res.json();
      console.log("Backend response:", data);
  
      // 1️⃣ Guardar resultado normal
      setAllResults((prev) => {
        const copy = [...prev];
        const attempts = copy[currentQuestion] || [];
        copy[currentQuestion] = [...attempts, data];
        return copy;
      });
  
      // 2️⃣ Guardar AUDIO en IndexedDB
      if (data.feedback_audio_base64) {
        const attemptNumber =
          (allResults[currentQuestion]?.length || 0) + 1;
  
        await saveFeedbackAudio(
          sessionIdRef.current,
          currentQuestion,
          attemptNumber,
          data.feedback_audio_base64
        );
  
        // 3️⃣ Reproducir inmediatamente
        const audio = new Audio(
          `data:audio/mp3;base64,${data.feedback_audio_base64}`
        );
        audio.play();
      }
  
    } catch (err) {
      console.error("Error sending audio:", err);
    }
  };
  // #endregion
  useEffect(() => {
    const ping = setInterval(() => {
      // fetch("https://backend1-exyd.onrender.com/").catch(() => {});
      fetch("http://localhost:8000/").catch(() => {});
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
                  <input type="number" value={counts[key]} onChange={(e) => { let newValue = Number(e.target.value); const max = availableQuestions[key] ?? 0; if (newValue > max) newValue = max; if (newValue < 0) newValue = 0; setCounts(prev => ({ ...prev, [key]: newValue })); }} />
                <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-300">{task.timePerQ}s / pregunta</span>
              </div>
            </div>
          )
        })}
      </div>
      {/* 📅 Botones de días */}
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {Array.from({ length: 8 }, (_, i) => i + 1).map(day => (
    <button
      key={day}
      onClick={() => handleSelectDay(day)}
      className="
        px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl font-semibold text-sm sm:text-base
        bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500
        text-white shadow-lg
        hover:scale-105 hover:brightness-110
        transition-all duration-300 ease-in-out
      "
    >
      Día {day}
    </button>
          ))}
      </div>
      <div className="flex justify-center mt-6">
      <button
        onClick={() => handleSelectDay(0)}
        className="
          px-8 py-3 rounded-3xl 
          bg-gradient-to-r from-blue-600 to-blue-400 
          text-white font-bold text-lg
          shadow-xl hover:scale-105 hover:brightness-110 
          transition-all duration-300 ease-in-out
        "
      >
        Cleaner
      </button>
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
/////////////////////////// SPEAKING SECTION ///////////////////////////
              case "ReadAloud":
                return (
                  <ReadAloudComponent
                    q={questions[currentQuestion]}
                    allResults={allResults}
                    currentQuestion={currentQuestion}
                    recording={recording}
                    setAlignmentVisible={setAlignmentVisible}
                    alignmentVisible={alignmentVisible}
                    pronDetail={pronDetail}
                    handleStartClick={handleStartClick}
                    stopRecording={stopRecording}
                  />
                );
              case "repeatsentences":
                  return (
                    <RepeatSentenceComponent
                      q={questions[currentQuestion]}
                      allResults={allResults}
                      currentQuestion={currentQuestion}
                      recording={recording}
                      setAlignmentVisible={setAlignmentVisible}
                      alignmentVisible={alignmentVisible}
                      pronDetail={pronDetail}
                      handleStartClick={handleStartClick}
                      stopRecording={stopRecording}
                      showTextStates={showTextStates}
                      toggleShowText={toggleShowText}
                    />
                  );  
              case "DescribeImage":
                    return (
                      <DescribeImageComponent
                        q={questions[currentQuestion]}
                        allResults={allResults}
                        currentQuestion={currentQuestion}
                        recording={recording}
                        handleStartClick={handleStartClick}
                        stopRecording={stopRecording}
                        showTextStates={showTextStates}
                        toggleShowText={toggleShowText}
                        pronDetail={pronDetail}
                      />
                    ); 
              case "RetellLecture":
                return (
                  <RetellLectureComponent
                    q={questions[currentQuestion]}
                    allResults={allResults}
                    currentQuestion={currentQuestion}
                    recording={recording}
                    handleStartClick={handleStartClick}
                    stopRecording={stopRecording}
                    showTextStates={showTextStates}
                    toggleShowText={toggleShowText}
                    alignmentVisible={alignmentVisible}
                    setAlignmentVisible={setAlignmentVisible}
                    pronDetail={pronDetail}
                  />
                );
              case "AnswerShortQuestion":
                return (
                  <AnswerShortQuestionComponent
                    q={questions[currentQuestion]}
                    allResults={allResults}
                    currentQuestion={currentQuestion}
                    recording={recording}
                    handleStartClick={handleStartClick}
                    stopRecording={stopRecording}
                    showTextStates={showTextStates}
                    toggleShowText={toggleShowText}
                    pronDetail={pronDetail}
                    answerData={exerciseData["Speaking and Writing-Answer Short Question"]}
                  />
                );            
              case "summarize":
                return (
                  <SummarizeComponent
                    q={questions[currentQuestion]}
                    allResults={allResults}
                    currentQuestion={currentQuestion}
                    recording={recording}
                    handleStartClick={handleStartClick}
                    stopRecording={stopRecording}
                    showTextStates={showTextStates}
                    toggleShowText={toggleShowText}
                    pronDetail={pronDetail}
                  />
                );                     
              case "respond_to_situation":
                return (
                  <RespondSituationComponent
                    q={questions[currentQuestion]}
                    allResults={allResults}
                    currentQuestion={currentQuestion}
                    recording={recording}
                    handleStartClick={handleStartClick}
                    stopRecording={stopRecording}
                  />
                );
 ///////////////////////// WRITING SECTION  ////////////////////////////////
              case "SummarizeWrittentext":
                return (
                  <SummarizeWrittenComponent
                    q={questions[currentQuestion]}
                    handleInputChange={handleInputChange}
                    checkScore={checkScore}
                  />
                );                                         
              case "Essay":
                return (
                  <EssayComponent
                    q={questions[currentQuestion]}
                    handleInputChange={handleInputChange}
                    checkScore={checkScore}
                  />
                );
/////////////////////////  READING SECTION  ////////////////////////////////                        
              case "FillInTheBlanks":
                  return (
                    <div className="mb-4 p-4 border rounded bg-gray-50 dark:bg-gray-800">
                      <p className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                        Fill in the blanks — selecciona la opción correcta en cada hueco.
                      </p>
                
                      {/* Texto con selects intercalados */}
                      <div className="mb-3 p-3 border rounded bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-lg">
                        {Array.isArray(q.text)
                          ? q.text.map((segment, idx) => {
                              const blank = q.blanks && q.blanks[idx];
                              const feedback = q.blankFeedback?.[idx]; // 1 = correcto, -1 = incorrecto
                
                              // Colores de fondo según feedback
                              let bgColor = "bg-gray-100 dark:bg-gray-800";
                              if (feedback === 1) bgColor = "bg-green-100 dark:bg-green-700";
                              if (feedback === -1) bgColor = "bg-red-100 dark:bg-red-700";
                
                              return (
                                <span key={idx} className="inline">
                                  <span>{segment}</span>
                                  {blank && (
                                    <span className="mx-1 inline-flex items-center align-middle">
                                      <select
                                        value={(q.userSelections && q.userSelections[idx]) || ""}
                                        onChange={(e) =>
                                          handleBlankChange(currentQuestion, idx, e.target.value)
                                        }
                                        className={`border rounded px-2 py-1 text-sm ${bgColor} text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                                        disabled={q.showAnswer}
                                      >
                                        <option value="">—</option>
                                        {("options" in blank ? blank.options : []).map((opt, oi) => (
                                          <option key={oi} value={opt}>
                                            {opt}
                                          </option>
                                        ))}
                                      </select>
                
                                      {feedback === 1 && (
                                        <svg
                                          className="ml-1 w-4 h-4 text-green-600"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="2"
                                          viewBox="0 0 24 24"
                                        >
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                      )}
                                      {feedback === -1 && (
                                        <svg
                                          className="ml-1 w-4 h-4 text-red-600"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="2"
                                          viewBox="0 0 24 24"
                                        >
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                      )}
                                    </span>
                                  )}
                                </span>
                              );
                            })
                          : <p>{q.text}</p>}
                      </div>
                
                      {/* Botones: verificar / mostrar respuestas / explanation */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => {
                            const blanks = q.blanks || [];
                            const selections = q.userSelections || [];
                            const feedback: number[] = [];
                            let correct = 0;
                
                            blanks.forEach((b, bi) => {
                              if (selections[bi] && b.correct) {
                                if (selections[bi] === b.correct) {
                                  feedback[bi] = 1;
                                  correct++;
                                } else {
                                  feedback[bi] = -1;
                                }
                              } else {
                                feedback[bi] = -1;
                              }
                            });
                
                            const total = blanks.length;
                            const score = `${correct}/${total} (${total ? Math.round((correct / total) * 100) : 0}%)`;
                
                            setQuestions(prev => {
                              const copy = [...prev];
                              copy[currentQuestion] = {
                                ...copy[currentQuestion],
                                score,
                                userSelections: selections,
                                blankFeedback: feedback
                              };
                              return copy;
                            });
                          }}
                          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                        >
                          Check Score
                        </button>
                
                        <button
                          onClick={() => {
                            setQuestions(prev =>
                              prev.map((item, idx) =>
                                idx !== currentQuestion
                                  ? item
                                  : {
                                      ...item,
                                      userSelections: (item.blanks ?? []).map((b) => b.correct ?? ""),
                                      blankFeedback: (item.blanks ?? []).map(() => 1),
                                    }
                              )
                            );
                          }}
                          className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600"
                        >
                          Show Answers
                        </button>
                
                        {q.explanation && (
                          <button
                            onClick={() => toggleExplanation(currentQuestion)}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                          >
                            {showExplanation[currentQuestion] ? "Hide Explanation" : "Show Explanation"}
                          </button>
                        )}
                
                        {q.score && (
                          <div className="ml-auto font-semibold text-gray-800 dark:text-gray-200">
                            Score: {q.score}
                          </div>
                        )}
                      </div>
                
                      {/* Mostrar explicación */}
                      {showExplanation[currentQuestion] && q.explanation && (
                        <div className="mt-4 p-3 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900 text-gray-800 dark:text-gray-200">
                          <p className="font-semibold mb-2">Explanation:</p>
                          {Array.isArray(q.explanation)
                            ? q.explanation.map((exp, i) => <p key={i}>• {exp}</p>)
                            : <p>{q.explanation}</p>}
                        </div>
                      )}
                
                      {/* Historial / info */}
                      <div className="mt-4">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Selecciones:{" "}
                          {Array.isArray(q.userSelections)
                            ? q.userSelections.flatMap((s) => (Array.isArray(s) ? s : [s])).join(" | ")
                            : q.userSelections}
                        </p>
                      </div>
                    </div>
                  );
              case "MultipleChoice":
                    return (
                      <div className="mb-4 p-4 border rounded bg-gray-50 dark:bg-gray-800">
                        <p className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                          Multiple Choice, Multiple Answer — selecciona todas las opciones correctas.
                        </p>
                  
                        {/* Texto principal */}
                        <div className="mb-3 p-3 border rounded bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-lg">
                          {q.text}
                        </div>
                  
                        {/* Preguntas y Opciones */}
                        {q.questions?.map((questionItem, idx) => {
                          const userSel = q.userSelections?.[idx] || [];
                          const feedback = q.mcFeedback?.[idx] || []; // 1 = correcto, -1 = incorrecto
                  
                          return (
                            <div key={idx} className="mb-2 p-3 border rounded bg-gray-100 dark:bg-gray-800">
                              <p className="font-medium mb-2">{questionItem.question}</p>
                              {questionItem.options.map((opt, oi) => {
                                const isSelected = userSel.includes(opt);
                                const status = feedback[oi]; // undefined / 1 / -1
                                let icon = null;
                                let color = "";
                  
                                if (status === 1) {
                                  icon = "✅";
                                  color = "text-green-600";
                                } else if (status === -1) {
                                  icon = "❌";
                                  color = "text-red-600";
                                }
                  
                                return (
                                  <label
                                    key={oi}
                                    className={`block cursor-pointer mb-1 flex items-center gap-2 ${status && "font-bold"}`}
                                  >
                                    <input
                                      type="checkbox"
                                      checked={isSelected}
                                      onChange={() => handleMCSelection(currentQuestion, idx, opt)}
                                      className="mr-2"
                                      disabled={q.showAnswer} // bloquear si se muestra respuesta
                                    />
                                    <span>{opt}</span>
                                    {status && <span className={color}>{icon}</span>}
                                  </label>
                                );
                              })}
                            </div>
                          );
                        })}
                  
                        {/* Botones */}
                        <div className="flex items-center gap-2 mt-3">
                          <button
                            onClick={() => gradeMCQuestion(currentQuestion)}
                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                          >
                            Check Score
                          </button>
                  
                          <button
                            onClick={() => {
                              setQuestions(prev =>
                                prev.map((item, idx) =>
                                  idx !== currentQuestion
                                    ? item
                                    : {
                                        ...item,
                                        showAnswer: true,
                                        mcFeedback: item.questions?.map(qItem =>
                                          qItem.options.map(opt => {
                                            let correctAns: string[] = [];
                  
                                            // Type narrowing
                                            if ("correctAnswers" in qItem && Array.isArray(qItem.correctAnswers)) {
                                              correctAns = qItem.correctAnswers;
                                            } else if ("correctAnswer" in qItem && qItem.correctAnswer) {
                                              correctAns = [qItem.correctAnswer];
                                            }
                  
                                            return correctAns.includes(opt) ? 1 : -1;
                                          })
                                        ),
                                      }
                                )
                              );
                            }}
                            className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600"
                          >
                            Show Answers
                          </button>
                  
                          {q.score && (
                            <div className="ml-auto font-semibold text-gray-800 dark:text-gray-200">
                              Score: {q.score}
                            </div>
                          )}
                        </div>
                      </div>
                    );
  
              case "ReorderParagraph": {
                      const q = questions[currentQuestion] as typeof questions[number] & { showAnswer?: boolean };
                      const paragraphs: string[] = q?.paragraphs ?? [];
                      const correctOrder: number[] = q?.correctOrder ?? [];
                      const userOrder: number[] = q?.userOrder ?? paragraphs.map((_, i) => i);
                    
                      // Inicializar feedback
                      if (!q.reorderFeedback) {
                        q.reorderFeedback = userOrder.map(() => 0);
                      }
                    
                      // Inicializar showAnswer
                      if (q.showAnswer === undefined) q.showAnswer = false;
                    
                      // Botón Check Order
                      const checkReorder = () => {
                        setQuestions(prev => {
                          const copy = [...prev];
                          const question = { ...copy[currentQuestion] };
                          const feedback = (question.userOrder ?? userOrder).map((u, idx) =>
                            u === (question.correctOrder?.[idx] ?? idx) ? 1 : -1
                          );
                          question.reorderFeedback = feedback;
                          const scoreCount = feedback.filter(f => f === 1).length;
                          const total = feedback.length;
                          question.score = `${scoreCount}/${total} (${Math.round((scoreCount / total) * 100)}%)`;
                          copy[currentQuestion] = question;
                          return copy;
                        });
                      };
                    
                      // Botón Show Answer
                      const showCorrectOrder = () => {
                        setQuestions(prev => {
                          const copy = [...prev];
                          const question = { ...copy[currentQuestion] };
                          question.showAnswer = true; // marcar para mostrar la respuesta
                          copy[currentQuestion] = question;
                          return copy;
                        });
                      };
                    
                      return (
                        <div className="mb-4 p-4 border rounded bg-gray-50 dark:bg-gray-800">
                          <p className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                            Reorder the paragraphs into the correct sequence.
                          </p>
                    
                          <p className="mb-3 text-gray-600 dark:text-gray-400">
                            Drag and drop the paragraphs to reorder them correctly.
                          </p>
                    
                          <DragDropContext
                            onDragEnd={result => {
                              const { source, destination } = result;
                              if (!destination) return;
                    
                              setQuestions(prev => {
                                const copy = [...prev];
                                const question = { ...copy[currentQuestion] };
                                const order = [...(question.userOrder ?? userOrder)];
                                const [moved] = order.splice(source.index, 1);
                                order.splice(destination.index, 0, moved);
                                question.userOrder = order;
                                copy[currentQuestion] = question;
                                return copy;
                              });
                            }}
                          >
                            <Droppable droppableId="paragraphs">
                              {provided => (
                                <div
                                  {...provided.droppableProps}
                                  ref={provided.innerRef}
                                  className="mb-3 p-3 border rounded bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
                                >
                                  {paragraphs.map((para: string, idx: number) => {
                                    const userIdx = userOrder[idx] ?? idx;
                                    const status = q.reorderFeedback?.[idx] ?? 0;
                    
                                    // Si showAnswer está activado, no resaltar colores
                                    const bgColor = q.showAnswer
                                      ? "bg-gray-100 dark:bg-gray-800"
                                      : status === 1
                                      ? "bg-green-200 dark:bg-green-700"
                                      : status === -1
                                      ? "bg-red-200 dark:bg-red-700"
                                      : "bg-gray-100 dark:bg-gray-800";
                    
                                    return (
                                      <Draggable key={idx} draggableId={idx.toString()} index={idx}>
                                        {provided => (
                                          <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className={`mb-2 p-2 border rounded cursor-move ${bgColor}`}
                                          >
                                            {paragraphs[userIdx]}
                                          </div>
                                        )}
                                      </Draggable>
                                    );
                                  })}
                                  {provided.placeholder}
                                </div>
                              )}
                            </Droppable>
                          </DragDropContext>
                    
                          <div className="flex items-center gap-2 mt-3">
                            <button
                              onClick={checkReorder}
                              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                            >
                              Check Order
                            </button>
                    
                            <button
                              onClick={showCorrectOrder}
                              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                              Show Answer
                            </button>
                    
                            {q.score && (
                              <div className="ml-auto font-semibold text-gray-800 dark:text-gray-200">
                                Score: {q.score}
                              </div>
                            )}
                          </div>
                    
                          {/* Mostrar la respuesta solo si showAnswer es true */}
                          {q.showAnswer && (
                            <div className="mt-2 p-2 bg-gray-100 dark:bg-gray-900 rounded text-gray-800 dark:text-gray-200 whitespace-pre-line">
                              <strong>Correct Order:</strong>
                              <br />
                              {correctOrder.map((idx, i) => `${i + 1}) ${paragraphs[idx]}`).join("\n")}
                            </div>
                          )}
                        </div>
                      );
                    }
              case "FillInTheBlanksDrag": {
                      if (!questions[currentQuestion]) return null;
                    
                      const qCurr = questions[currentQuestion] as Exercise;
                      const blanks = (qCurr.blanks as BlankOptionDrag[]) || [];
                      const options = qCurr.draggableOptions || [];
                      const userSelections = qCurr.userSelections || Array(blanks.length).fill("");
                    
                      const textChunks: string[] = Array.isArray(qCurr.text)
                        ? (qCurr.text as string[])
                        : [qCurr.text as string];
                    
                      const handleDragToBlank = (blankIdx: number, option: string) => {
                        const updatedSelections = [...userSelections];
                        updatedSelections[blankIdx] = option;
                    
                        setQuestions((prev: Exercise[]) => {
                          const copy = [...prev];
                          copy[currentQuestion] = { ...qCurr, userSelections: updatedSelections };
                          return copy;
                        });
                      };
                    
                      const gradeFillInTheBlanksDrag = () => {
                        const feedbackArray = blanks.map((blank, i) => {
                          const userAns = (userSelections[i] || "").toLowerCase().trim();
                          const correctAns = (blank.correct || "").toLowerCase().trim();
                          return userAns === correctAns ? 1 : -1;
                        });
                    
                        const correctCount = feedbackArray.filter(f => f === 1).length;
                        const total = blanks.length;
                    
                        setQuestions(prev => {
                          const copy = [...prev];
                          copy[currentQuestion] = {
                            ...qCurr,
                            score: `${correctCount}/${total} (${Math.round(
                              (correctCount / total) * 100
                            )}%)`,
                            blankFeedback: feedbackArray // ← añadido
                          };
                          return copy;
                        });
                      };
                    
                      return (
                        <DragDropContext
                          onDragEnd={(result: DropResult) => {
                            const { destination, draggableId } = result;
                            if (!destination) return;
                            if (destination.droppableId.startsWith("blank-")) {
                              const blankIdx = parseInt(destination.droppableId.split("-")[1], 10);
                              handleDragToBlank(blankIdx, draggableId);
                            }
                          }}
                        >
                          <div className="fill-blanks-drag-wrapper space-y-6">
                    
                            {/* TEXTO CON BLANKS */}
                            <p className="drag-text text-lg leading-relaxed text-gray-800 dark:text-gray-200">
                              {textChunks.map((chunk: string, idx: number) => {
                                
                                // feedback viene del check answers
                                const feedback = qCurr.blankFeedback?.[idx];
                    
                                // COLOR SOLO SI SHOWANSWER, NO POR FEEDBACK
                                const bgColor = showAnswers
                                  ? "bg-green-200 border-green-500 text-green-900"
                                  : "bg-blue-50 dark:bg-blue-900 text-blue-800 dark:text-blue-200 border-blue-400 dark:border-blue-300";
                    
                                return (
                                  <React.Fragment key={idx}>
                                    <span>{chunk} </span>
                    
                                    {idx < blanks.length && (
                                      <Droppable droppableId={`blank-${idx}`}>
                                        {(provided) => (
                                          <span
                                            ref={provided.innerRef}
                                            {...provided.droppableProps}
                                            className={`blank-box inline-block w-28 h-10 border-2 border-dashed rounded-md text-center align-middle mx-1 px-2 py-1 font-semibold transition-all duration-300 ${bgColor}`}
                                          >
                                            {showAnswers
                                              ? blanks[idx].correct
                                              : userSelections[idx] || "____"}
                    
                                            {/* ÍCONOS DE FEEDBACK (correct/incorrect) */}
                                            {feedback === 1 && !showAnswers && (
                                              <svg
                                                className="w-4 h-4 inline-block text-green-700 dark:text-green-300 ml-1"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                              >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                              </svg>
                                            )}
                    
                                            {feedback === -1 && !showAnswers && (
                                              <svg
                                                className="w-4 h-4 inline-block text-red-700 dark:text-red-300 ml-1"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                viewBox="0 0 24 24"
                                              >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                              </svg>
                                            )}
                    
                                            {provided.placeholder}
                                          </span>
                                        )}
                                      </Droppable>
                                    )}
                                  </React.Fragment>
                                );
                              })}
                            </p>
                    
                            {/* OPCIONES */}
                            {!showAnswers && (
                              <Droppable droppableId="options" direction="horizontal">
                                {(provided) => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.droppableProps}
                                    className="options-container flex flex-wrap gap-3 bg-gray-100 dark:bg-gray-800 p-4 rounded-lg border border-gray-300 dark:border-gray-600 shadow-inner"
                                  >
                                    {options.map((option: string, idx: number) => (
                                      <Draggable key={option} draggableId={option} index={idx}>
                                        {(provided) => (
                                          <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className="option-item bg-white dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-800 
                                              border border-gray-300 dark:border-gray-500 rounded-md px-4 py-2 font-medium 
                                              shadow-sm cursor-grab select-none transition duration-200"
                                          >
                                            {option}
                                          </div>
                                        )}
                                      </Draggable>
                                    ))}
                                    {provided.placeholder}
                                  </div>
                                )}
                              </Droppable>
                            )}
                    
                                          
                                                    {/* 🔥 CONTENEDOR DE BOTONES */}
                          <div className="flex flex-wrap gap-4 mt-4">
  
                          {/* CHECK ANSWERS */}
                          <button
                            className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 
                              text-white font-semibold py-2 px-6 rounded-xl shadow-md 
                              transition-all duration-200 hover:-translate-y-1"
                            onClick={gradeFillInTheBlanksDrag}
                          >
                            Check Answers
                          </button>
  
                          {/* SHOW ANSWERS */}
                          <button
                            className="bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 
                              text-white font-semibold py-2 px-6 rounded-xl shadow-md 
                              transition-all duration-200 hover:-translate-y-1"
                            onClick={() => setShowAnswers(!showAnswers)}
                          >
                            {showAnswers ? "Hide Answers" : "Show Answers"}
                          </button>
  
                          {/* SHOW EXPLANATION */}
                          <button
                            className="bg-gradient-to-r from-yellow-300 to-yellow-500 hover:from-yellow-400 hover:to-yellow-600 
                              text-black font-semibold py-2 px-6 rounded-xl shadow-md 
                              transition-all duration-200 hover:-translate-y-1"
                            onClick={() => toggleExplanation(currentQuestion)}
                          >
                            {showExplanation[currentQuestion] ? "Hide Explanation" : "Show Explanation"}
                          </button>
  
                          </div>
  
  
                          {/* 🔥 CAJA DE EXPLICACIONES */}
                          {showExplanation[currentQuestion] && qCurr.explanation && (
                          <div className="bg-yellow-50 dark:bg-yellow-900/40 
                            border-l-4 border-yellow-500 dark:border-yellow-300 
                            p-4 mt-4 rounded-lg shadow-sm">
  
                            <h3 className="font-bold text-lg mb-3 text-gray-800 dark:text-gray-200">
                              Explanation:
                            </h3>
  
                            <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
  
                              {(Array.isArray(qCurr.explanation)
                                ? qCurr.explanation
                                : [qCurr.explanation]
                              ).map((exp: string, idx: number) => (
                                <li key={idx}>{exp}</li>
                              ))}
  
                            </ul>
                          </div>
                          )}
  
  
                          {/* ✅ SCORE */}
                          {qCurr.score && (
                          <div className="text-lg font-semibold text-gray-700 dark:text-gray-200 mt-3">
                            Score: {qCurr.score}
                          </div>
                          )}
  
  
                          </div>
                        </DragDropContext>
                      );
                    }
              case "OneChoiceExercises":
                      return (
                        <div className="mb-4 p-4 border rounded bg-gray-50 dark:bg-gray-800">
                          <p className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                            Multiple Choice, Single Answer — selecciona solo UNA respuesta correcta.
                          </p>
                    
                          {/* Texto */}
                          <div className="mb-3 p-3 border rounded bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-lg">
                            {q.text}
                          </div>
                    
                          {/* Preguntas */}
                          {q.questions?.map((questionItem, idx) => (
                            <div key={idx} className="mb-2 p-3 border rounded bg-gray-100 dark:bg-gray-800">
                              <p className="font-medium mb-2">{questionItem.question}</p>
                    
                              {questionItem.options.map((opt, oi) => (
                                <label key={oi} className="block cursor-pointer mb-1">
                                  <input
                                    type="radio"
                                    name={`single-${currentQuestion}-${idx}`}
                                    checked={q.userSelections?.[idx] === opt}
                                    onChange={() => handleOCSelection(currentQuestion, idx, opt)}
                                    className="mr-2"
                                  />
                                  {opt}
                                </label>
                              ))}
                            </div>
                          ))}
                    
                          {/* Botones */}
                          <div className="flex items-center gap-2 mt-3">
                            <button
                              onClick={() => gradeOCQuestion(currentQuestion)}
                              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                            >
                              Check Score
                            </button>
                    
                            <button
                              onClick={() => {
                                setQuestions(prev =>
                                  prev.map((item, idx) =>
                                    idx !== currentQuestion
                                      ? item
                                      : {
                                          ...item,
                                          userSelections: (item.blanks ?? []).map(b => (b as any).correct)
                                        }
                                  )
                                );
                              }}
                              className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-yellow-600"
                            >
                              Show Answer
                            </button>
                    
                            {q.score && (
                              <div className="ml-auto font-semibold text-gray-800 dark:text-gray-200">
                                Score: {q.score}
                              </div>
                            )}
                          </div>
                    
                          {/* Historial */}
                          <div className="mt-4">
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                            Selecciones: { 
                              Array.isArray(q.userSelections)
                                ? q.userSelections
                                    .map(sel => Array.isArray(sel) ? sel.join(", ") : sel)
                                    .join(" | ")
                                : q.userSelections || ""
                            }

                            </p>
                          </div>
                        </div>
                      );
/////////////////////////  LISTENING SECTION  ////////////////////////////////               
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