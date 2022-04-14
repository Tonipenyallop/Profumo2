import React, { useState } from "react";

export default function Card({
  top,
  setVisibleCart,
  visibleCart,
  setChosenItem,
  allItems,
  setAllItems,
}: any) {
  const [clicked, setClicked] = useState<boolean>(false);

  function toggleDescription(idx: number) {
    const element = getElement(idx);
    const description = element?.querySelector("#description");

    if (description?.classList.contains("h-0")) {
      // description?.classList.remove('max-h-0')
      // description?.classList.add('max-h-fit')
      description?.classList.remove("h-0");
      description?.classList.add("h-96", "px-2");
    } else {
      // description?.classList.remove('max-h-fit')
      // description?.classList.add('max-h-0')
      description?.classList.remove("h-96", "pt-10");

      description?.classList.add("h-0");
    }

    setClicked(!clicked);
  }

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
    <div className="flex flex-wrap justify-center items-start transition-all duration-1000 backface-hidden ">
      {top &&
        top.map((e: any, idx: number) => {
          return (
            <div className="flex  flex-col border-2" key={idx} id={`${idx}`}>
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

                  setVisibleCart(!visibleCart);
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
