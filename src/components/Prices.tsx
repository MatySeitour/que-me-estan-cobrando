import impuestosData from "../assets/impuestos.json";
import { Dropdown } from "./Dropdown";
import { useEffect, useRef } from "react";
import { HiInformationCircle } from "react-icons/hi2";
import { ServiceType, Planes } from "@/types";
import { gsap } from "gsap";

export const Prices = ({
  serviceSelected,
  selectPlan,
}: {
  serviceSelected: ServiceType;
  selectPlan: Planes | null;
}): JSX.Element => {
  // Obtiene los impuestos del impuestos.json
  const { impuestos } = impuestosData;
  const priceTitle = useRef(null);
  const planTitle = useRef(null);

  // Animations

  useEffect(() => {
    //Selecciona todos los elementos de HTML que tengan el id "price"
    const prices = gsap.utils.toArray("#price");

    //Crea una linea del tiempo de gsap que por default esta en pausa
    const tl = gsap.timeline({ paused: true });

    //Ejecuta la linea de tiempo
    tl.play();

    gsap.fromTo(
      priceTitle.current,
      {
        opacity: 0,
        duration: 0.2,
      },
      {
        opacity: 1,
        duration: 0.2,
      }
    );
    gsap.fromTo(
      planTitle.current,
      {
        y: -40,
        opacity: 0,
        duration: 0.2,
        delay: 0.2,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.2,
        delay: 0.2,
      }
    );

    prices.forEach((price: any) => {
      tl.fromTo(
        price,
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
    <div className="relative flex h-auto w-full flex-col gap-8 pb-8">
      <div className="flex flex-col gap-2 px-2 text-center sm:flex-col sm:text-left">
        <h3
          ref={priceTitle}
          className="bg-gradient__effect text-4xl font-normal text-transparent"
        >
          Precios
        </h3>
        <h4
          ref={planTitle}
          className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-xl font-normal text-transparent sm:pr-4"
        >
          {selectPlan?.plan}
        </h4>
      </div>
      <div className="flex h-auto w-full flex-row">
        <ul className="flex h-full w-full flex-col">
          <li id="price" className="flex h-10 w-full items-center bg-white">
            <p className="flex-[2] p-2 text-center text-lg text-black">
              Precio Inicial
            </p>
            <p className="flex-[1] p-2 text-center text-lg text-black"></p>
            <p className="flex-[1] p-2 text-center text-lg text-black">
              ${selectPlan?.precio}
            </p>
          </li>
          <li id="price" className="flex h-10 w-full items-center bg-black">
            <p className="flex-[1] border-y border-white/20 bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text p-2 text-center text-lg text-transparent md:flex-[2]">
              Impuesto
            </p>
            <p className="flex-[1] border-y border-white/20 bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text p-2 text-center text-lg text-transparent">
              Porcentaje
            </p>
            <p className="flex-[1] border-y border-white/20 bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text p-2 text-center text-lg text-transparent">
              Precio
            </p>
          </li>

          {impuestos.map((impuesto) => (
            <li
              id="price"
              key={impuesto.id}
              className="flex h-10 w-full items-center border-white/20 bg-black"
            >
              <div className="relative hidden flex-[2] border-y border-white/20 p-2 text-center text-lg md:flex md:flex-row md:justify-center md:gap-2">
                <p className="bg-gradient__effect font-normal text-transparent">
                  {impuesto.nombre}
                </p>
                <div
                  className={`${
                    impuesto.id != 3 && `hidden`
                  } group relative z-50 inline-block w-[1.3rem] text-center`}
                >
                  <HiInformationCircle className="h-full w-full text-white" />
                  <span className="invisible absolute -top-14 z-50 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/20 bg-black p-2 text-sm text-white opacity-0 transition-all before:absolute before:-bottom-2 before:left-1/2 before:h-4 before:w-4 before:-translate-x-1/2 before:rotate-45 before:border-b before:border-r before:border-white/20 before:bg-black sm:group-hover:visible sm:group-hover:opacity-100">
                    El porcentaje del impuesto puede variar según la provincia
                  </span>
                </div>
              </div>
              <div className="flex flex-[1] items-center justify-center gap-2 border-y border-white/20 p-2 text-center text-lg font-normal text-transparent md:hidden">
                <p className="bg-gradient__effect font-normal text-transparent">
                  {impuesto.abreviacion}
                </p>
                <div
                  className={`${
                    impuesto.id != 3 && `hidden`
                  } group relative inline-block w-[1.3rem] text-center`}
                >
                  <HiInformationCircle className="h-full w-full text-white" />
                  <span className="invisible absolute -top-36 right-1/2 z-50 w-32 translate-x-1/2 break-words rounded-md border border-white/20 bg-black p-2 text-sm text-white opacity-0 transition-all before:absolute before:-bottom-2 before:left-1/2 before:h-auto before:w-4 before:-translate-x-1/2 before:rotate-45 before:border-b before:border-r before:border-white/20 before:bg-black group-hover:visible group-hover:opacity-100 sm:-top-14 sm:w-16 sm:-translate-x-1/2">
                    <p className="h-auto w-full break-words">
                      El porcentaje del impuesto puede variar según la provincia
                    </p>
                  </span>
                </div>
              </div>
              <p className="bg-gradient__effect flex-[1] border-y border-white/20 p-2 text-center text-lg font-normal text-transparent">
                {impuesto.porcentaje}%
              </p>
              <p className="bg-gradient__effect flex-1 border-y border-white/20 p-2 text-center text-lg font-normal text-transparent">
                $
                {selectPlan?.precio != undefined &&
                  (selectPlan?.precio * impuesto?.porcentaje) / 100}
              </p>
            </li>
          ))}
          <li id="price" className="flex h-10 w-full items-center bg-white">
            <p className="flex-[2] p-2 text-center text-lg text-black">
              Precio Final
            </p>
            <p className="flex-[1] p-2 text-center text-lg text-black"></p>
            <p className="flex-[1] p-2 text-center text-lg text-black">
              $
              {selectPlan?.precio != undefined &&
                (
                  selectPlan?.precio * serviceSelected?.impuesto_porcentaje
                ).toFixed(2)}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};
