import React from "react";
import CardButtons from "./card-element/CardButtons";

import FirstPageName from "./card-element/FirstPageName";
import SecondPageCard from "./second-page/SecondPageCard";
import FirstPageBody from "./card-element/FirstPageBody";
import AddToCart from "./card-element/AddToCart";
export default function FirstPageCard({
  top,
  setChosenItem,
  setVisibleCart,
  allItems,
  setAllItems,
}: any) {
  // function flippingCard(idx: number) {
  //   const element = getElement(idx);
  //   const backPart = document.getElementById(`${idx}-des`);
  //   backPart?.parentElement?.classList.remove("invisible");
  //   // backPart?.classList.remove("invisible");
  //   if (element?.classList.contains("card-flip-180"))
  //     element?.classList.remove("card-flip-180");
  //   else element?.classList.add("card-flip-180");
  // }
  // function getElement(idx: number) {
  //   return document.getElementById(`${idx}`);
  // }

  return (
    <div
      className="relative flex flex-wrap justify-around items-center"
      //flex flex-wrap justify-center items-start border-4 border-red-700
    >
      {top &&
        top.map((e: any, idx: number) => {
          return (
            <div
              className="relative preserve-3d transition-all duration-1000"
              key={`${idx}`}
            >
              <div
                className="relative preserve-3d transition-all duration-1000  h-[750px] w-[500px] "
                id={`${idx}`}
              >
                <div
                  className="absolute  backface-hidden top-0 w-full h-full"
                  // onClick={() =>
                  //   document
                  //     .getElementById(`jeje-${idx}`)
                  //     ?.classList.add("card-flip-180")
                  // }
                >
                  <FirstPageBody
                    concentration={e.concentration}
                    size={e.size}
                    url={e.url}
                    price={e.price}
                  />
                  <FirstPageName name={e.name} price={e.price} />
                  <CardButtons idx={idx} />
                  <AddToCart
                    idx={idx}
                    setChosenItem={setChosenItem}
                    setVisibleCart={setVisibleCart}
                    allItems={allItems}
                    setAllItems={setAllItems}
                  />
                </div>
                {/* below is back page */}
                <SecondPageCard
                  idx={idx}
                  concentration={e.concentration}
                  size={e.size}
                  description={e.description}
                  setChosenItem={setChosenItem}
                  setVisibleCart={setVisibleCart}
                  allItems={allItems}
                  setAllItems={setAllItems}
                  spring={e.spring}
                  summer={e.summer}
                  fall={e.fall}
                  winter={e.winter}
                  day={e.day}
                  night={e.night}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}
