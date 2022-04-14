import React from "react";
import { useNavigate } from "react-router";

export default function HomeWinter() {
  const navigate = useNavigate();

  return (
    <div className="">
      <img
        className="w-full"
        src={require("../../images/winter.jpeg")}
        alt=""
      />

      <p className="flex text-white text-3xl">Winter Winter Winter</p>
      <button className="flex button" onClick={() => navigate("/top")}>
        To Top Winter Page
      </button>
    </div>
  );
}
