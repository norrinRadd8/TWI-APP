import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing/Landing";
import GetStarted from "./pages/getStarted/GetStarted";
import WelcomeBack from "./pages/welcomeBack/WelcomeBack";
import Dashboard from "./pages/dashBoard/dashBoard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/get-started" element={<GetStarted />} />
        <Route path="/welcome-back" element={<WelcomeBack />} />
        <Route path="/dash-board" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
