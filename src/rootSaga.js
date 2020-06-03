import { all } from 'redux-saga/effects';
import roversSaga from "./sagas/roversSaga";
import roverPhotosSaga from "./sagas/roverPhotosSaga";
import roverSaga from "./sagas/roverSaga";

export default function* rootSaga() {
  yield all([
    ...roversSaga(),
    ...roverSaga(),
    ...roverPhotosSaga(),
  ])
}
