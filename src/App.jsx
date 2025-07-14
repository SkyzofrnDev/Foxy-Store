import "./App.css";
import React from "react";
import {
  CartPage,
  DetailGame,
  Home,
  How,
  NotFound,
} from "./Pages/Index";
import {
  generalData,
  installationData,
  bugData
} from "./Data/FaqData"
import { Navigate, Route, Routes } from "react-router-dom";
import FaqPage from "./Pages/How/FaqPage";
import Test from "./Pages/Test/Test";
import { MainLayout } from "./Layout/Index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="faq" element={<How />}>
          <Route index element={<Navigate to="general"   />} />
          <Route path="general" element={<FaqPage title="General Question" data={generalData} />} />
          <Route path="installation" element={<FaqPage title="Installation Question" data={installationData} />} />
          <Route path="bug" element={<FaqPage title="Lapor Bug" data={bugData} />}/>
        </Route>
      <Route path="checkout" element={<CartPage />} />
      <Route path="/produk/:id" element={<DetailGame />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;