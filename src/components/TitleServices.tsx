"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function TitleServices() {
  const title: any = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const serviceContainer = document.querySelector("#service-container");
    gsap.fromTo(
      title.current,
      {
        scrollTrigger: {
          trigger: serviceContainer,
          start: "start center",
          end: "start center",
          scrub: 1,
        },
        yPercent: -100,
        opacity: 0,
        duration: 2,
      },

      {
        scrollTrigger: {
          trigger: serviceContainer,
          start: "start center",
          end: "start center",

          scrub: 1,
        },
        yPercent: 0,
        opacity: 1,
        duration: 2,
      }
    );
  }, []);

  return (
    <h2
      ref={title}
      id="service-title"
      className="bg-gradient__effect service-title text-center text-[3rem] opacity-0"
    >
      Plataformas Digitales
    </h2>
  );
}
