import { Paytone_One } from "next/font/google";
import { SliderHome } from "./SliderHome";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { inter } from "@/utils/fonts";
import Link from "next/link";
import { ServiceType } from "@/types";

const paytone_One = Paytone_One({
  weight: ["400"],
  subsets: ["latin"],
});

export const Banner = ({ services }: { services: ServiceType[] }) => {
  const linkPageDollar = useRef(null);
  const containerBanner = useRef(null);

  useEffect(() => {
    // Obtengo los elementos que quiero animar
    const homeTitle = document.querySelector(".home-title");
    const homeSubtitle = document.querySelector(".home-subtitle");
    const sliderContainer = document.querySelector(".slider-container");

    // Creo un contexto de gsap y dentro inserto las animaciones de los elementos que quiero animar.
    //Como segundo parámetro le paso el scope del contenedor padre.

    let ctx = gsap.context(() => {
      gsap.fromTo(
        homeTitle,
        {
          y: 50,
          opacity: 0,
          duration: 0.4,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
        }
      );

      gsap.fromTo(
        homeSubtitle,
        {
          y: 50,
          opacity: 0,
          duration: 0.4,
          delay: 0.2,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          delay: 0.2,
        }
      );
      gsap.fromTo(
        sliderContainer,
        {
          opacity: 0,
          duration: 1,
          delay: 0.4,
        },
        {
          opacity: 1,
          duration: 1,
          delay: 0.4,
        }
      );
      gsap.fromTo(
        linkPageDollar.current,
        {
          opacity: 0,
          duration: 0.5,
          delay: 0.4,
        },
        {
          opacity: 1,
          duration: 0.5,
          delay: 0.4,
        }
      );
    }, containerBanner);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerBanner}
      className="relative flex h-auto w-full flex-col items-center justify-center gap-4 bg-black px-4 pt-32"
    >
      <div className="banner absolute top-0 h-40 w-screen bg-home bg-[length:40px_40px]"></div>
      <h1
        className={`home-title bg-clip-text p-2 ${paytone_One.className} relative z-20 mb-10 animate-gradientTitle text-center text-6xl min-[525px]:text-6xl min-[680px]:text-6xl min-[830px]:text-7xl lg:text-8xl`}
      >
        ¿Que me están{" "}
        <b className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text font-normal">
          cobrando
        </b>
        ?
      </h1>

      <div className="mb-4">
        <h2
          className={`home-subtitle text-center text-white/30 md:text-lg lg:text-xl ${inter.className} max-w-3xl`}
        >
          Una página donde vas a poder conocer el precio{" "}
          <b className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text font-bold">
            real{" "}
          </b>
          de los servicios digitales que más usas y que tipo de
          planes/beneficios tienen.
        </h2>
      </div>

      <SliderHome services={services} />

      <Link
        href={"/dolar-calculator"}
        ref={linkPageDollar}
        className="button-calculator flex flex-row items-center rounded-md border border-white bg-white p-2 hover:bg-[#000] hover:text-white"
        type="button"
      >
        <p className="mr-2">Calculadora Dólar</p>
        <svg
          className="svg-calculator"
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
        >
          <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
        </svg>
      </Link>
    </div>
  );
};
