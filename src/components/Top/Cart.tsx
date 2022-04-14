import React, { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Cart({ visibleCart, setVisibleCart, chosenItem }: any) {
  const navigate = useNavigate();

  setTimeout(() => {
    if (visibleCart) setVisibleCart(false);
  }, 5000);

  useEffect(() => {
    console.log(visibleCart);
    const cart = document.getElementById("cart");
    if (cart?.classList.contains("top-[-999px]")) {
      // cart?.classList.remove("invisible");
      cart?.classList.add("top-0");
      cart?.classList.remove("top-[-999px]");
    } else {
      // cart?.classList.add("invisible");
      cart?.classList.remove("top-0");
      cart?.classList.add("top-[-999px]");
    }
    getChosenItemImage();
    getChosenItemPrice();
    getChosenItemName();
  }, [visibleCart]);

  function getChosenItemImage(): string {
    const url = chosenItem?.children?.[5].src;
    return url;
  }
  function getChosenItemPrice(): string {
    const price = chosenItem?.children?.[6].innerText;
    return price;
  }
  function getChosenItemName(): string {
    const name = chosenItem?.children?.[0].innerText;
    return name;
  }
  return (
    <div className="">
      <div
        id="cart"
        className="bg-red-300 fixed  top-[-999px] right-0   transition-all duration-1000"
      >
        <div className="flex  justify-center items-center">
          <img
            className="w-[100px] h-[100px] bg-white"
            src={getChosenItemImage()}
            alt=""
          />
          <div className="flex flex-col justify-center items-center">
            <div className="">{getChosenItemName()}</div>
            <div className="mx-3">{getChosenItemPrice()}</div>
          </div>
        </div>
        <button
          className="button"
          onClick={() => {
            setVisibleCart(false);
          }}
        >
          X
        </button>
        <button className="button" onClick={() => navigate("/my-cart")}>
          View My Cart
        </button>
      </div>
    </div>
  );
}
