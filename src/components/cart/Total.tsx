import React, { useState, useEffect } from "react";
import {
  getChosenItemPrice,
  getChosenItemName,
  getQuantity,
} from "../../app/gettingFunctions";
export default function Total({ allItems, tempCart }: any) {
  const [totalFlag, setTotalFlag] = useState<boolean>(false);

  useEffect(() => {
    getTotal();
    setTotalFlag(!totalFlag);
  }, [totalFlag]);

  function getTotal(): number {
    return keys.reduce((a: any, b: any) => {
      let price = parseInt(items[b].price.split("€")[1]);
      const cart: any = window.localStorage.getItem("cart");
      const parsedCart: any = JSON.parse(cart);
      const quantity = parsedCart[b];
      price *= quantity;
      return a + price;
    }, 0);
  }
  let items: any = window.localStorage.getItem("items");
  items = JSON.parse(items);
  const keys: any = [];
  for (let key in items) {
    keys.push(key);
  }
  return (
    <div className="">
      {keys.length === 0 ? (
        <div className=""></div>
      ) : (
        <div className="flex flex-col justify-start items-center text-white bg-gray-700 w-56 h-56 pt-4 mx-5">
          <div className="flex ">ORDER SUMMARY</div>

          <div className="flex my-10">TOTAL - €{getTotal()} </div>

          <button
            className="button"
            onClick={() => console.log("checking out")}
          >
            Check out
          </button>
        </div>
      )}
    </div>
  );
}
