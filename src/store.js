import { configureStore } from "@reduxjs/toolkit";
import repositoriesReducer from "./features/HandlerAPI/repositories/repositoriesSlice";

export default configureStore({
  reducer: {
    repositories: repositoriesReducer,
  },
});
