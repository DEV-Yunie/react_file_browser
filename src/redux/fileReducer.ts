import { createSlice } from "@reduxjs/toolkit";
import { FileType } from "../types/file.types";

const initialStateValue: FileType[] | null = []

const fileDataSlice = createSlice({
  name: "fileData",
  initialState: { value: initialStateValue },
  reducers: {
    setFiles: (state, action) => {
      state.value = action.payload;
      console.log(state.value, action);
    },
    sortFile: (state, action) => {
      state.value.sort((a: FileType, b: FileType) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
      console.log(state.value);
      console.log(action);
    },
    deleteFile: (state, action) => {
      console.log(action.payload)
    },
    showFile: (state) => {
      console.log(state)
    }
  }
})

export const { setFiles, sortFile, deleteFile, showFile } = fileDataSlice.actions;

export default fileDataSlice.reducer;