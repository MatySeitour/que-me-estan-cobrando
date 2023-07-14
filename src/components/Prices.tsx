import impuestosData from "../assets/impuestos.json";
import { Dropdown } from "./Dropdown";
import { useState } from "react";
import { ServiceType } from "@/types";

export const Prices = ({
  serviceSelected,
}: {
  serviceSelected: ServiceType;
}): JSX.Element => {
  console.log(serviceSelected);

  interface Planes {
    id: number;
    plan: string;
    descripcion: {
      plan_description_id: number;
      plan_description: string;
    }[];
    precio: number;
  }

  const [selectPlan, setSelectPlan] = useState<Planes>(
    serviceSelected.planes[0]
  );

  const { impuestos } = impuestosData;
  return (
    <div className="relative flex h-auto w-full flex-col gap-8">
      <Dropdown
        serviceSelected={serviceSelected}
        selectPlan={selectPlan}
        setSelectPlan={setSelectPlan}
      />
      <div className="pl-2">
        <h3 className="bg-gradient__effect text-3xl font-normal text-transparent">
          Precios
        </h3>
      </div>
      <div className="flex h-96 w-full flex-row">
        <ul className="flex h-20 flex-col">
          <li className="flex-[2] border border-white/20 p-4 text-white">
            Impuestos
          </li>
          {impuestos.map((impuesto) => (
            <li
              className="flex-[2] border border-white/20 p-4 text-white"
              key={impuesto.id}
            >
              {impuesto.nombre}
            </li>
          ))}
        </ul>
        <ul>
          {impuestos.map((impuesto) => (
            <li
              key={impuesto.id}
              className="border border-white/20 p-4 text-white"
            >
              {impuesto.porcentaje}%
            </li>
          ))}
        </ul>
      </div>
      {/* <ul className="flex h-auto w-full flex-col gap-1">
        {impuestos.map((tax) => (
          <li
            onClick={() => toggleTax(tax.id)}
            className="border-t border-white/30 text-white"
            key={tax.id}
          >
            <div className="flex items-center justify-between p-4">
              <p className="bg-gradient__effect font-normal text-transparent">
                {tax.nombre}
                {` (${tax.abreviacion}): ${tax.porcentaje}%`}
              </p>
              <FaAngleDown
                className={`h-5 w-5 transition-all ${
                  taxSelect == tax.id && `rotate-180 transition-all`
                }`}
              />
            </div>
            <div
              className={`h-0 overflow-hidden text-sm transition-[height] ${
                taxSelect == tax.id && `h-20 transition-[height]`
              }`}
            >
              <p
                className={`p-4 font-serif font-normal ${inter.className} font-bold text-white/70`}
              >
                {tax.descripcion}
              </p>
            </div>
          </li>
        ))}
      </ul> */}
    </div>
  );
};
