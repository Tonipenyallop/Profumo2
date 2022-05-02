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
    <div className="bg-black ">
      <div className="flex justify-center items-center flex-wrap mt-32 pb-5">
        <div className="flex ">
          <AllItems
            allItems={allItems}
            setAllItems={setAllItems}
            tempCart={tempCart}
            setTempCart={setTempCart}
          />
        </div>

        <Total allItems={allItems} tempCart={tempCart} />
      </div>
    </div>
  );
}
