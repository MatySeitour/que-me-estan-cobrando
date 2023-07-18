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
          <Plan key={plans.id} plans={plans} />
        ))}
      </ul>
    </div>
  );
};
