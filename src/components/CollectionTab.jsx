import React from "react";
import { PlayCircle } from "iconsax-react";
import { useDispatch } from "react-redux";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useGetPlayListQuery } from "../redux/services/musicaApi";
import PlayPause from "./PlayPause";

const CollectionTab = ({ collection }) => {
  const { data, isFetching, error } = useGetPlayListQuery();
  // const { activeSong, isPlaying } = useSelector((state) => state.player);
  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex">
      {collection?.map((song, i) => (
        <div key={song?.key}>
          <div className="relative">
            <img
              src={song?.cover}
              className="w-[13.35rem] h-[14.625rem] rounded-[1.25rem] m-3 relative"
            />
            <div className="absolute bottom-5 left-6">
              <p>{song.title}</p>
              <p>{song.subtitle}</p>
            </div>
            <div className="absolute bottom-5 right-6 text-[#facd66]">
              {/* <PlayPause
                IsPlaying={isPlaying}
                activeSong={activeSong}
                song={song}
                handlePause={handlePause}
                handlePlay={handlePlay}
              /> */}
              <PlayCircle
                className="w-[2.5rem] h-[2.5rem]"
                variant="Bulk"
                onClick={() => handlePlayClick(song, i)}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollectionTab;
