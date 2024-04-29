import { configureStore } from "@reduxjs/toolkit";
import fileReducer from "./fileReducer";

export const store = configureStore({
  reducer: {
    fileData: fileReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch