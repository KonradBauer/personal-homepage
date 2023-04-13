import { createSlice } from "@reduxjs/toolkit";
import { getThemeFromLocalStorage, saveThemeInLocalStorage } from "./saveThemeInLocalStorage";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDark: getThemeFromLocalStorage(),
  },
  reducers: {
    toggleTheme: (state) => {
      state.isDark = !state.isDark;
      saveThemeInLocalStorage(state.isDark);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const selectThemeState = (state) => state.theme;

export const selectThemeIsDark = (state) => selectThemeState(state).isDark;

export default themeSlice.reducer;

export const initializeThemeState = () => (dispatch, getState) => {
  const state = getState();
  const isDark = selectThemeIsDark(state);

  if (isDark !== null) {
    dispatch(themeSlice.actions.toggleTheme());
  }
};
