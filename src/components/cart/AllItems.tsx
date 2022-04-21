import React, { useEffect } from "react";
import {
  getElement,
  getChosenItemImage,
  getChosenItemPrice,
  getChosenItemName,
  getQuantity,
} from "../../app/gettingFunctions";
export default function AllItems({
  allItems,
  setAllItems,
  tempCart,
  setTempCart,
}: any) {
  function removeItem(idx: number): void {
    const element = getElement(idx);
    const name = element?.children?.[1].textContent;
    const filteredItem = allItems.filter(
      (e: any) => name !== getChosenItemName(e)
    );
    setAllItems(filteredItem);
  }

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="px-5">
      {allItems?.length === 0 ? (
        <div className="text-white text-center">No items are added yet!</div>
      ) : (
        <div className=""></div>
      )}
      {allItems?.map((e: any, idx: number) => (
        <div
          className=" border-2 border-green-300 flex justify-between items-center"
          key={`${idx}`}
          id={`${idx}`}
        >
          <img
            className="flex w-[100px] bg-white"
            src={getChosenItemImage(e)}
            alt=""
          />
          <div className="flex name text-white break-words mx-3">
            {getChosenItemName(e)}
          </div>
          <div className="flex items-center ">
            <div className="flex items-center">
              <button className="flex button">-</button>
              <div className="flex text-white">{getQuantity(e, tempCart)}</div>
              <button className="flex button">+</button>
            </div>

            <div className="flex text-white mx-3">{getChosenItemPrice(e)}</div>
            <button className="button" onClick={() => removeItem(idx)}>
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
