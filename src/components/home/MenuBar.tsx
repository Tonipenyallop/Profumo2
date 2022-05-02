import React from "react";
import { useNavigate } from "react-router-dom";
import TopProfumoIcon from "./TopProfumoIcon";

export default function MenuBar() {
  const navigate = useNavigate();

  return (
    <div className="py-5">
      <div className="flex justify-center items-center">
        <TopProfumoIcon />
        <div className="flex justify-center items-center">
          <button
            className="button"
            value="top"
            onClick={() => navigate("/top")}
          >
            Top 5
          </button>
          <button className="button" onClick={() => navigate("/summer")}>
            Top 5 In Summer
          </button>
          <button
            className="button"
            onClick={() => console.log("nothing happened yet")}
          >
            Top 5 In Winter
          </button>
        </div>
      </div>
    </div>
  );
}
