import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

const plans = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const services = await prisma.service.findMany();
    const plans = await prisma.plan.findMany();
    let arr = [];
    let arr2: any = [];
    for (let i = 0; i < services.length; i++) {
      for (let a = 0; a < plans.length; a++) {
        if (plans[a].serviceId == services[i].id) {
          let serviceFinal = {
            serviceName: services[i].name,
            ...plans[a],
          };
          arr.push(serviceFinal);
        }
      }
      let test = {
        serviceName: services[i].name,
        serviceId: services[i].id,
        plans: arr,
      };
      arr2.push(test);
      arr = [];
    }

    res.status(200).json(arr2);
  } catch (e) {
    console.error(e);
  }
};

export default plans;
