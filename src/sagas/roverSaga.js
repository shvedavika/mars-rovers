import { takeLatest, call, put } from 'redux-saga/effects';
import { retrieveRoverInformation } from '../modules/Rovers/services/roversService';
import {
  LOAD_ROVER_REQUEST,
  loadRoverFailure,
  loadRoverSuccess,
} from "../modules/Rover/actionCreators/roverActions";

export function* loadRover({ id }) {
  try {
    const response = yield call(retrieveRoverInformation,  id);
    yield put(loadRoverSuccess(response));
  }
  catch(e) {
    yield put(loadRoverFailure(e.message));
  }
}

export default function roverSaga() {
  return [
    takeLatest(LOAD_ROVER_REQUEST, loadRover),
  ]
}
