import React, { useState } from "react";
import Alert from "./Alert";
import "./App.css";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setalert] = useState(null);
  setTimeout(() => {
    setalert(null);
  }, 1500);
  const toggleblue = () => {
    setMode("primary");
    document.body.style.backgroundColor = "black";
    setalert("Blue mode enabled");
  };
  const togglegreen = () => {
    setMode("success");
    document.body.style.backgroundColor = "black";
    setalert("Green mode enabled");
  };
  const toggleyellow = () => {
    setMode("warning");
    document.body.style.backgroundColor = "black";
    setalert("Yellow mode enabled");
  };
  const handletoggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#393131";
      setalert("Dark mode enabled");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setalert("Light mode enabled");
    }
  };
  return (
    <>
      <Router>
      <Navbar title="Building First app" about="Description" mode={mode} handletoggle={handletoggle} toggleblue={toggleblue} togglegreen={togglegreen} toggleyellow={toggleyellow} />
    <Alert alert={alert} />
        <Routes>
          <Route path="/" element={<TextForm setalert={setalert} heading="This is heading" mode={mode} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
