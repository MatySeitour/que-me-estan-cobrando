import { ServiceType } from "@/types";
import { useRef, useEffect } from "react";
import { Plan } from "./Plan";
import { gsap } from "gsap";

export const Plans = ({
  serviceSelected,
}: {
  serviceSelected: ServiceType;
}): JSX.Element => {
  const planTitle = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      planTitle.current,
      {
        yPercent: -40,
        opacity: 0,
        duration: 0.5,
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.5,
      }
    );
  }, []);

  return (
    <div className="flex h-auto w-full flex-col gap-8">
      <div className="pl-2">
        <h3
          ref={planTitle}
          className="bg-gradient__effect text-3xl font-normal text-transparent"
        >
          ¿Que planes me ofrecen?
        </h3>
      </div>
      <ul className="flex h-auto w-full flex-col gap-1">
        {serviceSelected.planes.map((plans) => (
          <Plan plans={plans} />
        ))}
      </ul>
    </div>
  );
};
