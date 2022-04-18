import React from "react";

export default function SecondPageCard({
  idx,
  concentration,
  size,
  description,
}: any) {
  // setTimeout(() => {
  //   const toni = document.getElementById("toni");
  //   toni?.classList.add("card-flip-180");
  // }, 2000);
  return (
    <div
      className="absolute card-flip-180 backface-hidden top-0 w-full h-full"
      onClick={() =>
        document
          .getElementById(`jeje-${idx}`)
          ?.classList.remove("card-flip-180")
      }
    >
      <div className="flex  items-center justify-center text-white">
        {concentration}
      </div>
      <div className="flex  items-center justify-center text-white">{size}</div>
      <div className="mx-3 my-3 text-white break-words">{description}</div>
      <button className="button">Go Back</button>
      <button className="button">Add to Cart</button>
    </div>
  );
}
