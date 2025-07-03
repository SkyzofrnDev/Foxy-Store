import React from "react";
import { Link } from "react-router-dom";

const formatRupiah = (price) =>{
    return "Rp " + price.toLocaleString("id-ID");
}
const dataGame = [
  {
    name: "Grand Theft Auto V",
    priceAfter: 5000,
    priceBefore: 250000,
    buy: 2,
  },
  {
    name: "Spiderman No Way Home",
    priceAfter: 5000,
    priceBefore: 250000,
    buy: 2,
  },
  {
    name: "Red Dead Redemption 2    ",
    priceAfter: 5000,
    priceBefore: 250000,
    buy: 2,
  },
  {
    name: "Grand Theft Auto V",
    priceAfter: 5000,
    priceBefore: 250000,
    buy: 2,
  },
];

const MostPopular = () => {
  return (
    <div className=" flex-1 ml-10">
      <div className="flex flex-col gap-3 w-full">
        <div className="flex gap-3 items-center">
          <img src="/Icon/StickColor.svg" alt="Icon-Stick" loading="lazy" />
          <p className="text-3xl font-semibold">Most Popular Games</p>
        </div>
        <div className="border-b-4 border-[#27282C] w-full" />
      </div>
      {dataGame.map((games, index) => (
        <Link to="/" key={index}>
         <div className="flex w-full justify-between items-center mt-10">
          <div className="flex gap-5">
            <img
              src="/Games/Grand-Theft-Auto-V/cover-gta.jpg"
              alt={games.name + ` img`}
              loading="lazy"
              className="rounded-xl aspect-square w-20"
            />
            <div className="flex flex-col justify-center">
              <p className="text-2xl font-bold">{games.name}</p>
              <div className="flex gap-5 mt-2 text-lg">
                <p className="font-semibold">
                  🔥 <span>{formatRupiah(games.priceAfter)}</span>
                </p>
                <p className="line-through text-[#6E6E6E]">{formatRupiah(games.priceBefore)}</p>
              </div>
            </div>
          </div>
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
