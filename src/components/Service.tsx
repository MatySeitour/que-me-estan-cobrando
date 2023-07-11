import { ServiceType } from "@/types";
import Image from "next/image";

export const Service = ({
  serviceSelected,
}: {
  serviceSelected: ServiceType;
}): JSX.Element => {
  console.log(serviceSelected);
  return (
    <section className="mb-20 h-[600px] px-4 pt-28">
      <div className="h-full w-full rounded-md border border-white/20">
        <div className="flex h-40 w-40 px-4 items-center justify-center bg-red-300">
          <Image
            alt={serviceSelected?.nombre}
            src={serviceSelected?.imagen}
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};
