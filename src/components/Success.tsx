import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Success() {
  const navigate = useNavigate();

  useEffect(() => {
    const localCart: any = window.localStorage.getItem("cart");
    window.localStorage.setItem("purchasedItem", localCart);
    setOrderItem();
    setTimeout(() => {
      window.localStorage.setItem("cart", JSON.stringify({}));
    }, 500);
  });

  async function setOrderItem() {
    const item = window.localStorage.getItem("purchasedItem");
    const email = window.localStorage.getItem("email");

    // const order_number = 84274;
    const numberRequest = await axios.get("order_number");
    let order_number = numberRequest.data["order_number"];
    order_number += 1;
    console.log(order_number);
    await axios.post("/order_number", { order_number });
    console.log("number was updated");

    const request = await axios.post("/order", { item, email, order_number });
    const response = request.data;
    console.log(response);
  }

  return (
    <div className="relative top-[145px] border-4 mx-10 my-10">
      <p className="text-7xl text-center my-4">PROFUMO</p>
      <div className="text-5xl text-start mx-20 my-20 ">Order Confirmed</div>
      <p className=" text-2xl text-start mx-20 mb-10 ">
        Thank you for shopping at Profumo. We confirm that we have received your
        order and that it is being prepared.
      </p>
      <p className="text-center text-lg cursor-pointer hover:text-gray-400 relative mx-3 my-5">
        Check My Order
      </p>
      <div className="flex justify-center items-center">
        <div className="flex justify-center">
          <button
            className="cursor-pointer hover:text-gray-400 relative mx-3 my-5"
            onClick={() => navigate("/top")}
          >
            Back to Top Seller
          </button>
          <button
            className="cursor-pointer hover:text-gray-400 relative mx-3 my-5"
            onClick={() => navigate("/summer")}
          >
            Back to Best Summer
          </button>
          <button
            className="cursor-pointer hover:text-gray-400 relative mx-3 my-5"
            onClick={() => navigate("/winter")}
          >
            Back to Best Winter
          </button>
        </div>
      </div>
    </div>
  );
}
