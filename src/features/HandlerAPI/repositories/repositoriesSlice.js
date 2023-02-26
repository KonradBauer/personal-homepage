import { createSlice } from "@reduxjs/toolkit";

const repositoriesSlice = createSlice({
  name: "repositories",
  initialState: {
    repositories: [],
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
