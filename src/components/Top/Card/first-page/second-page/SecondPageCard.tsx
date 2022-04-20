import React from "react";
import { getElement } from "../../../../../app/gettingFunctions";
import SeasonData from "./SeasonData";

export default function SecondPageCard({
  idx,
  concentration,
  size,
  description,
  setChosenItem,
  setVisibleCart,
  allItems,
  setAllItems,
  seasons,
}: any) {
  function addToCart(): void {
    const chosenElement = getElement(idx);
    setChosenItem(chosenElement);
    setVisibleCart(true);
    const allItemsSoFar = allItems;
    setAllItems([...allItemsSoFar, chosenElement]);
  }

  return (
    <div className="absolute card-flip-180 backface-hidden top-0 w-full h-full border-blue-700 border-4 z-[5]">
      <div className="flex flex-col items-center">
        <div className="flex flex-col flex-wrap   text-white">
          {concentration}
        </div>
        <div className="flex   text-white">{size}</div>
        <div className="mx-3 my-3 text-white break-words">{description}</div>

        <div className="flex border-4 w-full">
          <div className="flex flex-col border-4 ">
            <div className="text-white">spring</div>
            <div className="text-white">summer</div>
            <div className="text-white">fall</div>
            <div className="text-white">winter</div>
            <div className="text-white">day</div>
            <div className="text-white">night</div>
          </div>
          <div className="flex flex-col border-4 w-full">
            <SeasonData season={seasons.spring} seasonName={"spring"} />
            <SeasonData season={seasons.summer} seasonName={"summer"} />
            <SeasonData season={seasons.fall} seasonName={"fall"} />
            <SeasonData season={seasons.winter} seasonName={"winter"} />
            <SeasonData season={seasons.day} seasonName={"day"} />
            <SeasonData season={seasons.night} seasonName={"night"} />
          </div>
        </div>
        <button
          className="button relative  w-full"
          onClick={() => {
            addToCart();
          }}
        >
          Add to Cart
        </button>
        <button
          className="button relative"
          onClick={() =>
            document.getElementById(`${idx}`)?.classList.remove("card-flip-180")
          }
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
