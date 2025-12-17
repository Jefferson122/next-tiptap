import React from "react";

interface RetellLectureProps {
  q: any;
  allResults: any[][];
  currentQuestion: number;
  recording: boolean;
  handleStartClick: () => void;
  stopRecording: () => void;
  showTextStates: boolean[];
  toggleShowText: (index: number) => void;
  alignmentVisible: boolean;
  setAlignmentVisible: React.Dispatch<React.SetStateAction<boolean>>;
  pronDetail: string;
}

const RetellLectureComponent: React.FC<RetellLectureProps> = ({
  q,
  allResults,
  currentQuestion,
  recording,
  handleStartClick,
  stopRecording,
  showTextStates,
  toggleShowText,
  alignmentVisible,
  setAlignmentVisible,
  pronDetail,
}) => {
  return (
    <div className="mb-4 p-4 border rounded bg-gray-50 dark:bg-gray-800">
      <p className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
        Listen carefully and retell the lecture.
      </p>

      <p className="text-red-600 font-semibold mb-2">
        🎧 Listen and retell the lecture
      </p>

      <p className="text-blue-700 font-semibold mb-2">
        Question {currentQuestion + 1}:
      </p>

      <audio controls src={q.audio} className="w-full mb-2" />

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
              {res.url_visual && <img src={res.url_visual} alt="Fluency Graph" className="mt-2 max-h-40" />}
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
};

export default RetellLectureComponent;
