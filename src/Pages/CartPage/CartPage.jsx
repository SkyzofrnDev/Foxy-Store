// CartPage.jsx

import React, { useEffect, useState } from "react";
import { CardProduct } from "../../Components/Index";
import {
  getCart,
  removeFromCart,
  generateWhatsAppLink,
} from "../../Utils/Cart";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  const loadCart = () => {
    const currentCart = getCart();
    setCart(currentCart);
  };

  // Load cart saat komponen mount
  useEffect(() => {
    loadCart();
  }, []);

  // Update cart saat localStorage berubah
  // CartPage.jsx

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "cart") {
        const currentCart = getCart();
        setCart(currentCart);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const total = cart.reduce((sum, item) => sum + item.priceAfter * item.qty, 0);
  const waLink = generateWhatsAppLink(cart);

  return (
    <div className="w-full mt-20">
      <div className="flex items-center gap-10">
        <img src="/Icon/CartColor.svg" loading="lazy" alt="icon-cart" />
        <p className="text-4xl font-semibold">My Shopping Cart</p>
      </div>
      <div className="mt-20 flex gap-x-10">
        <div className="w-full">
          <CardProduct cart={cart} setCart={setCart} />
        </div>
        <div className="w-3/5 bg-[#27282C] px-7 py-5 rounded-2xl h-fit top-20 sticky justify-around flex flex-col">
          <div className="border-b-2 border-white/20 pb-12">
            <p className="text-4xl font-semibold">Invoice Payment</p>
            <p className="text-3xl font-medium mt-10">Order Summary</p>
            {cart.map((item) => (
              <div
                className="flex items-center text-white/45 justify-between w-full mt-3"
                key={item.id}
              >
                <p className="w-1/2">{item.name}</p>
                <p>{item.qty}x</p>
              </div>
            ))}
            <div className="justify-between flex mt-10">
              <p className="text-end text-2xl font-semibold">Subtotal :</p>
              <p className="text-end text-2xl font-semibold">
                Rp {total.toLocaleString("id-ID")}
              </p>
            </div>
          </div>
          <a
            href={waLink}
            target="_blank"
            className="bg-[#4196CA] w-full rounded-xl mt-10 text-2xl font-semibold py-2 text-center block"
          >
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
