import React from "react";

const Test = () => {
  return (
    <div className="flex flex-wrap ">
      <div className="flex flex-col w-1/3">
        <img
          src="/games/Grand-Theft-Auto-V/cover-gta.jpg"
          alt="cover-game"
          loading="lazy"
          className="aspect-square"
        />
        <p className="font-semibold text-2xl"> Game </p>
        <p className="font-semibold text-[#4196CA]">Rp <span></span></p>
        <p className="text-[#6e6e6e]">harga</p>
      </div>
    </div>
  );
};

export default Test;
