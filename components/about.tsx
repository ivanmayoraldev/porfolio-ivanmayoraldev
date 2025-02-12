import Image from "next/image";
import Link from "next/link";
import SocialLinks from "./social-links";

const porfData = {
  img: "/logo-web.png", 
  description:
    "Passionate about creating digital experiences and striking visuals. I combine technical skills with creativity to bring ideas to life. Always eager to work on innovative projects that make an impact.",
  cvUrl: "/ivan-mayoral-cv.pdf", // URL del archivo PDF de tu CV
  location: "Madrid, Spain",
  contactEmail: "ivanmayoral.dev@gmail.com",
};

export default function AboutMe() {
  return (
    <section className="flex flex-col items-center justify-center py-4">
      <div className="flex items-center w-full gap-4 inline-flex flex-nowrap overflow-hidden text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-4 ml-16">
            <div className="flex items-center gap-2">
              <span className="flex size-2 items-center justify-center rounded-xl bg-neutral-200 dark:bg-neutral-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </span>
              <span>{porfData.location}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex size-2 items-center justify-center rounded-xl bg-neutral-200 dark:bg-neutral-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>
              <a
                href={`https://mail.google.com/mail/u/0/?pli=1#inbox?compose=GTvVlcSDZctqjKQQXCLxwwMnMxFDHPTkHMxDSlXvMRwKGdtLhMSXcfZSghtgKPVbvtqBxLXXxGwJD`}
                className="underline hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                {porfData.contactEmail}
              </a>
            </div>
          </div>
      <div className="max-w-5xl w-full px-4 md:px-8 flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
        <div className="flex flex-col space-y-6 md:w-1/2 text-center md:text-left">
          <h4 className="text-2xl md:text-10xl font-bold text-white-600">
            {porfData.description}
          </h4>

          <SocialLinks />
        </div>

        <div className="flex flex-col items-center md:items-end space-y-4 md:w-1/2">
          <Image
            src={porfData.img}
            alt="Perfil"
            width={250}
            height={250}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}