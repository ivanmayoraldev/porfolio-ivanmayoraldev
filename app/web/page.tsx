"use client";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Reemplazamos useRouter con usePathname
import { ArrowLeft, ArrowRight } from "lucide-react";

import Header from "@/components/web/header";
import Experience from "@/components/web/experience";
import Education from "@/components/web/education";
import Footer from "@/components/web/footer";

export default function WebPage() {
  const pathname = usePathname(); // Obtenemos la ruta actual

  return (
    <div className="space-y-10">
      <nav className="flex flex-col gap-4 md:flex-row">
          <Link
            href="/vfx"
            className="px-8 py-4 text-lg font-semibold rounded-md border-2 transition-colors 
              border-green-500 bg-black hover:bg-green-500 hover:text-black"
          >
            Go To VFX - GFX
          </Link>
        </nav>
      {/* Contenido de la página */}
      <div className="my-10">
        <Header />
      </div>
      <div className="my-10">
        <Experience />
      </div>
      <div className="my-10">
        <Education/>
      </div>
      <div className="my-10">
        <Footer />
      </div>
    </div>
  );
}