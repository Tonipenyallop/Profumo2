import React from "react";
import { getElement } from "../../../../../app/gettingFunctions";
export default function CardButtons({ idx }: any) {
  return (
    <div className="flex justify-center items-center flex-wrap">
      <button
        className="button"
        onClick={() => {
          document.getElementById(`${idx}`)?.classList.add("card-flip-180");
          const a = document
            .getElementById(`${idx}`)
            ?.querySelectorAll(".seasons");
          console.log(a);
          setTimeout(() => {
            document
              .querySelectorAll(".seasons")
              .forEach((e: any) => e.classList.remove("w-[0%]"));
          }, 1000);
        }}
      >
        Detail
      </button>
    </div>
  );
}
