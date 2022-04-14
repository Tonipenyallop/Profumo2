import React from "react";
import { useNavigate } from "react-router-dom";

export default function MyCart() {
  const navigate = useNavigate();
  return (
    <div className="bg-black">
      <div className="text-white">yellow</div>
      <button className="button" onClick={() => navigate("/top")}>
        Go Top page
      </button>
    </div>
  );
}
