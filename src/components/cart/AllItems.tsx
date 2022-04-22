import React, { useState } from "react";
import {
  getElement,
  getChosenItemImage,
  getChosenItemPrice,
  getChosenItemName,
  getTotalQuantity,
} from "../../app/gettingFunctions";
export default function AllItems({
  allItems,
  setAllItems,
  tempCart,
  setTempCart,
}: any) {
  function removeItem(name: string): void {
    const filteredItem = allItems.filter(
      (e: any) => name !== getChosenItemName(e)
    );
    setAllItems(filteredItem);

    // for setting quantity for each items
    const temp = tempCart;
    temp[`${name}`] = 0;
    setTempCart(temp);

    // to decrease item quantity
    window.localStorage.setItem(
      "totalQuantity",
      getTotalQuantity(tempCart).toString()
    );
    // for removing items from local storage
    items[name] = undefined;
    window.localStorage.setItem("items", JSON.stringify(items));
    // for removing cart item form local storage
    window.localStorage.setItem("cart", JSON.stringify(tempCart));
  }

  let items: any = window.localStorage.getItem("items");
  items = JSON.parse(items);
  console.log(items);
  const keys: any = [];
  for (let key in items) {
    keys.push(key);
  }

  function getQuantity(name: string): string {
    const cart: any = window.localStorage.getItem("cart");
    const parsedCart = JSON.parse(cart);
    const quantity = parsedCart[name];
    return quantity;
  }

  return (
    <div className="px-5">
      {keys?.length === 0 ? (
        <div className="text-white text-center">No items are added yet!</div>
      ) : (
        <div className=""></div>
      )}
      {keys.map((e: any, idx: number) => {
        return (
          <div
            className=" border-2 border-green-300 flex justify-between items-center"
            key={`${idx}`}
            id={`${idx}`}
          >
            <img
              className="flex w-[100px] bg-white"
              src={`${items[`${e}`].url}`}
              alt=""
            />
            <div className="flex name text-white break-words mx-3">
              {items[`${e}`].name}
            </div>
            <div className="flex items-center ">
              <div className="flex items-center">
                <button className="flex button">-</button>
                <div className="flex text-white">{getQuantity(e)}</div>
                <button className="flex button">+</button>
              </div>

              <div className="flex text-white mx-3">{items[`${e}`].price}</div>
              <button className="button" onClick={() => removeItem(e)}>
                X
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
