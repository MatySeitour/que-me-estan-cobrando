import { useEffect, useState } from "react";
import { gsap } from "gsap";
import impuestos from "@/assets/impuestos.json";

interface PriceProps {
  id: number;
  nombre: string;
  planes: Planes[];
  impuesto_porcentaje: number;
}

interface Planes {
  id: number;
  plan: string;
  descripcion: {
    plan_description_id: number;
    plan_description: string;
  }[];
  precio: number;
}

export const Prices = ({
  id,
  nombre,
  planes,
  impuesto_porcentaje,
}: PriceProps): JSX.Element => {
  const [planSelected, setPlanSelected] = useState<Planes>(planes[0]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const planExample = planes.filter((item) => item.plan == e.target.value);
    setPlanSelected(planExample[0]);
  };

  useEffect(() => {
    const titlePrice = document.querySelector(`#title-price__${id}`);

    gsap.fromTo(
      titlePrice,
      {
        xPercent: -30,
        opacity: 0,
        duration: 0.3,
      },
      {
        xPercent: 0,
        opacity: 1,
        duration: 0.3,
      }
    );
  }, []);

  // {task.description.length > 60 ? `${task.description.slice(0, 60)}...`

  const impuestosSplit = impuestos.impuestos.map((impuesto) => {
    if (impuesto.nombre.length > 20)
      return `${impuesto.nombre.slice(0, 20)}...`;
  });

  console.log(impuestosSplit);

  return (
    <div className="relative h-full w-full bg-[#000a]">
      <div className="flex h-full w-full flex-col gap-3 py-4">
        <div className="flex h-auto w-full justify-center pt-4">
          <h4
            id={`title-price__${id}`}
            className="bg-gradient__effect text-3xl"
          >
            Precios
          </h4>
        </div>
        <select
          onChange={handleChange}
          className={`absolute right-4 top-4 z-20 max-w-[160px] rounded-md border bg-black p-2 text-white outline-none`}
        >
          {planes.map((plan) => (
            <option key={plan.id} className="rounded-md">
              {plan.plan}
            </option>
          ))}
        </select>
        <ul className="grid h-full w-full">
          <li className="grid h-auto w-full grid-cols-3 place-items-center border-b border-white/40 text-white">
            <div>PRECIO INICIAL</div>
            <div className="col-start-3">{planSelected?.precio}</div>
          </li>
          {impuestos.impuestos.map((impuesto) => (
            <li
              className="grid h-auto w-full grid-cols-3 place-items-center border-b border-white/40 text-white"
              key={impuesto.id}
            >
              <div className="max-h-[24px] text-center">
                {impuesto.nombre.length > 20
                  ? `${impuesto.nombre.slice(0, 20)}...`
                  : impuesto.nombre}
              </div>
              <div>{`${impuesto.porcentaje}%`}</div>
              <div className="col-start-3">
                {`$${(planSelected?.precio * impuesto.porcentaje) / 100}`}
              </div>
            </li>
          ))}
          <li className="grid h-auto w-full grid-cols-3 place-items-center text-white">
            <div>PRECIO FINAL</div>
            <div className="col-start-3">
              {`$${(planSelected?.precio * impuesto_porcentaje).toFixed(2)}`}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
