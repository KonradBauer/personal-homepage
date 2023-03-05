import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./features/Projects/projectsSlice";
import themeReducer from "./common/ThemeSwitch/themeSlice";
import createSagaMiddleware from "redux-saga";
import { watchLoadProjects } from "./features/Projects/projectsSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    projects: projectsReducer,
    theme: themeReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchLoadProjects);

export default store;
