import Head from "next/head";
import { useEffect, useState } from "react";
import { inter } from "@/utils/fonts";
import axios from "axios";
import { CalculatorContainer } from "@/components/CalculatorContainer";
import quotesData from "../assets/quotes.json";
import { Footer } from "@/components/Footer";
import { LinkToHome } from "@/components/LinkToHome";
import { DollarApi, DollarNewValues } from "@/types";

export default function DollarCalculator() {
  // Get "cotizaciones" from quotes.json
  const { cotizaciones } = quotesData;

  // create 2 states: one for the values that will be returned by the api call and the other for the state of loading
  const [dollarCalculator, setDollarCalculator] = useState<
    DollarNewValues[] | undefined
  >();
  const [loadingData, setLoadingData] = useState<boolean>(false);

  useEffect(() => {
    //call to the dolarsi api
    async function getDollar() {
      try {
        setLoadingData(true);
        const res = await axios.get(
          "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
        );

        // Dolarsi api returns some values that are obsolete, check that if it is one of those values, it omits it
        const filterRes = res.data.filter((value: any) => {
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
        });

        // Create a new array with the values I want to use
        const dollarValues: DollarNewValues[] = filterRes.map(
          (dolar: DollarApi) => {
            const values = {
              nombre: "",
              compra: "",
              venta: "",
              variacion: "",
              descripcion: "",
            };

            // Creates an array that filters if the current dollar value name is equal to the quotes name coming from quotes.json
            const descripcionDollar = cotizaciones.filter(
              (quote) => quote.name == dolar.casa.nombre
            );

            // Set the dollar values by replacing the "," with "."
            // Why do i do this? because in other files I will want to parse a value using Number(value). if I don't change "," to ".", it would return NaN
            values.nombre = dolar.casa.nombre;
            values.compra = dolar.casa.compra.replace(",", ".");
            values.venta = dolar.casa.venta.replace(",", ".");
            values.variacion = dolar.casa.variacion?.replace(",", ".");
            values.descripcion = !descripcionDollar.length
              ? ""
              : descripcionDollar[0].descripcion;
            return values;
          }
        );
        setDollarCalculator(dollarValues);
        setLoadingData(false);
      } catch (e) {
        setLoadingData(false);
        console.error(e);
      }
    }
    getDollar();
  }, []);

  // Create a date format of the last update
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
