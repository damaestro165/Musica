import React from "react";
import Navbar from "../components/Navbar";
import NewRelease from "../components/NewRelease";
import TopCharts from "../components/TopCharts";
import SearchBar from "../components/SearchBar";
import Hero from "../components/Hero";
import YourArea from "../components/YourArea";

function Home() {
  return (
    <div className="flex flex-col ml-[5.2rem]">
      <SearchBar />
      <div className="flex">
        <Hero />
        <TopCharts />
      </div>
      <NewRelease />
      <div className="mb-5">
        <YourArea />
      </div>
    </div>
  );
}

export default Home;
