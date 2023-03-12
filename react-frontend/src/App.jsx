//import "./App.css";
import { Login, Signup, Navbar, Footer, Main } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}
