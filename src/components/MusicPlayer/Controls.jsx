import React from 'react';

import { PauseCircle } from 'iconsax-react';

const Controls = ({
  isPlaying,
  repeat,
  setRepeat,
  shuffle,
  setShuffle,
  currentSongs,
  handlePlayPause,
  handlePrevSong,
  handleNextSong,
}) => (
  <div className="mb-5 flex w-[16rem] items-center justify-between">
    <div
      onClick={() => setShuffle(!shuffle)}
      className="hidden cursor-pointer sm:block"
    >
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.5 12.7593C14.5 12.746 14.4933 12.7327 14.4933 12.7193C14.4867 12.666 14.48 12.6127 14.46 12.566C14.4333 12.506 14.4 12.4593 14.36 12.4127C14.36 12.4127 14.36 12.406 14.3533 12.406C14.3067 12.3593 14.2533 12.326 14.1933 12.2993C14.1333 12.2727 14.0667 12.2593 14 12.2593L10.8867 12.2727C10.8867 12.2727 10.8867 12.2727 10.88 12.2727C10.48 12.2727 10.0933 12.086 9.85333 11.766L9.04 10.7193C8.87333 10.4993 8.56 10.4593 8.34 10.6327C8.12 10.806 8.08 11.1127 8.25333 11.3327L9.06666 12.3793C9.5 12.9393 10.18 13.2727 10.8867 13.2727H10.8933L12.7933 13.266L12.32 13.7393C12.1267 13.9327 12.1267 14.2527 12.32 14.446C12.42 14.546 12.5467 14.5927 12.6733 14.5927C12.8 14.5927 12.9267 14.546 13.0267 14.446L14.36 13.1127C14.4067 13.066 14.44 13.0127 14.4667 12.9527C14.4867 12.886 14.5 12.8193 14.5 12.7593Z"
          fill="white"
        />
        <path
          d="M5.61333 5.23266C5.18 4.63266 4.48667 4.27933 3.74667 4.27933C3.74 4.27933 3.74 4.27933 3.73333 4.27933L2 4.28599C1.72667 4.28599 1.5 4.51266 1.5 4.78599C1.5 5.05933 1.72667 5.28599 2 5.28599L3.74 5.27933H3.74667C4.16667 5.27933 4.56 5.47933 4.8 5.81933L5.52 6.81933C5.62 6.95266 5.77333 7.02599 5.92667 7.02599C6.02667 7.02599 6.13333 6.99266 6.22 6.93266C6.44667 6.76599 6.49333 6.45266 6.33333 6.23266L5.61333 5.23266Z"
          fill="white"
        />
        <path
          d="M14.4933 4.82597C14.4933 4.81263 14.5 4.7993 14.5 4.79263C14.5 4.72597 14.4867 4.6593 14.46 4.5993C14.4333 4.5393 14.4 4.48597 14.3533 4.4393L13.02 3.10597C12.8267 2.91263 12.5067 2.91263 12.3133 3.10597C12.12 3.2993 12.12 3.6193 12.3133 3.81263L12.7867 4.28597L10.9667 4.2793C10.96 4.2793 10.96 4.2793 10.9533 4.2793C10.1867 4.2793 9.46667 4.6593 9.04 5.30597L4.78 11.6926C4.54 12.0526 4.13333 12.2726 3.7 12.2726H3.69333L2 12.2593C1.72667 12.2593 1.5 12.4793 1.5 12.7593C1.5 13.0326 1.72 13.2593 2 13.2593L3.7 13.266C3.70667 13.266 3.70667 13.266 3.71333 13.266C4.48667 13.266 5.2 12.886 5.62667 12.2393L9.88667 5.85263C10.1267 5.49263 10.5333 5.27263 10.9667 5.27263H10.9733L14 5.28597C14.0667 5.28597 14.1267 5.27263 14.1933 5.24597C14.2533 5.2193 14.3067 5.18597 14.3533 5.1393C14.3533 5.1393 14.3533 5.13263 14.36 5.13263C14.4 5.08597 14.44 5.0393 14.46 4.9793C14.48 4.93263 14.4867 4.8793 14.4933 4.82597Z"
          fill="white"
        />
      </svg>
    </div>

    {currentSongs?.length && (
      <div className="hidden cursor-pointer md:flex" onClick={handlePrevSong}>
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.4933 5.58597V11.966C13.4933 13.2726 12.0733 14.0926 10.94 13.4393L8.17334 11.846L5.40667 10.246C4.27334 9.59263 4.27334 7.9593 5.40667 7.30597L8.17334 5.70597L10.94 4.11263C12.0733 3.4593 13.4933 4.27263 13.4933 5.58597Z"
            fill="white"
          />
          <path
            d="M2.50668 13.3926C2.23335 13.3926 2.00668 13.166 2.00668 12.8926V4.65265C2.00668 4.37932 2.23335 4.15265 2.50668 4.15265C2.78002 4.15265 3.00668 4.37932 3.00668 4.65265V12.8926C3.00668 13.166 2.78002 13.3926 2.50668 13.3926Z"
            fill="white"
          />
        </svg>
      </div>
    )}
    {isPlaying ? (
      <PauseCircle
        size="24"
        variant="Bold"
        color="#FFF"
        onClick={handlePlayPause}
        className="cursor-pointer"
      />
    ) : (
      <div onClick={handlePlayPause} className="cursor-pointer">
        <svg
          width="61"
          height="62"
          viewBox="0 0 61 62"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_19_109)">
            <rect
              x="18"
              y="18"
              width="25"
              height="25.5453"
              rx="12.5"
              fill="#FACD66"
              shapeRendering="crispEdges"
            />
            <path
              d="M26.3333 30.7726V28.9536C26.3333 26.6192 27.9856 25.6643 30.0017 26.8315L31.5781 27.7409L33.1546 28.6504C35.1707 29.8176 35.1707 31.7276 33.1546 32.8948L31.5781 33.8043L30.0017 34.7138C27.9856 35.881 26.3333 34.926 26.3333 32.5917V30.7726Z"
              fill="#EFEEE0"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_19_109"
              x="0"
              y="0"
              width="61"
              height="61.5453"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="9" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_19_109"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_19_109"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    )}
    {currentSongs?.length && (
      <div className="cursor-pointer" onClick={handleNextSong}>
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.50667 5.58597V11.966C2.50667 13.2726 3.92667 14.0926 5.06 13.4393L7.82667 11.846L10.5933 10.246C11.7267 9.59263 11.7267 7.9593 10.5933 7.30597L7.82667 5.70597L5.06 4.11263C3.92667 3.4593 2.50667 4.27263 2.50667 5.58597Z"
            fill="white"
          />
          <path
            d="M13.4933 13.3926C13.22 13.3926 12.9933 13.166 12.9933 12.8926V4.65265C12.9933 4.37932 13.22 4.15265 13.4933 4.15265C13.7667 4.15265 13.9933 4.37932 13.9933 4.65265V12.8926C13.9933 13.166 13.7733 13.3926 13.4933 13.3926Z"
            fill="white"
          />
        </svg>
      </div>
    )}
    <div
      onClick={() => setRepeat((prev) => !prev)}
      className="hidden cursor-pointer sm:block"
    >
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.60666 12.226C2.48 12.226 2.35333 12.1793 2.25333 12.0793C1.34 11.1593 0.833328 9.94596 0.833328 8.65929C0.833328 5.98596 2.99999 3.81263 5.66666 3.81263L9.71333 3.82596L8.98666 3.13263C8.78666 2.93929 8.78 2.62596 8.97333 2.42596C9.16666 2.22596 9.48 2.21929 9.68 2.41263L11.3067 3.97263C11.4533 4.11263 11.5 4.33263 11.4267 4.51929C11.3533 4.70596 11.1667 4.83263 10.96 4.83263L5.66666 4.81929C3.55333 4.81929 1.83333 6.54596 1.83333 8.66596C1.83333 9.68596 2.23333 10.6526 2.96 11.3793C3.15333 11.5726 3.15333 11.8926 2.96 12.086C2.86 12.1793 2.73333 12.226 2.60666 12.226Z"
          fill="white"
        />
        <path
          d="M6.66666 15.2726C6.53999 15.2726 6.41999 15.226 6.31999 15.1326L4.69333 13.5726C4.54666 13.4326 4.49999 13.2126 4.57333 13.026C4.65333 12.8393 4.83999 12.7393 5.03999 12.7126L10.34 12.726C12.4533 12.726 14.1733 10.9993 14.1733 8.8793C14.1733 7.8593 13.7733 6.89263 13.0467 6.16597C12.8533 5.97263 12.8533 5.65263 13.0467 5.4593C13.24 5.26597 13.56 5.26597 13.7533 5.4593C14.6667 6.3793 15.1733 7.59263 15.1733 8.8793C15.1733 11.5526 13.0067 13.726 10.34 13.726L6.29333 13.7126L7.01999 14.406C7.21999 14.5993 7.22666 14.9126 7.03333 15.1126C6.92666 15.2193 6.79999 15.2726 6.66666 15.2726Z"
          fill="white"
        />
        <path
          d="M8.16667 11.0526C7.89334 11.0526 7.66667 10.826 7.66667 10.5526V8.29264L7.54 8.43264C7.35334 8.63931 7.04 8.65264 6.83334 8.47264C6.62667 8.29264 6.61334 7.97264 6.79334 7.76597L7.79334 6.65264C7.93334 6.49931 8.15334 6.44597 8.34667 6.51931C8.54 6.59931 8.66667 6.77931 8.66667 6.99264V10.5593C8.66667 10.8326 8.44 11.0526 8.16667 11.0526Z"
          fill="white"
        />
      </svg>
    </div>
  </div>
);

export default Controls;
