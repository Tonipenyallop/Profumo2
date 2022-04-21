import React from "react";
import {
  getElement,
  getChosenItemName,
} from "../../../../../app/gettingFunctions";

export default function AddToCart({
  idx,
  setChosenItem,
  setVisibleCart,
  allItems,
  setAllItems,
  tempCart,
  setTempCart,
}: any) {
  // function getElement(idx: number) {
  //   return document.getElementById(`${idx}`);
  // }

  function addToCart(): void {
    const chosenElement = getElement(idx);
    setChosenItem(chosenElement);
    setVisibleCart(true);
    const allItemsSoFar = allItems;
    const nameOfBottle = getChosenItemName(chosenElement);
    let temp = tempCart;
    console.log(temp);
    if (!temp[`${nameOfBottle}`]) temp[`${nameOfBottle}`] = 1;
    else temp[`${nameOfBottle}`] += 1;
    setTempCart(temp);
    console.log(temp);

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
