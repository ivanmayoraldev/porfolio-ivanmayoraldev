import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from "next-themes"
import { Geist } from "next/font/google"

import Particles from "@/components/particles"

import "./styles/globals.css"

const geistFont = Geist({
  subsets: ["latin"],
})

export const metadata = {
  title: "Iván Mayoral - Porfolio",
  description:
    "Full-Stack Web Developer and Designer",
  metadataBase: new URL("https://ivanmayoral.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Iván Mayoral - Porfolio",
    description:
      "Full-Stack Web Developer and Designer",
    url: "https://ivanmayoral.com",
    siteName: "Iván Mayoral - Porfolio",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Iván Mayoral - Porfolio",
    description:
      "Full-Stack Web Developer and Designer.",
    creator: "@ivanmayoraldev",
    images: [
      "/logo.png",
    ],
  },
  keywords: [
    "Full Stack Developer",
    "Video Editor",
    "Designer",
    "VFX Creative",
    "GFX Creative",
    "España",
    "Iván Mayoral",
    "Iván Mayoral Capel",
    "Madrid",
    "Web Developer",
    "Programador",
    "Paginas web",
    "Frontend",
    "Backend",
    "React",
    "Astro",
    "Figma",
    "Crear paginas web",
    "Edicion de video",
  ],
  authors: [{ name: "Iván Mayoral" }],
  creator: "Iván Mayoral",
  publisher: "Iván Mayoral",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={geistFont.className} suppressHydrationWarning>
      <link rel="shortcut icon" href="/logo-web.png" type="image/x-icon" />
      <body className="bg-neutral-100 dark:bg-background">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Particles className="fixed inset-0 -z-10" quantity={120} />
          <main className="mx-auto mt-4 flex w-full flex-col gap-6 p-5 duration-1000 ease-out animate-in fade-in md:max-w-4xl">
            {children}
          </main>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Iván Mayoral",
              url: "https://ivanmayoral.com",
              image:
                "/logo.png",
              sameAs: [
                "https://twitter.com/ivanmayoraldev",
                "https://github.com/ivanmayoraldev",
                "https://www.linkedin.com/in/iv%C3%A1n-mayoral-8288a1331/",
                "https://www.instagram.com/ivanmayoraldev",
                "https://www.twitch.tv/ivanmayoraldev"
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
