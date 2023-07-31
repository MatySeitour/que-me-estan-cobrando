import { useRef } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { inter } from "@/utils/fonts";
import plataformasData from "../assets/plataformas.json";

export const Plan = ({
  plans,
  planSelect,
  setPlanSelect,
  serviceSelected,
}: {
  plans: any;
  planSelect: number | null;
  setPlanSelect: (arg: number | null) => void;
  serviceSelected: any;
}): JSX.Element => {
  const { plataformas } = plataformasData;

  const finalPrice = (
    plataformas[0].impuesto_porcentaje * plans.precio
  ).toFixed(2);

  const element1: any = useRef(null);

  const toggleTax = (numberPlan: number) => {
    const planId = document.querySelector(`#plan__${planSelect}`);
    planId?.setAttribute("style", "height: 0px");
    if (numberPlan != planSelect) {
      let la = element1.current?.scrollHeight.toString() + "px";
      element1.current.style.height = la;
      setPlanSelect(numberPlan);
    } else {
      setPlanSelect(null);
      element1.current.style.height = "0rem";
    }
  };

  return (
    <li
      id={`plans`}
      onClick={() => toggleTax(plans.id)}
      className={`border-b border-white/30 text-white sm:cursor-pointer`}
      key={plans.id}
    >
      <div className="flex items-center justify-between gap-4 p-4">
        <div className="flex items-center">
          <p className="bg-gradient__effect mr-2 sm:hidden">
            {" "}
            {plans?.plan.length > 10
              ? `${plans.plan.slice(0, 13)}...`
              : plans?.plan}
          </p>
          <p className="bg-gradient__effect mr-2 hidden sm:inline-block">
            {plans.plan}
          </p>
          <div className="group relative">
            <p className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text font-normal text-transparent">
              ${`${plans.precio}`}
            </p>

            <span className="service-message invisible absolute -top-14 left-[50%] -translate-x-1/2 whitespace-nowrap rounded-md border border-white/20 bg-black p-2 text-sm text-red-300 opacity-0 transition-all before:absolute before:-bottom-2 before:left-1/2 before:h-4 before:w-4 before:-translate-x-1/2 before:rotate-45 before:border-b before:border-r before:border-white/20 before:bg-black group-hover:visible group-hover:opacity-100">
              <p className="text-white">Precio Inicial</p>
            </span>
          </div>
          <span className="bg-gradient__effect">/</span>

          <div className="group relative">
            <p className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text font-normal text-transparent">
              ${`${finalPrice}`}
            </p>

            <span className="service-message invisible absolute -top-14 left-[50%] -translate-x-1/2 whitespace-nowrap rounded-md border border-white/20 bg-black p-2 text-sm text-red-300 opacity-0 transition-all before:absolute before:-bottom-2 before:left-1/2 before:h-4 before:w-4 before:-translate-x-1/2 before:rotate-45 before:border-b before:border-r before:border-white/20 before:bg-black group-hover:visible group-hover:opacity-100">
              <p className="text-white">Precio Final</p>
            </span>
          </div>
        </div>
        <FaAngleDown
          className={`h-5 w-5 transition-all ${
            planSelect == plans.id && `rotate-180 transition-all`
          }`}
        />
      </div>
      <div
        id={`plan__${plans.id}`}
        ref={element1}
        className={`h-0 overflow-hidden text-sm transition-[height] ${
          planSelect == plans.id && `h-32 transition-[height] sm:h-20`
        }`}
      >
        <ul
          className={
            plans.id == planSelect
              ? `p-4 font-serif font-normal ${inter.className} visible flex flex-col font-bold text-white/70 opacity-100 transition-[opacity]`
              : `p-4 font-serif font-normal ${inter.className} invisible flex flex-col font-bold text-white/70 opacity-0 transition-[opacity]`
          }
        >
          {plans.descripcion.map((planDescription: any) => (
            <li key={planDescription.plan_description_id}>
              {planDescription.plan_description}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};
