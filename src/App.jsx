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
import {
  generalData,
  installationData,
  contactData,
  bugData
} from "./Data/FaqData"
import { Navigate, Route, Routes } from "react-router-dom";
import FaqPage from "./Pages/How/FaqPage";


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
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
