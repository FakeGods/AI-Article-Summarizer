import { configureStore } from "@reduxjs/toolkit";
import { buildGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";

export const store = configureStore({
  reducer: {},
  middleware: (buildGetDefaultMiddleware) =>
    buildGetDefaultMiddleware().concat(),
});
