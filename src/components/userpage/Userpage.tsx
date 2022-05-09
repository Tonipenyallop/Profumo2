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
          <div className="border-4 flex justify-start items-center" key={key}>
            <img
              className="w-[150px]"
              src={parsedLocalLiked[key].url}
              alt="item I like"
            />
            <p>{parsedLocalLiked[key].name}</p>
            <button className="button">Remove</button>
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
        <div className="flex flex-col border-2 border-red-500  ">
          <div className="">WELCOME MATE</div>
          <div className="cursor-pointer" onClick={() => navigate("/orders")}>
            ORDER CONFIRMATION
          </div>
          <p className="cursor-pointer">FAVORITAS</p>
        </div>
        <div className="relative border-8 flex justify-end">
          <div className="flex flex-col">{getItemLists()}</div>
        </div>
      </div>

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
