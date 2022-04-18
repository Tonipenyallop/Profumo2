import React from "react";
import CardButtons from "./card-element/CardButtons";

import FirstPageName from "./card-element/FirstPageName";
import SecondPageCard from "../second-page/SecondPageCard";
import FirstPageBody from "./card-element/FirstPageBody";
import AddToCart from "./card-element/AddToCart";
export default function FirstPageCard({
  top,
  setChosenItem,
  setVisibleCart,
  allItems,
  setAllItems,
}: any) {
  function flippingCard(idx: number) {
    const element = getElement(idx);
    const backPart = document.getElementById(`${idx}-des`);
    backPart?.parentElement?.classList.remove("invisible");
    // backPart?.classList.remove("invisible");
    if (element?.classList.contains("card-flip-180"))
      element?.classList.remove("card-flip-180");
    else element?.classList.add("card-flip-180");
  }
  function getElement(idx: number) {
    return document.getElementById(`${idx}`);
  }
  return (
    <div className="flex flex-wrap justify-center items-start border-4 border-red-700">
      {top &&
        top.map((e: any, idx: number) => {
          return (
            <div className="relative">
              <FirstPageName />
              <div className="relative preserve-3d" key={idx}>
                <div
                  className=" flex  flex-col border-2 transition-all duration-1000 backface-hidden border-yellow-300 "
                  id={`${idx}`}
                >
                  <FirstPageName name={e.name} />
                  <CardButtons idx={idx} />
                  <FirstPageBody
                    description={e.description}
                    concentration={e.concentration}
                    size={e.size}
                    url={e.url}
                    price={e.price}
                  />
                  <AddToCart
                    idx={idx}
                    setChosenItem={setChosenItem}
                    setVisibleCart={setVisibleCart}
                    allItems={allItems}
                    setAllItems={setAllItems}
                  />
                </div>
              </div>

              {/* <div
                className="relative preserve-3d transition-all duration-1000 border-4 w-[50px] h-[50px]"
                id={`jeje-${idx}`}
              >
                <div
                  className="absolute bg-white backface-hidden top-0 w-full h-full"
                  onClick={() =>
                    document
                      .getElementById(`jeje-${idx}`)
                      ?.classList.add("card-flip-180")
                  }
                >
                  First
                </div>
                <div
                  className="absolute bg-purple-300  card-flip-180 backface-hidden top-0 w-full h-full"
                  onClick={() =>
                    document
                      .getElementById(`jeje-${idx}`)
                      ?.classList.remove("card-flip-180")
                  }
                >
                  Back
                </div>
              </div> */}
              {/* <div
                className="absolute   text-red-300  card-flip-180  top-0 w-full h-full "
                onClick={() => {
                  // console.log(document.getElementById("jeje"));
                  // document
                  //   .getElementById("jeje")
                  //   ?.classList.remove("card-flip-180");
                  flippingCard(idx);
                }}
              >
                Back
                <button className="button">Click meee</button>
              </div> */}
            </div>
          );
        })}
    </div>
  );
}
