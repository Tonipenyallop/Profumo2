import React, { useEffect } from "react";
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
    // for setting cart in local storage
    window.localStorage.setItem("cart", JSON.stringify(tempCart));
    const allItemsSoFar = allItems;

    // for removing duplicated items on my cart
    const isFirstTimeAdded = isMoreThanTwo(chosenElement, tempCart);
    if (isFirstTimeAdded) setAllItems([...allItemsSoFar, chosenElement]);

    window.localStorage.setItem(
      "totalQuantity",
      getTotalQuantity(tempCart).toString()
    );
  }

  useEffect(() => {
    let obj: any = {};
    for (let e of allItems) {
      const name = getChosenItemName(e);
      const url = getChosenItemImage(e);
      const price = getChosenItemPrice(e);

      obj[`${name}`] = {};
      obj[`${name}`].name = name;
      obj[`${name}`].url = url;
      obj[`${name}`].price = price;
      // if (bbb[name]?.quantity >= 1) {
      //   console.log("inside of it ");
      //   const tttt = obj[`${name}`].quantity;
      //   console.log("ssss", tttt);
      // } else {
      //   console.log("out sise jiajcnoae");
      //   obj[`${name}`].quantity = 1;
      //   console.log(obj[`${name}`].quantity);
      //   //  obj[`${name}`].quantity =
      // }
    }

    window.localStorage.setItem("items", JSON.stringify(obj));
  }, [allItems]);

  return (
    <div className="flex justify-center items-center">
      <button
        className="button "
        onClick={(): void => {
          addToCart();
        }}
      >
        Add To Cart
      </button>
    </div>
  );
}
