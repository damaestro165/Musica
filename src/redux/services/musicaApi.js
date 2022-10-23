import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const musicaApi = createApi({
  reducerPath: "musicaApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://musica-api.up.railway.app",
  }),
  endpoints: (builder) => ({
    getPlayList: builder.query({
      query: () => "/popular",
    }),
    getNewSong: builder.query({
      query: () => "/new",
    }),
  }),
});

export const { useGetPlayListQuery, useGetNewSongQuery } = musicaApi;
