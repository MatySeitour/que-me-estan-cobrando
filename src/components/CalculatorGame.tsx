import { useState, ChangeEvent } from "react";
import { PesosCalculator } from "./GamePesos";
import { DollarCalculator } from "./GameUsd";

const enum Badge {
  USD = "USD",
  PESOS = "pesos",
}

export const Calculator = ({ dollar }: { dollar: any }): JSX.Element => {
  const [badge, setBadge] = useState<Badge>(Badge.PESOS);

  return (
    <div
      id="games-container"
      className={`preserve min-h-[700px] ${
        badge == "USD" ? `preserve__active` : ``
      }`}
    >
      <PesosCalculator
        badge={badge}
        setBadge={setBadge}
        className="front z-10"
      />
      <DollarCalculator
        badge={badge}
        dollar={dollar}
        setBadge={setBadge}
        className="back z-10"
      />
    </div>
  );
};
