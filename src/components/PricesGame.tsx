import impuestosData from "../assets/impuestos.json";
import { HiInformationCircle } from "react-icons/hi2";

export const PricesGame = ({
  inputPriceValue,
}: {
  inputPriceValue: string;
}): JSX.Element => {
  const { impuestos } = impuestosData;

  return (
    <div className="h-auto w-full">
      <div className="flex h-10 w-full">
        <p className="flex-[2] bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text p-2 text-left text-lg font-normal text-transparent">
          PRECIO INICIAL
        </p>
        <p className="flex-[.5] p-2 text-center text-lg text-white"></p>
        <p className="flex-[1] bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text p-2 text-center text-lg font-normal text-transparent">
          {inputPriceValue == "" ? "$0" : `$${inputPriceValue}`}
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
                    El porcentaje del impuesto puede variar según la provincia
                  </p>
                </span>
              </div>
            </div>
            <p className="bg-gradient__effect flex-[.5] p-2 text-center text-lg font-normal text-transparent">
              {impuesto.porcentaje}%
            </p>
            <p className="bg-gradient__effect flex-1 p-2 text-center text-lg font-normal text-transparent">
              {inputPriceValue == ""
                ? "$0"
                : `$${(
                    (Number(inputPriceValue) * impuesto.porcentaje) /
                    100
                  ).toFixed(2)}`}
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
          {inputPriceValue == ""
            ? "$0"
            : `$${(Number(inputPriceValue) * 1.75).toFixed(2)}`}
        </p>
      </div>
    </div>
  );
};
