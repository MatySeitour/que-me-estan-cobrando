"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { inter } from "@/utils/fonts";

export default function TitleServices() {
  const title: any = useRef(null);
  const selectServiceDescription: any = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const serviceContainer = document.querySelector("#service-container");
    gsap.fromTo(
      title.current,
      {
        scrollTrigger: {
          trigger: serviceContainer,
          start: "start 70%",
          end: "start 70%",
        },
        yPercent: -100,
        opacity: 0,
        duration: 0.5,
      },

      {
        scrollTrigger: {
          trigger: serviceContainer,
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
          trigger: serviceContainer,
          start: "start 70%",
          end: "start 70%",
        },
        yPercent: -100,
        opacity: 0,
        duration: 0.5,
      },

      {
        scrollTrigger: {
          trigger: serviceContainer,
          start: "start 70%",
          end: "start 70%",
        },
        yPercent: 0,
        opacity: 1,
        duration: 0.5,
      }
    );
  }, []);

  return (
    <>
      <h2
        ref={title}
        id="service-title"
        className="bg-gradient__effect service-title mb-8 text-center text-[3rem] opacity-0"
      >
        Plataformas{" "}
        <b className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text font-normal">
          Digitales
        </b>
      </h2>
      <p
        ref={selectServiceDescription}
        className={`text-center text-white/30 md:text-lg lg:text-xl ${inter.className} home-title`}
      >
        Selecciona el servicio que quieras para ver los{" "}
        <b className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text font-normal">
          detalles
        </b>
      </p>
    </>
  );
}
