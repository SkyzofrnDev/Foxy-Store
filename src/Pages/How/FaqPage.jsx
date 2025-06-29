import React, { useState } from "react";

const FaqPage = ({ title, data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <div>
      <h2 className="text-5xl mb-10">{title}</h2>
      <div className="">
        {data.map((item, i) => {
          const isOpen = openIndex === i;

          return (
            <div key={i} className="border-b py-5 border-[#3C3C3C] transition-all duration-300">
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center text-left"
              >
                <span className="font-semibold text-3xl py-3 text-white">{item.q}</span>
                <span>
                  <img
                    src={isOpen ? "/Icon/Minus.svg" : "/Icon/Plus.svg"}
                    alt={isOpen ? "close" : "open"}
                    className="w-[29px]"
                  />
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                } text-sm text-gray-400 pl-1`}
              >
                <div className="mt-5 text-xl font-thin pl-10" dangerouslySetInnerHTML={{ __html: item.a }} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FaqPage;
