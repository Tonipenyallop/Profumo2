import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Card from "./Card/Card";
import Cart from "./Cart";
import TopCartButton from "./TopCartButton";

export default function Top({
  allItems,
  setAllItems,
  chosenItem,
  setChosenItem,
}: any) {
  const [visibleCart, setVisibleCart] = useState<boolean>(false);
  const [top, setTop] = useState<any>([]);

  const navigate = useNavigate();

  async function getAllTop() {
    const res = await axios.get("/all");
    const data = res.data;
    setTop(data);
  }
  useEffect(() => {
    getAllTop();
  }, []);

  return (
    <div className="bg-black">
      <Cart
        visibleCart={visibleCart}
        setVisibleCart={setVisibleCart}
        chosenItem={chosenItem}
      />

      <div className="bg-white"></div>
      <TopCartButton />

      <img
        className="bg-white w-[50px] cursor-pointer "
        src={require("../../images/cologne-icon.webp")}
        alt=""
        onClick={() => navigate("/")}
      />

      {/* <div className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective">
        <FirstPageCard top={top} />
        <SecondPageCard top={top} />
      </div> */}
      <Card
        top={top}
        setVisibleCart={setVisibleCart}
        setChosenItem={setChosenItem}
        allItems={allItems}
        setAllItems={setAllItems}
      />
    </div>
  );
}
