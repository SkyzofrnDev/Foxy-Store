import React from "react";
import { CardCategories } from "../../Components/Index";
const dataCategories = [
    {
      name: "Adventure",
    },
    {
      name: "Survival",
    },
    {
      name: "Battle Royal",
    },
    {
      name: "Story Mode",
    },
    {
      name: "RPG",
    },
    {
      name: "Farming",
    },
  ];
const Categories = () => {
  return (
    <div className="w-full mt-20">
      <div className="flex gap-5 items-center">
        <img
          src="/Icon/Cupon.svg"
          alt="icon"
          loading="lazy"
          className="w-10 h-fit"
        />
        <p className="text-3xl font-semibold">Most Popular Categories</p>
      </div>
      {dataCategories.map((data,i) => (
        <div className="" key={i}>
            <CardCategories name={data.name}/>
        </div>
    ))}
    </div>
  );
};

export default Categories;
