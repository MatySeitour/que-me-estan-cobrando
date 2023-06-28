import TitleServices from "./TitleServices";
import plataformas from "../assets/plataformas.json";
import { Service } from "@/types";
import { Services } from "./Services";

export const ServicesSection = (): JSX.Element => {
  interface ServiceProps {
    Service: Service;
  }
  return (
    <section className="h-auto w-full pt-10">
      <div className="mb-10 h-auto w-full">
        <TitleServices />
      </div>
      <div className="flex min-h-screen w-full flex-col items-center justify-center px-4 py-4">
        {plataformas.plataformas.map((plataform) => (
          <div key={plataform.id} className="mb-10 flex h-96 w-full">
            <Services
              id={plataform.id}
              nombre={plataform.nombre}
              imagen={plataform.imagen}
              planes={plataform.planes}
              impuesto_final={plataform.impuesto_final}
              impuesto_porcentaje={plataform.impuesto_porcentaje}
              select_price={plataform.select_price}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
