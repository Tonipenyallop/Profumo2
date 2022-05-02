import React from "react";
import AllItems from "./AllItems";
import Total from "./Total";

export default function MyCart({
  allItems,
  setAllItems,
  tempCart,
  setTempCart,
}: any) {
  return (
    <div className="bg-black absolute top-[135px] w-full h-full">
      <div className="flex justify-center items-center flex-wrap my-5">
        <AllItems
          allItems={allItems}
          setAllItems={setAllItems}
          tempCart={tempCart}
          setTempCart={setTempCart}
        />
        <Total allItems={allItems} tempCart={tempCart} />
      </div>
    </div>
  );
}
