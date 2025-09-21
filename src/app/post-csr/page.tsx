"use client";

import { useState, useEffect, useMemo } from "react";
import Image from "next/image";

import PostHeader from "../../components/shared/PostHeader";
import PostToc from "../../components/shared/PostToc";
import PostContent from "../../components/shared/PostContent";
import PostSharing from "../../components/shared/PostSharing";
import PostReadingProgress from "../../components/shared/PostReadingProgress";
import TiptapRenderer from "@/components/TiptapRenderer/ClientRenderer";

import { getPost } from "@/services/post";
import AudioPractice from "@/components/shared/AudioPractice"; // <-- import modular

export default function PostPage() {
  const [post, setPost] = useState<any>(null);

  const readingTime = useMemo(() => {
    const wpm = 150;
    return Math.ceil(post?.wordCount / wpm);
  }, [post]);

  useEffect(() => {
    getPost().then(setPost);
  }, []);

  if (!post) return null;

  return (
    <article className="py-10 px-6 flex flex-col items-center">
      {/* Mensaje inicial */}
      <div className="w-full max-w-3xl mb-6 p-4 bg-blue-100 text-blue-800 rounded text-center">
        🔔 Bienvenido a mi sitio de pronunciación – ¡aprende y practica todos los días!
      </div>

      {/* Componente modular de audio practice */}
      <AudioPractice />

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
