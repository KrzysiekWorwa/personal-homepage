import { takeLatest, call, put, delay } from "redux-saga/effects";
import { fetchRepositories, fetchRepositoriesError, fetchRepositoriesSuccess } from "./personalHomepageSlice";
import { getRepositories } from "./personalHomepageAPI";

const loadingDelay = 2000;

function* fetchRepositoriesHandler({ payload: username }) {
    try {
        yield delay(loadingDelay); // just to demo the loading
        yield put(fetchRepositoriesSuccess(repositories));
    } catch (error) {
        yield put(fetchRepositoriesError());
    }
}

export function* personalHomepageSaga() {
    yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
}