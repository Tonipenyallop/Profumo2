import React, { useState } from "react";
import CardButtons from "./card-element/CardButtons";

import FirstPageName from "./card-element/FirstPageName";
import SecondPageCard from "./second-page/SecondPageCard";
import FirstPageBody from "./card-element/FirstPageBody";
import AddToCart from "./card-element/AddToCart";
import Icon from "../Icon";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
export default function FirstPageCard({
  top,
  setChosenItem,
  setVisibleCart,
  allItems,
  setAllItems,
  tempCart,
  setTempCart,
}: any) {
  const [heartIcon, setHeartIcon] = useState<any>(
    <AiOutlineHeart id="empty" size="24" />
  );
  return (
    <div className="relative flex flex-wrap justify-around items-center">
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
                  <div
                    className="cursor-pointer"
                    onClick={() => {
                      if (heartIcon.props.id === "full")
                        setHeartIcon(<AiOutlineHeart id="empty" size="24" />);
                      else {
                        console.log("else");
                        setHeartIcon(<AiFillHeart id="full" size="24" />);
                      }
                    }}
                  >
                    <Icon icon={heartIcon} />
                  </div>
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
