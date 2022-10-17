import React from "react";

function SearchBar() {
  return (
    <div className="flex flex-col">
      <div className="m-7 w-[30px] h-[30px]">
        <input
          type="search"
          value=""
          placeholder="Search"
          className="bg-transparent"
        />
      </div>
    </div>
  );
}

export default SearchBar;
