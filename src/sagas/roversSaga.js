import { takeLatest, call, all, put } from 'redux-saga/effects';
import rovers from './../enums/rovers';
import { retrieveRoverInformation } from '../modules/Rovers/services/roversService';
import {
  LOAD_ROVERS_REQUEST,
  loadRoversFailure,
  loadRoversSuccess
} from '../modules/Rovers/actionCreators/roversActions';

export function* loadRovers() {
  try {
    const requests = rovers.map((rover) => call(retrieveRoverInformation, rover));
    const responses = yield all(requests);
    yield put(loadRoversSuccess(responses));
  }
  catch(e) {
    yield put(loadRoversFailure(e.message));
  }
}

export default function roversSaga() {
  return [
    takeLatest(LOAD_ROVERS_REQUEST, loadRovers),
  ]
}
