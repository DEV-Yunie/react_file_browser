import { configureStore } from "@reduxjs/toolkit";
import fileReducer from "./fileReducer";
import folderReducer from "./folderReducer";

export const store = configureStore({
  reducer: {
    fileData: fileReducer,
    folderData: folderReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch