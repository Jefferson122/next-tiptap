"use client";

interface NotesSidebarProps {
  notes: any[];
  onSelect: (note: any) => void;
  onUpdateTitle: (id: number, newTitle: string) => void;
}

export default function NotesSidebar({ notes, onSelect, onUpdateTitle }: NotesSidebarProps) {
  return (
    <div className="border-l bg-gray-50 dark:bg-[#0d1017] px-4 py-3 rounded flex flex-col gap-3">
      <h3 className="font-bold text-lg mb-2 text-center">📂 Daily Notes</h3>
      <ul className="space-y-2 flex-1 overflow-y-auto max-h-60">
        {notes.map((note) => (
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
