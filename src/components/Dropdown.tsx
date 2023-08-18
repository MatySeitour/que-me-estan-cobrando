import { useEffect, useState, useRef } from "react";
import { ServiceType, PlansType } from "@/types";
import { HiChevronDown } from "react-icons/hi";
import { gsap } from "gsap";

export const Dropdown = ({
  serviceSelected,
  selectPlan,
  setSelectPlan,
  serviceOptionSelect,
}: {
  serviceSelected: ServiceType;
  selectPlan: PlansType | null;
  setSelectPlan: (selectPlan: PlansType) => void;
  serviceOptionSelect: number;
}): JSX.Element => {
  const [dropwDownActive, setDropDownAcitve] = useState(false);
  const dropdown = useRef(null);

  // Función que cambia el plan y desactiva el dropdown
  const handleChangePlan = (plan: PlansType) => {
    setSelectPlan(plan);
    setDropDownAcitve(false);
  };

  // UseEffect que se ejecuta cada vez que el servicio seleccionado se cambia.
  //Cada vez que ocurre esto, seleciona el primer valor de los planes y lo muestra en el dropdown
  useEffect(() => {
    setSelectPlan(serviceSelected.plans[0]);
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
    <div
      className={`relative flex h-[4.5rem] w-full justify-end pr-4 ${
        serviceOptionSelect != 1 && `hidden`
      }`}
    >
      <div
        ref={dropdown}
        className="-top-14 left-0 z-50 flex h-auto w-full items-center rounded-md border-transparent bg-black p-2 sm:relative sm:left-auto sm:top-auto sm:inline-block sm:w-[25rem] sm:border sm:border-white/20"
      >
        <div className="border-effect__top absolute -top-0.5 left-20 hidden h-0.5 w-20 -translate-x-1/2 sm:inline-block"></div>
        <div className="border-effect__left absolute -right-0.5 top-0 hidden h-12 w-0.5 sm:inline-block"></div>

        <span className="left-2 mr-2 h-auto w-auto text-sm font-normal text-white sm:absolute sm:mr-0">
          Seleccionar Plan
        </span>
        <div className="flex h-auto w-auto rounded-sm sm:mt-6 sm:bg-[#222] sm:px-2 sm:py-0.5">
          <div
            onClick={() => setDropDownAcitve((prev) => !prev)}
            className="flex w-full flex-row items-center justify-end sm:cursor-pointer sm:justify-between"
          >
            <p className="hidden bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text font-normal text-transparent sm:inline-block">
              {selectPlan?.name}
            </p>
            <p className="inline-block bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text text-sm font-normal text-transparent sm:hidden">
              {selectPlan?.name.length != undefined &&
              selectPlan?.name.length > 10
                ? `${selectPlan.name.slice(0, 13)}...`
                : selectPlan?.name}
            </p>
            <HiChevronDown className="ml-2 h-4 w-4 text-white sm:ml-0" />
          </div>
          <div
            className={`absolute bg-black text-white ${
              dropwDownActive ? `opacity-1` : `invisible opacity-0`
            } left-1/2 top-10 mt-2 flex w-full max-w-[300px] -translate-x-1/2 flex-col rounded-md border border-white/20 py-2 text-sm shadow-lg transition-all dark:shadow-black sm:left-0 sm:top-16 sm:min-w-full sm:translate-x-0 `}
          >
            <div className="border-effect__top absolute -top-0.5 left-20 h-0.5 w-20 -translate-x-1/2"></div>
            <div className="border-effect__top absolute -bottom-0.5 left-20 h-0.5 w-20 -translate-x-1/2"></div>
            <div className="border-effect__left absolute -right-0.5 top-2 h-12 w-0.5"></div>
            <div>
              {serviceSelected.plans.map((plan) => (
                <p
                  onClick={() => handleChangePlan(plan)}
                  key={plan.id}
                  className="text-primary/60 hover:text-primary hidden h-11 w-full items-center justify-start px-8 hover:bg-white/10 sm:flex hover:sm:cursor-pointer"
                >
                  {plan.name}
                </p>
              ))}
            </div>
            <div>
              {serviceSelected.plans.map((plan) => (
                <p
                  onClick={() => handleChangePlan(plan)}
                  key={plan.id}
                  className="text-primary/60 hover:text-primary flex h-11 w-full items-center justify-start px-8 hover:bg-white/10 sm:hidden hover:sm:cursor-pointer"
                >
                  {plan.name.length > 10
                    ? `${plan.name.slice(0, 26)}...`
                    : plan.name}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
