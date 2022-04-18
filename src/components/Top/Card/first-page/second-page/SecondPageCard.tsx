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
  spring,
  summer,
  fall,
  winter,
  day,
  night,
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
        <div className="seasons-data flex flex-col  border-4 w-full scale-100">
          {/* <div className={`border-4 text-white bg-blue-600 w-[80%]`}>toni</div> */}
          <div className="">
            Spring:
            <div className={`seasons w-[0%] w-[${spring * 10}%]`}>{spring}</div>
          </div>
          <div className="">
            Summer:
            <div className={`seasons w-[0%] w-[${summer * 10}%]`}>{summer}</div>
          </div>
          <div className="">
            Fall:
            <div className={`seasons w-[0%] w-[${fall * 10}%]`}>{fall}</div>
          </div>
          <div className="">
            Winter:
            <div className={`seasons w-[0%] w-[${winter * 10}%]`}>{winter}</div>
          </div>
          <div className="">
            Day:
            <div className={`seasons w-[0%] w-[${day * 10}%]`}>{day}</div>
          </div>
          <div className="">
            Night:
            <div className={`seasons w-[0%] w-[${night * 10}%]`}>{night}</div>
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
