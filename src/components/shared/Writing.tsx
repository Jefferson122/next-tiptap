"use client";

import { useState, useEffect, useRef } from "react";
import sentences from "@/components/data/WritingDictation";

interface Exercise {
  text: string;
  audio: string;
  userInput: string;
  score: string;
}

const WritingPractice: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [prepareCountdown, setPrepareCountdown] = useState(3);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isPreparing, setIsPreparing] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const initial = sentences.map((s) => ({
      text: s.text,
      audio: s.audio,
      userInput: "",
      score: "0/0",
    }));
    setExercises(initial);
  }, []);

  // 🎯 Preparación y reproducción de audio
  useEffect(() => {
    // Reiniciar prepare y time por cada pregunta
    setIsPreparing(true);
    setPrepareCountdown(3);
    setTimeElapsed(0);

    const prepInterval = setInterval(() => {
      setPrepareCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(prepInterval);
          setIsPreparing(false);
          // Reproducir audio
          if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play().catch(() => {
              console.log("⚠️ El navegador bloqueó la reproducción automática");
            });
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(prepInterval);
  }, [current]);

  // 🕑 Contador de tiempo de escritura
  useEffect(() => {
    if (!isPreparing) {
      const timer = setInterval(() => {
        setTimeElapsed((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isPreparing]);

  // resetear toggles al cambiar ejercicio
  useEffect(() => {
    setShowAnswer(false);
    setShowScore(false);
  }, [current]);

  const scoreWords = (modelo: string, intento: string) => {
    const clean = (text: string) =>
      text.toLowerCase().replace(/[^a-z0-9]/gi, "").trim();

    const modeloPal = modelo.split(/\s+/).map(clean).filter(Boolean);
    const intentoPal = intento.split(/\s+/).map(clean).filter(Boolean);

    let total = modeloPal.length;
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

  const handleInputChange = (value: string) => {
    const updated = [...exercises];
    updated[current].userInput = value;
    setExercises(updated);
  };

  const checkScore = () => {
    const updated = [...exercises];
    updated[current].score = scoreWords(
      updated[current].text,
      updated[current].userInput
    );
    setExercises(updated);
    setShowScore(true);
  };

  const next = () => setCurrent((prev) => Math.min(prev + 1, exercises.length - 1));
  const back = () => setCurrent((prev) => Math.max(prev - 1, 0));
  const retry = () => {
    setExercises(
      sentences.map((s) => ({
        text: s.text,
        audio: s.audio,
        userInput: "",
        score: "0/0",
      }))
    );
    setCurrent(0);
    setShowAnswer(false);
    setShowScore(false);
    setPrepareCountdown(3);
    setTimeElapsed(0);
    setIsPreparing(true);
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}m : ${s}s`;
  };

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100 text-center">
        📝 Writing Practice (Auto Dictation)
      </h2>

      <div className="mb-4 p-3 border rounded bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
        {/* Cronómetro */}
        {isPreparing ? (
          <p className="font-bold text-red-600 mb-2 text-lg">
            Prepare: {prepareCountdown}...
          </p>
        ) : (
          <p className="font-bold text-red-600 mb-2 text-lg">
            Time: {formatTime(timeElapsed)}
          </p>
        )}

        {/* Audio */}
        <audio
          ref={audioRef}
          controls
          src={exercises[current]?.audio}
          className="w-full mb-2"
        />

        {/* Input */}
        <textarea
          value={exercises[current]?.userInput}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder="Write your attempt here..."
          className="w-full p-2 border rounded dark:bg-gray-700 dark:text-gray-200 mb-2"
          rows={3}
        />

        {/* Botones */}
        <div className="flex gap-2 mb-2">
          <button
            onClick={checkScore}
            className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition"
          >
            Check Score
          </button>

          <button
            onClick={() => setShowAnswer((prev) => !prev)}
            className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
          >
            {showAnswer ? "Hide Answer" : "Show Answer"}
          </button>
        </div>

        {/* Score */}
        {showScore && (
          <p
            className={`font-bold ${
              exercises[current]?.score.startsWith("0")
                ? "text-red-500"
                : "text-green-500"
            }`}
          >
            Score: {exercises[current]?.score}
          </p>
        )}

        {/* Respuesta */}
        {showAnswer && (
          <p className="mt-2 font-semibold text-gray-800 dark:text-gray-100">
            {exercises[current]?.text}
          </p>
        )}
      </div>

      {/* Controles */}
      <div className="flex gap-2 flex-wrap mb-4">
        <button
          onClick={back}
          disabled={current === 0}
          className="flex-1 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 disabled:opacity-50"
        >
          Back
        </button>
        <button
          onClick={next}
          disabled={current === exercises.length - 1}
          className="flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
        >
          Next
        </button>
        <button
          onClick={retry}
          className="flex-1 px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700"
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default WritingPractice;
