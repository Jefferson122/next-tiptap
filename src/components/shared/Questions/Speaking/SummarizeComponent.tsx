import React from "react";

interface SummarizeProps {
  q: any;
  allResults: any[][];
  currentQuestion: number;
  recording: boolean;
  handleStartClick: () => void;
  stopRecording: () => void;
  showTextStates: boolean[];
  toggleShowText: (index: number) => void;
  pronDetail: string;
}

const SummarizeComponent: React.FC<SummarizeProps> = ({
  q,
  allResults,
  currentQuestion,
  recording,
  handleStartClick,
  stopRecording,
  showTextStates,
  toggleShowText,
  pronDetail,
}) => {
  return (
    <div className="mb-4 p-4 border rounded bg-gray-50 dark:bg-gray-800">
      <p className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
        Summarize the discussion in one or two sentences.
      </p>

      <p className="text-blue-700 font-semibold mb-2">
        Question {currentQuestion + 1}:
      </p>

      <audio controls src={q.audio} className="w-full mb-3" />

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

      <button
        onClick={() => toggleShowText(currentQuestion)}
        className="mb-2 px-3 py-1 bg-yellow-400 dark:bg-yellow-600 
        text-black dark:text-white font-semibold rounded-full 
        hover:bg-yellow-500 dark:hover:bg-yellow-700 transition"
      >
        {showTextStates[currentQuestion] ? "Hide Summary" : "Show Summary"}
      </button>

      {showTextStates[currentQuestion] && (
        <div className="mt-2 p-3 border rounded bg-white dark:bg-gray-900 
        text-gray-800 dark:text-gray-200 text-lg">
          <p className="font-semibold mb-2 text-blue-700">Summary Response:</p>
          <p>{q.text}</p>
        </div>
      )}

      {pronDetail && (
        <div
          className="mt-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg 
          text-left text-lg font-semibold"
          dangerouslySetInnerHTML={{ __html: pronDetail }}
        />
      )}

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
              {res.url_audio && <audio controls src={res.url_audio} className="mt-1 w-full" />}
            </div>
          ))}
      </div>
    </div>
  );
};

export default SummarizeComponent;
