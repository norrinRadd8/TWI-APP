import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./context/hooks/useAuthContext";

import Landing from "./pages/landing/Landing";
import GetStarted from "./pages/getStarted/GetStarted";
import WelcomeBack from "./pages/welcomeBack/WelcomeBack";
import Dashboard from "./pages/dashBoard/dashBoard";
import WorkOuts from "./pages/workOuts/workOutsPage";

const App = () => {
  const { user } = useAuthContext();
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={!user ? <Landing /> : <Navigate to="/welcome-back" />}
        />
        <Route
          path="/welcome-back"
          element={!user ? <WelcomeBack /> : <Navigate to="/dash-board" />}
        />
        <Route
          path="/get-started"
          element={!user ? <GetStarted /> : <Navigate to="/dash-board" />}
        />
        <Route
          path="/dash-board"
          element={user ? <Dashboard /> : <Navigate to="/welcome-back" />}
        />
        <Route
          path="/work-outs"
          element={user ? <WorkOuts /> : <Navigate to="/welcome-back" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
