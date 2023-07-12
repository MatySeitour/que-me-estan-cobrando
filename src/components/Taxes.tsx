import { useState } from "react";
import impuestosData from "../assets/impuestos.json";
import { FaAngleDown } from "react-icons/fa6";
import { inter } from "@/utils/fonts";

export const Taxes = () => {
  const { impuestos } = impuestosData;

  const [taxSelect, setTaxSelect] = useState<number | null>(null);

  const toggleTax = (taxNumber: number) => {
    if (taxNumber != taxSelect) {
      setTaxSelect(taxNumber);
    } else {
      setTaxSelect(null);
    }
  };

  return (
    <div className="flex h-auto w-full flex-col gap-8">
      <div className="pl-2">
        <h3 className="bg-gradient__effect text-3xl font-normal text-transparent">
          ¿Que impuestos me cobran?
        </h3>
      </div>
      <ul className="flex h-auto w-full flex-col gap-1">
        {impuestos.map((tax) => (
          <li
            onClick={() => toggleTax(tax.id)}
            className="border-b border-t border-white/30 text-white"
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
      </ul>
    </div>
  );
};
