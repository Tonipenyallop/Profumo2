import React from "react";

export default function Total({ allItems }: any) {
  function getChosenItemPrice(element: any): number {
    const chosenChildren = element?.children?.[2];
    const price = chosenChildren.children?.[4].innerText.split("€")[1];
    return parseInt(price);
  }
  function getTotal(): number {
    return allItems.reduce((a: any, b: any) => {
      let price = getChosenItemPrice(b);
      return a + price;
    }, 0);
  }
  return (
    <div className="">
      {allItems.length === 0 ? (
        <div className=""></div>
      ) : (
        <div className="flex flex-col justify-start items-center text-white bg-gray-700 w-56 h-56 pt-4 mx-5">
          <div className="flex ">ORDER SUMMARY</div>

          <div className="flex my-10">TOTAL - €{getTotal()} </div>

          <button
            className="button"
            onClick={() => console.log("checking out")}
          >
            Check out
          </button>
        </div>
      )}
    </div>
  );
}
