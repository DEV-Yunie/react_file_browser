import { createSlice } from "@reduxjs/toolkit";

const initialStateValue: string = ""

const folderSlice = createSlice({
  name: "folderData",
  initialState: { value: initialStateValue },
  reducers: {
    setFolderPath: (state, action) => {
      state.value = action.payload;
    },
    moveHome: (state, action) => {
      state.value = action.payload;
    },
    moveUp: (state) => {
      let temp = state.value.split('/');
      temp.pop();
      state.value = temp.join('/');
    }
  }
})

export const { setFolderPath, moveHome, moveUp } = folderSlice.actions;

export default folderSlice.reducer;