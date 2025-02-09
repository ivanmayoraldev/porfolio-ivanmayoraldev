"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function HomePage() {
  const texts = ["Full-Stack Web Developer", "VFX & GFX Creative"];
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const speed = 100;
  const eraseSpeed = 50;
  const delay = 2000;

  useEffect(() => {
    const currentText = texts[textIndex] || ""; // Evitar "undefined"
    
    if (!isDeleting && charIndex === currentText.length) {
      setTimeout(() => setIsDeleting(true), delay);
      return;
    }
    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    const timeout = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? eraseSpeed : speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {/* Título gigante */}
      <h1 className="text-9xl md:text-10xl font-bold mb-8 text-white-600">Iván Mayoral</h1>

      {/* Subtítulo dinámico con efecto de escritura */}
      <h2 className="text-4xl md:text-6xl font-medium mb-16 border-r-4 border-white pr-2 text-yellow-600">
        {texts[textIndex]?.substring(0, charIndex) || ""}
      </h2>

      {/* Botones */}
      <div className="flex gap-4">
        <Link
          href="/web"
          className="px-8 py-4 text-lg font-semibold rounded-md border-2 transition-colors 
            border-blue-500 bg-black text-white hover:bg-blue-500 hover:text-black"
        >
          Porfolio
        </Link>

        <a
          href="/cv.pdf"
          download
          className="px-8 py-4 text-lg font-semibold rounded-md border-2 transition-colors 
            border-yellow-500 bg-black text-white hover:bg-yellow-500 hover:text-black"
        >
          Descargar CV
        </a>
      </div>
    </div>
  );
}
