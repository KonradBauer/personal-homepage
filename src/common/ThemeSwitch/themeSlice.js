import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    status: false,
  },
  reducers: {
    switchTheme: (state) => {
      state.status = !state.status;
    },
  },
});

export const { switchTheme } = themeSlice.actions;

const themeSliceState = (state) => state.status;

export const selectThemeStatus = (state) => themeSliceState(state).status;

export default themeSlice.reducer;
