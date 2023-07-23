import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa6";
import { GradientEffectBackground } from "./GradientEffectBackground";

export const Footer = (): JSX.Element => {
  return (
    <footer className="relative mb-10 h-auto w-full rounded-md border border-white/30 p-4">
      <div className="border-effect__bottom absolute -right-0.5 -top-0.5 h-0.5 w-20"></div>
      <div className="border-effect__left absolute -left-0.5 top-20 h-20 w-0.5"></div>
      <div className="border-effect__left absolute -right-0.5 top-20 h-20 w-0.5"></div>
      <div className="h-full w-full">
        <h5 className="bg-gradient__effect service-title mb-8 text-center text-[2rem]">
          Datos de contacto
        </h5>
        <div className=" flex h-auto w-full items-center justify-center gap-6">
          <div className="group relative h-auto w-auto">
            <FaGithub className="h-10 w-10 text-white" />
            <span className="invisible absolute -top-14 left-[50%] -translate-x-1/2 whitespace-nowrap rounded-md border border-white/20 bg-black p-2 text-sm text-white opacity-0 transition-all before:absolute before:-bottom-2 before:left-1/2 before:h-4 before:w-4 before:-translate-x-1/2 before:rotate-45 before:border-b before:border-r before:border-white/20 before:bg-black sm:group-hover:visible sm:group-hover:opacity-100">
              MatySeitour
            </span>
          </div>
          <div className="group relative h-auto w-auto">
            <FaTwitter className="h-10 w-10 text-sky-500" />

            <span className="invisible absolute -top-14 left-[50%] -translate-x-1/2 whitespace-nowrap rounded-md border border-white/20 bg-black p-2 text-sm text-white opacity-0 transition-all before:absolute before:-bottom-2 before:left-1/2 before:h-4 before:w-4 before:-translate-x-1/2 before:rotate-45 before:border-b before:border-r before:border-white/20 before:bg-black sm:group-hover:visible sm:group-hover:opacity-100">
              Maty_seitour
            </span>
          </div>
          <div className="group relative h-auto w-auto">
            <FaLinkedin className="h-10 w-10 text-blue-900" />

            <span className="invisible absolute -top-14 left-[50%] -translate-x-1/2 whitespace-nowrap rounded-md border border-white/20 bg-black p-2 text-sm text-white opacity-0 transition-all before:absolute before:-bottom-2 before:left-1/2 before:h-4 before:w-4 before:-translate-x-1/2 before:rotate-45 before:border-b before:border-r before:border-white/20 before:bg-black sm:group-hover:visible sm:group-hover:opacity-100">
              Matias Seitour
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
