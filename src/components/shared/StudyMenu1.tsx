"use client";

import { useState, useEffect, useRef } from "react";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import React, { Fragment } from "react";


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
import FillInTheBlanks from "@/components/Data1/3.Reading/1.FillintheBlanks(RW)";
import MultipleChoiceExercises from "@/components/Data1/3.Reading/2.MCMultipleAnswer";
import {ReorderParagraphExercises} from "@/components/Data1/3.Reading/3.ReorderParagraphs";
import { BlankOptionDrag, FillInTheBlanksDrag } from "@/components/Data1/3.Reading/4.FillintheBlanks";
import {OneChoiceExercises} from "@/components/Data1/3.Reading/5.MCSingleAnswer";

//Section Listening
import WritingDictation from "@/components/Data1/4.Listening/6.WritefromDictation";

// coloca esto en la parte superior, donde defines las interfaces
export interface BlankOption {
  options: string[];
  correct?: string;
}
// Colócalo al inicio del archivo, antes de usarlo
export interface MultipleChoiceQuestion {
  question: string;
  options: string[];
  correctAnswers: string[];
}
export interface MultipleChoiceExercise {
  id: number;
  text: string;
  questions: MultipleChoiceQuestion[];
}
export interface OneChoiceQuestion {
  question: string;
  options: string[];
  correctAnswer: string; // SOLO UNA RESPUESTA
}
export interface OneChoiceExercise {
  id: number;
  text: string;
  questions: OneChoiceQuestion[];
}

interface Exercise {
  id?: string| number;
   // 🔹 Aquí agregamos la propiedad explanation
  explanation?: string | string[];
  text: string | string[];
  userSelections?: string | string[] | string[][];
  blanks?: BlankOption[] | BlankOptionDrag[]; // <-- acepta ambos tipos
  draggableOptions?: string[]; // <-- AGREGA ESTO
  audio?: string;
  image?: string;
  userInput?: string;
  score?: string;
  questions?: MultipleChoiceQuestion[] | OneChoiceQuestion[];
  // 🔥 NUEVAS PROPIEDADES PARA REORDER
  // <-- Agregar esta línea
  // Nueva propiedad para FillInTheBlanks
  blankFeedback?: number[]; // 1 = correcto, -1 = incorrecto
  mcFeedback?: number[][]; // 1 = correcto, -1 = incorrecto, 0 = no seleccionado
  showAnswer?: boolean;
  paragraphs?: string[];
  correctOrder?: number[];
  userOrder?: number[];
  reorderFeedback?: number[]; // <-- agrega esto
  answer?: string; // <-- Agregado
  type?: "OneChoiceExercises"|"FillInTheBlanksDrag" |"ReorderParagraph"|"MultipleChoice"|"ReadAloud" |"repeatsentences"|"DescribeImage" | "RetellLecture"|"AnswerShortQuestion"|"respond_to_situation"|"summarize"|"Essay"|"FillInTheBlanks"|"SummarizeWrittentext"|"WritingDictation" |  string; // <-- aquí
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
      { name: "Re order Paragraphs", timePerQ: 150, instructions: "Arrange the paragraphs in the correct order." },
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
// Mapeo de datos de ejercicios
  const exerciseData: Record<string, any[]> = {
    "Speaking and Writing-Read Aloud": ReadAloud,
    "Speaking and Writing-Repeat Sentence": repeatsentences,
    "Speaking and Writing-Describe Image": describeimage,
    "Speaking and Writing-Retell Lecture": RetellLecture,
    "Speaking and Writing-Answer Short Question": Answershortquestion,
    "Speaking and Writing-Summarize Group Discussion": readings,
    "Speaking and Writing-Respond to a Situation": respondSituations,
    "Speaking and Writing-Write Essay": Essay,
    "Reading-Fill in the Blanks (RW)": FillInTheBlanks,
    "Reading-Fill in the Blanks": FillInTheBlanksDrag,
    "Reading-Re order Paragraphs": ReorderParagraphExercises,
    "Reading-Multiple Choice, Multiple Answer": MultipleChoiceExercises,
    "Reading-Multiple Choice, Single Answer": OneChoiceExercises,
    "Writing-Summarize Written Text": SummarizeWrittentext,
    "Listening-Write from Dictation": WritingDictation,
    // "Listening-Fill in the Blanks": ListeningFillInTheBlanks, // si tienes
    // "Listening-Summarize Spoken Text": ListeningSummarize,
    // "Listening-Highlight Correct Summary": ListeningHighlight,
  };
  
