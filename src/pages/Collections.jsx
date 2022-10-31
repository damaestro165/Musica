import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import CollectionTab from "../components/CollectionTab";
import { useSelector } from "react-redux";

function Collections() {
  const { collection, likedSong } = useSelector((state) => state.collections);
  const [activeTab, setActiveTab] = useState("collectionTab");
  const active =
    activeTab === "collectionTab"
      ? "rounded-[1.69rem] p-[0.625rem] bg-[#FACD66] mr-5 text-black border-none"
      : "rounded-[1.2rem]  p-[0.625rem] bg-transparent border  ml-2 mr-5 hover:bg-[#FACD66] text-gray-500 border-gray-500";

  const active2 =
    activeTab === "likedTab"
      ? "rounded-[1.69rem] p-[0.625rem] bg-[#FACD66] text-black border-none"
      : "rounded-[1.2rem]  p-[0.625rem] bg-transparent border text-gray-500 border-gray-500 ml-2 hover:bg-[#FACD66]";

  return (
    <div className="ml-5 flex flex-col md:ml-[5.2rem]">
      <SearchBar />
      <div className="">
        <div className="">
          <button
            className={active}
            onClick={() => setActiveTab("collectionTab")}
          >
            My collection
          </button>
          <button className={active2} onClick={() => setActiveTab("likedTab")}>
            Likes
          </button>
          <div>
            {activeTab === "collectionTab" ? (
              <CollectionTab collection={collection} />
            ) : (
              <CollectionTab collection={likedSong} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collections;
