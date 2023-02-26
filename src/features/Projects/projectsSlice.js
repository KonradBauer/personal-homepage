import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    projects: null,
    status: "initial",
  },
  reducers: {
    loadProjects: () => ({
      projects: null,
      status: "loading",
    }),
    loadProjectsSuccess: (state, { payload: projects }) => ({
      projects,
      status: "success",
    }),
    loadProjectsError: () => ({ projects: null, status: "error" }),
  },
});

export const { loadProjects, loadProjectsSuccess, loadProjectsError } =
  projectsSlice.actions;

const selectProjectsState = (state) => state.projects;

export const selectProjectsStatus = (state) =>
  selectProjectsState(state).status;
export const selectProjects = (state) => selectProjectsState(state).projects;

export default projectsSlice.reducer;
