import { Github, Instagram, Linkedin } from "lucide-react"

export default function SocialLinks() {
  const socialLinks = [
    { url: "https://www.behance.net/ivanmayoralvfx", icon: Github },
    { url: "https://www.linkedin.com/in/iv%C3%A1n-mayoral-8288a1331/", icon: Linkedin },
    { url: "https://www.instagram.com/ivanmayoralvfx/", icon: Instagram },
  ]
  return (
    <div className="flex gap-2">
      {socialLinks.map((app) => (
        <a
          key={app.url}
          href={app.url}
          className="inline-flex items-center justify-center rounded-xl bg-neutral-200 p-2 opacity-80 transition-opacity duration-150 hover:opacity-100 dark:bg-neutral-800"
          target="_blank"
          aria-label={`Link to ${app.url}`}
        >
          <app.icon className="size-4" />
        </a>
      ))}
    </div>
  )
}
