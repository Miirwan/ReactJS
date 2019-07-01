import { call, put, takeEvery, select } from "redux-saga/effects";

import { getPeopleApi } from "./api";
import { setPoeplesData } from "./actions";
import { GET_PEOPLE_DATA, CHANGE_FILTER_PEOPLE } from "./actionTypes";

function* getPeoplesSaga() {
  try {
    const filter = yield select(state => state.peoples.filter);

    const response = yield call(getPeopleApi, filter.page);

    yield put(setPoeplesData(response));
  } catch (error) {
    console.log(error);
  }
}

export default function* actionWatcherPeoples() {
  yield takeEvery(GET_PEOPLE_DATA, getPeoplesSaga);
  yield takeEvery(CHANGE_FILTER_PEOPLE, getPeoplesSaga);
}
