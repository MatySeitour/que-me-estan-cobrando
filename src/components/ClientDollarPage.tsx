import { DollarApi } from "@/types";
import modifyDollars from "@/utils/modifyDollars";
import { CalculatorContainer } from "../components/CalculatorContainer";

export default function ClientDollarPage({
  dollars,
}: {
  dollars: DollarApi[];
}) {
  const newDollars = modifyDollars(dollars);

  return (
    <section>
      <CalculatorContainer dollarCalculator={newDollars} />
    </section>
  );
}
