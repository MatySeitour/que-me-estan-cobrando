import { inter } from "@/utils/fonts";
import { GradientEffectBackground } from "./GradientEffectBackground";

export default function TitleServices() {
  return (
    <>
      <h2 className="bg-gradient__effect service-title mb-8 text-center text-[3rem]">
        Plataformas{" "}
        <b className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text font-normal">
          Digitales
        </b>
        <GradientEffectBackground />
      </h2>
      <p
        className={`text-center text-white/30 md:text-lg lg:text-xl ${inter.className} home-title`}
      >
        Selecciona el servicio que quieras para ver los{" "}
        <b className="bg-gradient-to-r from-emerald-500 to-cyan-500 bg-clip-text font-normal">
          detalles
        </b>
      </p>
    </>
  );
}
