import Head from "next/head";
import { paytone_One } from "@/utils/fonts";
import { Footer } from "@/components/Footer";
import { ClientPage } from "@/components/ClientPage";

export default function Home({ data }: { data: any }) {
  return (
    <>
      <Head>
        <title>¿Que me están cobrando?</title>
        <meta
          name="description"
          content="¿Que me están cobrando? Una web para saber todo acerca de los servicios digitales de Argentina. Vas a poder conocer los impuestos, los planes y los precios de tu servicio digital favorito. Además, vas a conocer el precio final del juego que más deseas para evitar sorpresas."
        />
      </Head>

      <main
        className={`${paytone_One.className} relative overflow-hidden bg-black`}
      >
        <ClientPage services={data} />
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

export const getStaticProps = async (context: any) => {
  const res = await fetch(
    `https://que-me-estan-cobrando-v2.vercel.app/api/plans/`
  );
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};
