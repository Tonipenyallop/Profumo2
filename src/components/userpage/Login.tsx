import React from "react";

export default function Login() {
  return (
    <div className="relative top-[145px]">
      <p className="text-center">YOUR ACCOUNT</p>
      <div className="flex justify-around items-center border-8">
        <div className="border-4 flex flex-col justify-center items-center w-[50%]">
          <div className="">NEW CLIENT</div>
          <div className=" break-words">
            Create an account to track & manage orders, view your account &
            loyalty information, as well as manage your Wishlist.
          </div>
          <button className="button">CREATE ACCOUNT</button>
        </div>

        <div className="border-4 flex flex-col justify-center items-center w-[50%]">
          <div className="">ALREADY HAVE AN ACCOUNT?</div>
          <input
            className="border-b-2 focus:border-b-2 focus:border-black focus:outline-none"
            type="text"
            placeholder="*Email Address"
          />
          <input
            className="border-b-2 focus:border-b-2 focus:border-black focus:outline-none"
            type="password"
            placeholder="*Password"
          />

          <button className="button">CREATE ACCOUNT</button>
        </div>
      </div>
    </div>
  );
}
