"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    // Redirige automáticamente a /post-csr cuando se carga la página principal
    router.push("/post-csr");
  }, [router]);

  return (
    <div className="loading-screen">
      <p>Cargando...</p>
    </div>
  );
}
