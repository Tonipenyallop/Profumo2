import React from "react";
import { getElement } from "../../../../../app/gettingFunctions";
export default function CardButtons({ idx }: any) {
  return (
    <div className="flex justify-center items-center flex-wrap">
      <button
        className="button"
        onClick={() => {
          document.getElementById(`${idx}`)?.classList.add("card-flip-180");
        }}
      >
        Detail
      </button>
    </div>
  );
}
