import { ChangeEvent, useState } from "react";
import { paytone_One } from "@/utils/fonts";

const enum Badge {
  USD = "USD",
  PESOS = "pesos",
}

export const CalculatorContainer = ({
  dollarCalculator,
}: {
  dollarCalculator: any;
}): JSX.Element => {
  const [badgeCalculator, setBadgeCalculator] = useState<Badge>(Badge.PESOS);
  const [inputCalculator, setInputCalculator] = useState<string>("");

  const dollarValues = dollarCalculator?.map((dolar: any) => {
    const values = { nombre: "", compra: null, venta: null };
    values.nombre = dolar.casa.nombre;
    values.compra = dolar.casa.compra.replace(",", ".");
    values.venta = dolar.casa.venta.replace(",", ".");
    return values;
  });

  //   const dollarOficial =
  //     dollarCalculator != undefined && dollarCalculator[0].casa;
  //   console.log(dollarOficial);

  //   const dollarNumber = dollar.dollarValue.replace(",", ".");

  const handleOnInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) >= 0 && e.target.value[0] != "0") {
      setInputCalculator(e.target.value);
    }
  };

  return (
    <div className="mx-auto flex h-full flex-col gap-4">
      <h1
        className={`home-title bg-clip-text text-5xl ${paytone_One.className}`}
      >
        ¿A cuanto el dólar?
      </h1>
      <div className="flex h-96 w-full flex-col gap-2 rounded-md border border-white/30 p-2">
        <div className="relative flex flex-row justify-center gap-6">
          <div
            onClick={() => setBadgeCalculator(Badge.PESOS)}
            className={`relative rounded-md text-white before:absolute before:bottom-0 before:h-[0.1rem] ${
              badgeCalculator == Badge.PESOS && `badge-calculator__active__1`
            }`}
          >
            <p className={`p-2 sm:cursor-pointer ${paytone_One.className}`}>
              Pesos
            </p>
          </div>
          <div
            onClick={() => setBadgeCalculator(Badge.USD)}
            className={`relative rounded-md text-white before:absolute before:bottom-0 before:h-[0.1rem] ${
              badgeCalculator == Badge.USD && `badge-calculator__active__2`
            }`}
          >
            <p className={`p-2 sm:cursor-pointer ${paytone_One.className}`}>
              USD
            </p>
          </div>
          <div
            className={`item-d absolute left-2.5 h-10 w-[4.5rem] overflow-hidden rounded-md border border-white/40 transition-all`}
          >
            <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 h-full w-full">
              <div className="relative flex h-full w-full place-items-center before:absolute before:h-full before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-transparent before:to-[#0B121C10] after:absolute after:bottom-4 after:left-[0%] after:-z-20 after:h-[100px] after:w-[140px] after:translate-x-1/3 after:bg-gradient-conic after:from-[#39f2aea5]/30 after:via-[#2D5FFF]/50 after:blur-2xl after:content-['']" />
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex w-full justify-end">
            <label
              className="text-right font-semibold text-white"
              htmlFor="calculator"
            >
              {badgeCalculator == Badge.USD
                ? "Escribe el monto en dólares"
                : "Escribe el monto en pesos"}
            </label>
          </div>
          <div className="flex h-16 w-full flex-col justify-between rounded-md bg-white/10 p-2 outline-none">
            <span className="text-right tracking-wide text-white">
              {badgeCalculator == Badge.PESOS
                ? `Dólar Oficial: $${
                    dollarValues != undefined
                      ? Number(inputCalculator) / Number(dollarValues[0].venta)
                      : "0"
                  }`
                : `ARS$: ${
                    dollarValues != undefined &&
                    Number(inputCalculator) * Number(dollarValues[0].venta)
                  }`}
            </span>
            <div className="flex w-full justify-end gap-2">
              <input
                name="calculator"
                onChange={handleOnInputChange}
                value={inputCalculator}
                type="text"
                pattern="[0-9]+"
                id="calculator"
                className="h-full w-auto bg-transparent text-right text-white outline-none"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
