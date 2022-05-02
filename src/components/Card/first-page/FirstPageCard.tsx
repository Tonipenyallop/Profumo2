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
  tempCart,
  setTempCart,
}: any) {
  return (
    <div
      className="relative flex flex-wrap justify-around items-center"
      //flex flex-wrap justify-center items-start border-4 border-red-700
    >
      {top?.map((e: any, idx: number) => {
        return (
          <div
            className="relative preserve-3d transition-all duration-1000 z-10"
            key={`${idx}`}
          >
            <div
              className="relative preserve-3d transition-all duration-1000  h-[750px] w-[500px] "
              id={`${idx}`}
            >
              <div className="absolute backface-hidden  top-0 w-full h-full">
                <FirstPageBody
                  concentration={e.concentration}
                  size={e.size}
                  url={e.url}
                  price={e.price}
                />
                <FirstPageName name={e.name} price={e.price} />
                <div className="flex justify-center items-center">
                  <CardButtons idx={idx} />
                  <AddToCart
                    idx={idx}
                    setChosenItem={setChosenItem}
                    setVisibleCart={setVisibleCart}
                    allItems={allItems}
                    setAllItems={setAllItems}
                    tempCart={tempCart}
                    setTempCart={setTempCart}
                  />
                </div>
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
                seasons={e.seasons}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
