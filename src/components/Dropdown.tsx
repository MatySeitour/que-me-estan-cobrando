import { useEffect, useState, useRef } from "react";
import { ServiceType } from "@/types";
import { HiChevronDown } from "react-icons/hi";
import { gsap } from "gsap";

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
  const dropdown = useRef(null);

  const handleChangePlan = (plan: Planes) => {
    setSelectPlan(plan);
    setDropDownAcitve(false);
  };

  useEffect(() => {
    setSelectPlan(serviceSelected.planes[0]);
    gsap.fromTo(
      dropdown.current,
      {
        opacity: 0,
        duration: 0.5,
      },
      {
        opacity: 1,
        duration: 0.5,
      }
    );
  }, [serviceSelected]);

  return (
    <div className="relative flex h-auto w-full justify-end pr-4">
      <div
        ref={dropdown}
        className="-top-14 left-0 z-50 flex h-auto w-full items-center rounded-md border-transparent bg-black p-2 text-white sm:relative sm:left-auto sm:top-auto sm:inline-block sm:w-[25rem] sm:border sm:border-white/20"
      >
        <div className="border-effect__top absolute -top-0.5 left-20 hidden h-0.5 w-20 -translate-x-1/2 sm:inline-block"></div>
        <div className="border-effect__left absolute -right-0.5 top-0 hidden h-12 w-0.5 sm:inline-block"></div>

        <span className="left-2 h-auto w-full text-sm font-normal sm:absolute">
          Seleccionar Plan
        </span>
        <div className="flex h-auto w-full rounded-sm sm:mt-6 sm:bg-[#222] sm:px-2 sm:py-0.5">
          <div
            onClick={() => setDropDownAcitve((prev) => !prev)}
            className="flex w-full cursor-pointer flex-row items-center justify-end sm:justify-between"
          >
            <p className="hidden sm:inline-block">{selectPlan?.plan}</p>
            <p className="inline-block text-sm sm:hidden">
              {selectPlan?.plan.length > 10
                ? `${selectPlan.plan.slice(0, 13)}...`
                : selectPlan?.plan}
            </p>
            <HiChevronDown className="ml-2 h-4 w-4 sm:ml-0" />
          </div>
          <div
            className={`absolute bg-black ${
              dropwDownActive ? `opacity-1` : `invisible opacity-0`
            } left-1/2 top-10 mt-2 flex w-full max-w-[300px] -translate-x-1/2 flex-col rounded-md border border-white/20 py-2 text-sm shadow-lg transition-all dark:shadow-black sm:left-0 sm:top-16 sm:min-w-full sm:translate-x-0 `}
          >
            <div className="border-effect__top absolute -top-0.5 left-20 h-0.5 w-20 -translate-x-1/2"></div>
            <div className="border-effect__top absolute -bottom-0.5 left-20 h-0.5 w-20 -translate-x-1/2"></div>
            <div className="border-effect__left absolute -right-0.5 top-2 h-12 w-0.5"></div>
            <div>
              {serviceSelected.planes.map((plan) => (
                <>
                  <p
                    onClick={() => handleChangePlan(plan)}
                    key={plan.id}
                    className="text-primary/60 hover:text-primary hidden h-11 w-full items-center justify-start px-8 hover:cursor-pointer hover:bg-white/10 sm:flex"
                  >
                    {plan.plan}
                  </p>
                </>
              ))}
            </div>
            <div>
              {serviceSelected.planes.map((plan) => (
                <p
                  onClick={() => handleChangePlan(plan)}
                  key={plan.id}
                  className="text-primary/60 hover:text-primary flex h-11 w-full items-center justify-start px-8 hover:cursor-pointer hover:bg-white/10 sm:hidden"
                >
                  {plan.plan.length > 10
                    ? `${plan.plan.slice(0, 26)}...`
                    : plan.plan}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
