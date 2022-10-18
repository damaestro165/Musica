import React from "react";
import SearchBar from "./SearchBar";
import AlbumImage from "../assets/images/Lead-image.png";
import { useParams } from "react-router-dom";
import { useGetSongDetailsQuery } from "../redux/services/shazamCore";

function ViewCharts() {
  const { songid } = useParams();
  const { data: song } = useGetSongDetailsQuery({ songid });

  return (
    <>
      <div
        className="bg-no-repeat bg-cover bg-left-top ml-[5.2rem] h-[100vh] w-[100vw]"
        style={{ backgroundImage: `url(${song?.images?.coverart})` }}
      >
        <div className="flex flex-col bg-gradient-to-b from-white/10 to-[#1E1E1E] backdrop-blur-md h-[100vh] ">
          <SearchBar />
          <div className="ml-5 flex items-end ">
            <img
              src={song?.images?.coverart}
              className="rounded-[2.2rem] h-[18.1rem]"
            />
            <div className="w-[23.87rem] ml-5">
              <div className="flex items-stretch flex-col h-[7rem] ">
                <h2 className="leading-10 text-3xl text-[#A4C7C6] font-medium ">
                  Tomorrow’s tunes
                </h2>
                <p className="font-normal text-sm text[#EFEEE] text-opacity-11">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis
                </p>
                <p className="font-normal text-sm text-white/25 ">
                  64 songs ~ 16 hrs+
                </p>
              </div>
              <div className="flex w-[18.25rem] justify-between mt-8 ">
                <p className="bg-[rgba(255,255,255,0.07)] p-2.5 rounded-[2rem]  backdrop-blur-sm">
                  Play all
                </p>
                <p className="bg-[rgba(255,255,255,0.07)] p-2.5 rounded-[2rem]  backdrop-blur-sm">
                  Add to collection
                </p>
                <p className="bg-[rgba(255,255,255,0.07)] p-2.5 rounded-[2rem]  backdrop-blur-sm">
                  O
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewCharts;
