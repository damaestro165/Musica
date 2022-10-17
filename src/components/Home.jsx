import React from "react";
import Navbar from "./Navbar";
import NewRelease from "./NewRelease";
import TopCharts from "./TopCharts";
import SearchBar from "./SearchBar";
import Hero from "./Hero";
import YourArea from "./YourArea";

function Home() {
  return (
    <div className="flex flex-col ml-[5.2rem]">
      <SearchBar />
      <div className="flex">
        <Hero />
        <TopCharts />
      </div>
      <NewRelease />
      <YourArea />
      <YourArea />
    </div>
  );
}

export default Home;
