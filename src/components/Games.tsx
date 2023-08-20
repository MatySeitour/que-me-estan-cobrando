import { useEffect, useRef, useState, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { inter } from "@/utils/fonts";
import { CalculatorGame } from "./CalculatorGame";
import axios from "axios";
import { GradientEffectBackground } from "./GradientEffectBackground";

// Type to know the value of the current dollar and what is the last update date.
type InfoDollar = {
  dollarValue: string;
  lastUpdate: string;
};

export const Games = (): JSX.Element => {
  const games: any = useRef(null);
  const gameTitle: RefObject<HTMLDivElement> = useRef(null);
  const selectServiceDescription: RefObject<HTMLDivElement> = useRef(null);

  // create a state that is of type infoDollar
  const [dollar, setDollar] = useState<InfoDollar>({
    dollarValue: "",
    lastUpdate: "",
  });

  // Animations
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let mm = gsap.matchMedia();

    const gamesContainer = document.querySelector("#games-container");
    const gamesTitleContainer = document.querySelector(
      ".game-title__container"
    );
    mm.add("(max-width: 870px)", () => {
      gsap.fromTo(
        gameTitle.current,
        {
          scrollTrigger: {
            trigger: gamesTitleContainer,
            start: "10% 60%",
            end: "90% 60%",
          },
          y: 100,
          opacity: 0,
          duration: 0.2,
        },

        {
          scrollTrigger: {
            trigger: gamesTitleContainer,
            start: "10% 60%",
            end: "90% 60%",
          },
          y: 0,
          opacity: 1,
          duration: 0.2,
        }
      );

      gsap.fromTo(
        gamesContainer,
        {
          scrollTrigger: {
            trigger: gamesTitleContainer,
            start: "end center",
            end: "bottom bottom",
            scrub: true,
            markers: true,
          },
          opacity: 0,
          // onComplete: () => {
          //   gamesContainer?.removeAttribute("style");
          // },
          duration: 0.2,
        },

        {
          scrollTrigger: {
            trigger: gamesTitleContainer,
            start: "end center",
            end: "bottom bottom",
            scrub: true,
          },
          opacity: 1,
          // onComplete: () => {
          //   gamesContainer?.removeAttribute("style");
          // },
          duration: 0.2,
        }
      );

      gsap.fromTo(
        selectServiceDescription.current,
        {
          scrollTrigger: {
            trigger: gamesTitleContainer,
            start: "10% 60%",
            end: "90% 60%",
          },
          y: 100,
          opacity: 0,
          duration: 0.5,
          delay: 0.2,
        },

        {
          scrollTrigger: {
            trigger: gamesTitleContainer,
            start: "10% 60%",
            end: "90% 60%",
          },
          y: 0,
          opacity: 1,
          duration: 0.5,
          delay: 0.2,
        }
      );
    });

    let context = gsap.context(() => {
      mm.add("(min-width: 870px)", () => {
        gsap.fromTo(
          gameTitle.current,
          {
            scrollTrigger: {
              trigger: gamesTitleContainer,
              start: "10% 60%",
              end: "90% 60%",
            },
            y: 100,
            opacity: 0,
            duration: 0.2,
          },

          {
            scrollTrigger: {
              trigger: gamesTitleContainer,
              start: "10% 60%",
              end: "90% 60%",
            },
            y: 0,
            opacity: 1,
            duration: 0.2,
          }
        );

        gsap.from(gamesContainer, {
          scrollTrigger: {
            trigger: gamesTitleContainer,
            start: "10% 60%",
            end: "90% 60%",
            scrub: true,
          },
          y: 100,
          opacity: 0,
          onComplete: () => {
            gamesContainer?.removeAttribute("style");
          },
          duration: 0.2,
        });

        gsap.fromTo(
          selectServiceDescription.current,
          {
            scrollTrigger: {
              trigger: gamesTitleContainer,
              start: "10% 60%",
              end: "90% 60%",
            },
            y: 100,
            opacity: 0,
            duration: 0.5,
            delay: 0.2,
          },

          {
            scrollTrigger: {
              trigger: gamesTitleContainer,
              start: "10% 60%",
              end: "90% 60%",
            },
            y: 0,
            opacity: 1,
            duration: 0.5,
            delay: 0.2,
          }
        );
      });
    }, games);

    return () => context.revert();
  }, []);

  useEffect(() => {
    // Function to obtain the principal values of the dollar
    async function getDollarValue() {
      const res = await axios.get(
        "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
      );

      // Create a current date
      const time = new Date();
      const timeFinal = `${time.getDay().toString()}/${
        time.getMonth() + 1
      }/${time.getFullYear()} a las ${time.getHours()}:${String(
        time.getMinutes()
      ).padStart(2, "0")}:${String(time.getSeconds()).padStart(2, "0")}`;

      // Set the two values to the dollar state
      setDollar({
        dollarValue: res.data[0].casa.venta,
        lastUpdate: timeFinal,
      });
    }
    getDollarValue();
  }, []);

  return (
    <section ref={games} className="mb-20 h-auto pt-16">
      <div className="game-title__container">
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
      </div>

      <CalculatorGame dollar={dollar} />
    </section>
  );
};
