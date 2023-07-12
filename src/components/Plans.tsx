import { ServiceType } from "@/types";
import { useRef, useState } from "react";
import { Plan } from "./Plan";

export const Plans = ({
  serviceSelected,
}: {
  serviceSelected: ServiceType;
}): JSX.Element => {
  // 154

  return (
    <div className="flex h-auto w-full flex-col gap-8">
      <div className="pl-2">
        <h3 className="bg-gradient__effect text-3xl font-normal text-transparent">
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
