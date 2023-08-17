import { Banner } from "@/components/Banner";
import { SelectService } from "@/components/SelectService";
import TitleServices from "@/components/TitleServices";
import { Service } from "@/components/Service";
import { Games } from "@/components/Games";
import { ServicesContainer } from "@/containers/ServicesContainer";
import { useState } from "react";
import type { ServiceTest } from "@/types";

export const ClientPage = ({
  services,
}: {
  services: ServiceTest[];
}): JSX.Element => {
  // Por default, el estado inicial va a ser el primer elemento de las plataformas(en este caso, netflix).
  const [serviceSelected, setServiceSelected] = useState<ServiceTest>(
    services[0]
  );

  return (
    <div className="mx-auto max-w-7xl">
      <Banner services={services} />
      <div id="service-container" className="mx-auto h-auto w-full px-4 pt-28">
        <ServicesContainer>
          <TitleServices />
          <div id="select-service__container">
            <SelectService
              services={services}
              serviceSelected={serviceSelected}
              setServiceSelected={setServiceSelected}
            />
          </div>
          <Service serviceSelected={serviceSelected} />
        </ServicesContainer>
        <Games />
      </div>
    </div>
  );
};
