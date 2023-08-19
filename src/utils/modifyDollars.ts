import { DollarApi } from "@/types";
import quotesData from "../assets/quotes.json";

export default function modifyDollars(dollars: DollarApi[]) {
  const { cotizaciones } = quotesData;

  const filterRes = dollars.filter((value: any) => {
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
  const dollarValues: any = filterRes.map((dolar: DollarApi) => {
    const values = {
      nombre: "",
      compra: "",
      venta: "",
      variacion: "",
      descripcion: "",
      ultimActualizacion: "",
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
  });
  return dollarValues;
}
