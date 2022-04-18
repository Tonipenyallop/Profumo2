import React from "react";

export default function AddToCart({
  idx,
  setChosenItem,
  setVisibleCart,
  allItems,
  setAllItems,
}: any) {
  function getElement(idx: number) {
    return document.getElementById(`${idx}`);
  }
  return (
    <button
      className="button"
      onClick={(): void => {
        const chosenElement = getElement(idx);
        setChosenItem(chosenElement);

        setVisibleCart(true);
        const allItemsSoFar = allItems;
        setAllItems([...allItemsSoFar, chosenElement]);
      }}
    >
      Add To Cart
    </button>
  );
}
