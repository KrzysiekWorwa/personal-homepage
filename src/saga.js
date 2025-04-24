import { all } from "redux-saga/effects";
import { personalHomepageSaga }

export default function* saga() {
    yield all([
        personalHomepageSaga(),
    ]);
}