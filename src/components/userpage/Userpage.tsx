import React, { useState } from "react";

export default function Userpage({ isLogin, setIsLogin }: any) {
  const likedLocal: any = window.localStorage.getItem("liked");
  const parsedLocalLiked = JSON.parse(likedLocal);

  function getItemLists(): any {
    const arr = [];
    for (let key in parsedLocalLiked) {
      if (parsedLocalLiked[key].liked) {
        const item = (
          <div className="border-4 flex justify-start items-center">
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
      WELCOME MATE
      <div className="">ORDER CONFIRMATION</div>
      <div className="">
        <p>FAVORITAS</p>
        {getItemLists()}
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
