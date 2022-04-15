import React from "react";
import FirstPageCard from "./FirstPageCard";

export default function Card({
  top,
  setVisibleCart,
  setChosenItem,
  allItems,
  setAllItems,
}: any) {
  return (
    <div className=" ">
      <FirstPageCard
        top={top}
        setChosenItem={setChosenItem}
        setVisibleCart={setVisibleCart}
        allItems={allItems}
        setAllItems={setAllItems}
      />
    </div>
  );
}
