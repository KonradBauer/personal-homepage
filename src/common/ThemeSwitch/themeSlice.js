import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    status: false,
  },
  reducers: {
    toggleTheme: (state) => {
      state.status = !state.status;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const selectThemeState = (state) => state.status;

export default themeSlice.reducer;
