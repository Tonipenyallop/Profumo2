import React from "react";
import { useNavigate } from "react-router-dom";
import AllItems from "./AllItems";
import Total from "./Total";

export default function MyCart({
  allItems,
  setAllItems,
  tempCart,
  setTempCart,
}: any) {
  const navigate = useNavigate();

  return (
    <div className="bg-black">
      <p className="text-white text-center py-5">MY CART</p>
      <div className="flex justify-center items-center flex-wrap">
        <AllItems
          allItems={allItems}
          setAllItems={setAllItems}
          tempCart={tempCart}
          setTempCart={setTempCart}
        />
        <Total allItems={allItems} tempCart={tempCart} />
      </div>
      <button className="button" onClick={() => navigate("/top")}>
        Go Top page
      </button>
    </div>
  );
}
