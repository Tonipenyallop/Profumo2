import React, { useState } from "react";

export default function Userpage({ isLogin, setIsLogin }: any) {
  return (
    <div className="relative top-[150px]">
      WELCOME MATE
      <div className="">ORDER CONFIRMATION</div>
      <div className="">FRAGRANCES I LIKE</div>
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
