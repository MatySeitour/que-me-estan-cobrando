import { useState, useEffect, useRef } from "react";
import impuestosData from "../assets/impuestos.json";
import { FaAngleDown } from "react-icons/fa6";
import { inter } from "@/utils/fonts";
import { gsap } from "gsap";

export const Taxes = () => {
  const { impuestos } = impuestosData;
  const taxTitle = useRef(null);

  const [taxSelect, setTaxSelect] = useState<number | null>(null);

  // Function that sets the selected tax
  const toggleTax = (taxNumber: number) => {
    if (taxNumber != taxSelect) {
      setTaxSelect(taxNumber);
    } else {
      setTaxSelect(null);
    }
  };

  // Animations
  useEffect(() => {
    const titleCard = gsap.utils.toArray(`#tax`);

    const tl = gsap.timeline({ paused: true, reversed: true });

    tl.play();

    gsap.fromTo(
      taxTitle.current,
      {
        opacity: 0,
        duration: 0.2,
      },
      {
        opacity: 1,
        duration: 0.2,
      }
    );

    titleCard.forEach((plan: any) => {
      tl.fromTo(
        plan,
        {
          y: -20,
          opacity: 0,
          duration: 0.1,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.1,
        }
      );
    });
  }, []);

  return (
    <div className="relative flex h-auto min-h-[40rem] w-full flex-col gap-8 sm:min-h-[30rem]">
      <div className="px-2">
        <h3
          ref={taxTitle}
          className="bg-gradient__effect pb-2 text-center text-4xl font-normal text-transparent sm:text-left"
        >
          ¿Que impuestos me cobran?
        </h3>
      </div>
      <ul className="flex h-auto  w-full flex-col">
        {impuestos.map((tax) => (
          <li
            id="tax"
            onClick={() => toggleTax(tax.id)}
            className={`border-t border-white/30 text-white sm:cursor-pointer ${
              tax.id == impuestos.length - 1 && `border-b`
            }`}
            key={tax.id}
          >
            <div className="flex items-center justify-between gap-4 p-4">
              <p className="bg-gradient__effect font-normal text-transparent">
                {tax.nombre}
                {` (${tax.abreviacion}): ${tax.porcentaje}% ${
                  tax.id == 3 ? `o  2%` : ``
                }`}
              </p>
              <FaAngleDown
                className={`h-5 w-5 transition-all ${
                  taxSelect == tax.id && `rotate-180 transition-all`
                }`}
              />
            </div>
            <div
              className={`h-0 overflow-hidden text-sm transition-[height] ${
                taxSelect == tax.id && `h-32 transition-[height] sm:h-20`
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
