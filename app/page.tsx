"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Main from "@/components/main";
import Header from "@/components/header";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Projects from "@/components/projects";

export default function HomePage() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}
