import React from "react";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SongCard from "./SongCard";

function TopArround() {
  const { data, isFetching, error } = useGetTopChartsQuery();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  return (
    <div className="mt-[2.6rem]">
      <div className="font-bold text-2xl mb-2">Top Music Around the World </div>
      <div className="flex overflow-x-scroll scrollbar-hide">
        {data?.map((song, i) => (
          <Link to={`/viewcharts/${song.key}`}>
            <div
              key={song.id}
              className="m-2 flex-shrink-0  w-[9.56rem] h-[12rem]"
            >
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
