import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Userpage({ isLogin, setIsLogin }: any) {
  const navigate = useNavigate();
  const likedLocal: any = window.localStorage.getItem("liked");
  const parsedLocalLiked = JSON.parse(likedLocal);

  function getItemLists(): any {
    const arr = [];
    for (let key in parsedLocalLiked) {
      if (parsedLocalLiked[key].liked) {
        const item = (
          <div
            className="border-b-2 flex justify-start items-center mx-20 px-20"
            key={key}
          >
            <img
              className="w-[150px]"
              src={parsedLocalLiked[key].url}
              alt="item I like"
            />
            <div className="">
              <p className="font-bold text-xl">{parsedLocalLiked[key].name}</p>
              <p>{parsedLocalLiked[key].price}</p>
              <button className=" border-b-2 border-black cursor-pointer text-gray-400 hover:text-black">
                Remove
              </button>
            </div>
          </div>
        );

        arr.push(item);
      }
    }
    return arr;
  }

  return (
    <div className="relative top-[150px]">
      <div className="flex justify-center border-red-500 border-4 ">
        <div className="flex flex-col border-2 w-[100%]  ">
          <div className="">WELCOME MATE</div>
          <div className="cursor-pointer" onClick={() => navigate("/orders")}>
            ORDER CONFIRMATION
          </div>
          <p className="cursor-pointer">FAVORITAS</p>
        </div>
        <div className="relative border-8 flex justify-end"></div>
      </div>

      <div className="flex flex-col">{getItemLists()}</div>

      <button
        className="button"
        onClick={() => {
          //   window.localStorage.setItem("isLogin", "false");
          //   setIsLogin("false");
        }}
      >
        Log out
      </button>
    </div>
  );
}
