import React from "react";

export default function FirstPageCard({
  top,
  setChosenItem,
  setVisibleCart,
  allItems,
  setAllItems,
}: any) {
  function flippingCard(idx: number) {
    const element = getElement(idx);
    if (element?.classList.contains("card-flip-180"))
      element?.classList.remove("card-flip-180");
    else element?.classList.add("card-flip-180");
  }
  function getElement(idx: number) {
    return document.getElementById(`${idx}`);
  }
  return (
    <div className="flex flex-wrap justify-center items-start">
      {top &&
        top.map((e: any, idx: number) => {
          return (
            <div
              className="flex  flex-col border-2 transition-all duration-1000 backface-hidden"
              key={idx}
              id={`${idx}`}
            >
              <div className="flex items-center justify-center text-white">
                {e.name}
              </div>
              <div className="">
                <button className="button">Product</button>
                {/* <button className="button" onClick={()=> toggleDescription(idx) }>Description</button> */}
                <button className="button" onClick={() => flippingCard(idx)}>
                  Description
                </button>
                <button className="button">Smell</button>
              </div>

              <div id="description" className="description h-0 ">
                {e.description}
              </div>
              <div className="flex  items-center justify-center text-white">
                {e.concentration}
              </div>
              <div className="flex  items-center justify-center text-white">
                {e.size}
              </div>
              <img className="max-h-72 min-h-max" src={e.url} alt="" />
              <div className="text-center text-white">€{e.price}</div>

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
            </div>
          );
        })}
    </div>
  );
}
