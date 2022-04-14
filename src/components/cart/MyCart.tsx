import React from "react";
import { useNavigate } from "react-router-dom";
import AllItems from "./AllItems";
import Total from "./Total";

export default function MyCart({ allItems, setAllItems }: any) {
  const navigate = useNavigate();
  // function getChosenItemPrice(element: any): number {
  //   const price = parseInt(element?.children?.[6].innerText.split("€")[1]);
  //   return price;
  // }
  // function getTotal(): number {
  //   return allItems.reduce((a: any, b: any) => {
  //     let price = getChosenItemPrice(b);
  //     return a + price;
  //   }, 0);
  // }
  return (
    <div className="bg-black">
      <p className="text-white text-center py-5">MY CART</p>
      <div className="flex justify-center items-center flex-wrap">
        <AllItems allItems={allItems} setAllItems={setAllItems} />
        <Total allItems={allItems} />
      </div>
      <button className="button" onClick={() => navigate("/top")}>
        Go Top page
      </button>
    </div>
  );
}
