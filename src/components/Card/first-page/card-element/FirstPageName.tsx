import React from "react";

export default function FirstPageName({ name, price }: any) {
  return (
    <div className="">
      <div className="name flex items-center justify-center text-white text-3xl">
        {name}
      </div>
      <div className="price text-center text-white text-sm mt-2">€{price}</div>
    </div>
  );
}
