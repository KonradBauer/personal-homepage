import { createSlice } from "@reduxjs/toolkit";

const repositoriesSlice = createSlice({
  name: "repositoriesData",
  initialState: {
    repositories: null,
    status: "initial",
  },
  reducers: {
    loadRepositories: ({ repositories }, { payload }) => {
      repositories.push(payload);
    },
  },
});

export const { loadRepositories } = repositoriesSlice.actions;
export const selectRepositories = (state) => state.repositories;
export default repositoriesSlice.reducer;
