import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const active = "text-yellow-400";
const nonActive = "hover:text-white duration-300 text-gray-400";
const How = () => {
  return (
    <div>
      <div className="mt-20">
        <p className="text-5xl font-semibold flex items-center">
          Frequently Asked{" "}
          <div className="pr-5 py-2 ml-3 rounded-t-3xl rounded-br-3xl text-[#1E1E1E] bg-[#FFA600]">
             Questions?
          </div>
        </p>
        <p className="text-3xl font-normal mt-5">
          Pertanyaan Yang Sering Ditanyakan
        </p>
      </div>
      <div className="flex mt-20 w-full gap-x-52">
        <aside className="mt-10">
          <ul className="space-y-2  text-2xl">
            <li>
              <NavLink
                to="general"
                className={({ isActive }) => (isActive ? active : nonActive)}
              >
                General
              </NavLink>
            </li>
            <li>
              <NavLink
                to="installation"
                className={({ isActive }) => (isActive ? active : nonActive)}
              >
                Installation
              </NavLink>
            </li>

            <li>
              <NavLink
                to="bug"
                className={({ isActive }) => (isActive ? active : nonActive)}
              >
                Lapor Bug
              </NavLink>
            </li>
          </ul>
        </aside>

        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default How;
