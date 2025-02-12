import { Github, LibraryBig, MoveRight, ScreenShare } from "lucide-react";
import Image from "next/image";
import Card from "@/components/card";

export default function Projects() {
  const manualProjects = [
    {
      title: "Netflix Clone (working on)",
      description:
        "A Netflix clone developed in Interface Design, focusing on enhancing functional design with Figma and collaborative teamwork.",
      technologies: ["JavaScript", "TypeScript", "SCSS", "Figma"],
      img: "DawFlix.png",
      githubLink: "https://github.com/ivanmayoraldev/dawflix",
      previewLink: "https://project1-example.com",
    },
    {
      title: "Art Us (working on)",
      description:
        "Art Us is a global platform for artists to share, collaborate, monetize, and innovate, creating an inclusive and collaborative artistic community.",
      technologies: ["React", "Python", "PostGreSQL", "TailwindCSS"],
      img: "ArtUs.png",
      githubLink: "https://github.com/ivanmayoraldev/Art-Us",
      previewLink: "https://project2-example.com",
    },
    {
      title: "The Bliss",
      description:
        "Another project that highlights my expertise in backend development with Node.js and MongoDB.",
      technologies: ["Premiere Pro", "Davinci Resolve", "Google Ads"],
      img: "TheBliss.png",
      previewLink: "https://project2-example.com",
    },
    {
      title: "Peereira7",
      description:
        "Video editing, banner and thumbnail design. Social media management for 3 years.",
      technologies: ["Premiere Pro", "After Effects", "Photoshop", "Google Ads"],
      img: "Peereira7.png",
      previewLink: "https://www.youtube.com/@Peereira7",
    },
  ];

  return (
    <Card>
      <h2 className="flex items-center gap-3 text-2xl font-semibold text-neutral-800 dark:text-neutral-200">
        <LibraryBig />
        Projects
      </h2>

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
        {manualProjects.map((project) => (
          <ProjectItem key={project.title} {...project} />
        ))}
      </div>

      <div className="flex w-full justify-between gap-4 mt-4">
        <a
          href="https://github.com/ivanmayoraldev"
          target="_blank"
          className="group flex w-1/2 items-center justify-center rounded-xl bg-neutral-200 px-4 py-2 text-sm font-medium opacity-80 transition-opacity duration-150 hover:opacity-100 dark:bg-neutral-800"
          aria-label="Explore more projects"
        >
          More Web Projects
          <MoveRight className="size-4 opacity-70 duration-200 group-hover:translate-x-[1.5px] group-hover:opacity-100" />
        </a>
        <a
          href="https://www.behance.net/ivanmayoralvfx"
          target="_blank"
          className="group flex w-1/2 items-center justify-center rounded-xl bg-neutral-200 px-4 py-2 text-sm font-medium opacity-80 transition-opacity duration-150 hover:opacity-100 dark:bg-neutral-800"
          aria-label="Explore more projects"
        >
          More VFX & GFX Projects
          <MoveRight className="size-4 opacity-70 duration-200 group-hover:translate-x-[1.5px] group-hover:opacity-100" />
        </a>
      </div>
    </Card>
  );
}

function ProjectItem({
  title,
  description,
  technologies,
  img,
  githubLink,
  previewLink,
}: {
  title: string;
  description: string;
  technologies: string[];
  img: string;
  githubLink?: string;
  previewLink?: string;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-xl p-4 duration-100 hover:bg-neutral-300/20 dark:hover:bg-neutral-800/20">
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-300 py-2">
          {title}
        </h3>
        <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400 py-2">
          {description}
        </p>
        <div className="mb-2 flex gap-1 py-2 flex-wrap">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="flex items-center gap-1 rounded-lg bg-neutral-200 px-2.5 py-0.5 text-xs text-neutral-600 dark:bg-neutral-800/50 dark:text-neutral-400"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="relative h-40 w-full">
          <Image
            className="rounded-xl object-cover object-top"
            src={img}
            alt={`${title} image`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      
      <div className="mt-1 flex gap-2">
        {githubLink && (
          <a
            href={githubLink}
            className="inline-flex grow items-center justify-center rounded-xl bg-neutral-300/60 p-2 opacity-80 transition-opacity duration-150 hover:opacity-100 dark:bg-neutral-800"
            target="_blank"
            aria-label="Link to Github repository"
          >
            <Github className="size-4" />
          </a>
        )}
        {previewLink && (
          <a
            href={previewLink}
            className="inline-flex grow items-center justify-center rounded-xl bg-neutral-300/60 p-2 opacity-80 transition-opacity duration-150 hover:opacity-100 dark:bg-neutral-800"
            target="_blank"
            aria-label="Link to live preview"
          >
            <ScreenShare className="size-4" />
          </a>
        )}
      </div>
    </div>
  );
}