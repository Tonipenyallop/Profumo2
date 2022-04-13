import React from "react";
import { useNavigate } from "react-router-dom";
import Count from "./Count";
import HomeSummer from "./HomeSummer";
import HomeTop from "./HomeTop";
import HomeWinter from "./HomeWinter";
import MenuBar from "./MenuBar";
export default function Home() {
  const navigate = useNavigate();
  const toHomePage = () => {
    navigate("/");
  };
  return (
    <div className="bg-black">
      <MenuBar />
      <Count />
      <div className="flex justify-center items-center "></div>
      <div className="flex flex-col justify-center items-center">
        <HomeTop />
        <HomeSummer />
        <HomeWinter />
      </div>
    </div>
  );
}
