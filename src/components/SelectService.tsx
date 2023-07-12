import Image from "next/image";
import plataformasData from "../assets/plataformas.json";
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

    gsap.fromTo(
      selectService.current,
      {
        scrollTrigger: {
          trigger: serviceContainer,
          start: "start center",
          end: "start center",
          scrub: 1,
        },
        yPercent: -50,
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
        yPercent: 0,
        opacity: 1,
        duration: 2,
      }
    );
  }, []);

  return (
    <div
      ref={selectService}
      className=" flex w-full items-center justify-center px-4 pt-20"
    >
      <ul className="relative flex h-full w-full max-w-3xl items-start justify-center gap-4">
        {plataformas.map((service) => (
          <li
            className={`service-item__${
              service.id
            } inline-block h-40 max-h-24 w-40 transition-all ${
              serviceSelected.id == service.id && `active__${service.id}`
            }`}
            key={service.id}
          >
            <div
              onClick={() => setServiceSelected(service)}
              className={`relative flex h-full w-full items-center justify-center rounded-sm p-2 transition-all`}
            >
              <Image
                alt={service.nombre}
                src={service.imagen}
                width={500}
                height={500}
                className={`mr-1 h-full`}
              />
            </div>
          </li>
        ))}
        <li className="item-a absolute -left-2 -z-10 h-24 w-24 overflow-hidden rounded-md border border-white/20 transition-all">
          <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 h-full w-full">
            <div className="relative flex h-full w-full place-items-center before:absolute before:h-full before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-transparent before:to-[#0B121C10] after:absolute after:bottom-4 after:left-[0%] after:-z-20 after:h-[100px] after:w-[140px] after:translate-x-1/3 after:bg-gradient-conic after:from-[#39f2aea5]/30 after:via-[#2D5FFF]/50 after:blur-2xl after:content-['']" />
          </div>
        </li>
      </ul>
    </div>
  );
};

// .p-px {
//   padding: 1px;
// }
// .to-slate-10 {
//   --tw-gradient-to: rgba(231,243,255,.472) var(--tw-gradient-to-position);
// }

// .via-slate-6 {
//   --tw-gradient-to: rgba(223,239,254,0) var(--tw-gradient-to-position);
//   --tw-gradient-stops: var(--tw-gradient-from),rgba(223,239,254,.139) var(--tw-gradient-via-position),var(--tw-gradient-to);
// }
// .from-slate-6 {
//   --tw-gradient-from: rgba(223,239,254,.139) var(--tw-gradient-from-position);
//   --tw-gradient-to: rgba(223,239,254,0) var(--tw-gradient-to-position);
//   --tw-gradient-stops: var(--tw-gradient-from),var(--tw-gradient-to);
// }
// .bg-gradient-to-tr {
//   background-image: linear-gradient(to top right,var(--tw-gradient-stops));
// }
// .rounded-lg {
//   border-radius: 0.5rem;
// }
// .w-full {
//   width: 100%;
// }
// .h-8 {
//   height: 2rem;
// }
// .top-0 {
//   top: 0;
// }
// .absolute {
//   position: absolute;
// }
