import React from "react";

interface DescribeImageProps {
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

const DescribeImageComponent: React.FC<DescribeImageProps> = ({
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
    <div className="text-center mb-4 p-4 border rounded bg-gray-50 dark:bg-gray-800">
      <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100">
        Describe the following image as best as possible:
      </h3>

      <img
        src={q.image}
        alt="Describe this"
        className="mx-auto max-h-80 rounded-lg shadow mb-4"
      />

      <button
        onClick={() => toggleShowText(currentQuestion)}
        className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition mb-3"
      >
        {showTextStates[currentQuestion] ? "Hide Answer" : "Show Answer"}
      </button>

      {showTextStates[currentQuestion] && (
        <div className="mt-2 mb-3 p-3 border rounded-lg bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 text-lg text-left max-w-3xl mx-auto">
          {q.text}
        </div>
      )}

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

              {res.url_audio && <audio controls src={res.url_audio} className="mt-1 w-full" />}
              {res.url_visual && <img src={res.url_visual} alt="Pronunciation Graph" className="mt-2 max-h-40" />}
            </div>
          ))}
      </div>

      {pronDetail && (
        <div
          className="mt-4 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg text-left"
          dangerouslySetInnerHTML={{ __html: pronDetail }}
        />
      )}
    </div>
  );
};

export default DescribeImageComponent;
