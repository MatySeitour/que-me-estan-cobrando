"use client";

import { useState, ChangeEvent } from "react";
import impuestosData from "../assets/impuestos.json";
import { HiInformationCircle } from "react-icons/hi2";

const enum Badge {
  USD = "USD",
  PESOS = "pesos",
}

export const DollarCalculator = ({
  badge,
  setBadge,
  className,
  dollar,
}: {
  badge: string;
  setBadge: any;
  className: string;
  dollar: any;
}): JSX.Element => {
  const { impuestos } = impuestosData;

  const [inputPriceValue, setInputPriceValue] = useState<number>(0);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 8 && Number(e.target.value) >= 0) {
      setInputPriceValue(Number(e.target.value));
    }
  };

  const dollarNumber = dollar.dollarValue.replace(",", ".");
  const priceInPesos = dollarNumber * Number(inputPriceValue);
  return (
    <div
      className={`${
        className ?? "false"
      } absolute top-0 flex h-auto w-full pt-16`}
    >
      <div className="relative z-40 mx-auto h-full w-full max-w-xl rounded-md border border-white/20 bg-black pb-8">
        <div className="border-effect__top absolute -top-0.5 left-20 h-0.5 w-20 -translate-x-1/2"></div>
        <div className="border-effect__left absolute -left-0.5 top-20 h-20 w-0.5"></div>
        <div className="border-effect__left absolute -right-0.5 top-20 h-20 w-0.5"></div>
        <div className="border-effect__bottom absolute -bottom-0.5 -right-0.5 h-0.5 w-20"></div>
        <div className=" mb-4 flex h-auto w-auto flex-row items-center justify-center px-2 pt-4 text-white">
          <div className="relative flex flex-row gap-6">
            <div
              onClick={() => setBadge(Badge.PESOS)}
              className={`relative rounded-md before:absolute before:bottom-0 before:h-[0.1rem] ${
                badge == Badge.PESOS && `badge-active__1`
              }`}
            >
              <p className="p-2">Pesos</p>
            </div>
            <div
              onClick={() => setBadge(Badge.USD)}
              className={`relative rounded-md before:absolute before:bottom-0 before:h-[0.1rem] ${
                badge == Badge.USD && `badge-active__2`
              }`}
            >
              <p className="p-2">USD</p>
            </div>
            <div
              className={`item-c absolute left-2.5 h-10 w-[4.5rem] overflow-hidden rounded-md border border-white/40 transition-all`}
            >
              <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 h-full w-full">
                <div className="relative flex h-full w-full place-items-center before:absolute before:h-full before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-transparent before:to-[#0B121C10] after:absolute after:bottom-4 after:left-[0%] after:-z-20 after:h-[100px] after:w-[140px] after:translate-x-1/3 after:bg-gradient-conic after:from-[#39f2aea5]/30 after:via-[#2D5FFF]/50 after:blur-2xl after:content-['']" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex h-auto w-full flex-col items-center justify-center gap-4 p-2">
          <p className="bg-gradient__effect text-center text-base font-normal text-transparent">
            Ultima actualización: {dollar.lastUpdate}
          </p>
          <p className="bg-gradient__effect text-xl font-normal text-transparent">
            Dólar{" "}
            <b className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text font-normal">
              {dollar.dollarValue}
            </b>
          </p>
          <label className="bg-gradient__effect text-center text-2xl font-normal text-transparent">
            Introduce el valor del juego en dolares
          </label>
          <div className="flex flex-row items-center gap-2">
            <p className="bg-gradient__effect text-center text-base font-normal text-transparent">
              USD$
            </p>
            <input
              type="text"
              pattern="[0-9]+"
              onChange={handleInputChange}
              value={inputPriceValue}
              className="bg-gradient__effect h-8 w-44 rounded-md border border-white/30 bg-black p-2 text-center font-normal text-transparent caret-white outline-none focus:border-white/60"
            />
          </div>
        </div>
        <div className="h-auto w-full">
          <div className="flex h-10 w-full">
            <p className="flex-[2] bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text p-2 text-left text-lg font-normal text-transparent">
              PRECIO EN PESOS
            </p>
            <p className="flex-[.5] p-2 text-center text-lg text-white"></p>
            <p className="flex-[1] bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text p-2 text-center text-lg font-normal text-transparent">
              {inputPriceValue == 0 ? "$0" : `$${priceInPesos}`}
            </p>
          </div>

          <ul className="mb-4">
            {impuestos.map((impuesto) => (
              <div
                id="price"
                key={impuesto.id}
                className="flex h-10 w-full items-center border-white/20"
              >
                <div className="relative hidden flex-[2] p-2 text-center text-lg md:flex md:flex-row md:justify-start md:gap-2">
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
                <div className="flex flex-[1] items-center justify-center gap-2 p-2 text-center text-lg font-normal text-transparent md:hidden">
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
                        El porcentaje del impuesto puede variar según la
                        provincia
                      </p>
                    </span>
                  </div>
                </div>
                <p className="bg-gradient__effect flex-[.5] p-2 text-center text-lg font-normal text-transparent">
                  {impuesto.porcentaje}%
                </p>
                <p className="bg-gradient__effect flex-1 p-2 text-center text-lg font-normal text-transparent">
                  {inputPriceValue == 0
                    ? "$0"
                    : `$${((priceInPesos * impuesto.porcentaje) / 100).toFixed(
                        2
                      )}`}
                </p>
              </div>
            ))}
          </ul>
          <div className="flex h-10 w-full pr-2">
            <p className="flex-[2] bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text p-2 text-left text-lg font-normal text-transparent">
              PRECIO FINAL
            </p>
            <p className="flex-[.5] p-2 text-center text-lg text-white"></p>
            <p className="flex flex-[1] items-center justify-center rounded-md border border-white/30 bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text p-2 text-center text-lg font-normal text-transparent">
              {inputPriceValue == 0
                ? "$0"
                : `$${(priceInPesos * 1.75).toFixed(2)}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};