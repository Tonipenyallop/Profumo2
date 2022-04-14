import React from "react";
import { useNavigate } from "react-router";

export default function HomeSummer() {
  const navigate = useNavigate();

  return (
    <div className="">
      <img
        className="w-full"
        src={require("../../images/summer.jpeg")}
        alt=""
      />

      <p className="flex text-white text-3xl">Summer Summer Summer</p>
      <button className="flex button" onClick={() => navigate("/top")}>
        To Top Summer Page
      </button>
    </div>
  );
}
