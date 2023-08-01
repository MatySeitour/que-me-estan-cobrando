import { useState } from "react";
import { GamePesos } from "./GamePesos";
import { GameUsd } from "./GameUsd";

// Enum with 2 types of values: dollar or pesos
const enum Badge {
  USD = "USD",
  PESOS = "pesos",
}

export const CalculatorGame = ({
  dollar,
}: {
  dollar: { dollarValue: string; lastUpdate: string };
}): JSX.Element => {
  // Creates a state whose initial value is pesos
  const [badge, setBadge] = useState<Badge>(Badge.PESOS);
  const [copyLastPriceState, setCopyLastPriceState] = useState<boolean>(false);

  // Function that makes the "message copied" message appear and disappear
  const toggleCopy = () => {
    setCopyLastPriceState(true);
    setTimeout(() => {
      setCopyLastPriceState(false);
    }, 1000);
  };

  return (
    <div
      id="games-container"
      className={`preserve min-h-[700px] ${
        badge == "USD" ? `preserve__active` : ``
      }`}
    >
      <GamePesos
        badge={badge}
        setBadge={setBadge}
        copyLastPriceState={copyLastPriceState}
        className="front z-10"
        toggleCopy={toggleCopy}
      />
      <GameUsd
        badge={badge}
        dollar={dollar}
        setBadge={setBadge}
        className="back z-10"
        copyLastPriceState={copyLastPriceState}
        toggleCopy={toggleCopy}
      />
    </div>
  );
};
