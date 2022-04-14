import React from "react";
import { useNavigate } from "react-router-dom";

export default function MyCart({ allItems, setAllItems }: any) {
  const navigate = useNavigate();
  function getChosenItemImage(element: any): string {
    const url = element?.children?.[5].src;
    return url;
  }
  function getChosenItemPrice(element: any): string {
    const price = element?.children?.[6].innerText;
    return price;
  }
  function getChosenItemName(element: any): string {
    const name = element?.children?.[0].innerText;
    return name;
  }
  function removeItem(idx: number): void {
    const filteredItem = allItems.filter((e: any) => e.id != idx);
    for (let e of allItems) {
      console.log(e.id);
      console.log(idx);
    }
    setAllItems(filteredItem);
  }

  return (
    <div className="bg-black">
      <p className="text-white text-center py-5">MY CART</p>
      {allItems?.length === 0 ? (
        <div className="text-white text-center">No items are added yet!</div>
      ) : (
        <div className=""></div>
      )}
      {allItems?.map((e: any, idx: number) => (
        <div
          className="border-8 border-red-300 flex justify-center items-center"
          key={`${idx}`}
        >
          <img
            className="flex w-[100px] bg-white"
            src={getChosenItemImage(e)}
            alt=""
          />
          <div className="flex text-white mx-3">{getChosenItemName(e)}</div>

          <div className="">
            <div className="flex items-center">
              <button className="flex button">-</button>
              <div className="flex text-white">1</div>
              <button className="flex button">+</button>
            </div>
          </div>

          <div className="flex text-white mx-3">{getChosenItemPrice(e)}</div>
          <button className="button" onClick={() => removeItem(idx)}>
            X
          </button>
        </div>
      ))}
      <button className="button" onClick={() => navigate("/top")}>
        Go Top page
      </button>
      <button className="button" onClick={() => console.log("checking out")}>
        Check out
      </button>
    </div>
  );
}
