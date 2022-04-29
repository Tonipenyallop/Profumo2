import React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import "../input.css";
import Top from "./Top/Top";
import MyCart from "./cart/MyCart";
import Summer from "./Summer";
function App() {
  const [allItems, setAllItems] = useState<any>([]);
  const [chosenItem, setChosenItem] = useState<any>(false);
  const [tempCart, setTempCart] = useState<any>({});

  return (
    <div className="bg-blue-300">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/top"
          element={
            <Top
              allItems={allItems}
              setAllItems={setAllItems}
              chosenItem={chosenItem}
              setChosenItem={setChosenItem}
              tempCart={tempCart}
              setTempCart={setTempCart}
            />
          }
        />
        <Route path="/summer" element={<Summer />} />

        <Route
          path="/my-cart"
          element={
            <MyCart
              allItems={allItems}
              setAllItems={setAllItems}
              chosenItem={chosenItem}
              setChosenItem={setChosenItem}
              tempCart={tempCart}
              setTempCart={setTempCart}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
