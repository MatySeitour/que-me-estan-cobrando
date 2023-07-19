"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { inter } from "@/utils/fonts";

export const Games = (): JSX.Element => {
  const gameTitle: any = useRef(null);
  const selectServiceDescription: any = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      gameTitle.current,
      {
        scrollTrigger: {
          trigger: gameTitle.current,
          start: "start 70%",
          end: "start 70%",
        },
        yPercent: -100,
        opacity: 0,
        duration: 0.5,
      },

      {
        scrollTrigger: {
          trigger: gameTitle.current,
          start: "start 70%",
          end: "start 70%",
        },
        yPercent: 0,
        opacity: 1,
        duration: 0.5,
      }
    );
    gsap.fromTo(
      selectServiceDescription.current,
      {
        scrollTrigger: {
          trigger: gameTitle.current,
          start: "start 70%",
          end: "start 70%",
          markers: true,
        },
        yPercent: -100,
        opacity: 0,
        duration: 0.5,
      },

      {
        scrollTrigger: {
          trigger: gameTitle.current,
          start: "start 70%",
          end: "start 70%",
          markers: true,
        },
        yPercent: 0,
        opacity: 1,
        duration: 0.5,
      }
    );
  }, []);

  return (
    <section className="h-screen">
      <h2
        ref={gameTitle}
        className="bg-gradient__effect service-title mb-8 text-center text-[3rem] opacity-0"
      >
        Calculadora de{" "}
        <b className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text font-normal">
          Juegos
        </b>
      </h2>
      <p
        ref={selectServiceDescription}
        className={`text-center text-white/30 md:text-lg lg:text-xl ${inter.className} home-title`}
      >
        Calcula el valor del juego que quieras{" "}
        <b className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text font-normal">
          detalles
        </b>
      </p>
    </section>
  );
};
