"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { inter } from "@/utils/fonts";
import { CalculatorGame } from "./CalculatorGame";
import axios from "axios";
import { GradientEffectBackground } from "./GradientEffectBackground";

type InfoDollar = {
  dollarValue: string;
  lastUpdate: string;
};

export const Games = (): JSX.Element => {
  const gameTitle: any = useRef(null);
  const selectServiceDescription: any = useRef(null);
  const [dollar, setDollar] = useState<InfoDollar>({
    dollarValue: "",
    lastUpdate: "",
  });

  useEffect(() => {
    const gamesContainer = document.querySelector("#games-container");
    gsap.registerPlugin(ScrollTrigger);
    gsap.fromTo(
      gameTitle.current,
      {
        scrollTrigger: {
          trigger: gameTitle.current,
          start: "start 70%",
          end: "start 70%",
        },
        y: -100,
        opacity: 0,
        duration: 0.5,
      },

      {
        scrollTrigger: {
          trigger: gameTitle.current,
          start: "start 70%",
          end: "start 70%",
        },
        y: 0,
        opacity: 1,
        duration: 0.5,
      }
    );
    gsap.fromTo(
      gamesContainer,
      {
        scrollTrigger: {
          trigger: gameTitle.current,
          start: "start 70%",
          end: "start 70%",
        },
        opacity: 0,
        duration: 0.5,
      },

      {
        scrollTrigger: {
          trigger: gameTitle.current,
          start: "start 70%",
          end: "start 70%",
        },
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
        },
        y: -100,
        opacity: 0,
        duration: 0.5,
      },

      {
        scrollTrigger: {
          trigger: gameTitle.current,
          start: "start 70%",
          end: "start 70%",
        },
        y: 0,
        opacity: 1,
        duration: 0.5,
      }
    );
  }, []);

  useEffect(() => {
    async function getDollarValue() {
      const res = await axios.get(
        "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
      );
      const time = new Date();
      const timeFinal = `${time.getDay().toString()}/${
        time.getMonth() + 1
      }/${time.getFullYear()} a las ${time.getHours()}:${String(
        time.getMinutes()
      ).padStart(2, "0")}:${String(time.getSeconds()).padStart(2, "0")}`;

      setDollar({
        dollarValue: res.data[0].casa.venta,
        lastUpdate: timeFinal,
      });
    }
    getDollarValue();
  }, []);

  return (
    <section className="mb-20 h-auto pt-16">
      <h2
        ref={gameTitle}
        className="bg-gradient__effect service-title relative mb-8 text-center text-[3rem] opacity-0"
      >
        Calculadora de{" "}
        <b className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text font-normal">
          Juegos
        </b>
        <GradientEffectBackground />
      </h2>
      <p
        ref={selectServiceDescription}
        className={`text-center text-white/30 md:text-lg lg:text-xl ${inter.className} home-title`}
      >
        Calcula el valor del juego que{" "}
        <b className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text font-normal">
          quieras
        </b>
      </p>

      <CalculatorGame dollar={dollar} />
    </section>
  );
};
