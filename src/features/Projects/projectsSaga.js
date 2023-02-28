import { call, put, takeLatest, delay } from "redux-saga/effects";
import { getProjects } from "./getProjects";
import {
  loadProjects,
  loadProjectsSuccess,
  loadProjectsError,
} from "./projectsSlice";

const loadingDelay = 2000;

function* loadProjectsHandler({ payload: username }) {
  try {
    yield delay(loadingDelay); //demo loading;
    const projects = yield call(getProjects, username);
    yield put(loadProjectsSuccess(projects));
  } catch (error) {
    yield call(loadProjectsError());
  }
}

export function* watchLoadProjects() {
  yield takeLatest(loadProjects.type, loadProjectsHandler);
}
