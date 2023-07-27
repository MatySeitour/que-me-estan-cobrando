import Head from "next/head";
import { useEffect, useState } from "react";
import { inter } from "@/utils/fonts";
import axios from "axios";
import { CalculatorContainer } from "@/components/CalculatorContainer";
import { GradientEffectBackground } from "@/components/GradientEffectBackground";

export default function DollarCalculator() {
  const [dollarCalculator, setDollarCalculator] = useState<any>();
  useEffect(() => {
    async function getDollar() {
      const res = await axios.get(
        "https://www.dolarsi.com/api/api.php?type=valoresprincipales"
      );
      const dollarValues = res.data?.map((dolar: any) => {
        const values = { nombre: "", compra: null, venta: null, variacion: "" };
        values.nombre = dolar.casa.nombre;
        values.compra = dolar.casa.compra.replace(",", ".");
        values.venta = dolar.casa.venta.replace(",", ".");
        values.variacion = dolar.casa.variacion?.replace(",", ".");
        return values;
      });
      setDollarCalculator(dollarValues);
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
        <meta></meta>
      </Head>
      <main className={`${inter.className} relative flex justify-center pt-20`}>
        <CalculatorContainer
          dollarCalculator={dollarCalculator ?? dollarCalculator}
          lastUpdate={lastUpdate}
        />
      </main>
    </>
  );
}
