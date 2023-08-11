import puppeteer from "puppeteer";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const amazon = async (req: NextApiRequest, res: NextApiResponse) => {
  const browser = await puppeteer.launch({
    headless: "new",
  });
  const page = await browser.newPage();
  await page.goto(
    "https://www.primevideo.com/offers/nonprimehomepage/ref=atv_hm_offers_c_9zZ8D2_hm_hom"
  );
  await page.waitForSelector(
    "div.dv-safe-content > div.dv-push-left > div.dv-copy-body > p"
  );
  const result = await page.evaluate((prices) => {
    let arr = [];
    console.log(prices);
    const textAmazon = document.querySelector(prices)?.innerHTML;
    const getStringPrice = Array(textAmazon).join("").split(",")[2];
    const getAmazonPrime = Number(
      Array(Array(getStringPrice).join("").split(";")[1]).join("").split("/")[0]
    );
    const priceForYear = Number(getAmazonPrime) * 12;
    arr.push({
      plan: "1 mes",
      price: getAmazonPrime,
    });
    arr.push({
      plan: "1 año",
      price: priceForYear,
    });

    const data = arr.map((item) => {
      let plan = {
        name: "",
        price: 0,
        benefits: "",
        id: 0,
      };
      plan.name = item.plan;
      plan.price = item.price;
      if (plan.name === "1 mes") {
        plan.benefits =
          "Puedes ver en cualquier dispositivo.Puedes descargar el contenido de Amazon Prime Video.";
        plan.id = 4;
      } else if (plan.name === "1 año") {
        plan.benefits =
          "Puedes disfrutar todos los beneficios anteriores por 1 año.";
        plan.id = 5;
      }
      return plan;
    });

    return data;
  }, "div.dv-safe-content > div.dv-push-left > div.dv-copy-body > p");
  result.forEach(async (planItem) => {
    await prisma.plan.update({
      where: {
        id: planItem.id,
      },
      data: {
        name: planItem.name,
        price: planItem.price,
        benefits: planItem.benefits,
        serviceId: 3,
      },
    });
  });
  res.status(200).json({ result });
};

export default amazon;
