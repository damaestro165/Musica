import React from "react";
import SearchBar from "../components/SearchBar";
import { useSelector } from "react-redux";

function Collections() {
  const { likedSong } = useSelector((state) => state.player);

  return (
    <div className="flex flex-col ml-[5.2rem]">
      <SearchBar />
      <div className="">
        <div className="">
          <button className="rounded-[1.69rem] p-[0.625rem] bg-[#FACD66]">
            My collection
          </button>
          <button className="rounded-[1.2rem]  p-[0.625rem] bg-transparent border ml-2">
            Likes
          </button>
          {likedSong && (
            <div>
              {likedSong.map((liked) => (
                <div key={liked?.id}>{liked?.title}</div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Collections;
