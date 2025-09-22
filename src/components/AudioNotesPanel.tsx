"use client";
import { useState } from "react";
import TiptapEditor from "@/components/TiptapEditor";
import AudioPractice from "@/components/shared/AudioPractice";

// Sidebar de notas
function NotesSidebar({ notes, onSelect, onUpdateTitle }: any) {
  return (
    <div className="border-l bg-gray-50 dark:bg-[#0d1017] px-4 py-3 rounded flex flex-col gap-3">
      <h3 className="font-bold text-lg mb-2 text-center">📂 Daily Notes</h3>
      <ul className="space-y-2 flex-1 overflow-y-auto max-h-60">
        {notes.map((note: any) => (
          <li key={note.id} className="flex flex-col gap-1">
            <input
              type="text"
              value={note.title}
              onChange={(e) => onUpdateTitle(note.id, e.target.value)}
              className="w-full px-2 py-1 rounded border border-gray-300 dark:border-gray-700"
            />
            <button
              onClick={() => onSelect(note)}
              className="w-full text-left hover:bg-gray-200 dark:hover:bg-gray-800 px-2 py-1 rounded"
            >
              {note.date}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AudioNotesPanel() {
  const [notes, setNotes] = useState<any[]>([]);
  const [currentNote, setCurrentNote] = useState<any>(null);
  const [editorContent, setEditorContent] = useState("<p></p>");

  const handleUpdateTitle = (id: number, newTitle: string) => {
    setNotes(notes.map((n) => (n.id === id ? { ...n, title: newTitle } : n)));
  };

  const handleAddNote = () => {
    const newNote = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      title: "Nueva nota",
    };
    setNotes([...notes, newNote]);
  };

  return (
    <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-6 my-6 items-start">
      {/* Columna izquierda: Audio centrado */}
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-lg">
          <AudioPractice />
        </div>
      </div>

      {/* Columna derecha: Editor + Notas */}
      <div className="w-full max-w-md flex flex-col gap-4">
        <h2 className="text-xl font-semibold mb-3 text-center">📝 Mis notas de Speaking</h2>
        <TiptapEditor
          initialContent={editorContent}
          output="html"
          onContentChange={(newContent) => setEditorContent(newContent)}
          contentMinHeight={200}
          contentMaxHeight={400}
        />

        <NotesSidebar
          notes={notes}
          onSelect={(note: any) => setCurrentNote(note)}
          onUpdateTitle={handleUpdateTitle}
        />

        <button
          className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          onClick={handleAddNote}
        >
          ➕ Agregar nueva nota
        </button>
      </div>
    </div>
  );
}
