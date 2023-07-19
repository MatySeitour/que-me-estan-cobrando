import { useState, ChangeEvent } from "react";
import { PricesGame } from "./PricesGame";

const enum Badge {
  USD = "USD",
  PESOS = "pesos",
}

export const Calculator = (): JSX.Element => {
  const [badge, setBadge] = useState<Badge>(Badge.PESOS);

  const [inputPriceValue, setInputPriceValue] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputPriceValue(e.target.value);
  };

  return (
    <div className="jus flex h-auto w-full pt-16">
      <div className="relative mx-auto h-full w-full max-w-xl rounded-md border border-white/20 pb-8">
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

        <div className="flex h-auto w-full flex-col items-center justify-center p-2">
          <label className="bg-gradient__effect mb-2 text-lg font-normal text-transparent">
            Introduce el valor del juego
          </label>
          <input
            type="number"
            onChange={handleInputChange}
            value={inputPriceValue}
            className="bg-gradient__effect h-8 w-72 rounded-md border border-white/30 bg-black p-2 font-normal text-transparent caret-white outline-none focus:border-white/60"
          />
        </div>
        <PricesGame inputPriceValue={inputPriceValue} />
      </div>
    </div>
  );
};
