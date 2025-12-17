// dataMenu.ts
// --- Section Speak ---
import ReadAloud from "@/components/Data1/1.Speaking/1.ReadAloud";
import repeatsentences from "@/components/Data1/1.Speaking/2.RepeatSentence";
import describeimage from "@/components/Data1/1.Speaking/3.DescribeImage";
import RetellLecture from "@/components/Data1/1.Speaking/4.RetellLecture";
import Answershortquestion from "@/components/Data1/1.Speaking/5.AnswerShortQuestion";
import readings from "@/components/Data1/1.Speaking/6.SummarizeGroupdiscussion";
import respondSituations from "@/components/Data1/1.Speaking/7.RespondtoaSituation";
import SummarizeWrittentext from "@/components/Data1/2.Writing/1.SummarizeWrittenText";
import Essay from "@/components/Data1/2.Writing/2.Essay";

// --- Section Writing / Reading ---
import FillInTheBlanks from "@/components/Data1/3.Reading/1.FillintheBlanks(RW)";
import MultipleChoiceExercises from "@/components/Data1/3.Reading/2.MCMultipleAnswer";
import { ReorderParagraphExercises } from "@/components/Data1/3.Reading/3.ReorderParagraphs";
import { FillInTheBlanksDrag } from "@/components/Data1/3.Reading/4.FillintheBlanks";
import { OneChoiceExercises } from "@/components/Data1/3.Reading/5.MCSingleAnswer";

// --- Section Listening ---
import WritingDictation from "@/components/Data1/4.Listening/6.WritefromDictation";

// --- INTERFACES ---

// Asegúrate de que BlankOptionDrag esté exportada aquí
export interface BlankOptionDrag {
  correct: string;
}

export interface BlankOption {
  options: string[];
  correct?: string;
}

export interface MultipleChoiceQuestion {
  question: string;
  options: string[];
  correctAnswers: string[];
}

export interface OneChoiceQuestion {
  question: string;
  options: string[];
  correctAnswer: string;
}

export interface Exercise {
  id?: string | number;
  explanation?: string | string[];
  text: string | string[];
  userSelections?: string | string[] | string[][];
  blanks?: BlankOption[] | BlankOptionDrag[];
  draggableOptions?: string[];
  audio?: string;
  image?: string;
  userInput?: string;
  score?: string;
  questions?: MultipleChoiceQuestion[] | OneChoiceQuestion[];
  blankFeedback?: number[];
  mcFeedback?: number[][];
  paragraphs?: string[];
  correctOrder?: number[];
  userOrder?: number[];
  reorderFeedback?: number[];
  answer?: string;
  type?: string;
  // 🔥 AGREGA ESTA LÍNEA QUE FALTA:
  showAnswer?: boolean; 
}

// --- CONFIGURACIÓN DE SECCIONES ---
export const sections = {
  "Speaking and Writing": [
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

// --- MAPEÓ DE DATOS ---
export const exerciseData: Record<string, any[]> = {
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
};

// Re-exportamos los datos individuales para el generador
export { 
  ReadAloud, repeatsentences, describeimage, RetellLecture, Answershortquestion, readings, 
  respondSituations, SummarizeWrittentext, Essay, FillInTheBlanks, MultipleChoiceExercises, 
  ReorderParagraphExercises, FillInTheBlanksDrag, OneChoiceExercises, WritingDictation 
};