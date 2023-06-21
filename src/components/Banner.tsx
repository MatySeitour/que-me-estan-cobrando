import { Paytone_One } from "next/font/google";
import { SliderHome } from "./SliderHome";
import { gsap } from "gsap";
import { useEffect } from "react";
import SplitType from "split-type";

const paytone_One = Paytone_One({
  weight: "400",
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
    <div className="flex h-full w-full flex-col items-center justify-center">
      <h1
        className={`home-title bg-clip-text text-[5rem] ${paytone_One.className} animate-gradientTitle`}
      >
        ¿Que me están cobrando?
      </h1>
      <div className="mb-4">
        <h2 className="home-subtitle mb-10 mt-10 text-2xl tracking-wide text-white">
          Descubre que impuestos te cobran y cúal es el valor final para evitar
          sorpresas
        </h2>
      </div>

      <SliderHome />
    </div>
  );
};
