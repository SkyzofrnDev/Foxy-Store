import React from "react";
import { CardProduct } from "../../Components/Index";

const Test = () => {
  return (
    <div className="w-full mt-20">
      <div className="flex items-center gap-10">
        <img src="/Icon/CartColor.svg" loading="lazy" alt="icon-cart" />
        <p className="text-4xl font-semibold">My Shopping Cart</p>
      </div>
      <CardProduct/>
    </div>
  );
};

export default Test;
