import { ServiceType } from "@/types";
import Image from "next/image";
import { Taxes } from "./Taxes";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Plans } from "./Plans";
import { CustomEase } from "gsap/dist/CustomEase";
import { Prices } from "./Prices";

interface Planes {
  id: number;
  plan: string;
  descripcion: {
    plan_description_id: number;
    plan_description: string;
  }[];
  precio: number;
}

export const Service = ({
  serviceSelected,
}: {
  serviceSelected: ServiceType;
}): JSX.Element => {
  const [serviceOptionSelect, setServiceOptionSelect] = useState<number>(1);
  const [selectPlan, setSelectPlan] = useState<any>();
  const service = useRef(null);
  const logoService = useRef(null);

  useEffect(() => {
    const serviceContainer = document.querySelector("#service-container");
    gsap.fromTo(
      service.current,
      {
        scrollTrigger: {
          trigger: serviceContainer,
          start: "start center",
          end: "start center",
          scrub: 1,
        },
        opacity: 0,
        duration: 2,
      },

      {
        scrollTrigger: {
          trigger: serviceContainer,
          start: "start center",
          end: "start center",

          scrub: 1,
        },
        opacity: 1,
        duration: 2,
      }
    );
  }, []);

  useEffect(() => {
    const borderTop = document.querySelector(".border-effect__top");
    const borderLeft = document.querySelector(".border-effect__left");
    gsap.registerPlugin(CustomEase);

    gsap.fromTo(
      logoService.current,
      {
        opacity: 0,
        duration: 0.4,
      },
      {
        opacity: 1,
        duration: 0.4,
      }
    );

    gsap.fromTo(
      borderTop,
      {
        xPercent: 500,
        duration: 0.4,
        ease: CustomEase.create(
          "custom",
          "M0,0 C0,0 0.382,-0.054 0.609,0.126 0.692,0.192 0.762,0.602 0.762,0.677 0.762,0.75 0.77,0.712 0.77,0.784 0.77,0.845 0.795,0.876 0.817,0.922 0.839,0.968 0.846,0.956 0.868,1.004 0.887,1.045 0.894,1.032 0.912,1.046 0.955,1.079 1,1.152 1,1.152 "
        ),
      },
      {
        xPercent: 0,
        duration: 0.4,
        ease: CustomEase.create(
          "custom",
          "M0,0 C0,0 0.382,-0.054 0.609,0.126 0.692,0.192 0.762,0.602 0.762,0.677 0.762,0.75 0.77,0.712 0.77,0.784 0.77,0.845 0.795,0.876 0.817,0.922 0.839,0.968 0.846,0.956 0.868,1.004 0.887,1.045 0.894,1.032 0.912,1.046 0.955,1.079 1,1.152 1,1.152 "
        ),
      }
    );

    gsap.fromTo(
      borderLeft,
      {
        yPercent: 0,
        duration: 0.4,
        ease: CustomEase.create(
          "custom",
          "M0,0 C0,0 0.382,-0.054 0.609,0.126 0.692,0.192 0.762,0.602 0.762,0.677 0.762,0.75 0.77,0.712 0.77,0.784 0.77,0.845 0.795,0.876 0.817,0.922 0.839,0.968 0.846,0.956 0.868,1.004 0.887,1.045 0.894,1.032 0.912,1.046 0.955,1.079 1,1.152 1,1.152 "
        ),
      },
      {
        yPercent: 100,
        ease: CustomEase.create(
          "custom",
          "M0,0 C0,0 0.382,-0.054 0.609,0.126 0.692,0.192 0.762,0.602 0.762,0.677 0.762,0.75 0.77,0.712 0.77,0.784 0.77,0.845 0.795,0.876 0.817,0.922 0.839,0.968 0.846,0.956 0.868,1.004 0.887,1.045 0.894,1.032 0.912,1.046 0.955,1.079 1,1.152 1,1.152 "
        ),
        duration: 0.4,
      }
    );
  }, [serviceSelected.id]);

  return (
    <section className="mb-20 h-auto px-4 pt-28">
      <div
        ref={service}
        className="relative h-full w-full rounded-md border border-white/20"
      >
        <div className="border-effect__top absolute -top-0.5 left-20 h-0.5 w-20 -translate-x-1/2"></div>
        <div className="border-effect__left absolute -left-0.5 top-20 h-20 w-0.5"></div>
        <div className="border-effect__left absolute -right-0.5 top-20 h-20 w-0.5"></div>
        <div className="border-effect__bottom absolute -bottom-0.5 -right-0.5 h-0.5 w-20"></div>
        <div className="absolute left-1/2 top-2 flex h-auto w-auto -translate-x-1/2 flex-row gap-6 text-white">
          <div
            onClick={() => setServiceOptionSelect(1)}
            className={`relative rounded-md before:absolute before:bottom-0 before:h-[0.1rem] before:bg-red-400 ${
              serviceOptionSelect == 1 && `option-active__1`
            }`}
          >
            <p className="p-2">Precios</p>
          </div>
          <div
            onClick={() => setServiceOptionSelect(2)}
            className={`relative rounded-md before:absolute before:bottom-0 before:h-[0.1rem] before:bg-red-400 ${
              serviceOptionSelect == 2 && `option-active__2`
            }`}
          >
            <p className="p-2">Impuestos</p>
          </div>
          <div
            onClick={() => setServiceOptionSelect(3)}
            className={`relative rounded-md before:absolute before:bottom-0 before:h-[0.1rem] before:bg-red-400 ${
              serviceOptionSelect == 3 && `option-active__3`
            }`}
          >
            <p className="p-2">Planes</p>
          </div>
          <div className="item-b absolute -left-3 h-10 w-[6.5rem] overflow-hidden rounded-md border border-white/40 transition-all">
            <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 h-full w-full">
              <div className="relative flex h-full w-full place-items-center before:absolute before:h-full before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-transparent before:to-[#0B121C10] after:absolute after:bottom-4 after:left-[0%] after:-z-20 after:h-[100px] after:w-[140px] after:translate-x-1/3 after:bg-gradient-conic after:from-[#39f2aea5]/30 after:via-[#2D5FFF]/50 after:blur-2xl after:content-['']" />
            </div>
          </div>
        </div>
        <div className="flex h-40 w-40 items-center justify-center px-4">
          <Image
            ref={logoService}
            alt={serviceSelected?.nombre}
            src={serviceSelected?.imagen}
            width={2000}
            height={2000}
          />
        </div>
        {serviceOptionSelect == 1 && (
          <Prices
            selectPlan={selectPlan}
            setSelectPlan={setSelectPlan}
            serviceSelected={serviceSelected}
          />
        )}
        {serviceOptionSelect == 2 && <Taxes />}
        {serviceOptionSelect == 3 && (
          <Plans serviceSelected={serviceSelected} />
        )}
      </div>
    </section>
  );
};
