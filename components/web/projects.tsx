import { Github, LibraryBig, MoveRight, ScreenShare } from "lucide-react";
import Image from "next/image";
import Card from "@/components/web/card";

export default function Projects() {
  const manualProjects = [
    {
      title: "Project Title 1",
      description:
        "A brief description of the project and its purpose. This project showcases my skills in React and Tailwind CSS.",
      technologies: ["React", "Next.js", "Tailwind CSS"],
      img: "/path/to/project1.jpg", // Ruta de la imagen del proyecto
      githubLink: "https://github.com/your-username/project1",
      previewLink: "https://project1-example.com",
    },
    {
      title: "Project Title 2",
      description:
        "Another project that highlights my expertise in backend development with Node.js and MongoDB.",
      technologies: ["Node.js", "Express", "MongoDB"],
      img: "/path/to/project2.jpg", // Ruta de la imagen del proyecto
      githubLink: "https://github.com/your-username/project2",
      previewLink: "https://project2-example.com",
    },
  ];

  return (
    <Card>
      <h2 className="flex items-center gap-3 text-2xl font-semibold text-neutral-800 dark:text-neutral-200">
        <LibraryBig />
        Projects
      </h2>
      <div className="grid gap-3 md:grid-cols-2">
        {manualProjects.map((project) => (
          <ProjectItem key={project.title} {...project} />
        ))}
      </div>
      <a
        href="https://github.com/astrxnomo"
        target="_blank"
        className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-neutral-200 px-4 py-2 text-sm font-medium opacity-80 transition-opacity duration-150 hover:opacity-100 dark:bg-neutral-800 md:w-auto"
        aria-label="Explore more projects"
      >
        More projects
        <MoveRight className="size-4 opacity-70 duration-200 group-hover:translate-x-[1.5px] group-hover:opacity-100" />
      </a>
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
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-300">
          {title}
        </h3>
        <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
          {description}
        </p>
        <div className="mb-2 flex gap-1">
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