import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likedSong: [],
  collection: [],
};

const collectionSlice = createSlice({
  name: "collections",
  initialState,
  reducers: {
    setLikedSong: (state, action) => {
      const check = state.likedSong.indexOf(action.payload);
      if (check) {
        state.likedSong = state.likedSong.filter(
          (item) => item.id !== action.payload.id
        );
      }
      state.likedSong.push({ ...action.payload, liked: true });
    },

    addCollection: (state, action) => {
      const filteredSong = state?.collection.filter(
        (item) => item.id !== action.payload.id
      );
      if (filteredSong) {
        state.collection = filteredSong;
      }
      state.collection.push(action.payload);
    },
  },
});

export const { setLikedSong, isLiked, addCollection } = collectionSlice.actions;

export default collectionSlice.reducer;
