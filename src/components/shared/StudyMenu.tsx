"use client";
import { useState } from "react";

export default function StudyMenu() {
  const sections = {
    Speaking: [
      { name: "Read Aloud", timePerQ: 90 },
      { name: "Repeat Sentence", timePerQ: 40 },
      { name: "Describe Image", timePerQ: 60 },
      { name: "Retell Lecture", timePerQ: 90 },
      { name: "Answer Short Question", timePerQ: 15 },
    ],
    Writing: [
      { name: "Summarize Written Text", timePerQ: 600 },
      { name: "Essay", timePerQ: 1200 },
    ],
    Reading: [
      { name: "Fill in the Blanks (RW)", timePerQ: 120 },
      { name: "Multiple Choice, Multiple Answer", timePerQ: 120 },
      { name: "Re-order Paragraphs", timePerQ: 150 },
      { name: "Fill in the Blanks", timePerQ: 120 },
      { name: "Multiple Choice, Single Answer", timePerQ: 90 },
    ],
    Listening: [
      { name: "Summarize Spoken Text", timePerQ: 600 },
      { name: "Multiple Choice, Multiple Answer", timePerQ: 120 },
      { name: "Fill in the Blanks", timePerQ: 150 },
      { name: "Highlight Correct Summary", timePerQ: 120 },
      { name: "Select Missing Word", timePerQ: 90 },
      { name: "Write from Dictation", timePerQ: 60 },
    ],
  };

  const [activeSection, setActiveSection] =
    useState<keyof typeof sections>("Speaking");

  const [counts, setCounts] = useState(
    Object.fromEntries(
      Object.entries(sections).flatMap(([section, tasks]) =>
        tasks.map((task) => [`${section}-${task.name}`, 0])
      )
    )
  );

  const handleChange = (key: string, value: string) => {
    // Eliminamos ceros a la izquierda antes de guardar
    const cleanValue = parseInt(value.replace(/^0+/, ""), 10) || 0;
    setCounts({ ...counts, [key]: cleanValue });
  };

  const totalTime = Object.entries(counts).reduce((acc, [key, count]) => {
    const [section, taskName] = key.split("-");
    const task = sections[section as keyof typeof sections].find(
      (t) => t.name === taskName
    );
    return acc + (count as number) * (task?.timePerQ || 0);
  }, 0);

  const formatTime = (secs: number) => {
    const hours = Math.floor(secs / 3600);
    const minutes = Math.floor((secs % 3600) / 60);
    const seconds = secs % 60;

    if (hours > 0) {
      return `${hours}h ${minutes}m${seconds > 0 ? ` ${seconds}s` : ""}`;
    } else {
      return `${minutes}m ${seconds}s`;
    }
  };

  const icons: Record<string, JSX.Element> = {
    Speaking: <span className="inline-block mr-1">🎤</span>,
    Writing: <span className="inline-block mr-1">✍️</span>,
    Reading: <span className="inline-block mr-1">📖</span>,
    Listening: <span className="inline-block mr-1">🎧</span>,
  };

  return (
    <div className="mt-6 bg-white dark:bg-[#1e1e2f] rounded-2xl shadow-xl p-6 sm:p-8 max-w-full sm:max-w-7xl mx-auto border border-gray-100 dark:border-gray-700">
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
        📊 Study Planner (PTE)
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
        {Object.keys(sections).map((sec) => (
          <button
            key={sec}
            onClick={() => setActiveSection(sec as keyof typeof sections)}
            className={`px-3 sm:px-5 py-1.5 sm:py-2 rounded-xl font-semibold flex items-center gap-1 sm:gap-2 transition-all duration-200 text-sm sm:text-base ${
              activeSection === sec
                ? "bg-blue-600 text-white shadow-md scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
            }`}
          >
            {icons[sec]} {sec}
          </button>
        ))}
      </div>

      {/* Active Section */}
      <div className="space-y-3 sm:space-y-4">
        {sections[activeSection].map((task) => {
          const key = `${activeSection}-${task.name}`;
          return (
            <div
              key={key}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            >
              <span className="font-medium text-gray-700 dark:text-gray-200 mb-1 sm:mb-0">
                {task.name}
              </span>
              <div className="flex items-center gap-2 sm:gap-3">
                <input
                  type="number"
                  min="0"
                  className="w-28 sm:w-32 border rounded-lg px-2 py-1 text-center shadow-sm focus:ring-2 focus:ring-blue-400 outline-none dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
                  value={counts[key]}
                  onChange={(e) => handleChange(key, e.target.value)}
                />
                <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-300">
                  {task.timePerQ}s / pregunta
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Total */}
      <div className="mt-6 sm:mt-8 p-4 sm:p-5 bg-blue-50 dark:bg-blue-900 rounded-xl text-center border border-blue-100 dark:border-blue-700">
        <p className="text-sm sm:text-lg font-semibold text-gray-700 dark:text-gray-200">
          ⏳ Tiempo total estimado:
        </p>
        <p className="text-2xl sm:text-3xl font-bold text-blue-700 dark:text-blue-300 mt-1 sm:mt-2">
          {formatTime(totalTime)}
        </p>
      </div>
    </div>
  );
}
