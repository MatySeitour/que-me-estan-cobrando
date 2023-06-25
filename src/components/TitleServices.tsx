"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function TitleServices() {
  const title: any = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      title.current,
      {
        scrollTrigger: {
          trigger: title.current,
          start: "top center",
        },
        yPercent: 50,
        opacity: 0,
        duration: 1.5,
        ease: "elastic",
      },
      {
        scrollTrigger: {
          trigger: title.current,
          start: "top center",
        },
        yPercent: 0,
        opacity: 1,
        duration: 1.5,
        ease: "elastic",
      }
    );
  }, []);

  return (
    <h2 ref={title} className="bg-gradient__effect text-center text-[3rem]">
      Plataformas Digitales
    </h2>
  );
}
