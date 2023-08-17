import Link from "next/link";

export const LinkToHome = (): JSX.Element => {
  return (
    <div className="flex h-auto w-full flex-col justify-center gap-4 pt-10">
      <div className="flex flex-col items-center justify-center px-4">
        <p className="home-title bg-clip-text text-center text-2xl font-bold">
          ¿Confundido/a de no saber que te cobran por tu servicio digital
          favorito?
        </p>
        <br />
        <p className="home-title bg-clip-text text-center text-2xl font-bold">
          ¿Querés comprarte ese juego que tanto querés y no sabes el precio{" "}
          final de ese juego?
        </p>{" "}
      </div>
      <div className="z-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
        <span className="home-title bg-clip-text text-2xl font-bold">
          Visitá
        </span>
        <Link
          href={"/"}
          className="flex items-center justify-center rounded-md bg-gradient-to-r from-emerald-500 to-cyan-500 p-2 text-2xl font-semibold text-white"
          type="button"
        >
          <p className="">¿Que me están cobrando?</p>
        </Link>
      </div>
    </div>
  );
};
