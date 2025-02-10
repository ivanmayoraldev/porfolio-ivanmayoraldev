import { ArrowUpRight, MapPin, Sparkle } from "lucide-react";
import Image from "next/image";
import Card from "@/components/card";
import SocialLinks from "@/components/social-links";

const porfData = {
  img: "/logo-web.png",
  workUrl: "https://www.linkedin.com/in/ivan-mayoral/",
  workLabel: "Full-Stack Web Developer | VFX & GFX Creative",
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

export default function Header() {
  return (
    <header>
      <Card>
        {/* Slider de tecnologías */}
        <div className="inline-flex w-full flex-nowrap overflow-hidden text-sm font-medium text-neutral-500 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] dark:text-neutral-400">
          <ul className="flex animate-infinite-scroll items-center justify-center">
            {porfData.technologies.map((tech) => (
              <li key={tech} className="flex items-center">
                <Sparkle className="mx-4 size-3" />
                {tech}
              </li>
            ))}
          </ul>
          <ul className="flex animate-infinite-scroll items-center justify-center">
            {porfData.technologies.map((tech) => (
              <li key={tech} className="flex items-center">
                <Sparkle className="mx-4 size-3" />
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </header>
  );
}