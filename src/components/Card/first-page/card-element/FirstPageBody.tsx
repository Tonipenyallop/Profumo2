import React from "react";

export default function FirstPageBody({
  concentration,
  size,
  url,
  price,
}: any) {
  return (
    <div className="flex flex-col justify-center border-4 items-center ">
      <img className="max-h-[450px] max-w-[400px] " src={url} alt="" />
      {/* <div className="flex  items-center justify-center text-white">
        {concentration}
      </div>
      <div className="flex  items-center justify-center text-white">{size}</div>
      <div className="text-center text-white text-xs">€{price}</div>
    */}
    </div>
  );
}
