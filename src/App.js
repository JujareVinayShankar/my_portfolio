import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import MyJourney from "./components/MyJourney";
import MySkills from "./components/MySkills";
import MyProjects from "./components/MyProjects";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/my-journey" element={<MyJourney />} />
          <Route path="/my-skills" element={<MySkills />} />
          <Route path="/my-projects" element={<MyProjects />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
