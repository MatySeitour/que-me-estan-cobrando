import { ChangeEvent, useState } from "react";
import { paytone_One } from "@/utils/fonts";
import { FaCaretDown, FaCaretUp, FaMinus } from "react-icons/fa6";

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

  console.log(dollarCalculator);

  const dollarValues = dollarCalculator?.map((dolar: any) => {
    const values = { nombre: "", compra: null, venta: null, variacion: "" };
    values.nombre = dolar.casa.nombre;
    values.compra = dolar.casa.compra.replace(",", ".");
    values.venta = dolar.casa.venta.replace(",", ".");
    values.variacion = dolar.casa.variacion?.replace(",", ".");
    return values;
  });

  const handleOnInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) >= 0 && e.target.value[0] != "0") {
      setInputCalculator(e.target.value);
    }
  };

  const time = new Date();
  const lastUpdate = `${time.getDay().toString()}/${
    time.getMonth() + 1
  }/${time.getFullYear()} a las ${time.getHours()}:${String(
    time.getMinutes()
  ).padStart(2, "0")}:${String(time.getSeconds()).padStart(2, "0")}`;

  return (
    <div className="mx-auto flex h-full w-full max-w-4xl flex-col gap-10 p-4 sm:max-w-7xl">
      <h1
        className={`calculator-gradient__text bg-clip-text text-5xl ${paytone_One.className} text-center`}
      >
        ¿A cuanto el dólar?
      </h1>
      <div className="flex h-auto w-full flex-col gap-2 rounded-md border border-white/30 p-2">
        <div className="relative mb-2 flex flex-row justify-center gap-6">
          <div
            onClick={() => setBadgeCalculator(Badge.PESOS)}
            className={`relative rounded-md text-white before:absolute before:bottom-0 before:h-[0.1rem] ${
              badgeCalculator == Badge.PESOS && `badge-calculator__active__1`
            }`}
          >
            <p className={`p-2 sm:cursor-pointer ${paytone_One.className}`}>
              ARS$
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
        <div className="mb-2 flex justify-center">
          <p className="home-title mr-2 bg-clip-text text-lg font-bold">
            Dólar oficial:{" "}
          </p>

          <b className="calculator-gradient__text text-lg">
            ${dollarValues != undefined && Number(dollarValues[0].venta)}
          </b>
        </div>
        <div className="w-full">
          <div className="flex w-full justify-end">
            <label
              className="home-title bg-clip-text text-right font-bold"
              htmlFor="calculator"
            >
              {badgeCalculator == Badge.USD
                ? "Escribe el monto en dólares"
                : "Escribe el monto en pesos"}
            </label>
          </div>
          <div className="flex h-16 w-full flex-col justify-between rounded-md bg-white/10 p-2 outline-none">
            <span className="home-title bg-clip-text text-right font-bold">
              {badgeCalculator == Badge.PESOS
                ? `Dólar Oficial: $${
                    dollarValues != undefined
                      ? (
                          Number(inputCalculator) /
                          Number(dollarValues[0].venta)
                        ).toFixed(2)
                      : "0"
                  }`
                : `ARS$: ${
                    dollarValues != undefined &&
                    (
                      Number(inputCalculator) * Number(dollarValues[0].venta)
                    ).toFixed(2)
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
                className="home-title h-full w-full bg-transparent bg-clip-text text-right font-bold outline-none"
              />
            </div>
          </div>
        </div>
        <ul className="flex h-auto flex-col gap-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4">
          {dollarValues?.map((dolarInfo: any) => (
            <li
              key={dolarInfo.nombre}
              className="flex flex-col justify-between rounded-md bg-white/10 p-2 sm:h-auto sm:w-full"
            >
              <div className="mb-2 flex justify-center gap-4 text-white">
                <p className="home-title bg-clip-text text-center text-2xl font-bold">
                  {dolarInfo.nombre}
                </p>
              </div>
              <div className="mb-2 flex flex-row justify-center gap-4 text-white">
                <div className="flex min-w-[6rem] flex-col items-center justify-center">
                  <p className="home-title bg-clip-text text-center font-bold">
                    VENTA
                  </p>
                  <p className="calculator-gradient__text bg-clip-text text-center text-base font-bold">
                    ${dolarInfo.venta}
                  </p>
                </div>
                <div className="flex min-w-[6rem] flex-col items-center justify-center">
                  <p className="home-title bg-clip-text text-center font-bold">
                    COMPRA
                  </p>
                  <p className="calculator-gradient__text bg-clip-text text-center text-base font-bold">
                    ${dolarInfo.compra}
                  </p>
                </div>
              </div>
              <div className="mb-2 flex justify-center rounded-sm bg-[#111] p-2 text-white sm:flex">
                <span className="mr-2">Variacion: </span>
                <div className="flex items-center">
                  {Number(dolarInfo.variacion) > 0 && (
                    <>
                      <p>{dolarInfo.variacion}%</p>
                      <FaCaretUp className="mr-1 h-6 w-6 text-green-600" />
                    </>
                  )}

                  {Number(dolarInfo.variacion) < 0 && (
                    <>
                      <p>{dolarInfo.variacion}%</p>
                      <FaCaretDown className="mr-1 h-6 w-6 text-red-600" />
                    </>
                  )}
                  {Number(dolarInfo.variacion) == 0 && (
                    <>
                      <FaMinus className="mr-1 flex h-4 w-4 items-center justify-center text-white" />
                      <p className="mr-1">{dolarInfo.variacion}%</p>
                    </>
                  )}
                </div>
              </div>
              <div className=" text-center text-sm text-white sm:inline-block">
                <p>Actualizado: {lastUpdate}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
