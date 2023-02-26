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
