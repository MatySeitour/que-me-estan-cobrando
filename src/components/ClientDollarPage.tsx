import { CalculatorContainer } from "./CalculatorContainer";
import { DollarApi } from "@/types";
import modifyDollars from "@/utils/modifyDollars";

export const ClientDollarPage = ({
  dollars,
}: {
  dollars: DollarApi[];
}): JSX.Element => {
  const newDollars = modifyDollars(dollars);

  return (
    <section>
      <CalculatorContainer dollarCalculator={newDollars} />
    </section>
  );
};
