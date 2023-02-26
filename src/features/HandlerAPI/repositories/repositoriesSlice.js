import { createSlice } from "@reduxjs/toolkit";

const repositoriesSlice = createSlice({
  name: "repositoriesData",
  initialState: {
    repositories: null,
    status: "initial",
  },
  reducers: {
    loadRepositories: () => ({
      repositories: null,
      status: "loading",
    }),
    loadRepositoriesSuccess: (state, { payload: repositories }) => ({
      repositories,
      status: "success",
    }),
    loadRepositoriesError: () => ({ repositories: null, status: "error" }),
  },
});

export const { loadRepositories } = repositoriesSlice.actions;
export const selectRepositories = (state) => state.repositories;
export default repositoriesSlice.reducer;
