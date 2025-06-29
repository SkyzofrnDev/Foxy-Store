import "./App.css";
import React from "react";
import MainLayout from "./Layout/MainLayout";
import {
  General,
  Home,
  How,
  Installation,
  LaporBug,
  NotFound,
} from "./Pages/Index";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="faq" element={<How />}>
          <Route path="general" element={<General />} />
          <Route path="installation" element={<Installation />} />
          <Route path="bug" element={<LaporBug />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
