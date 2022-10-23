import React from "react";
import { SearchNormal1 } from "iconsax-react";

function SearchBar() {
  return (
    <div className="flex flex-col">
      <div className="m-7 w-[30px] h-[30px] relative">
        <div className="flex absolute inset-y-6 -left-6 items-center pointer-events-none  text-[rgba(255,255,255,0.3)]">
          <SearchNormal1 className="w-5" />
        </div>
        <input
          type="search"
          value=""
          placeholder="Search artists"
          className="bg-transparent p-2"
          onChange={() => "good"}
        />
      </div>
    </div>
  );
}

export default SearchBar;
