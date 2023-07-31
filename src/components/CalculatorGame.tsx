import { useState, ChangeEvent } from "react";
import { GamePesos } from "./GamePesos";
import { GameUsd } from "./GameUsd";

const enum Badge {
  USD = "USD",
  PESOS = "pesos",
}

export const CalculatorGame = ({ dollar }: { dollar: any }): JSX.Element => {
  const [badge, setBadge] = useState<Badge>(Badge.PESOS);
  const [copyLastPriceState, setCopyLastPriceState] = useState<boolean>(false);

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
