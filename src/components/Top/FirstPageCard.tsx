import React from "react";

export default function FirstPageCard({ top }: any) {
  return (
    <div className="relative preserve-3d group-hover:card-flip-180 w-full h-full duration-1000">
      {top.map((e: any, idx: number) => (
        <div className="absolute backface-hidden ">
          <div className=" bg-gray-500">
            <div className="flex items-center justify-center">
              <div className="flex bg-green-300">
                <div
                  className="flex  flex-col border-8  bg-green-300 "
                  key={idx}
                  id={`${idx}`}
                >
                  <div className="flex border-8 items-center justify-center">
                    {e.name}
                  </div>
                  <div className="">
                    <button className="button">Product</button>
                    {/* <button className="button" onClick={()=> toggleDescription(idx) }>Description</button> */}
                    <button
                      className="button"
                      onClick={() => console.log("flipping card")}
                    >
                      Description
                    </button>
                    <button className="button">Smell</button>
                  </div>

                  <div id="description" className="description h-0 ">
                    {e.description}
                  </div>
                  <div className="flex border-8 items-center justify-center">
                    {e.concentration}
                  </div>
                  <div className="flex border-8 items-center justify-center">
                    {e.size}
                  </div>
                  <img className="max-h-72 min-h-max" src={e.url} alt="" />
                  <div className="text-center">€{e.price}</div>

                  <button
                    className="button"
                    onClick={() => {
                      // visible cart and add the value
                      console.log("clicked");
                      //   console.log(visibleCart);

                      //   setVisibleCart(true);
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
