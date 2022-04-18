import React from "react";
import FirstPageCard from "./first-page/FirstPageCard";
export default function Card({
  top,
  setVisibleCart,
  setChosenItem,
  allItems,
  setAllItems,
}: any) {
  console.log(allItems);
  return (
    <div className="relative preserve-3d">
      <div className="flex">
        <FirstPageCard
          top={top}
          setChosenItem={setChosenItem}
          setVisibleCart={setVisibleCart}
          allItems={allItems}
          setAllItems={setAllItems}
        />
      </div>
    </div>
  );
}
