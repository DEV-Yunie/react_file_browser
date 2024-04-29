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
      console.log(action.payload)
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