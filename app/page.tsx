"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

import Main from "@/components/main";
import Header from "@/components/header";
import About from "@/components/about";
import Education from "@/components/education";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Education />
    </>
  );
}
