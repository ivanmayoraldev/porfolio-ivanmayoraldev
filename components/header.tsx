import { ArrowUpRight, MapPin, Sparkle } from "lucide-react";
import Image from "next/image";
import Card from "@/components/card";
import SocialLinks from "@/components/social-links";

const porfData = {
  img: "/logo-web.png",
  workUrl: "https://www.linkedin.com/in/iv%C3%A1n-mayoral-8288a1331/",
  workLabel: "Open To Work",
  technologies: [
    "HTML",
    "Astro",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "PHP",
    "Laravel",
    "Sass",
    "Tailwind CSS",
    "MySQL",
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

export default function Header() {
  return (
    <div className="flex items-center justify-between w-full gap-4 p-4 sm:p-8 text-sm font-medium text-white-500 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
      <div className="flex-shrink-0 flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-base sm:text-xl font-medium text-white-600 opacity-100">
        <span className="flex size-2 items-center">
          <span className="absolute inline-flex size-1.5 animate-ping rounded-xl bg-green-600 dark:bg-green-300"></span>
          <span className="relative inline-flex size-1.5 rounded-xl bg-green-600 dark:bg-green-300"></span>
        </span>
        {porfData.workLabel}
      </div>

      <div className="flex-grow overflow-hidden">
        <Card>
          <div className="inline-flex w-full flex-nowrap overflow-hidden text-sm font-medium text-white-500 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <ul className="flex animate-infinite-scroll items-center justify-center">
              {porfData.technologies.map((tech) => (
                <li key={tech} className="flex items-center">
                  <Sparkle className="mx-2 sm:mx-4 size-3" />
                  <span className="text-xs sm:text-sm">{tech}</span>
                </li>
              ))}
            </ul>
            <ul className="flex animate-infinite-scroll items-center justify-center">
              {porfData.technologies.map((tech) => (
                <li key={tech} className="flex items-center">
                  <Sparkle className="mx-2 sm:mx-4 size-3" />
                  <span className="text-xs sm:text-sm">{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>
    </div>
  );
}