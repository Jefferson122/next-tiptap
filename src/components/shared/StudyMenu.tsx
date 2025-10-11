"use client";
import React, { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import DATA_SECTIONS from "../../../../ProjectoNew/data";

type SectionKey = keyof typeof DATA_SECTIONS;
type TaskEntry = { name: string; timePerQ: number; instructions: string };

function shuffle<T>(arr: T[]) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const SECTIONS: Record<SectionKey, TaskEntry[]> = {
  Speaking: [
    { name: "Read Aloud", timePerQ: 90, instructions: "Read the text aloud clearly." },
    { name: "Repeat Sentence", timePerQ: 40, instructions: "Listen and repeat the sentence exactly." },
    { name: "Describe Image", timePerQ: 60, instructions: "Describe the image in detail using full sentences." },
  ],
  Writing: [
    { name: "Essay", timePerQ: 1200, instructions: "Write a structured essay about the prompt." },
    { name: "Summarize Written Text", timePerQ: 600, instructions: "Summarize the text in 1–2 sentences." },
  ],
  Reading: [
    { name: "Fill in the Blanks", timePerQ: 120, instructions: "Complete the missing words." },
  ],
  Listening: [
    { name: "Summarize Spoken Text", timePerQ: 600, instructions: "Summarize the spoken text in writing." },
    { name: "Write from Dictation", timePerQ: 60, instructions: "Write exactly what you hear from the dictation." },
  ],
};

const COMPONENTS: Record<string, any> = {
  Speaking: {
    "Read Aloud": dynamic(() => import("../../../../ProjectoNew/components/Speaking/ReadAloud"), { ssr: false }),
    "Repeat Sentence": dynamic(() => import("../../../../ProjectoNew/components/Speaking/RepeatSentence"), { ssr: false }),
  },
  Writing: {
    Essay: dynamic(() => import("../../../../ProjectoNew/components/Writing/Essay"), { ssr: false }),
  },
};

interface Exercise {
  id?: string;
  text?: string;
  prompt?: string;
  audio?: string;
}

export default function StudyMenu() {
  const [activeSection, setActiveSection] = useState<SectionKey>("Speaking");

  const initialCounts = useMemo(() => {
    const pairs: Record<string, number> = {};
    (Object.keys(SECTIONS) as SectionKey[]).forEach((sec) => {
      SECTIONS[sec].forEach((t) => (pairs[`${sec}-${t.name}`] = 0));
    });
    return pairs;
  }, []);

  const [counts, setCounts] = useState<Record<string, number>>(initialCounts);
  const [generated, setGenerated] = useState<
    { section: SectionKey; taskName: string; Component: any; items: Exercise[] }[]
  >([]);

  const handleChange = (key: string, value: string) => {
    const n = Math.max(0, parseInt(value || "0", 10) || 0);
    setCounts((s) => ({ ...s, [key]: n }));
  };

  const handleGenerate = () => {
    const list: typeof generated = [];
    (Object.keys(counts) as string[]).forEach((key) => {
      const count = counts[key];
      if (!count) return;
      const [sec, ...rest] = key.split("-");
      const taskName = rest.join("-");
      if (!SECTIONS[sec as SectionKey]?.find((t) => t.name === taskName)) return;

      const dataSection = (DATA_SECTIONS as any)[sec as SectionKey] || {};
      const dataKey = taskName.replace(/\s+/g, "").replace(/[,()]/g, "");
      const dataset =
        (dataSection as any)[dataKey] ||
        (dataSection as any)[taskName] ||
        (Object.keys(dataSection).length ? Object.values(dataSection).flat() : []);

      const chosen = shuffle(Array.isArray(dataset) ? dataset : []).slice(0, count);
      const Comp = COMPONENTS[sec] && COMPONENTS[sec][taskName];
      if (!Comp) return;
      list.push({ section: sec as SectionKey, taskName, Component: Comp, items: chosen });
    });

    setGenerated(list);
    setTimeout(() => {
      document.getElementById("results")?.scrollIntoView({ behavior: "smooth" });
    }, 60);
  };

  const totalSeconds = Object.entries(counts).reduce((acc, [, v]) => acc + v * 40, 0);
  const formatTime = (s: number) => `${Math.floor(s / 60)}m : ${s % 60}s`;

  return (
    <div className="flex justify-center w-full mt-10 px-4">
      {/* Contenedor centrado */}
      <div className="w-full max-w-3xl bg-white dark:bg-[#0b1020] rounded-3xl shadow-2xl p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-100 dark:from-[#10172a] dark:to-[#0b1020] opacity-60 rounded-3xl -z-10" />

        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          📘 Study Planner (PTE + Dictation)
        </h1>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {(Object.keys(SECTIONS) as SectionKey[]).map((sec) => (
            <button
              key={sec}
              onClick={() => setActiveSection(sec)}
              className={`px-5 py-2 rounded-full font-semibold transition ${
                activeSection === sec
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 dark:bg-[#1b233a] text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#2a3354]"
              }`}
            >
              {sec}
            </button>
          ))}
        </div>

        {/* Tasks */}
        <div className="space-y-3 mb-8">
          {SECTIONS[activeSection].map((task) => {
            const key = `${activeSection}-${task.name}`;
            return (
              <div
                key={key}
                className="flex flex-col md:flex-row items-center justify-between p-4 bg-gray-50 dark:bg-[#141b30] rounded-xl shadow-sm hover:shadow-md transition"
              >
                <div className="text-center md:text-left mb-2 md:mb-0">
                  <div className="font-medium text-gray-800 dark:text-gray-200">{task.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{task.instructions}</div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={0}
                    value={counts[key]}
                    onChange={(e) => handleChange(key, e.target.value)}
                    className="w-20 p-2 border rounded-lg text-center bg-white dark:bg-[#0b1020] dark:border-gray-700"
                  />
                  <div className="text-sm text-gray-500 dark:text-gray-400">{task.timePerQ}s / q</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary */}
        <div className="p-5 bg-blue-50 dark:bg-[#141b30] rounded-2xl mb-6 flex flex-col md:flex-row items-center justify-between shadow-inner gap-4">
          <div className="text-center md:text-left">
            <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">🕓 Estimated total time</div>
            <div className="text-xl font-bold text-gray-900 dark:text-white">{formatTime(totalSeconds)}</div>
          </div>
          <div className="flex gap-3">
            <button
              onClick={handleGenerate}
              className="px-5 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
            >
              Generate
            </button>
            <button
              onClick={() => {
                setCounts(initialCounts);
                setGenerated([]);
              }}
              className="px-5 py-2 bg-gray-200 dark:bg-[#1b233a] text-gray-800 dark:text-gray-200 rounded-xl hover:bg-gray-300 dark:hover:bg-[#2a3354] transition"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Results */}
        <div id="results" className="space-y-6">
          {generated.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-400">
              ⚠️ No exercises generated yet.
            </p>
          ) : (
            generated.map((g, i) => {
              const C = g.Component;
              return (
                <div
                  key={`${g.section}-${g.taskName}-${i}`}
                  className="p-5 border dark:border-gray-700 rounded-2xl bg-white dark:bg-[#0f162b] shadow-md"
                >
                  <h3 className="font-semibold text-lg mb-3 text-gray-800 dark:text-gray-200">
                    {g.section} — {g.taskName}
                  </h3>
                  <C data={g.items} />
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
