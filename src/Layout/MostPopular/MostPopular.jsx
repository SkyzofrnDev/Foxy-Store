import React from "react";
import { Link } from "react-router-dom";
import games from "../../Data/Games.json";

const formatRupiah = (price) => {
  return "Rp " + price.toLocaleString("id-ID");
};

const MostPopular = () => {
  return (
    <div className="flex-1 ml-10">
      <div className="flex flex-col gap-3 w-full">
        <div className="flex gap-5 items-center">
          <img src="/Icon/StickColor.svg" alt="Icon-Stick" loading="lazy" />
          <p className="text-3xl font-semibold">Most Popular Games</p>
        </div>
        <div className="border-b-4 border-[#27282C] w-full" />
      </div>

      {[...games]
        .sort((a, b) => b.buy - a.buy)
        .slice(0, 6)
        .map((game, index) => (
          <Link to={`/produk/${game.id}`} key={game.id}>
            <div className="flex w-full justify-between gap-x-12 items-center mt-10">
              <div className="flex gap-5 items-center">
                {/* Tag # */}
                <div className="min-w-[40px] text-3xl font-bold text-end">
                  {index === 0 ? (
                    <span className="text-yellow-400">#{index + 1}</span>
                  ) : index === 1 ? (
                    <span className="text-gray-300">#{index + 1}</span>
                  ) : index === 2 ? (
                    <span className="text-orange-600">#{index + 1}</span>
                  ) : (
                    <span></span>
                  )}
                </div>

                <img
                  src={`/Games${game.images.find(img => img.type === "cover")?.url}`}
                  alt={`${game.name} img`}
                  loading="lazy"
                  className="rounded-xl aspect-square w-20"
                />
                <div className="flex flex-col justify-center">
                  <p className="text-xl font-bold">{game.name}</p>
                  <div className="flex gap-5 mt-2 text-lg">
                    <p className="font-semibold">
                      🔥 {formatRupiah(game.priceAfter)}
                    </p>
                    <p className="line-through text-[#6E6E6E]">
                      {formatRupiah(game.priceBefore)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Tombol Buy */}
              <div className="w-fit h-fit flex items-center rounded-full font-semibold px-9 py-2 bg-gradient-to-r from-[#4196CA] to-[#2042CA] shadow-[inset_0px_0px_10px_5px_rgba(255,255,255,0.05)]">
                <p className="text-2xl">Buy</p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default MostPopular;
