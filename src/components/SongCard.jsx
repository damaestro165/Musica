import React from "react";
import DafaultIg from "../assets/images/imageD.png";

import { useDispatch } from "react-redux";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

function SongCard({ song, isPlaying, activeSong, i, data }) {
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  return (
    <div
      key={song.id}
      className="m-2 flex-shrink-0  w-[9.56rem] h-[12rem]"
      onClick={() => handlePlayClick()}
    >
      <img src={song?.cover || DafaultIg} className="h-[9.56rem] rounded-3xl" />
      <p>{song?.title}</p>

      <p className="font-normal text-sm text-gray-500 mb-1">{song?.artist}</p>
    </div>
  );
}

export default SongCard;
