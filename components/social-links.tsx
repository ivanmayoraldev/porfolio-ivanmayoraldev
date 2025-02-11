import { Github, Instagram, Linkedin, Mail} from "lucide-react";

export default function SocialLinks() {
  const socialLinks = [
    { url: "https://github.com/ivanmayoraldev", icon: Github, text: "Proyects" },
    { url: "https://www.linkedin.com/in/iván-mayoral-8288a1331/", icon: Linkedin, text: "Linkedin" },
    { url: "https://www.instagram.com/ivanmayoraldev/", icon: Instagram, text: "Instagram" },
    { url: "/cv.pdf", icon: Mail, text: "CV" },
  ];

  return (
    <div className="flex gap-2">
      {socialLinks.map((app, index) => (
        <a
          key={index}
          href={app.url}
          target="_blank"
          className={`inline-flex items-center justify-center rounded-lg ${
            app.text === "CV"
              ? "bg-blue-600 text-white px-4 py-2 shadow-md hover:bg-blue-700"
              : "bg-neutral-200 dark:bg-neutral-800 p-2 hover:opacity-80"
          } transition-all`}
          aria-label={`Link to ${app.url}`}
        >
          {/* Mostrar ícono si existe */}
          {app.icon && <app.icon className="size-4 mr-2" />}
          {/* Mostrar texto si existe */}
          <span className="text-sm font-medium">{app.text}</span>
        </a>
      ))}
    </div>
  );
}