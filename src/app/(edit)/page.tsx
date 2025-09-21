"use client";

import EditForm from "./_components/EditForm";
import "./style.scss";

export default function EditPage() {
  return (
    <div className="max-w-[56rem] w-full mx-auto py-10 px-6">
      {/* Mensaje que siempre aparece */}
      <div className="mb-6 p-4 bg-blue-100 text-blue-800 rounded">
        Bienvenido a mi sitio web de pronunciación.
      </div>

      {/* Formulario principal */}
      <EditForm />

    </div>
  );
}
