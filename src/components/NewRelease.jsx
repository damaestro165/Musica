import React, { useState } from "react";
import { useGetNewSongQuery } from "../redux/services/musicaApi";
import { useDispatch, useSelector } from "react-redux";

import SongCard from "./SongCard";

function NewRelease() {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const dispatch = useDispatch();
  const { data, isFetching, error } = useGetNewSongQuery();

  if (isFetching) return <div>Loading .....</div>;

  return (
    <div className="mt-[2.6rem]">
      <div className="font-bold text-2xl mb-2">New Release </div>
      <div className="flex overflow-x-scroll scrollbar-hide">
        {data?.map((song, i) => (
          <div key={song.id}>
            <SongCard
              song={song}
              key={song}
              i={i}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={data}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewRelease;
