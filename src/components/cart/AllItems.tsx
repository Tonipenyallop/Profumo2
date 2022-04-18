import React from "react";
import { Children } from "react";

export default function AllItems({ allItems, setAllItems, chosenItem }: any) {
  function getElement(idx: number) {
    return document.getElementById(`${idx}`);
  }
  function getChosenItemImage(element: any): string {
    const chosenChildren = element?.children[2];
    const src = chosenChildren?.children?.[3].src;
    return src;
  }
  function getChosenItemPrice(element: any): string {
    const chosenChildren = element?.children?.[2];
    const price = chosenChildren.children?.[4].innerText;
    return price;
  }
  function getChosenItemName(element: any): string {
    const chosenChildren = element?.children?.[0];
    const name = chosenChildren.innerText;
    return name;
  }
  function removeItem(idx: number): void {
    const elementText = getElement(idx)?.children?.[1].textContent;

    const filteredItem = allItems.filter(
      (e: any) => elementText !== e.children?.[0].innerText
    );
    setAllItems(filteredItem);
  }
  return (
    <div className="px-5">
      {allItems?.length === 0 ? (
        <div className="text-white text-center">No items are added yet!</div>
      ) : (
        <div className=""></div>
      )}
      {allItems?.map((e: any, idx: number) => (
        <div
          className=" border-b-2 border-white flex justify-between items-center"
          key={`${idx}`}
          id={`${idx}`}
        >
          <img
            className="flex w-[100px] bg-white"
            src={getChosenItemImage(e)}
            alt=""
          />
          <div className="flex text-white break-words mx-3">
            {getChosenItemName(e)}
          </div>
          <div className="flex items-center ">
            <div className="flex items-center">
              <button className="flex button">-</button>
              <div className="flex text-white">1</div>
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
