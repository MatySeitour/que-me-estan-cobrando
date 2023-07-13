import { useState, useRef, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { inter } from "@/utils/fonts";
import plataformasData from "../assets/plataformas.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const Plan = ({ plans }: { plans: any }): JSX.Element => {
  const [planSelect, setPlanSelect] = useState<number | null>(null);
  const { plataformas } = plataformasData;

  const finalPrice = (
    plataformas[0].impuesto_porcentaje * plans.precio
  ).toFixed(2);

  const element1: any = useRef(null);

  const toggleTax = (numberPlan: number) => {
    if (numberPlan != planSelect) {
      setPlanSelect(numberPlan);
      let la = element1.current?.scrollHeight.toString() + "px";
      element1.current.style.height = la;
    } else {
      setPlanSelect(null);
      element1.current.style.height = "4rem";
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const titleCard = gsap.utils.toArray(`#plans`);

    const tl = gsap.timeline({ paused: true, reversed: true });

    tl.play();

    titleCard.forEach((plan: any) => {
      tl.fromTo(
        plan,
        {
          yPercent: -20,
          opacity: 0,
          duration: 0.2,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.2,
        }
      );
    });
  }, []);
  return (
    <li
      id={`plans`}
      ref={element1}
      onClick={() => toggleTax(plans.id)}
      className={
        plans.id == planSelect
          ? ` border-t border-white/30 transition-[height]`
          : `h-16 border-t border-white/30 transition-[height]`
      }
      key={plans.id}
    >
      <div className="flex items-center justify-between p-4">
        <div className="flex font-normal">
          <p className="bg-gradient__effect mr-2">{plans.plan}</p>
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
