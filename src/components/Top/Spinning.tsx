import React from "react";

export default function SpinningShit() {
  return (
    <div
      className="relative preserve-3d transition-all duration-1000 border-4 w-[50px] h-[50px]"
      id="jeje"
    >
      <div
        className="absolute bg-white backface-hidden top-0 w-full h-full"
        onClick={() =>
          document.getElementById("jeje")?.classList.add("card-flip-180")
        }
      >
        Front
      </div>
      <div
        className="absolute bg-purple-300  card-flip-180 backface-hidden top-0 w-full h-full"
        onClick={() =>
          document.getElementById("jeje")?.classList.remove("card-flip-180")
        }
      >
        Back
      </div>
    </div>
  );
}
