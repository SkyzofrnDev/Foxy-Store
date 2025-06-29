import React from "react";

const Home = () => {
  return (
    <div className="mt-10">
      <div className=" flex w-full gap-32 items-center">
        <p className="text-2xl ">
          👋 Haloo,{" "}
          <span className="text-[#42AAFF] font-semibold">Pengguna</span>
        </p>
        <div class="h-12 flex items-center w-1/4 bg-[#31313180] rounded-full overflow-hidden cursor-pointer">
          <label for="input" class="cursor-text px-3 pl-5">
            <svg class="w-[20px]" viewBox="0 0 512 512">
              <path
                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
                fill="#727272"
              ></path>
            </svg>
          </label>
          <input
            placeholder="Type your game ...."
            id="input"
            name="text"
            type="text"
            class="w-full h-full border-none outline-none text-md caret-[#ff5100]"
          />

        </div>
      </div>
    </div>
  );
};

export default Home;
