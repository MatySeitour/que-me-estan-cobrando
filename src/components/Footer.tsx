import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa6";
import { inter, paytone_One } from "../utils/fonts";

export const Footer = ({ text }: { text: string }): JSX.Element => {
  return (
    <footer className="flex h-auto w-full items-center justify-center bg-[#111] pt-4">
      <div className="relative h-full w-full max-w-7xl pb-4">
        <div className="h-full w-full">
          <div className="px-8 py-6">
            <p
              className={`text-center text-sm text-white/40 ${inter.className}`}
            >
              {text}
            </p>
          </div>
          <div className="flex justify-center">
            <h6
              className={`home-title mb-4 bg-clip-text text-3xl ${paytone_One.className}`}
            >
              Mis redes
            </h6>
          </div>
          <div className="flex h-auto w-full items-center justify-center gap-6">
            <a
              aria-label="Mi perfil de github"
              href="https://github.com/MatySeitour"
              target="_blank"
              className="group relative h-auto w-auto"
            >
              <FaGithub className="h-10 w-10 text-white" />
              <span className="invisible absolute -top-14 left-[50%] -translate-x-1/2 whitespace-nowrap rounded-md border border-white/20 bg-black p-2 text-sm text-white opacity-0 transition-all before:absolute before:-bottom-2 before:left-1/2 before:h-4 before:w-4 before:-translate-x-1/2 before:rotate-45 before:border-b before:border-r before:border-white/20 before:bg-black sm:group-hover:visible sm:group-hover:opacity-100">
                MatySeitour
              </span>
            </a>
            <a
              aria-label="Mi perfil de twitter"
              href="https://twitter.com/MatySeitour"
              target="_blank"
              className="group relative h-auto w-auto"
            >
              <FaTwitter className="h-10 w-10 text-sky-500" />

              <span className="invisible absolute -top-14 left-[50%] -translate-x-1/2 whitespace-nowrap rounded-md border border-white/20 bg-black p-2 text-sm text-white opacity-0 transition-all before:absolute before:-bottom-2 before:left-1/2 before:h-4 before:w-4 before:-translate-x-1/2 before:rotate-45 before:border-b before:border-r before:border-white/20 before:bg-black sm:group-hover:visible sm:group-hover:opacity-100">
                Maty_seitour
              </span>
            </a>
            <a
              aria-label="Mi perfil de linkedIn"
              href="https://www.linkedin.com/in/matias-seitour-1a0118240/"
              target="_blank"
              className="group relative h-auto w-auto"
            >
              <FaLinkedin className="h-10 w-10 text-blue-900" />

              <span className="invisible absolute -top-14 left-[50%] -translate-x-1/2 whitespace-nowrap rounded-md border border-white/20 bg-black p-2 text-sm text-white opacity-0 transition-all before:absolute before:-bottom-2 before:left-1/2 before:h-4 before:w-4 before:-translate-x-1/2 before:rotate-45 before:border-b before:border-r before:border-white/20 before:bg-black sm:group-hover:visible sm:group-hover:opacity-100">
                Matias Seitour
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
