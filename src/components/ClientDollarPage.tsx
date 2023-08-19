import { DollarApi } from "@/types";
import modifyDollars from "@/utils/modifyDollars";
import dynamic from "next/dynamic";

const Calculator = dynamic(() =>
  import("../components/CalculatorContainer").then(
    (module) => module.CalculatorContainer
  )
);

export const ClientDollarPage = ({
  dollars,
}: {
  dollars: DollarApi[];
}): JSX.Element => {
  const newDollars = modifyDollars(dollars);

  return (
    <section>
      <Calculator dollarCalculator={newDollars} />
    </section>
  );
};
