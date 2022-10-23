import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import CollectionTab from "../components/CollectionTab";
import { useSelector } from "react-redux";

function Collections() {
  const { collection, likedSong } = useSelector((state) => state.collections);
  const [activeTab, setActiveTab] = useState("collectionTab");
  const active =
    activeTab === "collectionTab"
      ? "rounded-[1.69rem] p-[0.625rem] bg-[#FACD66] mr-5"
      : "rounded-[1.2rem]  p-[0.625rem] bg-transparent border ml-2 mr-5 hover:bg-[#FACD66]";

  const active2 =
    activeTab === "likedTab"
      ? "rounded-[1.69rem] p-[0.625rem] bg-[#FACD66]"
      : "rounded-[1.2rem]  p-[0.625rem] bg-transparent border ml-2 hover:bg-[#FACD66]";

  return (
    <div className="flex flex-col ml-[5.2rem]">
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
