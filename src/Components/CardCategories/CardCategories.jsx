import React from "react";

const dataCategories = [
  { name: "Adventure" },
  { name: "Survival" },
  { name: "Battle Royal" },
  { name: "Story Mode" },
  { name: "RPG" },
  { name: "Farming" },
];

const CardCategories = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
      {dataCategories.map((data, i) => (
        <div className="relative h-40" key={i}>
          <img
            src="/Games/Grand-Theft-Auto-V/bg-gta.jpeg"
            alt="Cover-Categories"
            loading="lazy"
            className="absolute w-full h-full object-cover brightness-50 rounded-[2vw] border-4 border-[#6e6e6e]"
          />
          <div className="absolute flex justify-center items-center w-full h-full">
            <p className="z-10 text-xl font-semibold text-white">{data.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardCategories;
