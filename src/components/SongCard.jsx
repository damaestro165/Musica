import React from "react";
import PlayPause from "./playPause";
import { useDispatch } from "react-redux";
import { playPause, setActiveSong } from "../redux/services/playerSlice";

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
      onClick={() => handlePlayClick(song)}
    >
      <img src={song?.images?.coverart} className="h-[9.56rem] rounded-3xl" />
      <p>{song?.title}</p>

      <p className="font-normal text-sm text-gray-500 mb-1">{song?.subtitle}</p>
    </div>
  );
}

export default SongCard;
