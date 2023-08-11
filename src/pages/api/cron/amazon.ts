import puppeteer from "puppeteer-core";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const amazon = async (req: NextApiRequest, res: NextApiResponse) => {
  const browser = await puppeteer.connect({
    browserWSEndpoint: `wss://chrome.browserless.io?token=${process.env.BLESS_TOKEN}`,
  });
  const page = await browser.newPage();
  await page.goto(
    "https://www.primevideo.com/offers/nonprimehomepage/ref=dvm_pds_amz_ar_dc_s_b_mkw_15Q6zXbW-dc_pcrid_76691108516658?mrntrk=slid__pgrid_1332608121879906_pgeo_141965_x__ptid_kwd-83288020178281:loc-8"
  );
  await page.waitForSelector(
    "div.dv-safe-content > div.dv-push-left > div.dv-copy-body > p"
  );
  const result = await page.evaluate((prices) => {
    let arr = [];
    const textAmazon = document.querySelector(prices)?.innerHTML;
    console.log(textAmazon);
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
