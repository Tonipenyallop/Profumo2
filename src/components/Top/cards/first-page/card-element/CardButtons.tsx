import React from "react";

export default function CardButtons({ idx }: any) {
  function getElement(idx: number) {
    return document.getElementById(`${idx}`);
  }
  return (
    <div>
      <button className="button">Description</button>
      <button
        className="button"
        onClick={() => {
          const e = getElement(idx);
          e?.classList.add("card-flip-180");
          // console.log(getElement(idx));
        }}
      >
        Description
      </button>
      <button className="button">Description</button>
    </div>
  );
}
