import React from "react";
import { getElement } from "../../../../../app/gettingFunctions";

export default function SecondPageCard({
  idx,
  concentration,
  size,
  description,
  setChosenItem,
  setVisibleCart,
  allItems,
  setAllItems,
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

        <button
          className="button relative"
          onClick={() =>
            document.getElementById(`${idx}`)?.classList.remove("card-flip-180")
          }
        >
          Go Back
        </button>
        <button
          className="button relative  w-full"
          onClick={() => {
            addToCart();
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
