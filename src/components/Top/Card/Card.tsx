import React from "react";
import FirstPageCard from "./first-page/FirstPageCard";
import SecondPageCard from "./second-page/SecondPageCard";
import Spinning from "../Spinning";
export default function Card({
  top,
  setVisibleCart,
  setChosenItem,
  allItems,
  setAllItems,
}: any) {
  let a = new Array(3).fill(0);
  return (
    <div className="relative border-4 border-green-400 preserve-3d">
      {a.map((e, idx) => {
        return <Spinning key={`${idx}`} />;
      })}

      {/* <SecondPageCard top={top} /> */}
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
