import Image from "next/image";
import plataformas from "../assets/plataformas.json";

export const SliderHome = () => {
  return (
    <div className="slider-container relative mb-20 grid h-auto w-[50%] max-w-[684px] place-items-center overflow-hidden">
      <ul className="slider-track animate-sliderScroll">
        {plataformas.plataformas.map((plataforma) => (
          <li key={plataforma.id} className="h-[80px] w-[100px] p-4">
            <Image
              alt={plataforma.nombre}
              width={100}
              height={80}
              className="object-cover"
              src={plataforma.imagen}
            />
          </li>
        ))}
        {plataformas.plataformas.map((plataforma) => (
          <li key={plataforma.id} className="h-[80px] w-[100px] p-4">
            <Image
              alt={plataforma.nombre}
              width={100}
              height={80}
              className="object-cover"
              src={plataforma.imagen}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
