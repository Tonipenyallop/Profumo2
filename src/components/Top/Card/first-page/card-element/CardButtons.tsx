import React from "react";

export default function CardButtons({ idx }: any) {
  function getElement(idx: number) {
    return document.getElementById(`${idx}`);
  }
  return (
    <div className="flex justify-center items-center flex-wrap">
      <button
        className="button"
        onClick={() => {
          // const e = getElement(idx);
          // e?.classList.add("card-flip-180");

          document
            .getElementById(`jeje-${idx}`)
            ?.classList.add("card-flip-180");
        }}
      >
        Detail
      </button>
    </div>
  );
}
