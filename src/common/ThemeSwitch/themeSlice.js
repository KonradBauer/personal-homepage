import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "darkTheme",
  initialState: {
    status: false,
  },
  reducers: {
    switchTheme: () => {
      state.status.false = !state.status.false;
    },
  },
});

export const { switchTheme } = themeSlice.actions;

export const themeSliceState = (state) => state.status;

export default themeSlice.reducer;
