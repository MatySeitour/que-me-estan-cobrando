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

export default function Home() {
  const { plataformas } = plataformasData;
  const [serviceSelected, setServiceSelected] = useState<ServiceType>(
    plataformas[0]
  );
  <Head>
    <title>Que me cobran</title>
  </Head>;
  return (
    <main
      className={`h-full w-full ${paytone_One.className} relative overflow-hidden bg-black`}
    >
      <div className="mx-auto h-full max-w-7xl">
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
    </main>
  );
}

// content: "";
// width: 100%;
// height: 100%;
// top: 0;
// right: -1%;
// position: absolute;
// background: linear-gradient(89deg, transparent, rgba(0, 0, 0, 0.1), #000);
