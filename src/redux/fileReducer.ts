import { createSlice } from "@reduxjs/toolkit";
import { FileType } from "../types/file.types";

const initialStateValue: FileType[] | null = []

const fileDataSlice = createSlice({
  name: "fileData",
  initialState: { value: initialStateValue },
  reducers: {
    setFiles: (state, action) => {
      state.value = action.payload;
    },
    sortFile: (state, action) => {
      let orderby = action.payload;
      switch (orderby) {
        case "name":
          state.value.sort((a: FileType, b: FileType) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
          break;
        case "date":
          state.value.sort((a: FileType, b: FileType) => a.modifyDate! < b.modifyDate! ? -1 : a.modifyDate! > b.modifyDate! ? 1 : 0);
          break;
        case "size":
          state.value.sort((a: FileType, b: FileType) => a.size! < b.size! ? -1 : a.size! > b.size! ? 1 : 0);
          break;
      }
      
      console.log(state.value);
      console.log(action);
    },
    deleteFile: (state, action) => {
      console.log(action.payload);
      let idx = state.value.findIndex((file, idx) => file.id === action.payload);
      state.value.splice(idx, 1);
      console.log(state.value)
    },
    showFile: (state) => {
      console.log(state)
    }
  }
})

export const { setFiles, sortFile, deleteFile, showFile } = fileDataSlice.actions;

export default fileDataSlice.reducer;