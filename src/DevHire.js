import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "./components/Sidebar";
import Home from "./views/Home";
import Favorites from "./views/Favorites";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/dev-hire.css";

const DevHire = () => {
  const selector = useSelector((s) => s);
  return (
    <Router>
      <Sidebar />
      <main className="home_view">
        <h1 className="heading">{selector.heading}</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default DevHire;
