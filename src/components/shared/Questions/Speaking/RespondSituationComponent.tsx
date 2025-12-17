import React from "react";

interface RespondSituationProps {
  q: any;
  allResults: any[][];
  currentQuestion: number;
  recording: boolean;
  handleStartClick: () => void;
  stopRecording: () => void;
}

const RespondSituationComponent: React.FC<RespondSituationProps> = ({
  q,
  allResults,
  currentQuestion,
  recording,
  handleStartClick,
  stopRecording,
}) => {
  return (
    <div className="mb-4 p-4 border border-gray-200 dark:border-gray-700 rounded bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
      <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
        Respond to a situation:
      </h3>

      {/* Texto del escenario */}
      <div className="mb-4">
        <p className="font-medium text-gray-700 dark:text-gray-300">Situation:</p>
        <p className="text-lg">{q.text}</p>
      </div>

      {/* Botones de grabación */}
      <div className="mt-4 flex gap-4">
        <button
          onClick={handleStartClick}
          disabled={recording}
          className="px-4 py-2 rounded font-semibold text-white bg-green-600 hover:bg-green-700 disabled:opacity-50"
        >
          Start Recording
        </button>
        <button
          onClick={stopRecording}
          disabled={!recording}
          className="px-4 py-2 rounded font-semibold text-white bg-red-600 hover:bg-red-700 disabled:opacity-50"
        >
          Stop Recording
        </button>
      </div>

      {/* Resultados anteriores */}
      <div className="mt-4">
        <h3 className="font-semibold text-gray-800 dark:text-gray-200">Previous Responses:</h3>
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
};

export default RespondSituationComponent;
