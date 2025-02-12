"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

import Main from "@/components/main";
import Header from "@/components/header";
import About from "@/components/about";
import Education from "@/components/education";
import Footer from "@/components/footer";
import Projects from "@/components/projects";

export default function HomePage() {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Projects />
      <Education />
    </>
  );
}
