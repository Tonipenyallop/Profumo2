import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Card from "./Card";
import Cart from "./Cart";
import FirstPageCard from "./FirstPageCard";
import SecondPageCard from "./SecondPageCard";

export default function Top({ allItems, setAllItems }: any) {
  // interface CardProps {
  //     top : Array<string>
  // }
  const [visibleCart, setVisibleCart] = useState<boolean>(false);
  const [top, setTop] = useState<any>([]);
  const [chosenItem, setChosenItem] = useState<any>(false);
  const navigate = useNavigate();

  async function getAllTop() {
    const res = await axios.get("/all");
    const data = res.data;
    setTop(data);

    console.log(top);
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
      <div className="">TOP PAGE</div>
      <button className="button" onClick={() => navigate("/")}>
        HEHE
      </button>
      <button className="button" onClick={() => navigate("/my-cart")}>
        go My Cart
      </button>
      {/* <div className="w-[300px] h-[420px] bg-transparent cursor-pointer group perspective">
        <FirstPageCard top={top} />
        <SecondPageCard top={top} />
      </div> */}
      <Card
        top={top}
        setVisibleCart={setVisibleCart}
        visibleCart={visibleCart}
        setChosenItem={setChosenItem}
        allItems={allItems}
        setAllItems={setAllItems}
      />
    </div>
  );
}
