import { configureStore } from "@reduxjs/toolkit";
import playerReducer from "./features/playerSlice";
import collectionReducer from "./features/collectionSlice";

// import { shazamCoreApi } from "./services/shazamCore";
import { musicaApi } from "./services/musicaApi";

export const store = configureStore({
  reducer: {
    // [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    [musicaApi.reducerPath]: musicaApi.reducer,
    player: playerReducer,
    collections: collectionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      // shazamCoreApi.middleware,
      musicaApi.middleware
    ),
});
