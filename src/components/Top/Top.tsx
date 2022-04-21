import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Card from "./Card/Card";
import Cart from "./Cart";
import TopCartButton from "./TopCartButton";
import TopProfumoIcon from "./Card/TopProfumoIcon";
import { getTotalQuantity } from "../../app/gettingFunctions";

export default function Top({
  allItems,
  setAllItems,
  chosenItem,
  setChosenItem,
  tempCart,
  setTempCart,
}: any) {
  const [visibleCart, setVisibleCart] = useState<boolean>(false);
  const [top, setTop] = useState<any>([]);

  console.log(getTotalQuantity(tempCart));
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
      <div className="relative">
        <TopProfumoIcon />
        <TopCartButton />
      </div>

      <Card
        top={top}
        setVisibleCart={setVisibleCart}
        setChosenItem={setChosenItem}
        allItems={allItems}
        setAllItems={setAllItems}
        tempCart={tempCart}
        setTempCart={setTempCart}
      />
    </div>
  );
}
