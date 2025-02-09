"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

import Header from "@/components/vfx/header";
import Experience from "@/components/vfx/experience";
import Education from "@/components/vfx/education";
import Footer from "@/components/vfx/footer";

export default function VfxPage() {
  const pathname = usePathname(); // Obtenemos la ruta actual

  return (
    <div className="space-y-10">
      <nav className="flex flex-col gap-4 md:flex-row">
          <Link
            href="/web"
            className="px-8 py-4 text-lg font-semibold rounded-md border-2 transition-colors 
              border-blue-500 bg-black hover:bg-blue-500 hover:text-black"
          >
            Go To WEB
          </Link>
        </nav>
      <div className="my-10">
        <Header />
      </div>
      <div className="my-10">
        <Experience />
      </div>
      <div className="my-10">
        <Education />
      </div>
      <div className="my-10">
        <Footer />
      </div>
    </div>
  );
}