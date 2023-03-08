import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./features/Projects/projectsSlice";
import createSagaMiddleware from "redux-saga";
import { watchLoadProjects } from "./features/Projects/projectsSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    projects: projectsReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchLoadProjects);

export default store;
