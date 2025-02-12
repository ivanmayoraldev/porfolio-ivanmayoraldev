// use client;
import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowUpRight, MapPin, Sparkle } from "lucide-react";
import Image from "next/image";
import Card from "@/components/card";
import SocialLinks from "@/components/social-links";
import Header from "@/components/header";
import { Fade } from "react-awesome-reveal";

const porfData = {
  img: "/logo-web.png",
  workUrl: "https://www.linkedin.com/in/iv%C3%A1n-mayoral-8288a1331/",
  workLabel: "Looking for Proyects",
  name: "Iván Mayoral",
  description: "Full-Stack Web Developer | VFX & GFX Creative",
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
    <div className="flex flex-col items-center justify-center w-full text-sm font-medium text-neutral-500 dark:text-neutral-400 my-7">
      <h1 className="text-6xl sm:text-7xl md:text-9xl lg:text-10xl font-bold mb-4 text-white-600 text-center">
        {porfData.name}
      </h1>

      <div
        className="relative w-max h-[40px] sm:h-[50px] md:h-[60px] lg:h-[80px] text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-medium border-r-1 border-white pr-2 text-yellow-600 text-center"
        style={{ lineHeight: "40px", whiteSpace: "nowrap" }}
      >
        <span>{texts[textIndex]?.substring(0, charIndex)}</span>
        <span
          className="inline-block ml-1 animate-blink"
          style={{ width: "4px", height: "40%", backgroundColor: "white" }}
        ></span>
      </div>
    </div>
  );
}