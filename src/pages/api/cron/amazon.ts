import puppeteer from "puppeteer-core";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const amazon = async (req: NextApiRequest, res: NextApiResponse) => {
  const browser = await puppeteer.connect({
    browserWSEndpoint: `wss://chrome.browserless.io?token=${process.env.BLESS_TOKEN}`,
  });
  const page = await browser.newPage();
  await page.goto("https://selectra.com.ar/streaming/amazon-prime-video");
  await page.waitForSelector(
    "#content-with-summary > div:nth-child(1) > p:nth-child(10) > strong"
  );
  const result = await page.evaluate((prices) => {
    let arr = [];
    const textAmazon = document.querySelector(prices)?.innerHTML;
    arr.push(textAmazon);
    return arr;
  }, "#content-with-summary > div:nth-child(1) > p:nth-child(10) > strong");
  const getMonthPrice = Number(
    Array(Array(result).join("").split("$")[1]).join("").split("mensuales")[0]
  );
  const getYearPrice = getMonthPrice * 12;
  const plans = [
    {
      name: "1 mes",
      price: getMonthPrice,
    },
    {
      name: "1 año",
      price: getYearPrice,
    },
  ];
  const data = plans.map((item) => {
    let plan = {
      name: "",
      price: 0,
      benefits: "",
      id: 0,
    };
    plan.name = item.name;
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
  data.forEach(async (planItem) => {
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
  res.status(200).json({ data });
};

export default amazon;
