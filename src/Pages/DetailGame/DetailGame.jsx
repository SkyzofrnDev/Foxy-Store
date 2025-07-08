import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import dataGame from "../../Data/Games.json";

const DetailGame = () => {
  const [activeTab, setActiveTab] = useState("detail");
  const { id } = useParams();
  const game = dataGame.find((g) => g.id == id);
  const formatRupiah = (value) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);

  if (!game) {
    return (
      <div className="flex h-screen w-full justify-center items-center flex-col text-whit text-3xl font-bold">
        <p>Game Tidak Ditemukan</p>
        <p>
          Request Game?{" "}
          <a
            href="http://wa.me/6289639151016"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 underline-offset-2 underline"
          >
            Chat Whatsapp Kami
          </a>
        </p>
      </div>
    );
  }
  const cover = game.images.find((img) => img.type === "cover");

  const DetailTab = () => (
    <div className="flex flex-col gap-y-10">
      <p className="text-2xl font-bold py-2 px-3 bg-white/10 w-fit">
        Detail Game
      </p>
      <p className="text-lg ">{game.description}</p>
    </div>
  );

  const Spectification = () => (
    <div className="flex flex-col gap-y-10">
      <p className="text-2xl font-semibold py-2 px-3 bg-[#4196CA]/20 w-fit">
        ✅ Spectification Minimum
      </p>
      <div className="text-gray-300 space-y-1 text-lg">
        {Object.entries(game.specifications.recommended).map(([key, value]) => (
          <p key={key}>
            <span className="inline-block w-52 font-semibold">{key}</span>:{" "}
            {value}
          </p>
        ))}
      </div>
      <p className="text-2xl font-semibold py-2 px-3 bg-[#00FF2F]/20 w-fit">
        👍 Spectification Recomended
      </p>
      <div className="text-gray-300 space-y-1 text-lg">
        {Object.entries(game.specifications.minimum).map(([key, value]) => (
          <p key={key}>
            <span className="inline-block w-52 font-semibold">{key}</span>:{" "}
            {value}
          </p>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex pr-10">
      <div className="mt-20 w-4/5">
        <div className="gap-x-20 flex items-center">
          <div className="flex gap-5 items-center">
            <img src="/Icon/Joypad.svg" alt="Joypad-Icon" loading="lazy" />
            <p className="text-3xl font-bold">{game.name}</p>
          </div>
          <div className="rounded-full py-4 px-4 bg-[#27282C]">
            <p className="text-[#FFA600] text-3xl font-bold">
              {formatRupiah(game.priceAfter)}
            </p>
          </div>
        </div>
        <div className="flex gap-5 font-bold mt-16">
          <Link to={"/"}>
            <p className="text-white/50 text-3xl duration-300 hover:text-white">
              Home
            </p>
          </Link>
          <img
            src="/Icon/Arrow.svg"
            className="opacity-50"
            alt="Arrow-svg"
            loading="lazy"
          />
          <p className="text-3xl">{game.name}</p>
        </div>
        <div className="relative">
          <div className="pl-10 flex gap-20 text-3xl font-bold border-b-2 border-white/20 pb-5 mt-20">
            <button
              onClick={() => setActiveTab("detail")}
              className={`relative pb-2 ${
                activeTab === "detail"
                  ? "text-[#4196CA] after:absolute after:-right-6 after:top-16 after:h-[2px] after:w-[150%] after:bg-[#4196CA]"
                  : "text-white/50 hover:text-white duration-300"
              }`}
            >
              Detail
            </button>
            <button
              onClick={() => setActiveTab("spec")}
              className={`relative pb-2 ${
                activeTab === "spec"
                  ? "text-[#4196CA] after:absolute after:-right-10 after:top-16 after:h-[2px] after:w-[140%] after:bg-[#4196CA]"
                  : "text-white/50 hover:text-white duration-300"
              }`}
            >
              Spectification
            </button>
          </div>
          <div className="flex gap-5 bg-[#4196CA] rounded-full px-5 py-3 text-3xl font-bold items-center w-fit absolute right-0 top-7">
            <img src="/Icon/Cart.svg" alt="icon-cart" loading="lazy" />
            <p>Buy</p>
          </div>
        </div>
        <div className="mt-20 ">
          {activeTab === "detail" ? <DetailTab /> : <Spectification />}
        </div>
      </div>
      <div className="flex flex-col w-3/6 p-10 gap-10 relative top-50">
        <img
          src="/Games/Grand-Theft-Auto-V/cover-gta.jpg"
          loading="lazy"
          alt="img-1"
          className="w-full h-[25rem]"
        />
        <div className="flex">
          <img
            src="/Games/Grand-Theft-Auto-V/cover-gta.jpg"
            className=" object-cover w-1/3 rounded-2xl aspect-square px-2"
            loading="lazy"
            alt="img-child"
          />
          <img
            src="/Games/Grand-Theft-Auto-V/cover-gta.jpg"
            className=" object-cover w-1/3 rounded-2xl aspect-square px-2"
            loading="lazy"
            alt="img-child"
          />
          <img
            src="/Games/Grand-Theft-Auto-V/cover-gta.jpg"
            className=" object-cover w-1/3 rounded-2xl aspect-square px-2"
            loading="lazy"
            alt="img-child"
          />
        </div>
      </div>
    </div>
  );
};

export default DetailGame;
