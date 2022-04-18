import React from "react";

export default function FirstPageBody({
  description,
  concentration,
  size,
  url,
  price,
}: any) {
  return (
    <div className="flex flex-col  ">
      <div id="description" className="description h-0 ">
        {description}
      </div>
      <div className="flex  items-center justify-center text-white">
        {concentration}
      </div>
      <div className="flex  items-center justify-center text-white">{size}</div>
      <img className="max-h-[350px] " src={url} alt="" />
      <div className="text-center text-white">€{price}</div>
    </div>
  );
}
