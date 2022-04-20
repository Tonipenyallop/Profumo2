import React from "react";
import { getElement } from "../../../../../app/gettingFunctions";
export default function CardButtons({
  idx,
  spring,
  summer,
  fall,
  winter,
  day,
  night,
}: any) {
  const seasonData = [spring, summer, fall, winter, day, night];
  return (
    <div className="flex justify-center items-center flex-wrap">
      <button
        className="button"
        onClick={(): void => {
          const card = document.getElementById(`${idx}`);
          card?.classList.add("card-flip-180");

          setTimeout(() => {
            card
              ?.querySelectorAll(".seasons")
              .forEach((e: any, idx: number) => {
                console.log(e);
                // e.classList.remove("w-[0%]");
                // e.classList.add(`w-[${seasonData[idx] * 10}%]`);
                // e.classList.add(`w-[${dataPercentage * 10}%]`);
              });
          }, 1000);
        }}
      >
        Detail
      </button>
    </div>
  );
}
