import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDark: false,
  },
  reducers: {
    toggleTheme: (state) => {
      state.isDark = !state.isDark;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const selectThemeState = (state) => state.isDark;

export const selectThemeIsDark = (state) => selectThemeState(state).isDark;

export default themeSlice.reducer;
