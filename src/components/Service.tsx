import { ServiceType } from "@/types";
import Image from "next/image";
import { Taxes } from "./Taxes";
import { useState } from "react";

export const Service = ({
  serviceSelected,
}: {
  serviceSelected: ServiceType;
}): JSX.Element => {
  const [serviceOptionSelect, setServiceOptionSelect] = useState<number>(1);
  return (
    <section className="mb-20 h-auto px-4 pt-28">
      <div className="relative h-full w-full rounded-md border border-white/20">
        <div className="absolute left-1/2 top-2 flex h-auto w-auto -translate-x-1/2 flex-row gap-3 text-white">
          <div
            onClick={() => setServiceOptionSelect(1)}
            className={`relative rounded-md border border-white/30 before:absolute before:bottom-0 before:h-[0.1rem] before:bg-red-400 ${
              serviceOptionSelect == 1 &&
              `border border-cyan-500 transition-all`
            }`}
          >
            <p className="p-2">Precios</p>
          </div>
          <div
            onClick={() => setServiceOptionSelect(2)}
            className={`relative rounded-md border border-white/30 before:absolute before:bottom-0 before:h-[0.1rem] before:bg-red-400 ${
              serviceOptionSelect == 2 &&
              `border border-cyan-500 transition-all`
            }`}
          >
            <p className="p-2">Impuestos</p>
          </div>
          <div
            onClick={() => setServiceOptionSelect(3)}
            className={`relative rounded-md border border-white/30 before:absolute before:bottom-0 before:h-[0.1rem] before:bg-red-400 ${
              serviceOptionSelect == 3 &&
              `border border-cyan-500 transition-all`
            }`}
          >
            <p className="p-2">Planes</p>
          </div>
          <div className="w-"></div>
        </div>
        <div className="flex h-40 w-40 items-center justify-center px-4">
          <Image
            alt={serviceSelected?.nombre}
            src={serviceSelected?.imagen}
            width={2000}
            height={2000}
          />
        </div>
        {serviceOptionSelect == 1 && <Taxes />}
      </div>
    </section>
  );
};
