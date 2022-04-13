import React from "react";
import { useNavigate } from "react-router";
export default function HomeTop() {
  const navigate = useNavigate();
  return (
    <div className="">
      <img src={require("../../images/applying-cologne.webp")} alt="" />

      <p className="flex text-white text-3xl">
        Profumo is the website you can purchase niche fragrance
      </p>
      <button className="flex button" onClick={() => navigate("/top")}>
        To Top5 Page
      </button>
    </div>
  );
}
