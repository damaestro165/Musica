import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "39339c9f47msh543e5eb715945e4p118abbjsn328773d34d6d"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopChartsNg: builder.query({
      query: (NG) => "/charts/country?country_code=NG",
    }),
    getTopCharts: builder.query({
      query: () => "/charts/world",
    }),
    getSongDetails: builder.query({
      query: ({ songid }) => `/tracks/details?track_id=${songid}`,
    }),
  }),
});

export const {
  useGetTopChartsNgQuery,
  useGetSongDetailsQuery,
  useGetTopChartsQuery,
} = shazamCoreApi;
