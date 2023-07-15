import impuestosData from "../assets/impuestos.json";
import { Dropdown } from "./Dropdown";
import { useEffect, useRef, useState } from "react";
import { ServiceType } from "@/types";
import { gsap } from "gsap";

interface Planes {
  id: number;
  plan: string;
  descripcion: {
    plan_description_id: number;
    plan_description: string;
  }[];
  precio: number;
}

export const Prices = ({
  serviceSelected,
  selectPlan,
  setSelectPlan,
}: {
  serviceSelected: ServiceType;
  selectPlan: Planes;
  setSelectPlan: any;
}): JSX.Element => {
  const { impuestos } = impuestosData;
  const priceTitle = useRef(null);

  useEffect(() => {
    const prices = gsap.utils.toArray("#price");
    const tl = gsap.timeline({ paused: true, reversed: true });

    tl.play();

    gsap.fromTo(
      priceTitle.current,
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

    prices.forEach((price: any) => {
      tl.fromTo(
        price,
        {
          yPercent: -20,
          opacity: 0,
          duration: 0.1,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.1,
        }
      );
    });
  }, []);

  return (
    <div className="relative flex h-auto w-full flex-col gap-8">
      <Dropdown
        serviceSelected={serviceSelected}
        selectPlan={selectPlan}
        setSelectPlan={setSelectPlan}
      />
      <div className="pl-2">
        <h3
          ref={priceTitle}
          className="bg-gradient__effect text-3xl font-normal text-transparent"
        >
          Precios
        </h3>
      </div>
      <div className="flex h-auto w-full flex-row">
        <ul className="flex h-full w-full flex-col">
          <div id="price" className="flex h-10 w-full items-center bg-black">
            <p className="bg-gradient__effect flex-[2] border-y border-r border-white/20 p-2 text-center text-lg text-transparent">
              Nombre del impuesto
            </p>
            <p className="bg-gradient__effect flex-[1] border-y border-r border-white/20 p-2 text-center text-lg text-transparent">
              Porcentaje
            </p>
            <p className="bg-gradient__effect flex-[1] border-y border-white/20 p-2 text-center text-lg text-transparent">
              Precio impuesto
            </p>
          </div>
          {impuestos.map((impuesto) => (
            <div
              id="price"
              key={impuesto.id}
              className="flex h-10 w-full items-center bg-black"
            >
              <p className="bg-gradient__effect flex-[2] border-y border-r border-white/20 p-2 text-center text-lg font-normal text-transparent">
                {impuesto.nombre}
              </p>
              <p className="bg-gradient__effect flex-[1] border-y border-r border-white/20 p-2 text-center text-lg font-normal text-transparent">
                {impuesto.porcentaje}%
              </p>
              <p className="bg-gradient__effect flex-1 border-y border-white/20 p-2 text-center text-lg font-normal text-transparent">
                ${(selectPlan?.precio * impuesto?.porcentaje) / 100}
              </p>
            </div>
          ))}
          <div id="price" className="flex h-10 w-full items-center bg-white">
            <p className="flex-[2] p-2 text-center text-lg text-black">
              Precio Final
            </p>
            <p className="flex-[1] p-2 text-center text-lg text-black"></p>
            <p className="flex-[1] p-2 text-center text-lg text-black">
              $
              {(
                selectPlan?.precio * serviceSelected?.impuesto_porcentaje
              ).toFixed(2)}
            </p>
          </div>
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
