import React from "react";
import { useNavigate } from "react-router";

export default function HomeWinter() {
  const navigate = useNavigate();

  return (
    <div className="relative hover:scale-105 duration-1000 transition-all">
      <img
        className="h-[100%]"
        src={require("../../images/winter.jpeg")}
        alt=""
      />
      <div className="absolute top-[10px] mx-5 my-2">
        <p className="flex text-white text-sm">VIEW NOW </p>
        <p className="flex text-white text-3xl">Winter Winter Winter </p>
        <button className="flex button" onClick={() => navigate("/top")}>
          To Winter Page
        </button>
      </div>
    </div>
  );
}
