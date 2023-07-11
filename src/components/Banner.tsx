import { Paytone_One } from "next/font/google";
import { SliderHome } from "./SliderHome";
import { gsap } from "gsap";
import { useEffect } from "react";

const paytone_One = Paytone_One({
  weight: ["400"],
  subsets: ["latin"],
});

export const Banner = () => {
  useEffect(() => {
    const homeTitle = document.querySelector(".home-title");

    const homeSubtitle = document.querySelector(".home-subtitle");
    const sliderContainer = document.querySelector(".slider-container");

    gsap.fromTo(
      homeTitle,
      {
        yPercent: 50,
        opacity: 0,
        duration: 1.5,
        ease: "elastic",
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1.5,
        ease: "elastic",
      }
    );

    gsap.fromTo(
      homeSubtitle,
      {
        yPercent: 50,
        opacity: 0,
        duration: 1,
        ease: "elastic",
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1,
        ease: "elastic",
        delay: 0.5,
      }
    );
    gsap.fromTo(
      sliderContainer,
      {
        opacity: 0,
        duration: 1,
      },
      {
        opacity: 1,
        duration: 1,
        delay: 1,
      }
    );
  }, []);

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col items-center justify-center bg-black">
      <div className="banner absolute top-0 h-40 w-screen bg-home bg-[length:40px_40px]"></div>
      <h1
        className={`home-title bg-clip-text text-[5rem] ${paytone_One.className} relative z-20 animate-gradientTitle`}
      >
        ¿Que me están{" "}
        <b className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text font-normal">
          cobrando
        </b>
        ?
      </h1>

      <div className="mb-4">
        <h2 className="home-subtitle mb-10 mt-10 text-2xl tracking-wide text-white">
          Descubre que{" "}
          <b
            id="banner-word"
            className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text font-normal"
          >
            impuestos
          </b>{" "}
          te cobran y cúal es el{" "}
          <b
            id="banner-word"
            className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text font-normal"
          >
            valor final
          </b>{" "}
          para{" "}
          <b
            id="banner-word"
            className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text font-normal"
          >
            evitar sorpresas
          </b>
        </h2>
      </div>

      <SliderHome />

      <button
        className="button-calculator flex flex-row items-center rounded-md border border-white bg-white p-2 transition-all hover:bg-[#000] hover:text-white"
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
      </button>
    </div>
  );
};
