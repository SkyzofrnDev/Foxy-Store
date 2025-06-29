import "./App.css";
import React from "react";
import MainLayout from "./Layout/MainLayout";
import { Home, How, NotFound } from "./Pages/Index";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} /> 
          <Route path="faq" element={<How />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
  );
}

export default App;
