import React from "react";
import Default from "../../assets/images/defaultIMG.png";

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="flex-1 flex items-center justify-start">
    <div classNameisPlaying=" h-16 w-16 mr-4">
      <img
        src={activeSong?.images?.coverart || Default}
        alt="cover art"
        className="rounded w-[3.06rem] h-[3.06rem] mr-2"
      />
    </div>
    <div className="w-[50%]">
      <p className="truncate text-white font-bold text-lg">
        {activeSong?.title ? activeSong?.title : "No active Song"}
      </p>
      <p className="truncate text-gray-300">
        {activeSong?.subtitle ? activeSong?.subtitle : "No active Song"}
      </p>
    </div>
  </div>
);

export default Track;