  // Al inicio de StudyMenu1.tsx es el limite por tarea
  const applyLimit = (taskKey: string, requestedCount: number) => {
    const arr = exerciseData[taskKey];
    if (!arr) return 0;
    return Math.min(requestedCount, arr.length);
  };
  

  // Se hizo lo del dia pero con la limitacion
  const handleSelectDay = (day: number) => {
    // 1️⃣ Limpiar todo
    const newCounts: Record<string, number> = {};
    Object.keys(counts).forEach(key => (newCounts[key] = 0));
  
    if (day === 0) {
      setCounts(newCounts);
      return;
    }
  
    // 2️⃣ Asignar tareas por día usando applyLimit
    switch (day) {
      case 1:
        newCounts["Speaking and Writing-Read Aloud"] =
          applyLimit("Speaking and Writing-Read Aloud", 15);
        newCounts["Speaking and Writing-Repeat Sentence"] =
          applyLimit("Speaking and Writing-Repeat Sentence", 15);
        newCounts["Speaking and Writing-Describe Image"] =
          applyLimit("Speaking and Writing-Describe Image", 4);
        newCounts["Speaking and Writing-Respond to a Situation"] =
          applyLimit("Speaking and Writing-Respond to a Situation", 5);
        newCounts["Reading-Fill in the Blanks (RW)"] =
          applyLimit("Reading-Fill in the Blanks (RW)", 10);
        newCounts["Reading-Fill in the Blanks"] =
          applyLimit("Reading-Fill in the Blanks", 6);
        newCounts["Writing-Summarize Written Text"] =
          applyLimit("Writing-Summarize Written Text", 4);
        break;
  
      case 2:
        newCounts["Listening-Write from Dictation"] =
          applyLimit("Listening-Write from Dictation", 10);
        newCounts["Listening-Fill in the Blanks"] =
          applyLimit("Listening-Fill in the Blanks", 8);
        newCounts["Listening-Summarize Spoken Text"] =
          applyLimit("Listening-Summarize Spoken Text", 5);
        newCounts["Listening-Highlight Correct Summary"] =
          applyLimit("Listening-Highlight Correct Summary", 4);
        newCounts["Speaking and Writing-Repeat Sentence"] =
          applyLimit("Speaking and Writing-Repeat Sentence", 8);
        break;
  
      case 3:
        newCounts["Reading-Fill in the Blanks (RW)"] =
          applyLimit("Reading-Fill in the Blanks (RW)", 12);
        newCounts["Reading-Fill in the Blanks"] =
          applyLimit("Reading-Fill in the Blanks", 8);
        newCounts["Reading-Re order Paragraphs"] =
          applyLimit("Reading-Re order Paragraphs", 6);
        newCounts["Reading-Multiple Choice, Multiple Answer"] =
          applyLimit("Reading-Multiple Choice, Multiple Answer", 3);
        newCounts["Reading-Multiple Choice, Single Answer"] =
          applyLimit("Reading-Multiple Choice, Single Answer", 3);
        newCounts["Speaking and Writing-Describe Image"] =
          applyLimit("Speaking and Writing-Describe Image", 5);
        newCounts["Speaking and Writing-Respond to a Situation"] =
          applyLimit("Speaking and Writing-Respond to a Situation", 4);
        break;
  
      case 4:
        newCounts["Speaking and Writing-Retell Lecture"] =
          applyLimit("Speaking and Writing-Retell Lecture", 6);
        newCounts["Speaking and Writing-Summarize Group Discussion"] =
          applyLimit("Speaking and Writing-Summarize Group Discussion", 6);
        newCounts["Speaking and Writing-Write Essay"] =
          applyLimit("Speaking and Writing-Write Essay", 3);
        newCounts["Speaking and Writing-Respond to a Situation"] =
          applyLimit("Speaking and Writing-Respond to a Situation", 5);
        newCounts["Speaking and Writing-Read Aloud"] =
          applyLimit("Speaking and Writing-Read Aloud", 8);
        newCounts["Writing-Summarize Written Text"] =
          applyLimit("Writing-Summarize Written Text", 5);
        break;
  
      case 5:
        newCounts["Listening-Write from Dictation"] =
          applyLimit("Listening-Write from Dictation", 10);
        newCounts["Listening-Fill in the Blanks"] =
          applyLimit("Listening-Fill in the Blanks", 6);
        newCounts["Listening-Summarize Spoken Text"] =
          applyLimit("Listening-Summarize Spoken Text", 5);
        newCounts["Reading-Fill in the Blanks (RW)"] =
          applyLimit("Reading-Fill in the Blanks (RW)", 9);
        newCounts["Reading-Fill in the Blanks"] =
          applyLimit("Reading-Fill in the Blanks", 6);
        newCounts["Speaking and Writing-Repeat Sentence"] =
          applyLimit("Speaking and Writing-Repeat Sentence", 6);
        break;
  
      case 6:
        newCounts["Speaking and Writing-Read Aloud"] =
          applyLimit("Speaking and Writing-Read Aloud", 12);
        newCounts["Speaking and Writing-Repeat Sentence"] =
          applyLimit("Speaking and Writing-Repeat Sentence", 12);
        newCounts["Speaking and Writing-Answer Short Question"] =
          applyLimit("Speaking and Writing-Answer Short Question", 5);
        newCounts["Speaking and Writing-Describe Image"] =
          applyLimit("Speaking and Writing-Describe Image", 6);
        newCounts["Writing-Summarize Written Text"] =
          applyLimit("Writing-Summarize Written Text", 5);
        break;
  
      case 7:
        newCounts["Speaking and Writing-Write Essay"] =
          applyLimit("Speaking and Writing-Write Essay", 3);
        newCounts["Writing-Summarize Written Text"] =
          applyLimit("Writing-Summarize Written Text", 5);
        newCounts["Reading-Fill in the Blanks (RW)"] =
          applyLimit("Reading-Fill in the Blanks (RW)", 9);
        newCounts["Reading-Re order Paragraphs"] =
          applyLimit("Reading-Re order Paragraphs", 6);
        newCounts["Reading-Fill in the Blanks"] =
          applyLimit("Reading-Fill in the Blanks", 6);
        newCounts["Speaking and Writing-Summarize Group Discussion"] =
          applyLimit("Speaking and Writing-Summarize Group Discussion", 5);
        newCounts["Speaking and Writing-Respond to a Situation"] =
          applyLimit("Speaking and Writing-Respond to a Situation", 4);
        break;
  
      case 8:
        newCounts["Listening-Write from Dictation"] =
          applyLimit("Listening-Write from Dictation", 10);
        newCounts["Listening-Fill in the Blanks"] =
          applyLimit("Listening-Fill in the Blanks", 6);
        newCounts["Listening-Summarize Spoken Text"] =
          applyLimit("Listening-Summarize Spoken Text", 5);
        newCounts["Speaking and Writing-Read Aloud"] =
          applyLimit("Speaking and Writing-Read Aloud", 8);
        newCounts["Speaking and Writing-Repeat Sentence"] =
          applyLimit("Speaking and Writing-Repeat Sentence", 8);
        newCounts["Speaking and Writing-Describe Image"] =
          applyLimit("Speaking and Writing-Describe Image", 6);
        newCounts["Reading-Fill in the Blanks (RW)"] =
          applyLimit("Reading-Fill in the Blanks (RW)", 8);
        newCounts["Speaking and Writing-Respond to a Situation"] =
          applyLimit("Speaking and Writing-Respond to a Situation", 5);
        break;
    }
  
    // 3️⃣ Aplicar conteos al estado
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
   // Generar preguntas e instrucciones
  const handleGenerateInstructions = () => {
  let result = "";
  let qIndex = 0;
  const q: Exercise[] = [];

  Object.entries(counts).forEach(([key, count]) => {
    if (count <= 0) return;

    const index = key.indexOf("-");
    if (index === -1) return; // seguridad

    const section = key.slice(0, index).trim();
    const taskName = key.slice(index + 1).trim();

    // Validar que la sección exista
    const sectionTasks = sections[section as keyof typeof sections];
    if (!sectionTasks) {
      console.warn(`Sección no encontrada: ${section}`);
      return;
    }

    // Buscar la tarea
    const task = sectionTasks.find(t => t.name === taskName);
    if (!task) {
      console.warn(`Tarea no encontrada: ${taskName} en sección ${section}`);
      return;
    }

    // Generar instrucciones y preguntas
    for (let i = 1; i <= count; i++) {
      result += `${task.name} - Pregunta ${i}: ${task.instructions}\n`;

      // --- Speaking & Writing ---
      if (section === "Speaking and Writing") {
        if (taskName === "Read Aloud") {
          q.push({
            text: ReadAloud[qIndex % ReadAloud.length].text,
            type: "ReadAloud",
          });
        } else if (taskName === "Repeat Sentence") {
          const sentenceIndex = repeatsentences.length - i;
          const sentence = repeatsentences[sentenceIndex];
          q.push({
            text: sentence.text,
            audio: sentence.audio,
            type: "repeatsentences",
          });
        } else if (taskName === "Describe Image") {
          const img = describeimage[qIndex % describeimage.length];
          q.push({
            text: img.text,
            image: img.image,
            type: "DescribeImage",
          });
        } else if (taskName === "Retell Lecture") {
          const sentenceIndex = RetellLecture.length - i;
          const sentence = RetellLecture[sentenceIndex];
          q.push({
            text: sentence.text,
            audio: sentence.audio,
            type: "RetellLecture",
          });
        } else if (taskName === "Answer Short Question") {
          const questionData = Answershortquestion[qIndex % Answershortquestion.length];
          q.push({
            text: questionData.question,
            audio: questionData.audio,
            userInput: "",
            type: "AnswerShortQuestion",
            score: "",
          });
        } else if (taskName === "Summarize Group Discussion") {
          const sentence = readings[readings.length - i];
          q.push({
            text: sentence.text,
            audio: sentence.audio[0],
            type: "summarize",
          });
        } else if (taskName === "Respond to a Situation") {
          const rs = respondSituations[respondSituations.length - i];
          q.push({
            text: rs.situation,
            type: "respond_to_situation",
          });
        } else if (taskName === "Summarize Written Text") {
          const swt = SummarizeWrittentext[SummarizeWrittentext.length - i];
          q.push({
            text: swt.text,
            type: "SummarizeWrittentext",
          });
        } else if (taskName === "Write Essay") {
          const essay = Essay[Essay.length - i];
          q.push({
            text: essay.text,
            type: "Essay",
          });
        }
      }

      // --- Reading ---
      else if (section === "Reading") {
        if (taskName === "Fill in the Blanks (RW)") {
          const item = FillInTheBlanks[FillInTheBlanks.length - 1 - i];
          q.push({
            text: item.text,
            blanks: item.blanks,
            userSelections: Array(item.blanks?.length || 0).fill(""),
            type: "FillInTheBlanks",
            explanation: item.explanation ?? [],
          });
        } else if (taskName === "Multiple Choice, Multiple Answer") {
          const mcItem = MultipleChoiceExercises[qIndex % MultipleChoiceExercises.length];
          q.push({
            text: mcItem.text,
            blanks: mcItem.questions.map(q => ({
              options: q.options,
              correct: q.correctAnswers.join(";;"),
            })),
            userSelections: mcItem.questions.map(() => []),
            type: "MultipleChoice",
            questions: mcItem.questions,
          });
        } else if (taskName === "Re order Paragraphs") {
          const rpIdx = (i - 1) % ReorderParagraphExercises.length;
          const rpItem = ReorderParagraphExercises[rpIdx];
          if (rpItem?.paragraphs) {
            q.push({
              text: "",
              type: "ReorderParagraph",
              paragraphs: rpItem.paragraphs.map(p => p.text),
              correctOrder: rpItem.paragraphs.map(p => p.correctOrder - 1),
              userOrder: rpItem.paragraphs.map((_, idx) => idx),
              answer: rpItem.answer,
            });
          }
        } else if (taskName === "Fill in the Blanks") {
          const index = FillInTheBlanksDrag.length - i;
          const item = FillInTheBlanksDrag[index];
          q.push({
            text: item.text,
            blanks: item.blanks,
            draggableOptions: item.draggableOptions,
            userSelections: Array(item.blanks.length).fill(""),
            type: "FillInTheBlanksDrag",
            explanation: item.explanation ?? [],
          });
        } else if (taskName === "Multiple Choice, Single Answer") {
          const Item = OneChoiceExercises[qIndex % OneChoiceExercises.length];
          q.push({
            text: Item.text,
            blanks: Item.questions.map(q => ({
              options: q.options,
              correct: q.correctAnswer,
            })),
            userSelections: Item.questions.map(() => "" as string),
            type: "OneChoiceExercises",
            questions: Item.questions,
          });
        }
      }

      // --- Listening ---
      else if (section === "Listening") {
        if (taskName === "Write from Dictation") {
          const dict = WritingDictation[qIndex % WritingDictation.length];
          q.push({
            text: dict.text,
            audio: dict.audio,
            userInput: "",
            score: "0/0",
            type: "WritingDictation",
          });
        }
      }

      qIndex++;
    }
  });

  setInstructions(result.trim());
  setQuestions(q);
  setAllResults(Array(q.length).fill([]));
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
  const [reorderFeedback, setReorderFeedback] = useState<number[]>([]);
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
  const [showAnswers, setShowAnswers] = useState(false);

  // Cantidad disponible por tipo de pregunta
  const availableQuestions: Record<string, number> = {
  // SPEAKING & WRITING
  "Speaking and Writing-Read Aloud": ReadAloud.length,
  "Speaking and Writing-Repeat Sentence": repeatsentences.length,
  "Speaking and Writing-Describe Image": describeimage.length,
  "Speaking and Writing-Respond to a Situation": respondSituations.length,
  "Speaking and Writing-Retell Lecture": RetellLecture.length,
  "Speaking and Writing-Summarize Group Discussion": readings.length,
  "Speaking and Writing-Answer Short Question": Answershortquestion.length,
  "Speaking and Writing-Summarize Written Text": SummarizeWrittentext.length,
  "Speaking and Writing-Write Essay": Essay.length,

  // READING
  "Reading-Fill in the Blanks (RW)": FillInTheBlanks.length,
  "Reading-Multiple Choice, Multiple Answer": MultipleChoiceExercises.length,
  "Reading-Re order Paragraphs": ReorderParagraphExercises.length,
  "Reading-Fill in the Blanks": FillInTheBlanksDrag.length,
  "Reading-Multiple Choice, Single Answer": OneChoiceExercises.length,

  // LISTENING
  // "Listening-Summarize Spoken Text": SummarizeSpokenText.length,
  // "Listening-Multiple Choice, Multiple Answer": ListeningMultipleChoiceExercises.length,
  // "Listening-Fill in the Blanks": ListeningFillBlanks.length,
  // "Listening-Highlight Correct Summary": HighlightSummary.length,
  // "Listening-Select Missing Word": SelectMissingWord.length,
  "Listening-Write from Dictation": WritingDictation.length,
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
 ///////////////////////// WRITING SECTION  ////////////////////////////////
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