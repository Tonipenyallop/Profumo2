import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import OrderTemplate from "./OrderTemplate";
export default function Orders() {
  // const [orderNumber, setOrderNumber] = useState<number>(0);
  const navigate = useNavigate();
  const [address, setAddress] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [order, setOrder] = useState<any>([]);
  let emailLocal: any;

  useEffect(() => {
    getUserAddress();
    emailLocal = window.localStorage.getItem("email");
    setEmail(emailLocal);
    getOrder();
  }, []);

  function getItem(items: any): any {
    const arr = [];
    for (let key in items) {
      const item = (
        <div className="flex justify-start items-start " key={key}>
          <div className="flex w-[50%]">
            <img
              className="w-[150px]"
              src={items[key]?.url}
              alt="item I like"
            />
            <div className="flex flex-col justify-start items-start">
              <p className="text-xl font-bold">{items[key]?.name}</p>
              <p className="text-gray-400">Quantity: {items[key]?.quantity}</p>
            </div>
          </div>

          <div className="flex justify-end items-end w-[50%] ">
            <p className="flex mx-5 font-bold text-lg">{items[key]?.price}</p>
          </div>
        </div>
      );
      arr.push(item);
    }
    return arr;
  }

  async function getOrder(): Promise<void> {
    const request = await axios.post("/get_order", { email: emailLocal });
    const response = request.data;
    setOrder(response);
  }

  async function getUserAddress(): Promise<void> {
    const email: any = window.localStorage.getItem("email");

    const response = await axios.post("/address", { email });
    setAddress(response.data);
  }

  function getTotalCost(items: any): number {
    console.log(items);
    let result = 0;
    for (let key in items) {
      const price = parseInt(items[key].price.split("€")[1]);
      result += price;
    }
    return result;
  }

  return (
    <div className="relative top-72">
      <div className="flex flex-col  border-2 border-red-500  ">
        <div className="">WELCOME MATE</div>
        <div className="cursor-pointer" onClick={() => navigate("/orders")}>
          ORDER CONFIRMATION
        </div>
        <p className="cursor-pointer" onClick={() => navigate("/account")}>
          FAVORITAS
        </p>
      </div>
      {order.map((e: any, idx: number) => {
        return (
          <div className="flex justify-start border-b-2 mx-10 " key={`${idx}`}>
            {/* <div className=" mx-2 ">
              <div className="">5/12 </div>
            </div> */}
            <div className=" w-[40%] grid grid-cols-2  ">
              <div className="  ">
                <div className="font-bold ">ORDER No.</div>
                <div className="">{e.order_number}</div>
              </div>
              <div className=" ">
                <p className="font-bold">Payment</p>
                <div className="">Credit Card</div>
              </div>
              <div className=" ">
                <div className="font-bold">Delivery address</div>
                <div className="">{address}</div>
              </div>
              <div className=" ">
                <div className="font-bold">Email</div>
                <div className="">{email}</div>
              </div>
            </div>
            <div className=" text-sm px-3">
              <div className="">TOTAL</div>
              <div className="text-2xl">€{getTotalCost(e.items)}</div>
            </div>
            <div className="w-[50%]">{getItem(e.items)}</div>
            {/* <div className="border-4 w-[50%]">{getOrderedItems()}</div> */}
          </div>
        );
      })}

      <button
        className="button"
        onClick={() => {
          //   window.localStorage.setItem("isLogin", "false");
          //   setIsLogin("false");
        }}
      >
        Log out
      </button>

      {/* <OrderTemplate address={address} email={email} /> */}
    </div>
  );
}
