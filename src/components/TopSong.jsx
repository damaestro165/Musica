import React from "react";
import { useGetPlayListQuery } from "../redux/services/musicaApi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SongCard from "./SongCard";

function TopArround() {
  const { data, isFetching, error } = useGetPlayListQuery();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  return (
    <div className="mt-[2.6rem]">
      <div className="font-bold text-2xl mb-2">Top Songs</div>
      <div className="flex overflow-x-scroll scrollbar-hide">
        {data?.map((song, i) => (
          <Link to={`/viewcharts/${song.id}`} key={song.id}>
            <div className="m-2 flex-shrink-0  w-[9.56rem] h-[12rem]">
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
