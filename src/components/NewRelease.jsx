import React, { useState } from 'react';
import { useGetNewSongQuery } from '../redux/services/musicaApi';
import { useDispatch, useSelector } from 'react-redux';

import SongCard from './SongCard';

function NewRelease() {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const dispatch = useDispatch();
  const { data, isFetching, error } = useGetNewSongQuery();

  if (isFetching) return <div>Loading .....</div>;

  return (
    <div className="mt-[2.6rem] mb-2 ml-4 md:ml-0">
      <div className="mb-2  text-xl font-bold  md:text-2xl ">New Release </div>
      <div className=" mr-5 flex overflow-x-scroll scrollbar-hide">
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
