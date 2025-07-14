import React from "react";
import { CardProduct } from "../../Components/Index";

const Test = () => {
  return (
    <div className="w-full mt-20">
      <div className="flex items-center gap-10">
        <img src="/Icon/CartColor.svg" loading="lazy" alt="icon-cart" />
        <p className="text-4xl font-semibold">My Shopping Cart</p>
      </div>
      <div className="mt-20 flex gap-x-10">
        <div className="w-full">
          <CardProduct />
        </div>
        <div className="w-3/5 bg-[#27282C] px-7 py-5 rounded-2xl sticky">
          <div className=" border-b-2 border-white/20 pb-12">
            <p className="text-4xl font-semibold">Invoice Payment</p>
            <p className="text-3xl font-medium mt-10">Order Sumary</p>
            <div className="flex items-center font-thin text-white/45 justify-between w-full mt-3">
              <p className="w-1/2">
                Grand Theft Auto - V Bundling Online Mode{" "}
              </p>
              <p className="">5x</p>
            </div>
            <div className="justify-between flex mt-10">
              <p className="text-end text-2xl font-semibold ">Subtotal :</p>
              <p className="text-end text-2xl font-semibold">Rp 20.500</p>
            </div>
          </div>
          <button className="bg-[#4196CA] w-full rounded-xl mt-10 text-2 xl font-semibold py-2">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Test;
