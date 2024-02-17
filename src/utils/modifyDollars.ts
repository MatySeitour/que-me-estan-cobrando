import { DollarApi } from "@/types";
import quotesData from "../assets/quotes.json";

export default function modifyDollars(dollars: DollarApi[]) {
  const { cotizaciones } = quotesData;
  // Create a new array with the values I want to use
  const dollarValues: any = dollars.map((dolar: any) => {
    const descripcionDollar = cotizaciones.filter(
      (quote) => quote.name == dolar.nombre
    );
    return {
      nombre: dolar.nombre,
      compra: dolar.compra,
      venta: dolar.venta,
      variacion: "",
      descripcion: !descripcionDollar.length
        ? ""
        : descripcionDollar[0].descripcion,
      ultimActualizacion: dolar.fechaActualizacion,
    };
  });

  return dollarValues;
}
