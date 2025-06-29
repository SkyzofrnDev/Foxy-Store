import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div
      className="select-none pr-5 h-screen ml-7 border-r-2 border-[#27282C] justify-center"
    >
      <img
        src="/Store/logo_head.png"
        alt="Logo"
        loading="lazy"
        className="w-24 mt-12"
      />
      <div className="w-full mt-10 flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-y-3">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `p-3 rounded-lg ease-in-out duration-150 mt-12 ${
                isActive ? "bg-[#42AAFF]" : "hover:bg-[#42AAFF]"
              }`
            }
          >
            <img
              src="/Icon/Home.svg"
              alt="Home-Btn"
              loading="lazy"
              className="w-8"
            />
          </NavLink>
          <NavLink
            to="/"
            className="hover:bg-[#42AAFF] p-3 rounded-lg ease-in-out duration-150 mt-10"
          >
            <img
              src="/Icon/Cupon.svg"
              alt="Disc-Btn"
              loading="lazy"
              className="w-7"
            />
          </NavLink>
          <NavLink
            to="/"
            className="hover:bg-[#42AAFF] p-3 rounded-lg ease-in-out duration-150 mt-10"
          >
            <img
              src="/Icon/Stick.svg"
              alt="Game-Btn"
              loading="lazy"
              className="w-7"
            />
          </NavLink>
          <NavLink
            to="/"
            className="hover:bg-[#42AAFF] p-3 rounded-lg ease-in-out duration-150 mt-10"
          >
            <img
              src="/Icon/Fire.svg"
              alt="Sale-Btn"
              loading="lazy"
              className="w-6"
            />
          </NavLink>
          <NavLink
            to="/"
            className="hover:bg-[#42AAFF] p-3 rounded-lg ease-in-out duration-150 mt-10"
          >
            <img
              src="/Icon/Cart.svg"
              alt="Cart-Btn"
              loading="lazy"
              className="w-7"
            />
          </NavLink>
          <div className="border-2 border-[#27282C] w-full mx-7 my-5 "></div>
          <a
            href="https://api.whatsapp.com/send?phone=6289639151016&text=Halo%20min%20fokss%20mau%20tanya%20dong%20%F0%9F%98%80"
            target="_blank"
            className="hover:bg-[#42AAFF] p-3 rounded-lg ease-in-out duration-150 "
          >
            <img
              src="/Icon/Telphone.svg"
              alt="Telphone-Btn"
              loading="lazy"
              className="w-6"
            />
          </a>
          <NavLink
            to="/faq"
            end
            className={({ isActive }) =>
              `p-3 rounded-lg ease-in-out duration-150 mt-10 ${
                isActive ? "bg-[#42AAFF]" : "hover:bg-[#42AAFF]"
              }`
            }
          >
            <img
              src="/Icon/FAQ.svg"
              alt="FAQ-Btn"
              loading="lazy"
              className="w-7"
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
