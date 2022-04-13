import React from "react";

export default function SecondPageCard({ top }: any) {
  return (
    <div className="relative preserve-3d group-hover:card-flip-180 w-full h-full duration-1000">
      {top.map((e: any) => (
        <div className="absolute card-flip-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
          <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
            <p>{e.description}</p>
            <button className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
              Watch Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
