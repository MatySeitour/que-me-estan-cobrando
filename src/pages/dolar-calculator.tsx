import Head from "next/head";
import { inter } from "@/utils/fonts";
import { Footer } from "@/components/Footer";
import { LinkToHome } from "@/components/LinkToHome";
import { GetStaticProps, GetStaticPropsContext } from "next";
import dynamic from "next/dynamic";
import { DollarApi } from "@/types";

const DollarPage = dynamic(() =>
  import("../components/ClientDollarPage").then(
    (module) => module.ClientDollarPage
  )
);

export default function DollarCalculator({ data }: { data: DollarApi[] }) {
  return (
    <>
      <Head>
        <title>Dólar - ¿Que me están cobrando?</title>
        <meta
          name="description"
          content="¿A cuánto el dólar? Una web para saber todo acerca de las cotizaciones del dólar. Además, vas a poder calcular el valor del dólar dependiendo si queres vender o comprar."
        />
      </Head>
      <main
        className={`${inter.className} relative mb-10 flex flex-col justify-center overflow-hidden pt-20`}
      >
        <DollarPage dollars={data} />
        <LinkToHome />
        <div className="shadow-gradient relative -bottom-1 left-0 z-20 h-40 w-full" />
      </main>
      <Footer
        text=" Todas las cotizaciones, indices y cualquier otro valor publicadas en
          este sitio web son a fines informativos y tienen un carácter
          orientativo, por lo que deben ser tomados únicamente a modo de
          referencia. El titular de este sitio web no puede bajo ningún punto de
          vista garantizar la veracidad y/o exactitud y/o vigencia de los datos
          mostrados en el mismo. El titular de este sitio web deslinda toda
          responsabilidad por los daños y/o perjuicios que pudiere ocasionar la
          toma de de decisiones en base a la información recabada en el mismo,
          como así tampoco se hace responsable sobre el uso que puedan hacer
          terceros con la información brindada."
      />
    </>
  );
}
export const getServerSideProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const res = await fetch(
    "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
