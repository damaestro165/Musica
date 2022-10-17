import React from "react";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";
import { Link } from "react-router-dom";

function TopArround() {
  const { data, isFetching, error } = useGetTopChartsQuery();

  return (
    <div className="mt-[2.6rem]">
      <div>Top Music Around the World </div>
      <div className="flex overflow-x-scroll scrollbar-hide">
        {data?.map((song) => (
          <Link to={`/viewcharts/${song.key}`}>
            <div
              key={data.id}
              className="m-2 flex-shrink-0  w-[9.56rem] h-[12rem]"
            >
              <img
                src={song?.images?.coverart}
                className="h-[9.56rem] rounded-3xl"
              />
              <p>{song?.title}</p>
              <p className="font-normal text-sm text-gray-500 mb-1">
                {song?.subtitle}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TopArround;
