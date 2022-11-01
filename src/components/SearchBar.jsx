/* eslint-disable linebreak-style */
import React from 'react';
import { SearchNormal1 } from 'iconsax-react';

function SearchBar() {
  return (
    <div className=" absolute right-0 top-0 z-30 m-7 flex-col md:relative md:w-10 ">
      <div className="relative  h-[30px] w-[30px] ">
        <div className="pointer-events-none absolute inset-y-6 -left-6 -mt-[3rem] flex items-center text-[rgba(255,255,255,0.3)]  md:mt-0">
          <SearchNormal1 className="w-5" />
        </div>
        <input
          type="search"
          value=""
          placeholder="Search artists"
          className="hidden bg-transparent p-2 md:flex"
          onChange={() => 'good'}
        />
      </div>
    </div>
  );
}

export default SearchBar;
