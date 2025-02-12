import { GraduationCap, Briefcase } from "lucide-react";
import { Fade } from "react-awesome-reveal";

const edData = [
  {
    id: 1,
    time: "2024 - Actually",
    title: "Desarrollo de Aplicaciones Web (DAW)",
    educationUrl: "https://www.juanxxiii.net/tecnico-superior-en-desarrollo-de-aplicaciones-web/",
    educationName: "CFP JuanXXIII",
    details: [
      "Design web pages and deploy/install applications on servers with browser and server programming, using the most in-demand professional technologies.",
    ],
  },
  {
    id: 2,
    time: "2021 - 2024",
    title: "VFX & GFX Creator | Channel Manager",
    educationUrl: "https://youtube.com/@Peereira7",
    educationName: "Peereira7 Channel",
    details: [
      "Video editing, banner and thumbnail design. Social media management for 3 years.",
    ],
  },
];

const expData = [
  {
    id: 1,
    time: "2023 - 2024",
    title: "Titulo Superior en Diseño Digital",
    companyUrl: "https://cei.es/cei-curso/titulo-superior-en-diseno-digital/",
    companyName: "CEI",
    description: "Advertising design and corporate identity (Adobe Illustrator), digital image editing and retouching (Adobe Photoshop), editorial design (Adobe InDesign), digital video editing (Adobe Premiere), post-production (Adobe After Effects), 3D motion design (Cinema 4D), digital marketing (SEO, SEM, Google Analytics)."
  },

];

export default function ListEduExp() {
  return (
    <div className="flex flex-col justify-between py-16">
      {/* Título principal */}
      <h2 className="flex items-center gap-2 text-3xl font-bold text-neutral-800 dark:text-neutral-200 ml-3 my-8 whitespace-nowrap overflow-hidden text-ellipsis">
        <GraduationCap size={32} />
        Education & Experience
      </h2>
      <Fade>
        <div className="relative max-w-5xl w-full">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-yellow-600"></div>
          <ol className="relative items-centerflex flex-col space-y-8">
            {edData.map((education, index) => (
              <EducationItem
                key={education.id}
                {...education}
                position={index % 2 === 0 ? "right" : "left"}
              />
            ))}
            {expData.map((experience, index) => (
              <ExperienceItem
                key={experience.id}
                {...experience}
                position={index % 2 === 0 ? "left" : "right"}
              />
            ))}
          </ol>
        </div>
      </Fade>
    </div>
  );
}

function EducationItem({
  time,
  title,
  educationUrl,
  educationName,
  details,
  position,
}: {
  time: string;
  title: string;
  educationUrl: string;
  educationName: string;
  details: string[];
  position: "left" | "right";
}) {
  const classes =
    position === "left"
      ? "ml-auto mr-0 md:mr-1/4 flex-row-reverse"
      : "mr-auto ml-0 md:ml-1/4 flex-row";

  // Función para manejar el clic
  const handleClick = () => {
    window.open(educationUrl, "_blank");
  };

  return (
    <li className={`flex ${classes} relative`}>
      {/* Punto central */}
      <div
        className={`absolute top-4 left-1/2 transform -translate-x-1/2 size-3 rounded-full border border-yellow-600 bg-yellow-600`}
      ></div>

      {/* Contenido clickeable */}
      <div
        onClick={handleClick} // Manejador de clic
        className={`rounded-xl p-4 duration-100 hover:bg-neutral-300/20 dark:hover:bg-neutral-800/20 max-w-sm cursor-pointer ${
          position === "left" ? "text-right" : "text-left"
        }`}
      >
        <time className="mb-2 font-mono text-xs font-normal leading-none text-yellow-600 dark:text-yellow-600">
          {time}
        </time>
        <div className="mt-1 flex flex-col space-y-0.5">
          <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
            {title}
          </h3>
          <span className="text-sm font-medium text-neutral-700 opacity-80 duration-150 hover:opacity-100 dark:text-neutral-400">
            {educationName}
          </span>
          <ul className="py-3">
            {details.map((detail, idx) => (
              <li
                key={idx}
                className="text-sm text-neutral-500 dark:text-neutral-400"
              >
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}

function ExperienceItem({
  time,
  title,
  companyUrl,
  companyName,
  description,
  position,
}: {
  time: string;
  title: string;
  companyUrl: string;
  companyName: string;
  description: string;
  position: "left" | "right";
}) {
  const classes =
    position === "left"
      ? "mr-auto ml-0 md:ml-1/4 flex-row"
      : "ml-auto mr-0 md:mr-1/4 flex-row-reverse";

  const handleClick = () => {
    window.open(companyUrl, "_blank");
  };

  return (
    <li className={`flex ${classes} relative`}>
      <div
        className={`absolute top-4 left-1/2 transform -translate-x-1/2 size-3 rounded-full border border-yellow-600 bg-yellow-600`}
      ></div>

      <div
        onClick={handleClick} 
        className={`rounded-xl p-4 duration-100 hover:bg-neutral-300/20 dark:hover:bg-neutral-800/20 max-w-sm cursor-pointer ${
          position === "left" ? "text-left" : "text-right"
        }`}
      >
        <time className="mb-2 font-mono text-xs font-normal leading-none text-yellow-600 dark:text-yellow-600">
          {time}
        </time>
        <div className="mt-1 flex flex-col space-y-0.5">
          <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
            {title}
          </h3>
          <span className="text-sm font-medium text-neutral-700 opacity-80 duration-150 hover:opacity-100 dark:text-neutral-400">
            {companyName}
          </span>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 py-3">
            {description}
          </p>
        </div>
      </div>
    </li>
  );
}