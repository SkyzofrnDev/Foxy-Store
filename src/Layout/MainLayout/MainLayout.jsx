import React from "react";
import { Footer, Navbar } from "../../Components/Index";
import { Outlet } from "react-router-dom";
import { Background } from "../Index";

const MainLayout = () => {
  return (
    <div className="bg-[#1A1B1F]">
    <div className="flex  h-full text-white">
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
    <Footer/>
    </div>
  );
};

export default MainLayout;
