import Head from "next/head";
import { Banner } from "@/components/Banner";
import { SelectService } from "@/components/SelectService";
import TitleServices from "@/components/TitleServices";
import { Service } from "@/components/Service";
import { useState } from "react";
import type { ServiceType } from "@/types";
import plataformasData from "../assets/plataformas.json";
import { paytone_One } from "@/utils/fonts";
import { Games } from "@/components/Games";
import { GradientEffectBackground } from "@/components/GradientEffectBackground";
import { Footer } from "@/components/Footer";

export default function Home() {
  const { plataformas } = plataformasData;
  const [serviceSelected, setServiceSelected] = useState<ServiceType>(
    plataformas[0]
  );

  return (
    <>
      <Head>
        <title>¿Que me están cobrando?</title>
      </Head>

      <main
        className={`${paytone_One.className} relative overflow-hidden bg-black`}
      >
        <div className="mx-auto max-w-7xl">
          <Banner />
          <div
            id="service-container"
            className="mx-auto h-auto w-full px-4 pt-28"
          >
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
            <Service serviceSelected={serviceSelected} />
            <Games />
          </div>
        </div>

        <Footer
          text="Los precios de los servicios digitales y los impuestos mostrados
              en esta página son informativos y están sujetos a cambios. Nos
              esforzamos por proporcionar información precisa y actualizada,
              pero no garantizamos la exactitud de los datos en todo momento.
              Los precios finales pueden variar según la ubicación y otros
              factores adicionales."
        />
      </main>
    </>
  );
}
