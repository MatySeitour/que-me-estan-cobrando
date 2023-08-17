import Image from "next/image";
import { ServiceTest } from "@/types";

export const SliderHome = ({ services }: { services: ServiceTest[] }) => {
  return (
    <div className="slider-container relative mb-20 grid h-auto w-[50%] max-w-[684px] place-items-center overflow-hidden">
      <ul className="slider-track animate-sliderScroll">
        {services.map((service) => (
          <li
            key={service.serviceId}
            className="flex h-[100px] w-[100px] items-center justify-center p-4"
          >
            <Image
              alt={service.serviceName}
              width={2000}
              height={2000}
              className="object-cover"
              src={`${service.serviceId}.svg`}
            />
          </li>
        ))}
        {services.map((service) => (
          <li
            key={service.serviceId}
            className="flex h-[100px] w-[100px] items-center justify-center p-4"
          >
            <Image
              alt={service.serviceName}
              width={2000}
              height={2000}
              className="object-cover"
              src={`${service.serviceId}.svg`}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
