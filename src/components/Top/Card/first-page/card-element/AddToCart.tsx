import React from "react";
import { getElement } from "../../../../../app/gettingFunctions";

export default function AddToCart({
  idx,
  setChosenItem,
  setVisibleCart,
  allItems,
  setAllItems,
}: any) {
  // function getElement(idx: number) {
  //   return document.getElementById(`${idx}`);
  // }

  function addToCart(): void {
    const chosenElement = getElement(idx);
    setChosenItem(chosenElement);
    setVisibleCart(true);
    const allItemsSoFar = allItems;
    setAllItems([...allItemsSoFar, chosenElement]);
  }

  return (
    <div className="flex justify-center items-center">
      <button
        className="button "
        onClick={(): void => {
          // const chosenElement = getElement(idx);
          // setChosenItem(chosenElement);
          // setVisibleCart(true);
          // const allItemsSoFar = allItems;
          // setAllItems([...allItemsSoFar, chosenElement]);
          addToCart();
        }}
      >
        Add To Cart
      </button>
    </div>
  );
}
