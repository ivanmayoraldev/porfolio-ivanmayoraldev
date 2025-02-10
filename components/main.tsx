"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowUpRight, MapPin, Sparkle } from "lucide-react";
import Image from "next/image";
import Card from "@/components/card";
import SocialLinks from "@/components/social-links";
import Header from "@/components/header";
const porfData = {
    img: "/logo-web.png",
    workUrl: "https://www.linkedin.com/in/ivan-mayoral/",
    workLabel: "Looking for Proyects",
    name: "Iván Mayoral",
    description:
      "Full-Stack Web Developer | VFX & GFX Creative",
    location: "Madrid, España",
    contactEmail: "ivanmayoral.dev@gmail.com",
    technologies: [
      "Premiere Pro",
      "After Effects",
      "Avid",
      "Davinci Resolve",
      "Cinema 4D",
      "Adobe Photoshop",
      "Adobe Indesign",
      "Adobe Illustrator",
      "Figma",
      "Canva",
    ],
  };

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
    <div className="flex flex-col items-center justify-center inline-flex w-full flex-nowrap overflow-hidden text-sm font-medium text-neutral-500 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] dark:text-neutral-400">
      <div className="flex flex-wrap items-center justify-between">
        <a
            href={porfData.workUrl}
            className="flex items-center gap-1.5 rounded-xl bg-green-700/20 my-7 px-3 py-1.5 text-xl font-medium text-green-600 opacity-80 transition-opacity duration-150 hover:opacity-100 dark:bg-green-800/40 dark:text-green-200"
            target="_blank"
            aria-label="Link to Linkedin profile"
        >
            <span className="flex size-2 items-center">
            <span className="absolute inline-flex size-1.5 animate-ping rounded-xl bg-green-600 dark:bg-green-300"></span>
            <span className="relative inline-flex size-1.5 rounded-xl bg-green-600 dark:bg-green-300"></span>
            </span>
            {porfData.workLabel}
        </a>
        </div>
      <h1 className="text-9xl md:text-10xl font-bold mb-8 text-white-600">{porfData.name}</h1>

      <h2 className="text-4xl md:text-6xl font-medium mb-16 border-r-4 border-white pr-2 text-yellow-600">
        {texts[textIndex]?.substring(0, charIndex) || ""}
      </h2>
    </div>
  );
}