"use client";

import React from "react";

// types.ts
export interface BlankOption {
  options: string[];
  correct?: string;
}

export interface BlankOptionDrag {
  // aquí puedes definir las propiedades de BlankOptionDrag
  // por ejemplo:
  id: string;
  text: string;
}

export interface Exercise {
  id?: string | number;
  text: string | string[];
  blanks?: (BlankOption | BlankOptionDrag)[];
  userSelections?: string[];
  blankFeedback?: number[];
  showAnswer?: boolean;
  explanation?: string | string[];
  score?: string;
}

// Type guard
function isBlankOption(blank: BlankOption | BlankOptionDrag): blank is BlankOption {
  return (blank as BlankOption).options !== undefined;
}

interface FillInTheBlanksProps {
  q: Exercise;
  currentQuestion: number;
  setQuestions: React.Dispatch<React.SetStateAction<Exercise[]>>;
  toggleExplanation: (idx: number) => void;
  showExplanation: boolean[];
}

const FillInTheBlanksComponent: React.FC<FillInTheBlanksProps> = ({
  q,
  currentQuestion,
  setQuestions,
  toggleExplanation,
  showExplanation,
}) => {
  const handleBlankChange = (blankIdx: number, value: string) => {
    setQuestions(prev => {
      const copy = [...prev];
      const question = { ...copy[currentQuestion] };
      question.userSelections = question.userSelections ? [...question.userSelections] : [];
      question.userSelections[blankIdx] = value;
      copy[currentQuestion] = question;
      return copy;
    });
  };

  const checkScore = () => {
    setQuestions(prev => {
      const copy = [...prev];
      const question = { ...copy[currentQuestion] };
      const blanks = question.blanks?.filter(isBlankOption) || [];
      const selections = question.userSelections || [];
      const feedback: number[] = [];
      let correct = 0;

      blanks.forEach((b, idx) => {
        const userAnswer = (selections[idx] ?? "").toString().trim().toLowerCase();
        const correctAnswer = (b.correct ?? "").toString().trim().toLowerCase();
        feedback[idx] = userAnswer && userAnswer === correctAnswer ? 1 : -1;
        if (feedback[idx] === 1) correct++;
      });

      const total = blanks.length;
      question.blankFeedback = feedback;
      question.score = `${correct}/${total} (${total ? Math.round((correct / total) * 100) : 0}%)`;
      copy[currentQuestion] = question;
      return copy;
    });
  };

  const showAnswers = () => {
    setQuestions(prev =>
      prev.map((item, idx) =>
        idx !== currentQuestion
          ? item
          : {
              ...item,
              userSelections: (item.blanks?.filter(isBlankOption) ?? []).map(b => b.correct ?? ""),
              blankFeedback: (item.blanks?.filter(isBlankOption) ?? []).map(() => 1),
            }
      )
    );
  };

  return (
    <div className="mb-4 p-4 border rounded bg-gray-50 dark:bg-gray-800">
      <p className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
        Fill in the blanks — selecciona la opción correcta en cada hueco.
      </p>

      <div className="mb-3 p-3 border rounded bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-lg">
        {Array.isArray(q.text)
          ? q.text.map((segment, idx) => {
              const blank = q.blanks?.[idx];
              const feedback = q.blankFeedback?.[idx];
              let bgColor = "bg-gray-100 dark:bg-gray-800";
              if (feedback === 1) bgColor = "bg-green-100 dark:bg-green-700";
              if (feedback === -1) bgColor = "bg-red-100 dark:bg-red-700";

              return (
                <span key={idx} className="inline">
                  <span>{segment}</span>
                  {blank && isBlankOption(blank) && (
                    <span className="mx-1 inline-flex items-center align-middle">
                      <select
                        value={q.userSelections?.[idx] ?? ""}
                        onChange={e => handleBlankChange(idx, e.target.value)}
                        className={`border rounded px-2 py-1 text-sm ${bgColor} text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        disabled={q.showAnswer}
                      >
                        <option value="">—</option>
                        {blank.options.map((opt, oi) => (
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

      <div className="flex items-center gap-2 mt-2">
        <button
          onClick={checkScore}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        >
          Check Score
        </button>

        <button
          onClick={showAnswers}
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

      {showExplanation[currentQuestion] && q.explanation && (
        <div className="mt-4 p-3 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900 text-gray-800 dark:text-gray-200">
          <p className="font-semibold mb-2">Explanation:</p>
          {Array.isArray(q.explanation)
            ? q.explanation.map((exp, i) => <p key={i}>• {exp}</p>)
            : <p>{q.explanation}</p>}
        </div>
      )}

      <div className="mt-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Selecciones:{" "}
          {Array.isArray(q.userSelections)
            ? q.userSelections.join(" | ")
            : q.userSelections}
        </p>
      </div>
    </div>
  );
};

export default FillInTheBlanksComponent;
