//import "./App.css";
import { Login, Signup, Header, Footer, Main } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}
