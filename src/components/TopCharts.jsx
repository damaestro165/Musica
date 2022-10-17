import React from "react";
import Topmusic from "../assets/musicTop.png";
import { Link } from "react-router-dom";
import { useGetTopChartsNgQuery } from "../redux/services/shazamCore";

function TopCharts() {
  const { data, isFetching, error } = useGetTopChartsNgQuery();
  const topPlays = data?.slice(0, 3);

  if (isFetching) return <div>Loading .....</div>;

  return (
    <div className="ml-[2rem]">
      <div className="font-bold text-2xl mb-2">Top charts</div>
      <div>
        {topPlays.map((song) => (
          <div
            className="w-[26.06rem] bg-[#1A1E1F] h-[6rem] rounded-[1.25rem] my-3 flex justify-between items-center"
            key={data.id}
          >
            <div className="flex p-4">
              <Link to={`/viewcharts/${song.key}`}>
                <img
                  src={song?.images.coverart}
                  className="w-[3.94rem] h-[3.94rem] rounded-[0.625rem]"
                />
              </Link>

              <div className="ml-2">
                <p className="font-normal text-[1.062rem] mb-1">
                  {song?.title}
                </p>
                <p className="font-normal text-xs text-gray-500 mb-1">
                  {song?.subtitle}
                </p>
                <p className="font-normal text-xs">2:34:45</p>
              </div>
            </div>
            <div className="border rounded-full p-2 border-[rgba(255,255,255,0.11)] mr-5 fill-transparent stroke-1  stroke-[#FACD66] hover:stroke-2 hover:bg-[#FACD66] hover:stroke-white">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M2.15388 8.69874C1.34913 6.18624 2.28963 3.31449 4.92738 2.46474C6.31488 2.01699 7.84638 2.28099 8.99988 3.14874C10.0911 2.30499 11.6789 2.01999 13.0649 2.46474C15.7026 3.31449 16.6491 6.18624 15.8451 8.69874C14.5926 12.6812 8.99988 15.7487 8.99988 15.7487C8.99988 15.7487 3.44838 12.7277 2.15388 8.69874Z"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  opacity="0.4"
                  d="M12 5.02501C12.8025 5.28451 13.3695 6.00076 13.4377 6.84151"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
