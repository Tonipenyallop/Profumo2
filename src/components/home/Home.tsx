import React from "react";
import { useNavigate } from "react-router-dom";
import Count from "./Count";
import MenuBar from "./MenuBar";
export default function Home() {
  const navigate = useNavigate();
  const toHomePage = () => {
    navigate("/");
  };
  return (
    <div className="bg-img">
      <MenuBar />
      <Count />
      <div className="flex justify-center items-center ">
        <div className="absolute center h-[180px] w-[180px] bg-green-300 "></div>
        <div className="absolute center h-[180px] w-[180px] bg-red-300 transition-all duration-1000 hover:card-flip-180 backface-hidden preserve-3d perspective">
          <button className="button">YELLOW</button>
          <p>bluh bluh bluh</p>
        </div>
        <div className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective">
          {/* heheh */}
          <div className="relative preserve-3d group-hover:card-flip-180 w-full h-full duration-1000">
            <div className="absolute backface-hidden border-2 w-full h-full">
              <div className="w-full h-full bg-gray-500">
                jefef je
                <div className="flex items-center justify-center">
                  <div className="flex bg-green-300">second page is here</div>
                </div>
              </div>
            </div>
            <div className="absolute card-flip-180 backface-hidden w-full h-full bg-gray-100 overflow-hidden">
              <div className="text-center flex flex-col items-center justify-center h-full text-gray-800 px-2 pb-24">
                <h1 className="text-3xl font-semibold">The King's Man</h1>
                <p className="my-2">9.0 Rating</p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis itaque assumenda saepe animi maxime libero non quasi,
                  odit natus veritatis enim culpa nam inventore doloribus quidem
                  temporibus amet velit accusamus.
                </p>
                <button className="bg-teal-500 px-6 py-2 font-semibold text-white rounded-full absolute -bottom-20 delay-500 duration-1000 group-hover:bottom-20 scale-0 group-hover:scale-125">
                  Watch Now
                </button>
              </div>
            </div>
          </div>

          {/* till here */}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="bg-white">
          <img src={require("../../images/applying-cologne.jpeg")} alt="" />
          Profumo is the website you can purchase niche fragrance
        </div>
      </div>
      <button className="button" onClick={toHomePage}>
        HEHE
      </button>
    </div>
  );
}
