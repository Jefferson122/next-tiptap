import React from "react";

interface SummarizeWrittenProps {
  q: any;
  handleInputChange: (value: string) => void;
  checkScore: () => void;
}

const SummarizeWrittenComponent: React.FC<SummarizeWrittenProps> = ({
  q,
  handleInputChange,
  checkScore,
}) => {
  const wordCount = (q.userInput?.trim().split(/\s+/).filter(Boolean).length) || 0;

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
        Word count: {wordCount}
      </p>

      {/* Botón para calcular score */}
      <button
        onClick={checkScore}
        className="mt-3 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Check Score
      </button>
    </div>
  );
};

export default SummarizeWrittenComponent;
