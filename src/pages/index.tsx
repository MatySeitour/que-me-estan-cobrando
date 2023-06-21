import Image from "next/image";
import { Paytone_One } from "next/font/google";

import Head from "next/head";
import { Banner } from "@/components/Banner";
import { ServicesSection } from "@/components/ServicesSection";

const paytone_One = Paytone_One({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  <Head>
    <title>Que me cobran</title>
  </Head>;
  return (
    <main className={`h-screen w-screen ${paytone_One.className}`}>
      <Banner />
      <ServicesSection />
    </main>
  );
}
