import React from "react";

export default function SecondPageCard({ top }: any) {
  // setTimeout(() => {
  //   const toni = document.getElementById("toni");
  //   toni?.classList.add("card-flip-180");
  // }, 2000);
  return (
    <div className="absolute top-0 border-4 border-red-700">
      <div className="flex justify-center items-center ">
        <div
          id="toni"
          className="flex bg-blue-400 border-4 border-orange-400 w-[350px] h-[350px]  transition-all duration-1000 backface-hidden"
        >
          jeje
          <button className="button">CLICK</button>
        </div>
      </div>
    </div>
  );
}
