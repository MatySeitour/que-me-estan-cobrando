import { Banner } from "@/components/Banner";
import { SelectService } from "@/components/SelectService";
import TitleServices from "@/components/TitleServices";
import { Service } from "@/components/Service";
import { Games } from "@/components/Games";
import { ServicesContainer } from "@/containers/ServicesContainer";
import { useState, useEffect } from "react";
import type { ServiceType } from "@/types";
import plataformasData from "../assets/plataformas.json";
import servicesApi from "@/utils/getServices";

export const ClientPage = (): JSX.Element => {
  // extrae los datos de las plataformas del plataformas.json
  const { plataformas } = plataformasData;

  // Por default, el estado inicial va a ser el primer elemento de las plataformas(en este caso, netflix).
  const [serviceSelected, setServiceSelected] = useState<ServiceType>(
    plataformas[0]
  );

  useEffect(() => {
    servicesApi.getServices().then((services) => console.log(services));
  }, []);

  return (
    <div className="mx-auto max-w-7xl">
      <Banner />
      <div id="service-container" className="mx-auto h-auto w-full px-4 pt-28">
        <ServicesContainer>
          <div id="select-service__container">
            <TitleServices />
            <SelectService
              serviceSelected={
                serviceSelected ?? {
                  id: -1,
                  imagen: "",
                  planes: [],
                  nombre: "",
                  impuesto_final: 0,
                  impuesto_porcentaje: 0,
                  select_price: false,
                }
              }
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
