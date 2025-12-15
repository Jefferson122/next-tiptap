import React, { useState } from "react";

interface ReadAloudProps {
  q: any; // tu tipo Exercise
  allResults: any[][];
  currentQuestion: number;
  recording: boolean;
  setAlignmentVisible: React.Dispatch<React.SetStateAction<boolean>>;
  alignmentVisible: boolean;
  pronDetail: string;
  handleStartClick: () => void;
  stopRecording: () => void;
}

const ReadAloudComponent: React.FC<ReadAloudProps> = ({
  q,
  allResults,
  currentQuestion,
  recording,
  setAlignmentVisible,
  alignmentVisible,
  pronDetail,
  handleStartClick,
  stopRecording
}) => {
  return (
    <div className="mb-4 p-4 border border-gray-200 dark:border-gray-700 rounded bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200 break-words">
      <p className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
        Read aloud fluency with good pronunciation for get a good score.
      </p>
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
        <h3 className="font-semibold text-gray-800 dark:text-gray-200">Results:</h3>
        {(allResults[currentQuestion] || [])
          .slice()
          .reverse()
          .map((res, i) => (
            <div key={i} className="mt-2 p-2 border rounded bg-white dark:bg-gray-800">
              <p>Global Score: {res.global_score}</p>
              <p>
                Content: {res.content_score}, Pronunciation: {res.pronunciation_score}, Fluency: {res.fluency_score}
              </p>
              {res.url_audio && <audio controls src={res.url_audio} className="mt-1 w-full" />}
              {res.url_feedback_audio && <audio controls src={res.url_feedback_audio} className="mt-1 w-full" />}
              {res.url_visual && <img src={res.url_visual} alt="Fluency Graph" className="mt-1 max-h-40" />}
              {res.feedback_text && (
                <div className="mt-2 p-2 bg-gray-100 dark:bg-gray-900 rounded">
                  {res.feedback_text.split("\n").map((line: string, idx: number) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>
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
};

export default ReadAloudComponent;
