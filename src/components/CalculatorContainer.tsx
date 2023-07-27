import { ChangeEvent, useEffect, useState } from "react";
import { paytone_One } from "@/utils/fonts";
import { FaCaretDown, FaCaretUp, FaMinus } from "react-icons/fa6";

const enum Operation {
  buy = "comprar",
  sell = "vender",
}

export const CalculatorContainer = ({
  dollarCalculator,
  lastUpdate,
}: {
  dollarCalculator: any;
  lastUpdate: string;
}): JSX.Element => {
  const [inputCalculator, setInputCalculator] = useState<string>("");
  const [dollarType, setDollarType] = useState<any>([]);
  const [calculateType, setCalculateType] = useState<Operation>(Operation.buy);

  const handleOnInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) >= 0 && e.target.value[0] != "0") {
      setInputCalculator(e.target.value);
    }
  };

  return (
    <div className="mx-auto flex h-full w-full max-w-4xl flex-col gap-10 p-4 sm:max-w-7xl">
      <h1
        className={`calculator-gradient__text bg-clip-text text-5xl ${paytone_One.className} pb-2 text-center`}
      >
        ¿A cuanto el dólar?
      </h1>
      <div className="flex items-center justify-center text-center">
        <p className="max-w-2xl text-lg text-white">
          <b className="calculator-gradient__text bg-clip-text">Conoce </b>la
          cotización del dólar y{" "}
          <b className="calculator-gradient__text bg-clip-text">calcula</b> el
          precio que deseas vender o comprar dependiendo el tipo de cambio que
          vos
          <b className="calculator-gradient__text bg-clip-text"> elijas</b>
        </p>
      </div>
      <div className="flex h-auto w-full flex-col gap-2 rounded-md border border-white/30 p-2">
        <div className="relative mb-4 flex flex-row justify-center gap-6"></div>
        <div className="w-full">
          <div className="mb-2 flex justify-center">
            <h3 className="home-title bg-clip-text text-center text-base font-bold sm:text-2xl">
              Selecciona el tipo de cambio que quieras para calcular cuanto
              deseas{" "}
              <b className="calculator-gradient__text bg-clip-text">comprar</b>/
              <b className="calculator-gradient__text bg-clip-text">vender</b>
            </h3>
          </div>
          <div
            className={`flex w-full flex-col justify-between rounded-md border border-white/20 px-2 outline-none sm:p-8 ${
              dollarType.length == 0
                ? `invisible h-0 transition-[height]`
                : `h-72 p-2 transition-[height]`
            }`}
          >
            <div
              className={`${
                dollarType.length == 0
                  ? `invisible transition-all duration-1000`
                  : `visible transition-all duration-1000`
              } mb-4 flex flex-col items-center justify-center gap-4`}
            >
              <div className="">
                <p className="home-title mb-2 bg-clip-text text-center text-2xl font-bold">
                  {dollarType.nombre}
                </p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <div className="flex items-center justify-center">
                    <p className="home-title mr-1 bg-clip-text text-center text-xl font-bold">
                      Compra:{" "}
                    </p>
                    <b className="calculator-gradient__text bg-clip-text text-xl">
                      {dollarType.compra}
                    </b>
                  </div>
                  <div className="flex items-center justify-center">
                    <p className="home-title mr-1 bg-clip-text text-center text-xl font-bold">
                      Venta:{" "}
                    </p>
                    <b className="calculator-gradient__text bg-clip-text text-center text-xl">
                      {dollarType.venta}
                    </b>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() => setCalculateType(Operation.buy)}
                  className={`rounded-full border border-green-500 p-2 font-semibold text-white hover:bg-white/10 ${
                    calculateType == Operation.buy &&
                    `border-transparent bg-gradient-to-b from-[#1fbd06] to-green-800`
                  }`}
                >
                  Quiero comprar
                </button>
                <button
                  onClick={() => setCalculateType(Operation.sell)}
                  className={`rounded-full border border-green-500 p-2 font-semibold text-white hover:bg-white/10 ${
                    calculateType == Operation.sell &&
                    `border-transparent bg-gradient-to-b from-[#1fbd06] to-green-800`
                  }`}
                >
                  Quiero vender
                </button>
              </div>
            </div>
            {/* <span className="home-title bg-clip-text text-right font-bold">
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
            </span> */}

            <div
              className={`flex w-full flex-col items-center justify-center gap-2`}
            >
              <div className="dollar-input__container flex w-72 items-center justify-center rounded-md border border-white/20 pl-2">
                <span className="w-16 text-white">USD$</span>
                <input
                  name="calculator"
                  onChange={handleOnInputChange}
                  value={inputCalculator}
                  type="number"
                  pattern="[0-9]+"
                  id="calculator"
                  placeholder={
                    calculateType == Operation.buy
                      ? `Escribe el monto de compra...`
                      : `Escribe el monto de venta...`
                  }
                  className="h-full w-full max-w-[15rem] rounded-r-md bg-black/50 p-1 text-left font-bold text-white outline-none placeholder:text-xs"
                />
              </div>
              <div className="flex w-72 items-center justify-center rounded-md border border-white/20 pl-2">
                <span className="w-16 text-white">ARS$</span>
                <input
                  readOnly
                  name="calculator"
                  onChange={handleOnInputChange}
                  value={
                    calculateType == Operation.buy
                      ? (
                          Number(inputCalculator) * Number(dollarType.compra)
                        ).toFixed(2)
                      : (
                          Number(inputCalculator) * Number(dollarType.venta)
                        ).toFixed(2)
                  }
                  type="type"
                  pattern="[0-9]+"
                  id="calculator"
                  className="h-full w-full max-w-[15rem] rounded-r-md bg-black/50 p-1 text-left font-bold text-white outline-none placeholder:text-xs"
                />
              </div>
            </div>
          </div>
        </div>
        <ul className="flex h-auto flex-col gap-4 py-2 sm:grid sm:grid-cols-3 sm:gap-4">
          {dollarCalculator?.map((dollarInfo: any) => (
            <li
              key={dollarInfo.nombre}
              onClick={() => setDollarType(dollarInfo)}
              className={`flex flex-col justify-between rounded-md bg-white/10 p-2 outline sm:h-auto sm:w-full ${
                dollarType.nombre == dollarInfo.nombre
                  ? `outline-green-600`
                  : `outline-transparent`
              }`}
            >
              <div className="mb-2 flex justify-center gap-4 text-white">
                <p className="home-title bg-clip-text text-center text-2xl font-bold">
                  {dollarInfo.nombre}
                </p>
              </div>
              <div className="mb-2 flex flex-row justify-center gap-4 text-white">
                <div className="flex min-w-[6rem] flex-col items-center justify-center">
                  <p className="home-title bg-clip-text text-center font-bold">
                    VENTA
                  </p>
                  <p className="calculator-gradient__text bg-clip-text text-center text-base font-bold">
                    ${dollarInfo.venta}
                  </p>
                </div>
                <div className="flex min-w-[6rem] flex-col items-center justify-center">
                  <p className="home-title bg-clip-text text-center font-bold">
                    COMPRA
                  </p>
                  <p className="calculator-gradient__text bg-clip-text text-center text-base font-bold">
                    ${dollarInfo.compra}
                  </p>
                </div>
              </div>
              <div className="mb-2 flex justify-center rounded-sm bg-[#111] p-2 text-white sm:flex">
                <span className="mr-2">Variacion: </span>
                <div className="flex items-center">
                  {Number(dollarInfo.variacion) > 0 && (
                    <>
                      <p>{dollarInfo.variacion}%</p>
                      <FaCaretUp className="mr-1 h-6 w-6 text-green-600" />
                    </>
                  )}

                  {Number(dollarInfo.variacion) < 0 && (
                    <>
                      <p>{dollarInfo.variacion}%</p>
                      <FaCaretDown className="mr-1 h-6 w-6 text-red-600" />
                    </>
                  )}
                  {Number(dollarInfo.variacion) == 0 && (
                    <>
                      <FaMinus className="mr-1 flex h-4 w-4 items-center justify-center text-white" />
                      <p className="mr-1">{dollarInfo.variacion}%</p>
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
