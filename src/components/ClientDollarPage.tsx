"use client";

import { CalculatorContainer } from "./CalculatorContainer";
import { useEffect, useState } from "react";
import axios from "axios";
import quotesData from "../assets/quotes.json";
import { DollarApi, DollarNewValues } from "@/types";

export const ClientDollarPage = (): JSX.Element => {
  // Get "cotizaciones" from quotes.json
  const { cotizaciones } = quotesData;

  // create 2 states: one for the values that will be returned by the api call and the other for the state of loading
  const [dollarCalculator, setDollarCalculator] = useState<
    DollarNewValues[] | undefined
  >();
  const [loadingData, setLoadingData] = useState<boolean>(false);
  const [data, setData] = useState<any>([]);

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
    <section>
      <CalculatorContainer
        dollarCalculator={dollarCalculator ?? dollarCalculator}
        lastUpdate={lastUpdate}
        loadingData={loadingData}
      />
    </section>
  );
};
