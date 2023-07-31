import Head from "next/head";
import { useEffect, useState } from "react";
import { inter } from "@/utils/fonts";
import axios from "axios";
import { CalculatorContainer } from "@/components/CalculatorContainer";
import quotesData from "../assets/quotes.json";
import { Footer } from "@/components/Footer";
import { LinkToHome } from "@/components/LinkToHome";

export default function DollarCalculator() {
  const { cotizaciones } = quotesData;

  const [dollarCalculator, setDollarCalculator] = useState<any>();
  const [loadingData, setLoadingData] = useState<boolean>(false);
  useEffect(() => {
    async function getDollar() {
      try {
        setLoadingData(true);
        const res = await axios.get(
          "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
        );
        const filterRes = res.data.filter(
          (value: any) => {
            if (value.casa.nombre == "Bitcoin") {
              return;
            }
            if (value.casa.nombre == "Argentina") {
              return;
            }
            if (value.casa.nombre == "Dolar") {
              return;
            }
            return value.casa;
          }
          // value.casa.nombre != "Argentina"
        );
        console.log(filterRes);
        const dollarValues = filterRes.map((dolar: any) => {
          const values = {
            nombre: "",
            compra: null,
            venta: null,
            variacion: "",
            descripcion: "",
          };
          const descripcionDollar = cotizaciones.filter(
            (quote) => quote.name == dolar.casa.nombre
          );

          values.nombre = dolar.casa.nombre;
          values.compra = dolar.casa.compra.replace(",", ".");
          values.venta = dolar.casa.venta.replace(",", ".");
          values.variacion = dolar.casa.variacion?.replace(",", ".");
          values.descripcion = !descripcionDollar.length
            ? ""
            : descripcionDollar[0].descripcion;
          return values;
        });
        setDollarCalculator(dollarValues);
        setLoadingData(false);
      } catch (e) {
        setLoadingData(false);
        console.error(e);
      }
    }
    getDollar();
  }, []);

  const time = new Date();
  const lastUpdate = `${time.getDay().toString()}/${
    time.getMonth() + 1
  }/${time.getFullYear()} a las ${time.getHours()}:${String(
    time.getMinutes()
  ).padStart(2, "0")}:${String(time.getSeconds()).padStart(2, "0")}`;

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
        <CalculatorContainer
          dollarCalculator={dollarCalculator ?? dollarCalculator}
          lastUpdate={lastUpdate}
          loadingData={loadingData}
        />
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

{
  /* <p>
              ¿Confundido/a de no saber que te cobran por tu servicio digital
              favorito?
            </p>
            <br />
            <p>
              ¿Querés comprarte ese juego que tanto querés y no sabes el precio{" "}
              final de ese juego?
            </p> */
}
