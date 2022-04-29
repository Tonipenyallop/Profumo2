import React, { useEffect, useState } from "react";
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
  const [addFlag, setAddFlag] = useState<boolean>(false);

  // useEffect(() => {
  //   const totalQuantity: any = window.localStorage.getItem("totalQuantity");
  //   const parseDTotalQuantity = JSON.parse(totalQuantity);
  //   const items: any = window.localStorage.getItem("items");
  //   for (let key in items) {
  //     keys.push(key);
  //   }
  //   console.log(parseDTotalQuantity);
  //   console.log(items);
  //   console.log(keys);
  // });

  function removeItem(name: string): void {
    const filteredItem = allItems.filter(
      (e: any) => name !== getChosenItemName(e)
    );
    setAllItems(filteredItem);

    // for removing quantity of a chosen item
    const temp = tempCart;
    temp[`${name}`] = 0;
    setTempCart(temp);

    // to decrease item quantity
    window.localStorage.setItem(
      "totalQuantity",
      getTotalQuantity(tempCart).toString()
    );
    // for removing items from local storage
    cart[name] = undefined;

    window.localStorage.setItem("cart", JSON.stringify(tempCart));
  }

  let cart: any = window.localStorage.getItem("cart");
  cart = JSON.parse(cart);
  const keys: any = [];
  for (let key in cart) {
    keys.push(key);
  }
  console.log(cart);
  function getQuantity(name: string): string {
    const cart: any = window.localStorage.getItem("cart");
    const parsedCart = JSON.parse(cart);
    const quantity = parsedCart[name].quantity;
    return quantity;
  }

  function addQuantity(name: string): void {
    let temp = tempCart;
    const quantity = temp[name].quantity + 1;
    if (quantity > 10) return;

    temp[name].quantity = quantity;

    window.localStorage.setItem("cart", JSON.stringify(temp));
    setTempCart(temp);
    setAddFlag(!addFlag);
  }
  function decreaseQuantity(name: string): void {
    let temp = tempCart;
    const quantity = temp[name].quantity - 1;
    if (quantity <= 0) return;
    temp[name].quantity = quantity;
    window.localStorage.setItem("cart", JSON.stringify(temp));
    setTempCart(temp);
    setAddFlag(!addFlag);
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
              src={`${cart[`${e}`].url}`}
              alt=""
            />
            <div className="flex name text-white break-words mx-3">
              {cart[`${e}`].name}
            </div>
            <div className="flex items-center ">
              <div className="flex items-center">
                <button
                  className="flex button "
                  onClick={() => decreaseQuantity(e)}
                >
                  -
                </button>
                <div className="flex text-white">{getQuantity(e)}</div>
                <button className="flex button" onClick={() => addQuantity(e)}>
                  +
                </button>
              </div>

              <div className="flex text-white mx-3">{cart[`${e}`].price}</div>
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
