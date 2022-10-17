import React from "react";

const Seekbar = ({ value, min, max, onInput, setSeekTime, appTime }) => {
  const getTime = (time) =>
    `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;

  return (
    <div className="hidden sm:flex flex-row items-center w-full ">
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
        className="md:block  w-24 md:w-full 2xl:w-96 h-1 mx-4 2xl:mx-6 rounded-lg"
      />
    </div>
  );
};

export default Seekbar;
