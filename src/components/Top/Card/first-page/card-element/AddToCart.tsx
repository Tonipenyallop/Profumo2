import React from "react";
import {
  getElement,
  getChosenItemName,
  isMoreThanTwo,
  getTotalQuantity,
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
  function addToCart(): void {
    const chosenElement = getElement(idx);
    setChosenItem(chosenElement);
    setVisibleCart(true);
    const nameOfBottle = getChosenItemName(chosenElement);
    let temp = tempCart;

    if (!temp[`${nameOfBottle}`]) temp[`${nameOfBottle}`] = 1;
    else temp[`${nameOfBottle}`] += 1;
    setTempCart(temp);

    const allItemsSoFar = allItems;
    const isFirstTimeAdded = isMoreThanTwo(chosenElement, tempCart);
    if (isFirstTimeAdded) setAllItems([...allItemsSoFar, chosenElement]);
    console.log("jeje", getTotalQuantity(tempCart));
    window.localStorage.setItem(
      "totalQuantity",
      getTotalQuantity(tempCart).toString()
    );
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
