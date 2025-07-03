import React from "react";
import { Navbar } from "../../Components/Index";
import { Outlet } from "react-router-dom";
import { Footer } from "../../Components/Footer/Footer";
import { Background } from "../Index";

const MainLayout = () => {
  return (
    <div className="flex bg-[#1A1B1F] h-full text-white">
      <Navbar />
      <main className="flex-1 p-6 relative bg-transparent z-0">
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <Background />
        </div>
        <div className="relative z-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
