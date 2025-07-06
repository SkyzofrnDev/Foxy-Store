import React from "react";
import dataGame from "../../Data/Games.json";
const ListGame = () => {
  return (
    <div className="mt-20">
      <div className="flex gap-5 items-center">
        <img
          src="/Icon/StickColor.svg"
          alt="Icon-Stick"
          loading="lazy"
          srcset=""
        />
        <p className="font-semibold text-3xl">List Game PC</p>
      </div>
      <div className="flex flex-wrap">
        {dataGame.map((item, i) => (
          <div className="p-7 w-1/3 flex flex-col justify-between items-start">
            <img
              src={`/Games/${item.img}`}
              alt="cover-game"
              loading="lazy"
              className="aspect-square rounded-4xl"
            />
            <p className="font-semibold text-2xl">{item.name} </p>
            <p className="font-bold text-[#4196CA] text-xl mt-1">
              🔥 Rp {item.priceAfter},00
            </p>
            <p className="text-[#6e6e6e] mt-1 line-through ">Rp {item.priceBefore},00</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListGame;
