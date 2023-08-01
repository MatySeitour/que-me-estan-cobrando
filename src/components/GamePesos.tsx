import { useState, ChangeEvent } from "react";
import impuestosData from "../assets/impuestos.json";
import { HiInformationCircle } from "react-icons/hi2";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaCopy, FaCheck } from "react-icons/fa6";

const enum Badge {
  USD = "USD",
  PESOS = "pesos",
}

export const GamePesos = ({
  badge,
  setBadge,
  className,
  copyLastPriceState,
  toggleCopy,
}: {
  badge: string;
  setBadge: any;
  className: string;
  copyLastPriceState: boolean;
  toggleCopy: () => void;
}): JSX.Element => {
  const { impuestos } = impuestosData;

  const [inputPriceValue, setInputPriceValue] = useState("");

  //function to update the value of the input.
  //only if the value has less than 8 characters, is less than 30000 and if the first value is different from 0.
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (
      e.target.value.length <= 8 &&
      Number(e.target.value) < 30000 &&
      e.target.value[0] != "0"
    ) {
      setInputPriceValue(e.target.value);
    }
  };
  return (
    <div
      className={`${
        className ?? "false"
      } absolute top-0 flex h-auto w-full pt-16`}
    >
      <div className="bg-gradient__cards relative z-40 mx-auto h-full w-full max-w-xl rounded-md border border-white/20 pb-8">
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
              <p className="p-2 sm:cursor-pointer">Pesos</p>
            </div>
            <div
              onClick={() => setBadge(Badge.USD)}
              className={`relative rounded-md before:absolute before:bottom-0 before:h-[0.1rem] ${
                badge == Badge.USD && `badge-active__2`
              }`}
            >
              <p className="p-2 sm:cursor-pointer">USD</p>
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

        <div className="gap flex h-auto w-full flex-col items-center justify-center gap-4">
          <label className="bg-gradient__effect mb-2 text-2xl font-normal text-transparent">
            Introduce el valor del juego
          </label>
          <div
            className={`flex w-full flex-row items-center justify-center gap-2`}
          >
            <div className="dollar-input__container flex w-72 items-center justify-center rounded-md border border-white/20 pl-2">
              <label
                htmlFor="game_ars"
                className="home-title w-16 bg-[#000a] bg-clip-text font-bold text-white"
              >
                ARS$
              </label>
              <input
                name="game_ars"
                id="game_ars"
                type="number"
                pattern="[0-9]+"
                onChange={handleInputChange}
                value={inputPriceValue}
                className="h-full w-full max-w-[15rem] rounded-r-md bg-white/10 p-1 text-left font-normal text-white outline-none placeholder:text-xs"
              />
            </div>
          </div>
        </div>
        <div className="h-auto w-full">
          <div className="flex h-10 w-full">
            <p className="flex-[2] bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text p-2 text-left text-lg font-normal text-transparent">
              PRECIO INICIAL
            </p>
            <p className="flex-[.5] p-2 text-center text-lg text-white"></p>
            <p className="flex-[1.5] bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text p-2 text-center text-lg font-normal text-transparent sm:flex-[1]">
              {inputPriceValue == "" ? "$0" : `$${inputPriceValue}`}
            </p>
          </div>
          <ul className="mb-4">
            {impuestos.map((impuesto) => (
              <li
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
                <div className="flex flex-[2] items-center justify-start gap-2 p-2 text-center text-lg font-normal text-transparent md:hidden">
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
                <p className="bg-gradient__effect flex-[1.5] p-2 text-center text-lg font-normal text-transparent sm:flex-1">
                  {inputPriceValue == ""
                    ? "$0"
                    : `$${(
                        (Number(inputPriceValue) * impuesto.porcentaje) /
                        100
                      ).toFixed(2)}`}
                </p>
              </li>
            ))}
          </ul>
          <div className="flex h-10 w-full pr-2">
            <p className="flex-[2] bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text p-2 text-left text-lg font-normal text-transparent">
              PRECIO FINAL
            </p>
            <p className="flex-[.5] p-2 text-center text-lg text-white"></p>
            <div className="flex flex-[1] items-center justify-center rounded-l-md border-b border-l border-t border-white/30 bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text p-2 text-center text-lg font-normal text-transparent">
              {copyLastPriceState && <div className="">Copiado!</div>}

              {!copyLastPriceState &&
                (inputPriceValue == ""
                  ? "$0"
                  : `$${(Number(inputPriceValue) * 1.75).toFixed(2)}`)}
            </div>
            <CopyToClipboard text={(Number(inputPriceValue) * 1.75).toFixed(2)}>
              <div
                onClick={toggleCopy}
                className="flex h-full cursor-pointer items-center justify-center rounded-r-md bg-gradient-to-r from-emerald-500 to-cyan-500 p-1"
              >
                <FaCopy className="h-5 w-8 text-white" />
              </div>
            </CopyToClipboard>
          </div>
        </div>
      </div>
    </div>
  );
};
