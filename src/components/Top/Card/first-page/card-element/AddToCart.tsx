import React from "react";
import {
  getElement,
  getChosenItemName,
  isMoreThanTwo,
  getTotalQuantity,
  getChosenItemImage,
  getChosenItemPrice,
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
    console.log(allItemsSoFar);
    console.log(allItems);

    // for removing duplicated items on my cart
    const isFirstTimeAdded = isMoreThanTwo(chosenElement, tempCart);
    if (isFirstTimeAdded) setAllItems([...allItemsSoFar, chosenElement]);

    window.localStorage.setItem(
      "totalQuantity",
      getTotalQuantity(tempCart).toString()
    );
  }

  let obj: any = {};
  for (let e of allItems) {
    const name = getChosenItemName(e);
    const url = getChosenItemImage(e);
    const price = getChosenItemPrice(e);
    obj[`${name}`] = {};
    obj[`${name}`].name = name;
    obj[`${name}`].url = url;
    obj[`${name}`].price = price;
  }
  window.localStorage.setItem("items", JSON.stringify(obj));

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
