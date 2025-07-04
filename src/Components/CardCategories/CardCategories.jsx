import React from "react";

const CardCategories = ({ name }) => {
  return (
    <div className="">
      <div className="relative">
        <div className="absolute flex justify-center items-center w-full h-full">
          <img
            src="/Games/Grand-Theft-Auto-V/bg-gta.jpeg"
            alt="Cover-Categories"
            loading="lazy"
            srcset=""
            className="absolute w-full brightness-50 rounded-[4vw] border-4 border-[#6e6e6e]"
          />
          <p className="z-10 text-5xl font-semibold">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default CardCategories;
