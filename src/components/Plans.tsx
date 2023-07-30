import { ServiceType } from "@/types";
import { useRef, useEffect, useState } from "react";
import { Plan } from "./Plan";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const Plans = ({
  serviceSelected,
}: {
  serviceSelected: ServiceType;
}): JSX.Element => {
  const planTitle = useRef(null);
  const plansContainer = useRef(null);

  const [planSelect, setPlanSelect] = useState<number | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const titleCard = gsap.utils.toArray(`#plans`);

    const tl = gsap.timeline({ paused: true });

    let ctx = gsap.context(() => {
      tl.play();

      titleCard.forEach((plan: any) => {
        tl.fromTo(
          plan,
          {
            y: -20,
            opacity: 0,
            duration: 0.2,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.2,
          }
        );
      });

      gsap.fromTo(
        planTitle.current,
        {
          opacity: 0,
          duration: 0.5,
        },
        {
          opacity: 1,
          duration: 0.5,
        }
      );
    }, plansContainer);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={plansContainer}
      className="flex h-auto min-h-[30rem] w-full flex-col gap-8"
    >
      <div className="px-2">
        <h3
          ref={planTitle}
          className="bg-gradient__effect pb-2 text-center text-4xl font-normal text-transparent sm:text-left"
        >
          ¿Que planes me ofrecen?
        </h3>
      </div>
      <ul className="flex h-auto w-full flex-col gap-1">
        {serviceSelected.planes.map((plans) => (
          <Plan
            key={plans.id}
            plans={plans}
            planSelect={planSelect}
            setPlanSelect={setPlanSelect}
            serviceSelected={serviceSelected}
          />
        ))}
      </ul>
    </div>
  );
};
