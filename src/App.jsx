import React from "react";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Collections from "./components/Collections";
import Navbar from "./components/Navbar";
import MusicPlayer from "./components/MusicPlayer";

import ViewCharts from "./components/ViewCharts";

function App() {
  return (
    <div>
      <div className="fixed ">
        <Navbar />
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/collections" element={<Collections />} />
        <Route exact path="/viewcharts/:songid" element={<ViewCharts />} />
      </Routes>
      <div className=" fixed h-28 bottom-0 left-0 right-0 flex px-10 bg-gradient-to-br from-white/10 to-[#1E1E1E] backdrop-blur-lg z-10 drop-shadow-[0px_25px_100px_rgba(16,16,16,0.51)]">
        <MusicPlayer />
      </div>
    </div>
  );
}

export default App;
