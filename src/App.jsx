import React from 'react';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Collections from './pages/Collections';
import Navbar from './components/Navbar';
import MusicPlayer from './components/MusicPlayer';

import ViewCharts from './components/ViewCharts';

function App() {
  return (
    <div className="w-[100vw]">
      <div className=" absolute top-2 z-10 mb-5 md:fixed">
        <Navbar />
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/collections" element={<Collections />} />
        <Route exact path="/viewcharts/:songid" element={<ViewCharts />} />
      </Routes>
      <div className=" fixed bottom-0 left-0 right-0 z-10 flex h-28 bg-gradient-to-br from-white/10 to-[#1E1E1E] px-10 drop-shadow-[0px_25px_100px_rgba(16,16,16,0.51)] backdrop-blur-lg">
        <MusicPlayer />
      </div>
    </div>
  );
}

export default App;
