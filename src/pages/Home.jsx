import React from 'react';
import NewRelease from '../components/NewRelease';
import TopCharts from '../components/TopCharts';
import SearchBar from '../components/SearchBar';
import Hero from '../components/Hero';
import YourArea from '../components/TopSong';

function Home() {
  return (
    <div className="ml-2 flex w-[100vw] flex-col md:ml-[5.2rem]">
      <SearchBar />
      <div className="mt-[5rem] flex w-[80%] flex-col items-center justify-center md:mt-0 md:w-[95vw] md:flex-row md:items-start  md:justify-start">
        <Hero />
        <TopCharts />
      </div>
      <div className="w-[90vw]">
        <NewRelease />
      </div>
      <div className="mb-5 w-[90vw]">
        <YourArea />
      </div>
    </div>
  );
}

export default Home;
