import React from "react";
import { Navbar } from "../Components/Index";
import { Outlet } from "react-router-dom";
import { Footer } from "../Components/Footer/Footer";

const MainLayout = () => {
  return (
    <div className="flex bg-[#1A1B1F] h-screen text-white">
      <Navbar />
      <main className="flex-1 p-6">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};

export default MainLayout;
