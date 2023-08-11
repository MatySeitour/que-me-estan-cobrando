import puppeteer from "puppeteer";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const netflixGetValues = async (req, res) => {
  console.log(req.query);
  const browser = await puppeteer.connect({
    browserWSEndpoint: `wss://chrome.browserless.io?token=${process.env.BLESS_TOKEN}`,
  });
  const page = await browser.newPage();
  await page.goto("https://help.netflix.com/es/node/24926/ar");
  await page.waitForSelector(
    "body > div > div > div > div > div > section > div > div > div:nth-child(3) > ul > li > p"
  );
  const result = await page.evaluate((prices) => {
    const pricesNetflix = document.querySelectorAll(prices);
    let arr = [];
    for (const price of pricesNetflix) {
      arr.push(Array(price.innerText).join("").split("al")[0]);
    }
    const data = arr.map((item) => {
      let plan = {
        name: "",
        price: "",
        benefits: "",
        id: null,
      };
      let b = item.split(/\s+/).join("");
      let c = Array(b).join("").split("ARS");
      let d = c[0].substring(0, c[0].length - 1);
      plan.name = d;
      plan.price = Number(c[1]);

      if (d === "Básico") {
        plan.id = 1;
        plan.benefits =
          "Puedes ver contenido en 1 dispositivo compatible a la vez.Puedes ver en HD.Puedes descargar contenido en 1 dispositivo compatible a la vez.";
      } else if (d === "Estándar") {
        plan.id = 2;
        plan.benefits =
          "Puedes ver contenido en 2 dispositivos compatibles a la vez.Puedes ver en Full HD.Puedes descargar contenido en 2 dispositivos compatibles a la vez.Opción para agregar hasta 1 miembro extra que no viva contigo.";
      } else if (d === "Premium") {
        plan.id = 3;
        plan.benefits =
          "Puedes ver contenido en 4 dispositivos compatibles a la vez.Puedes ver en Ultra HD.Puedes descargar contenido en 6 dispositivos compatibles a la vez.Opción para agregar hasta 2 miembros extras que no vivan contigo.";
      }
      return plan;
    });
    return data;
  }, "body > div > div > div > div > div > section > div > div > div:nth-child(3) > ul > li > p");
  result.forEach(async (planItem) => {
    await prisma.plan.update({
      where: {
        id: planItem.id,
      },
      data: {
        name: planItem.name,
        price: planItem.price,
        benefits: planItem.benefits,
        serviceId: 1,
      },
    });
  });
  res.send(result);
};

export default netflixGetValues;
