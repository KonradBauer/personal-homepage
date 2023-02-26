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
    loadRepositoriesSuccess: (_, { payload: repositories }) => ({
      repositories,
      status: "success",
    }),
    loadRepositoriesError: () => ({ repositories: null, status: "error" }),
  },
});

export const {
  loadRepositories,
  loadRepositoriesSuccess,
  loadRepositoriesError,
} = repositoriesSlice.actions;

const selectRepositories = (state) => state.repositories;

export const selectRepoStatus = selectRepositories(state).status;
export const selectRepo = selectRepositories(state).repositories;

export default repositoriesSlice.reducer;
