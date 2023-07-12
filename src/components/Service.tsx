import { ServiceType } from "@/types";
import Image from "next/image";
import { Taxes } from "./Taxes";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Plans } from "./Plans";

export const Service = ({
  serviceSelected,
}: {
  serviceSelected: ServiceType;
}): JSX.Element => {
  const [serviceOptionSelect, setServiceOptionSelect] = useState<number>(1);
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
  }, [serviceSelected.id]);

  return (
    <section className="mb-20 h-auto px-4 pt-28">
      <div
        ref={service}
        className="relative h-full w-full rounded-md border border-white/20"
      >
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
        {serviceOptionSelect == 2 && <Taxes />}
        {serviceOptionSelect == 3 && (
          <Plans serviceSelected={serviceSelected} />
        )}
      </div>
    </section>
  );
};
