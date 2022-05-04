import React from "react";

export default function Login() {
  return (
    <div className="relative top-[145px]">
      <p className="text-center text-4xl my-3">YOUR ACCOUNT</p>
      <div className="flex justify-around items-center">
        <div className="border-r-2 flex flex-col justify-center items-center w-[50%]">
          <div className="text-2xl my-10">NEW CLIENT</div>
          <div className="mx-5 break-words">
            Create an account to track & manage orders, view your account &{" "}
            <br />
            loyalty information, as well as manage your Wishlist.
          </div>
          <button className="button my-5">CREATE ACCOUNT</button>
        </div>

        <div className="border-l-2- flex flex-col justify-center items-center w-[50%]">
          <div className="text-2xl my-10">ALREADY HAVE AN ACCOUNT?</div>
          <input
            className="border-b-2 focus:border-b-2 focus:border-black outline-none my-3 transition-color duration-500"
            type="text"
            placeholder="*Email Address"
          />
          <input
            className="border-b-2 focus:border-b-2 focus:border-black outline-none my-3 transition-color duration-500"
            type="password"
            placeholder="*Password"
          />

          <button className="button my-5">SIGN IN</button>
        </div>
      </div>
    </div>
  );
}
