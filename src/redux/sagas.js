import { all } from "redux-saga/effects";
import actionWatcherPeoples from "./people/saga";

export default function* rootSaga() {
  yield all([actionWatcherPeoples()]);
}
