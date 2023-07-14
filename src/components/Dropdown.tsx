import { useEffect, useState } from "react";
import { ServiceType } from "@/types";
import { HiChevronDown } from "react-icons/hi";

interface Planes {
  id: number;
  plan: string;
  descripcion: {
    plan_description_id: number;
    plan_description: string;
  }[];
  precio: number;
}

export const Dropdown = ({
  serviceSelected,
  selectPlan,
  setSelectPlan,
}: {
  serviceSelected: ServiceType;
  selectPlan: Planes;
  setSelectPlan: (selectPlan: Planes) => void;
}): JSX.Element => {
  const [dropwDownActive, setDropDownAcitve] = useState(false);

  console.log(selectPlan);

  const handleChangePlan = (plan: Planes) => {
    setSelectPlan(plan);
    setDropDownAcitve(false);
  };

  return (
    <div className="absolute -top-28 right-4 h-auto w-64 rounded-md border border-white/20 bg-black p-2 text-white">
      <div className="border-effect__top absolute -top-0.5 left-20 h-0.5 w-20 -translate-x-1/2"></div>
      <div className="border-effect__left absolute -right-0.5 top-0 h-12 w-0.5"></div>

      <span className="absolute left-2 h-auto text-sm font-normal">
        Seleccionar Plan
      </span>
      <div className="relative mt-6 flex h-auto w-full rounded-sm bg-[#222] px-2 py-0.5">
        <div
          onClick={() => setDropDownAcitve((prev) => !prev)}
          className="flex w-full cursor-pointer flex-row items-center justify-between"
        >
          <p>{selectPlan?.plan}</p>
          <HiChevronDown className="h-4 w-4" />
        </div>
        <div
          className={`absolute bg-black ${
            dropwDownActive ? `opacity-1` : `invisible opacity-0`
          } left-0 top-8 mt-2 flex w-full flex-col rounded-md border border-white/20 py-2 text-sm shadow-lg transition-all dark:shadow-black `}
        >
          <div className="border-effect__top absolute -top-0.5 left-20 h-0.5 w-20 -translate-x-1/2"></div>
          <div className="border-effect__left absolute -right-0.5 top-10 h-12 w-0.5"></div>
          {serviceSelected.planes.map((plan) => (
            <p
              onClick={() => handleChangePlan(plan)}
              key={plan.id}
              className="text-primary/60 hover:text-primary flex h-11 w-full items-center justify-start px-8 hover:cursor-pointer hover:bg-white/10"
            >
              {plan.plan}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
