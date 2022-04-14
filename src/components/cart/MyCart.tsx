import React from "react";
import { useNavigate } from "react-router-dom";
import AllItems from "./AllItems";

export default function MyCart({ allItems, setAllItems }: any) {
  const navigate = useNavigate();

  return (
    <div className="bg-black">
      <p className="text-white text-center py-5">MY CART</p>
      <div className="text-white">Total</div>
      <AllItems allItems={allItems} setAllItems={setAllItems} />
      <button className="button" onClick={() => navigate("/top")}>
        Go Top page
      </button>
      {allItems.length === 0 ? (
        <div></div>
      ) : (
        <button className="button" onClick={() => console.log("checking out")}>
          Check out
        </button>
      )}
    </div>
  );
}
