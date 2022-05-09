import React from "react";
import { useNavigate } from "react-router-dom";
export default function Orders() {
  const navigate = useNavigate();

  function getOrderedItems(): any {
    const purchasedItem: any = window.localStorage.getItem("purchasedItem");
    const parsedPurchasedItem = JSON.parse(purchasedItem);
    const arr = [];
    for (let key in parsedPurchasedItem) {
      const item = (
        <div className="border-4 flex justify-start items-center">
          <img
            className="w-[150px]"
            src={parsedPurchasedItem[key]?.url}
            alt="item I like"
          />
          <p className="text-xl">{parsedPurchasedItem[key]?.name}</p>
          <p>{parsedPurchasedItem[key]?.price}</p>
          <p className="text-gray-400">x{parsedPurchasedItem[key]?.quantity}</p>
        </div>
      );

      arr.push(item);
    }
    return arr;
  }
  return (
    <div className="relative top-[150px]">
      <div className="flex justify-start border-red-500 border-4 ">
        <div className="flex flex-col  border-2 border-red-500  ">
          <div className="">WELCOME MATE</div>
          <div className="cursor-pointer" onClick={() => navigate("/orders")}>
            ORDER CONFIRMATION
          </div>
          <p className="cursor-pointer" onClick={() => navigate("/account")}>
            FAVORITAS
          </p>
        </div>

        <div className="border-4 w-[40%] grid grid-cols-2  ">
          <div className="border-4  ">
            <div className="font-bold ">ORDER No.</div>
            <div className="">84671</div>
          </div>
          <div className="border-4 ">
            <p className="font-bold">Payment</p>
            <div className="">Credit Card</div>
          </div>
          <div className="border-4 ">Delivery address</div>
          <div className="border-4 ">Email</div>
        </div>
        <div className="border-4 ">TOTAL €XXX</div>
        <div className="border-4 w-[50%]">{getOrderedItems()}</div>
      </div>

      <button
        className="button"
        onClick={() => {
          //   window.localStorage.setItem("isLogin", "false");
          //   setIsLogin("false");
        }}
      >
        Log out
      </button>
    </div>
  );
}
