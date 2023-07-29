import Image from "next/image";
import plataformasData from "../../src/assets/plataformas.json";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import { ServiceType } from "@/types";

export const SelectService = ({
  serviceSelected,
  setServiceSelected,
}: {
  serviceSelected: ServiceType;
  setServiceSelected: any;
}) => {
  const { plataformas } = plataformasData;
  const selectService: any = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const serviceContainer = document.querySelector("#service-container");
    let ctx = gsap.context(() => {
      gsap.fromTo(
        selectService.current,
        {
          scrollTrigger: {
            trigger: serviceContainer,
            start: "start 70%",
            end: "start 70%",
          },
          y: -70,
          opacity: 0,
          duration: 0.5,
        },

        {
          scrollTrigger: {
            trigger: serviceContainer,
            start: "start 70%",
            end: "start 70%",
          },
          y: 0,
          opacity: 1,
          duration: 0.5,
        }
      );
    }, selectService);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={selectService}
      className="relative flex before:absolute before:-right-1 before:z-10 before:h-full before:w-12 before:bg-gradient-to-l before:from-[#000] before:to-transparent"
    >
      <ul className="relative mx-auto flex gap-4 overflow-x-scroll px-8 py-14 lg:flex lg:overflow-x-hidden">
        {plataformas.map((service) => (
          <li
            className={`service-item__${
              service.id
            } group relative flex h-24 w-28 items-center transition-all sm:cursor-pointer ${
              service.id == 0 && ``
            } ${
              serviceSelected.id == service.id &&
              `active__${service.id} rounded-md outline outline-1 outline-white/20`
            }`}
            key={service.id}
          >
            <div
              className={`item-a absolute -z-10 h-full w-full overflow-hidden rounded-md ${
                serviceSelected.id == service.id ? `visible` : `invisible`
              }`}
            >
              <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 h-full w-full">
                <div className="relative flex h-full w-full place-items-center before:absolute before:h-full before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-transparent before:to-[#0B121C10] after:absolute after:bottom-4 after:left-[0%] after:-z-20 after:h-[100px] after:w-[140px] after:translate-x-1/3 after:bg-gradient-conic after:from-[#39f2aea5]/30 after:via-[#2D5FFF]/50 after:blur-2xl after:content-['']" />
              </div>
            </div>
            <div
              onClick={() => setServiceSelected(service)}
              className={`relative flex h-20 w-28 items-center justify-center rounded-sm p-2 transition-all`}
            >
              <Image
                alt={service.nombre}
                src={service.imagen}
                width={500}
                height={500}
                className={`h-20 w-28`}
              />
            </div>
            <span className="invisible absolute -top-14 left-[50%] -translate-x-1/2 whitespace-nowrap rounded-md border border-white/20 p-2 text-sm text-white opacity-0 transition-all before:absolute before:-bottom-2 before:left-1/2 before:h-4 before:w-4 before:-translate-x-1/2 before:rotate-45 before:border-b before:border-r before:border-white/20 before:bg-black sm:group-hover:visible sm:group-hover:opacity-100">
              {service.nombre}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
