import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { useGetPlayListQuery } from '../redux/services/musicaApi';
import { useDispatch, useSelector } from 'react-redux';
import { isLiked, setLikedSong } from '../redux/features/collectionSlice';

function TopCharts() {
  const { data, isFetching, error } = useGetPlayListQuery();
  const topPlays = data?.slice(0, 3);
  const dispatch = useDispatch();
  const { likedSong } = useSelector((state) => state.collections);

  const liked = likedSong?.song?.liked;
  const handleLiked = (song) => {
    dispatch(setLikedSong(song));
  };

  if (isFetching) return <div>Loading .....</div>;

  return (
    <div className=" mt-5 ml-5 mr-9 self-start md:mr-0 md:ml-[2rem] md:mt-0">
      <div className="mb-2 text-xl font-bold md:text-2xl">Top charts</div>
      <div className=" md:w[5] mr-5 flex h-[233px] w-[90vw] overflow-x-scroll md:h-auto md:w-[417px] md:flex-col ">
        {topPlays?.map((song, i) => (
          <div
            className="my-3 mr-4 flex  h-[233px] w-[323px] flex-shrink-0 items-start justify-between rounded-[1.25rem] bg-[#1A1E1F] p-2.5 md:mr-0 md:h-[6rem]  md:w-[26.06rem] md:items-center md:justify-between md:p-0"
            key={song.id}
          >
            <div className="flex flex-col p-4 md:flex-row ">
              <Link to={`/viewcharts/${song.id}`} state={song}>
                <img
                  src={song?.cover}
                  className="h-[99px] w-[108px] rounded-[0.625rem] md:h-[3.94rem] md:w-[3.94rem] "
                />
              </Link>

              <div className="ml-2">
                <p className="mb-1 text-[1.062rem] font-normal">
                  {song?.title}
                </p>
                <p className="mb-1 text-xs font-normal text-gray-500">
                  {song?.artist}
                </p>
                <p className="mt-5 text-xs font-normal md:mt-0">2:34:45</p>
              </div>
            </div>

            <div
              onClick={() => handleLiked(song)}
              className={
                liked
                  ? 'mr-5  rounded-full border border-[rgba(255,255,255,0.11)] bg-[#FACD66] fill-[#FACD66] stroke-white  stroke-2 p-2'
                  : 'mr-5 rounded-full border border-[rgba(255,255,255,0.11)] fill-transparent stroke-[#FACD66] stroke-1  p-2 hover:bg-[#FACD66] hover:stroke-white hover:stroke-2'
              }
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="M2.15388 8.69874C1.34913 6.18624 2.28963 3.31449 4.92738 2.46474C6.31488 2.01699 7.84638 2.28099 8.99988 3.14874C10.0911 2.30499 11.6789 2.01999 13.0649 2.46474C15.7026 3.31449 16.6491 6.18624 15.8451 8.69874C14.5926 12.6812 8.99988 15.7487 8.99988 15.7487C8.99988 15.7487 3.44838 12.7277 2.15388 8.69874Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  opacity="0.4"
                  d="M12 5.02501C12.8025 5.28451 13.3695 6.00076 13.4377 6.84151"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopCharts;
