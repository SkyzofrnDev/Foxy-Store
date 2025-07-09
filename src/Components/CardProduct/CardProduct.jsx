import React from "react";

const CardProduct = () => {
  return (
    <div className="justify-between px-2 pr-20 py-2 flex bg-[#27282C] rounded-2xl items-center">
      <div className="flex gap-5">
        <img
          src="/Games/Grand-Theft-Auto-V/cover-gta.jpg"
          loading="lazy"
          alt="cover-game"
          className="aspect-square object-cover w-24 rounded-2xl"
        />
        <div className="flex flex-col justify-between">
          <div>
            <p className="text-2xl font-semibold">
              Grand Theft Auto V - Bundling Online Mode
            </p>
            <p className="text-lg text-white/20">Rockstar Games</p>
          </div>
          <div className="flex gap-x-3 items-center">
            <p className="text-white/20 line-through">Rp 500.000,00 </p>
            <img
              src="/Icon/Arrow.svg"
              alt="Arrow-Icon"
              loading="lazy"
              className="brightness-50"
            />
            <p className="font-semibold text-xl">🔥5.000,00</p>
          </div>
        </div>
      </div>
      <div className="flex gap-20">
        <div>
          <p className="font-bold text-3xl">1x</p>
        </div>
        <div>
          <img src="/Icon/Trash.svg" loading="lazy" alt="Trash-Icon" />
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
