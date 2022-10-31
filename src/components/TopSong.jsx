/* eslint-disable linebreak-style */
import React from 'react';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useGetPlayListQuery } from '../redux/services/musicaApi';
import SongCard from './SongCard';

function TopArround() {
  const { data, isFetching, error } = useGetPlayListQuery();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  return (
    <div className="mt-[2.6rem] mb-[6rem] ml-4 md:ml-0">
      <div className="mb-2 text-2xl font-bold">Top Songs</div>
      <div className="mr-5 flex overflow-x-scroll scrollbar-hide">
        {data?.map((song, i) => (
          <Link to={`/viewcharts/${song.id}`} key={song.id}>
            <div className="m-2 h-[12rem]  w-[9.56rem] flex-shrink-0">
              <div>
                <SongCard
                  song={song}
                  key={song}
                  i={i}
                  isPlaying={isPlaying}
                  activeSong={activeSong}
                  data={data}
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TopArround;
