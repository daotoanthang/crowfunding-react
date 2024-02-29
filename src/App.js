import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const SignUpPage = lazy(() => import("./pages/SignUpPage"));
const SignInPage = lazy(() => import("./pages/SignInPage"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));

function App() {
  return (
    <Routes>
      <Route path="sign-up" element={<SignUpPage></SignUpPage>}></Route>
      <Route path="sign-in" element={<SignInPage></SignInPage>}></Route>
      <Route path="dashboard" element={<DashboardPage></DashboardPage>}></Route>
    </Routes>
  );
}

export default App;
