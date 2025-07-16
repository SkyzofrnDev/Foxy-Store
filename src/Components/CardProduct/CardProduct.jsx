import React from "react";
import { Link } from "react-router-dom";

const CardProduct = ({ cart, setCart }) => {
  const formatRupiah = (angka) => {
    return angka.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    });
  };

  const handleRemove = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updated));
    setCart(updated);
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="space-y-5">
      {cart.map((game) => (
        <div
          className="justify-between px-2 pr-20 py-2 flex bg-[#27282C] rounded-2xl items-center"
          key={game.id}
        >
          <div className="flex gap-5">
            <img
              src={`/Games${game.images.find((img) => img.type === "cover")?.url}`}
              loading="lazy"
              alt="cover-game"
              className="aspect-square object-cover w-24 rounded-2xl"
            />
            <Link to={"/produk/"+game.id} className="flex flex-col justify-between">
              <div>
                <p className="text-2xl font-semibold">{game.name}</p>
                <p className="text-lg text-white/20">{game.publisher || "-"}</p>
              </div>
              <div className="flex gap-x-3 items-center">
                <p className="text-white/20 line-through">
                  {formatRupiah(game.priceBefore)}
                </p>
                <img
                  src="/Icon/Arrow.svg"
                  alt="Arrow-Icon"
                  loading="lazy"
                  className="brightness-50"
                />
                <p className="font-semibold text-xl">
                  🔥{formatRupiah(game.priceAfter)}
                </p>
              </div>
            </Link>
          </div>
          <div className="flex gap-20">
            <div>
              <p className="font-bold text-2xl">1x</p>
            </div>
            <div>
              <button onClick={() => handleRemove(game.id)}>
                <img
                className="select-none"
                  src="/Icon/Trash.svg"
                  loading="lazy"
                  alt="Trash-Icon"
                />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardProduct;