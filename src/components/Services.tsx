import { useState } from "react";
import { Service } from "@/types";
import Image from "next/image";

export const Services = ({
  id,
  nombre,
  imagen,
  impuesto_final,
  impuesto_porcentaje,
  planes,
  select_price,
}: Service): JSX.Element => {
  type SectionSelect = "precios" | "impuestos" | "planes";

  const [sectionSelected, setSectionSelected] =
    useState<SectionSelect>("precios");

  return (
    <div className="flex h-full w-40 flex-col bg-black pl-2">
      <div className="h-auto w-28 pl-2">
        <Image
          alt={nombre}
          src={imagen}
          width={0}
          height={0}
          sizes="100%"
          className="w-full"
        />
      </div>
      <ul className="flex h-full w-full flex-col gap-3 pr-2 pt-4">
        <li
          onClick={() => setSectionSelected("precios")}
          className={`relative rounded-md p-2 text-white/20 ${
            sectionSelected != "precios" && `hover:bg-white/10`
          }`}
        >
          <p
            className={`${
              sectionSelected == "precios" && `text-white transition-all`
            }`}
          >
            Precio
          </p>
          <div
            className={`absolute bottom-0 h-[0.10rem] w-0 bg-red-500 ${
              sectionSelected == "precios" && `w-11/12 transition-all`
            }`}
          ></div>
        </li>
        <li
          onClick={() => setSectionSelected("planes")}
          className={`relative rounded-md p-2 text-white/20 ${
            sectionSelected != "planes" && `hover:bg-white/10`
          }`}
        >
          <p
            className={`${
              sectionSelected == "planes" && `text-white transition-all`
            }`}
          >
            Planes
          </p>
          <div
            className={`absolute bottom-0 h-[0.10rem] w-0 bg-red-500 ${
              sectionSelected == "planes" && `w-11/12 transition-all`
            }`}
          ></div>
        </li>
        <li
          onClick={() => setSectionSelected("impuestos")}
          className={`relative rounded-md p-2 text-white/20 ${
            sectionSelected != "impuestos" && `hover:bg-white/10`
          }`}
        >
          <p
            className={`${
              sectionSelected == "impuestos" && `text-white transition-all`
            }`}
          >
            Impuestos
          </p>
          <div
            className={`absolute bottom-0 h-[0.10rem] w-0 bg-red-500 ${
              sectionSelected == "impuestos" && `w-11/12 transition-all`
            }`}
          ></div>
        </li>
      </ul>
    </div>
  );
};
