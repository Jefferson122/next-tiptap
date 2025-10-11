"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";

import PostHeader from "../../components/shared/PostHeader";
import PostToc from "../../components/shared/PostToc";
import PostContent from "../../components/shared/PostContent";
import PostSharing from "../../components/shared/PostSharing";
import PostReadingProgress from "../../components/shared/PostReadingProgress";
import TiptapRenderer from "@/components/TiptapRenderer/ClientRenderer";
import TiptapEditor from "@/components/TiptapEditor"; 
import { getPost } from "@/services/post";
import AudioPractice from "@/components/shared/AudioPractice";
import WritingPractice from "@/components/shared/Writing";
import StudyMenu from "@/components/shared/StudyMenu1";

// Sidebar con nombres editables
function NotesSidebar({ notes, currentNote, onSelect, onDelete, onRename }: any) {
  return (
    <div className="border-l bg-gray-50 dark:bg-[#0d1017] px-4 py-3 rounded flex flex-col gap-3">
      <h3 className="font-bold text-lg mb-2 text-center">📂 Daily Notes</h3>
      <ul className="space-y-2 flex-1 overflow-y-auto max-h-60">
        {notes.map((note: any) => (
          <li key={note.id} className="flex items-center gap-2">
            <button
              onClick={() => onSelect(note)}
              className={`flex-1 text-left px-2 py-1 rounded ${
                currentNote?.id === note.id
                  ? "bg-blue-200 dark:bg-blue-800"
                  : "hover:bg-gray-200 dark:hover:bg-gray-800"
              }`}
            >
              <span className="font-semibold">{note.title}</span>{" "}
              <span className="text-xs text-gray-500">({note.date})</span>
            </button>
            <button
              onClick={() => {
                const newTitle = prompt("Nuevo nombre de la nota:", note.title);
                if (newTitle) onRename(note.id, newTitle);
              }}
              className="text-yellow-600 hover:text-yellow-800"
              title="Renombrar nota"
            >
              ✏️
            </button>
            <button
              onClick={() => onDelete(note.id)}
              className="text-red-500 hover:text-red-700"
              title="Eliminar nota"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function PostPage() {
  const [post, setPost] = useState<any>(null);
  const [notes, setNotes] = useState<any[]>([]);
  const [currentNote, setCurrentNote] = useState<any>(null);

  const readingTime = useMemo(() => {
    const wpm = 150;
    return Math.ceil(post?.wordCount / wpm);
  }, [post]);

  // 1. Cargar notas desde localStorage al montar
  useEffect(() => {
    const savedNotes = localStorage.getItem("dailyNotes");
    if (savedNotes) {
      const parsed = JSON.parse(savedNotes);
      setNotes(parsed);
      if (parsed.length > 0) setCurrentNote(parsed[0]);
    }
  }, []);

  // 2. Guardar notas en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem("dailyNotes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    getPost().then((data) => {
      setPost(data);
    });
  }, []);

  const handleDeleteNote = (id: number) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    if (currentNote?.id === id) {
      setCurrentNote(updatedNotes[0] || null);
    }
  };

  const handleRenameNote = (id: number, newTitle: string) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, title: newTitle } : note
      )
    );
  };

  if (!post) return null;

  return (
    <article className="py-10 px-6 flex flex-col items-center">
      {/* Mensaje inicial */}
      <div className="w-full max-w-3xl mb-6 p-4 bg-blue-100 text-blue-800 rounded text-center">
        🔔 Bienvenido a mi sitio de pronunciación – ¡aprende y practica todos los días!
      </div>
      {/* Menú de estudio interactivo */}
      <div className="w-full max-w-4xl mx-auto">
        <StudyMenu />
      </div>



      {/* Sección Audio + Editor lado derecho */}
      <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-6 my-6 items-start">
        <div className="flex-1 flex justify-center">
          <div className="w-full max-w-lg">
            <WritingPractice />
          </div>
        </div>

        {/* Columna derecha: Editor + Notas */}
        <div className="w-full max-w-md flex flex-col gap-4">
          <h2 className="text-xl font-semibold mb-3 text-center">Block de Notas</h2>

          {/* Editor ligado a la nota actual */}
          {currentNote ? (
            <TiptapEditor
              key={currentNote.id}
              initialContent={currentNote.content || "<p></p>"}
              output="html"
              onContentChange={(newContent) => {
                setNotes((prevNotes) =>
                  prevNotes.map((note) =>
                    note.id === currentNote.id ? { ...note, content: newContent } : note
                  )
                );
              }}
              contentMinHeight={200}
              contentMaxHeight={400}
            />
          ) : (
            <p className="text-gray-500 text-center">Selecciona o crea una nota para empezar ✍️</p>
          )}

          {/* Sidebar de notas */}
          <NotesSidebar
            notes={notes}
            currentNote={currentNote}
            onSelect={(note: any) => setCurrentNote(note)}
            onDelete={handleDeleteNote}
            onRename={handleRenameNote}
          />

          {/* Botón para agregar nueva nota */}
          <button
            className="mt-2 w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => {
              const newNote = {
                id: Date.now(),
                date: new Date().toLocaleDateString(),
                title: `Nota ${notes.length + 1}`, // nombre inicial editable
                content: "<p></p>",
              };
              setNotes([...notes, newNote]);
              setCurrentNote(newNote);
            }}
          >
            ➕ Agregar nueva nota
          </button>
        </div>
      </div>

      <PostReadingProgress />
      <PostHeader
        title={post.title}
        author={post.author}
        createdAt={post.createdAt}
        readingTime={readingTime}
        cover={post.cover}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(auto,256px)_minmax(720px,1fr)_minmax(auto,256px)] gap-6 lg:gap-8 w-full">
        <PostSharing />
        <PostContent>
          <TiptapRenderer>{post.content}</TiptapRenderer>
        </PostContent>
        <PostToc />
      </div>

      {/* Mensaje final */}
      <div className="w-full max-w-3xl mt-10 p-4 bg-green-100 text-green-800 rounded text-center">
        ✅ Gracias por leer este post. ¡No olvides practicar la pronunciación hoy!
      </div>

      <Image
        src="/doraemon.png"
        width={350}
        height={350}
        alt="Doraemon"
        className="mx-auto mt-20"
      />
    </article>
  );
}
