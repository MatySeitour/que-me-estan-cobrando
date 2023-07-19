import impuestosData from "../assets/impuestos.json";
import { Dropdown } from "./Dropdown";
import { useEffect, useRef } from "react";
import { HiInformationCircle } from "react-icons/hi2";
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
  const planTitle = useRef(null);

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
    gsap.fromTo(
      planTitle.current,
      {
        yPercent: -40,
        opacity: 0,
        duration: 0.5,
        delay: 0.2,
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.5,
        delay: 0.2,
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
    <div className="relative flex h-auto w-full flex-col gap-8 pb-8">
      <Dropdown
        serviceSelected={serviceSelected}
        selectPlan={selectPlan}
        setSelectPlan={setSelectPlan}
      />
      <div className="flex flex-col gap-2 px-2 text-center sm:flex-col sm:text-left">
        <h4
          ref={priceTitle}
          className="bg-gradient__effect text-4xl font-normal text-transparent"
        >
          Precios
        </h4>
        <h4
          ref={planTitle}
          className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-xl font-normal text-transparent sm:pr-4"
        >
          {selectPlan?.plan}
        </h4>
      </div>
      <div className="flex h-auto w-full flex-row">
        <ul className="flex h-full w-full flex-col">
          <div id="price" className="flex h-10 w-full items-center bg-white">
            <p className="flex-[2] p-2 text-center text-lg text-black">
              Precio Inicial
            </p>
            <p className="flex-[1] p-2 text-center text-lg text-black"></p>
            <p className="flex-[1] p-2 text-center text-lg text-black">
              ${selectPlan?.precio}
            </p>
          </div>
          <div id="price" className="flex h-10 w-full items-center bg-black">
            <p className="bg-gradient__effect flex-[1] border-y border-white/20 p-2 text-center text-lg text-transparent md:flex-[2]">
              Impuesto
            </p>
            <p className="bg-gradient__effect flex-[1] border-y border-white/20 p-2 text-center text-lg text-transparent">
              Porcentaje
            </p>
            <p className="bg-gradient__effect flex-[1] border-y border-white/20 p-2 text-center text-lg text-transparent">
              Precio
            </p>
          </div>

          {impuestos.map((impuesto) => (
            <div
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
    </div>
  );
};
