import { useState, useRef } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { inter } from "@/utils/fonts";
import plataformasData from "../assets/plataformas.json";

export const Plan = ({ plans }: { plans: any }): JSX.Element => {
  const [planSelect, setPlanSelect] = useState<number | null>(null);
  const { plataformas } = plataformasData;

  const finalPrice = (
    plataformas[0].impuesto_porcentaje * plans.precio
  ).toFixed(2);

  const element1: any = useRef(null);

  const toggleTax = (numberPlan: number) => {
    console.log(element1.current?.scrollHeight);
    if (numberPlan != planSelect) {
      setPlanSelect(numberPlan);
      let la = element1.current?.scrollHeight.toString() + "px";
      element1.current.style.height = la;
    } else {
      setPlanSelect(null);
      element1.current.style.height = "4rem";
    }
  };
  return (
    <li
      ref={element1}
      onClick={() => toggleTax(plans.id)}
      className={
        plans.id == planSelect
          ? `border-b border-t border-white/30 text-white transition-[height]`
          : `h-16 overflow-hidden border-b border-t border-white/30 text-white transition-[height]`
      }
      key={plans.id}
    >
      <div className="flex items-center justify-between p-4">
        <div className="bg-gradient__effect flex font-normal text-transparent">
          <p className="mr-2">{plans.plan}</p>
          <b className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text font-normal">
            ${`${plans.precio}`}
          </b>
          <span>/</span>
          <b className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text font-normal">
            ${`${finalPrice}`}
          </b>
        </div>
        <FaAngleDown
          className={`h-5 w-5 text-white transition-all ${
            planSelect == plans.id && `rotate-180 text-white transition-all`
          }`}
        />
      </div>
      <div
        className={`h-auto text-sm transition-[height] ${
          planSelect == plans.id && `h-24 transition-[height]`
        }`}
      >
        <ul
          className={`p-4 font-serif font-normal ${inter.className} flex flex-col font-bold text-white/70`}
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
