import { 
    exerciseData, 
    sections,
    ReadAloud, 
    repeatsentences, 
    describeimage, 
    RetellLecture, 
    Answershortquestion, 
    readings, 
    respondSituations, 
    SummarizeWrittentext, 
    Essay, 
    FillInTheBlanks, 
    MultipleChoiceExercises, 
    ReorderParagraphExercises, 
    FillInTheBlanksDrag, 
    OneChoiceExercises, 
    WritingDictation,
    BlankOption,
    BlankOptionDrag,
    Exercise 
  } from "@/components/shared/dataMenu";
  
  /**
   * 1. Lógica de límites de ejercicios
   * Evita solicitar más ejercicios de los que existen en el JSON
   */
  export const applyLimit = (taskKey: string, requestedCount: number): number => {
    const arr = exerciseData[taskKey];
    if (!arr) return 0;
    return Math.min(requestedCount, arr.length);
  };
  
  /**
   * 2. Lógica de Scoring para texto (Dictado / Escritura)
   * Compara palabra por palabra ignorando mayúsculas y signos
   */
  export const scoreWords = (modelo: string, intento: string): string => {
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
  
  /**
   * 3. Configurador de Plan de Estudio por Días (1-8)
   */
  export const getDayConfig = (day: number): Record<string, number> => {
    const newCounts: Record<string, number> = {};
  
    // Inicializar todos los contadores en 0 basado en las secciones existentes
    Object.keys(sections).forEach((section) => {
      sections[section as keyof typeof sections].forEach((task) => {
        newCounts[`${section}-${task.name}`] = 0;
      });
    });
  
    if (day === 0) return newCounts;
  
    switch (day) {
      case 1:
        newCounts["Speaking and Writing-Read Aloud"] = applyLimit("Speaking and Writing-Read Aloud", 15);
        newCounts["Speaking and Writing-Repeat Sentence"] = applyLimit("Speaking and Writing-Repeat Sentence", 15);
        newCounts["Speaking and Writing-Describe Image"] = applyLimit("Speaking and Writing-Describe Image", 4);
        newCounts["Speaking and Writing-Respond to a Situation"] = applyLimit("Speaking and Writing-Respond to a Situation", 5);
        newCounts["Reading-Fill in the Blanks (RW)"] = applyLimit("Reading-Fill in the Blanks (RW)", 10);
        newCounts["Reading-Fill in the Blanks"] = applyLimit("Reading-Fill in the Blanks", 6);
        newCounts["Writing-Summarize Written Text"] = applyLimit("Writing-Summarize Written Text", 4);
        break;
  
      case 2:
        newCounts["Listening-Write from Dictation"] = applyLimit("Listening-Write from Dictation", 10);
        newCounts["Listening-Fill in the Blanks"] = applyLimit("Listening-Fill in the Blanks", 8);
        newCounts["Listening-Summarize Spoken Text"] = applyLimit("Listening-Summarize Spoken Text", 5);
        newCounts["Listening-Highlight Correct Summary"] = applyLimit("Listening-Highlight Correct Summary", 4);
        newCounts["Speaking and Writing-Repeat Sentence"] = applyLimit("Speaking and Writing-Repeat Sentence", 8);
        break;
  
      case 3:
        newCounts["Reading-Fill in the Blanks (RW)"] = applyLimit("Reading-Fill in the Blanks (RW)", 12);
        newCounts["Reading-Fill in the Blanks"] = applyLimit("Reading-Fill in the Blanks", 8);
        newCounts["Reading-Re order Paragraphs"] = applyLimit("Reading-Re order Paragraphs", 6);
        newCounts["Reading-Multiple Choice, Multiple Answer"] = applyLimit("Reading-Multiple Choice, Multiple Answer", 3);
        newCounts["Reading-Multiple Choice, Single Answer"] = applyLimit("Reading-Multiple Choice, Single Answer", 3);
        newCounts["Speaking and Writing-Describe Image"] = applyLimit("Speaking and Writing-Describe Image", 5);
        newCounts["Speaking and Writing-Respond to a Situation"] = applyLimit("Speaking and Writing-Respond to a Situation", 4);
        break;
  
      case 4:
        newCounts["Speaking and Writing-Retell Lecture"] = applyLimit("Speaking and Writing-Retell Lecture", 6);
        newCounts["Speaking and Writing-Summarize Group Discussion"] = applyLimit("Speaking and Writing-Summarize Group Discussion", 6);
        newCounts["Speaking and Writing-Write Essay"] = applyLimit("Speaking and Writing-Write Essay", 3);
        newCounts["Speaking and Writing-Respond to a Situation"] = applyLimit("Speaking and Writing-Respond to a Situation", 5);
        newCounts["Speaking and Writing-Read Aloud"] = applyLimit("Speaking and Writing-Read Aloud", 8);
        newCounts["Writing-Summarize Written Text"] = applyLimit("Writing-Summarize Written Text", 5);
        break;
  
      case 5:
        newCounts["Listening-Write from Dictation"] = applyLimit("Listening-Write from Dictation", 10);
        newCounts["Listening-Fill in the Blanks"] = applyLimit("Listening-Fill in the Blanks", 6);
        newCounts["Listening-Summarize Spoken Text"] = applyLimit("Listening-Summarize Spoken Text", 5);
        newCounts["Reading-Fill in the Blanks (RW)"] = applyLimit("Reading-Fill in the Blanks (RW)", 9);
        newCounts["Reading-Fill in the Blanks"] = applyLimit("Reading-Fill in the Blanks", 6);
        newCounts["Speaking and Writing-Repeat Sentence"] = applyLimit("Speaking and Writing-Repeat Sentence", 6);
        break;
  
      case 6:
        newCounts["Speaking and Writing-Read Aloud"] = applyLimit("Speaking and Writing-Read Aloud", 12);
        newCounts["Speaking and Writing-Repeat Sentence"] = applyLimit("Speaking and Writing-Repeat Sentence", 12);
        newCounts["Speaking and Writing-Answer Short Question"] = applyLimit("Speaking and Writing-Answer Short Question", 5);
        newCounts["Speaking and Writing-Describe Image"] = applyLimit("Speaking and Writing-Describe Image", 6);
        newCounts["Writing-Summarize Written Text"] = applyLimit("Writing-Summarize Written Text", 5);
        break;
  
      case 7:
        newCounts["Speaking and Writing-Write Essay"] = applyLimit("Speaking and Writing-Write Essay", 3);
        newCounts["Writing-Summarize Written Text"] = applyLimit("Writing-Summarize Written Text", 5);
        newCounts["Reading-Fill in the Blanks (RW)"] = applyLimit("Reading-Fill in the Blanks (RW)", 9);
        newCounts["Reading-Re order Paragraphs"] = applyLimit("Reading-Re order Paragraphs", 6);
        newCounts["Reading-Fill in the Blanks"] = applyLimit("Reading-Fill in the Blanks", 6);
        newCounts["Speaking and Writing-Summarize Group Discussion"] = applyLimit("Speaking and Writing-Summarize Group Discussion", 5);
        newCounts["Speaking and Writing-Respond to a Situation"] = applyLimit("Speaking and Writing-Respond to a Situation", 4);
        break;
  
      case 8:
        newCounts["Listening-Write from Dictation"] = applyLimit("Listening-Write from Dictation", 10);
        newCounts["Listening-Fill in the Blanks"] = applyLimit("Listening-Fill in the Blanks", 6);
        newCounts["Listening-Summarize Spoken Text"] = applyLimit("Listening-Summarize Spoken Text", 5);
        newCounts["Speaking and Writing-Read Aloud"] = applyLimit("Speaking and Writing-Read Aloud", 8);
        newCounts["Speaking and Writing-Repeat Sentence"] = applyLimit("Speaking and Writing-Repeat Sentence", 8);
        newCounts["Speaking and Writing-Describe Image"] = applyLimit("Speaking and Writing-Describe Image", 6);
        newCounts["Reading-Fill in the Blanks (RW)"] = applyLimit("Reading-Fill in the Blanks (RW)", 8);
        newCounts["Speaking and Writing-Respond to a Situation"] = applyLimit("Speaking and Writing-Respond to a Situation", 5);
        break;
    }
  
    return newCounts;
  };
  
  /**
   * 4. Generador Global de Preguntas
   * Transforma los conteos seleccionados en un array de ejercicios reales
   */
  export const generateStudyQuestions = (counts: Record<string, number>) => {
    let instructionsText = "";
    let qIndex = 0;
    const generatedQuestions: Exercise[] = [];
  
    Object.entries(counts).forEach(([key, count]) => {
      if (count <= 0) return;
  
      const dashIndex = key.indexOf("-");
      if (dashIndex === -1) return;
  
      const section = key.slice(0, dashIndex).trim();
      const taskName = key.slice(dashIndex + 1).trim();
      
      const sectionTasks = sections[section as keyof typeof sections];
      const task = sectionTasks?.find(t => t.name === taskName);
  
      if (!task) return;
  
      for (let i = 1; i <= count; i++) {
        instructionsText += `${task.name} - Pregunta ${i}: ${task.instructions}\n`;
  
        // --- Speaking & Writing ---
        if (section === "Speaking and Writing") {
          if (taskName === "Read Aloud") {
            generatedQuestions.push({ text: ReadAloud[qIndex % ReadAloud.length].text, type: "ReadAloud" });
          } else if (taskName === "Repeat Sentence") {
            const s = repeatsentences[repeatsentences.length - i];
            generatedQuestions.push({ text: s.text, audio: s.audio, type: "repeatsentences" });
          } else if (taskName === "Describe Image") {
            const img = describeimage[qIndex % describeimage.length];
            generatedQuestions.push({ text: img.text, image: img.image, type: "DescribeImage" });
          } else if (taskName === "Retell Lecture") {
            const s = RetellLecture[RetellLecture.length - i];
            generatedQuestions.push({ text: s.text, audio: s.audio, type: "RetellLecture" });
          } else if (taskName === "Answer Short Question") {
            const qData = Answershortquestion[qIndex % Answershortquestion.length];
            generatedQuestions.push({ text: qData.question, audio: qData.audio, userInput: "", type: "AnswerShortQuestion", score: "" });
          } else if (taskName === "Summarize Group Discussion") {
            const s = readings[readings.length - i];
            generatedQuestions.push({ text: s.text, audio: s.audio[0], type: "summarize" });
          } else if (taskName === "Respond to a Situation") {
            const rs = respondSituations[respondSituations.length - i];
            generatedQuestions.push({ text: rs.situation, type: "respond_to_situation" });
          } else if (taskName === "Summarize Written Text") {
            const swt = SummarizeWrittentext[SummarizeWrittentext.length - i];
            generatedQuestions.push({ text: swt.text, type: "SummarizeWrittentext" });
          } else if (taskName === "Write Essay") {
            const essay = Essay[Essay.length - i];
            generatedQuestions.push({ text: essay.text, type: "Essay" });
          }
        }
        
        // --- Reading ---
        else if (section === "Reading") {
          if (taskName === "Fill in the Blanks (RW)") {
            const item = FillInTheBlanks[FillInTheBlanks.length - 1 - i];
            generatedQuestions.push({ text: item.text, blanks: item.blanks, userSelections: Array(item.blanks?.length || 0).fill(""), type: "FillInTheBlanks", explanation: item.explanation ?? [] });
          } else if (taskName === "Multiple Choice, Multiple Answer") {
            const mc = MultipleChoiceExercises[qIndex % MultipleChoiceExercises.length];
            generatedQuestions.push({ text: mc.text, blanks: mc.questions.map(q => ({ options: q.options, correct: q.correctAnswers.join(";;") })), userSelections: mc.questions.map(() => []), type: "MultipleChoice", questions: mc.questions });
          } else if (taskName === "Re order Paragraphs") {
            const rp = ReorderParagraphExercises[(i - 1) % ReorderParagraphExercises.length];
            if (rp?.paragraphs) {
              generatedQuestions.push({ text: "", type: "ReorderParagraph", paragraphs: rp.paragraphs.map(p => p.text), correctOrder: rp.paragraphs.map(p => p.correctOrder - 1), userOrder: rp.paragraphs.map((_, idx) => idx), answer: rp.answer });
            }
          } else if (taskName === "Fill in the Blanks") {
            const item = FillInTheBlanksDrag[FillInTheBlanksDrag.length - i];
            generatedQuestions.push({ text: item.text, blanks: item.blanks, draggableOptions: item.draggableOptions, userSelections: Array(item.blanks.length).fill(""), type: "FillInTheBlanksDrag", explanation: item.explanation ?? [] });
          } else if (taskName === "Multiple Choice, Single Answer") {
            const oc = OneChoiceExercises[qIndex % OneChoiceExercises.length];
            generatedQuestions.push({ text: oc.text, blanks: oc.questions.map(q => ({ options: q.options, correct: q.correctAnswer })), userSelections: oc.questions.map(() => ""), type: "OneChoiceExercises", questions: oc.questions });
          }
        }
        
        // --- Listening ---
        else if (section === "Listening") {
          if (taskName === "Write from Dictation") {
            const dict = WritingDictation[qIndex % WritingDictation.length];
            generatedQuestions.push({ text: dict.text, audio: dict.audio, userInput: "", score: "0/0", type: "WritingDictation" });
          }
        }
        qIndex++;
      }
    });
  
    return { 
      instructions: instructionsText.trim(), 
      questions: generatedQuestions 
    };
  };