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
      setDollarCalculator(res.data);
    }
    getDollar();
  }, []);

  return (
    <>
      <Head>
        <title>Dólar - ¿Que me están cobrando?</title>
        <meta></meta>
      </Head>
      <main
        className={`${inter.className} relative flex h-screen w-screen justify-center pt-28`}
      >
        <CalculatorContainer dollarCalculator={dollarCalculator} />
      </main>
    </>
  );
}
