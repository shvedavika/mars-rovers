import { PER_PAGE_ITEMS, retrievePhotosByParameters } from "../modules/Rovers/services/roversService";
import { takeLatest, call, put, select } from 'redux-saga/effects';
import {
  ROVER_PHOTOS_LOAD_MORE,
  ROVER_PHOTOS_QUERY_START,
  roverPhotosQueryFailure,
  roverPhotosQuerySuccess
} from "../modules/RoverPhotosForm/actionCreators/roverPhotosFormActions";
import {
  getAreAllPhotosLoaded,
  getPhotos,
  getPhotosQuery
} from "../modules/RoverSlider/selectors/roverSliderSelectors";

export function* loadPhotos({ parameters }) {
  try {
    const areAllPhotosLoaded = yield select(getAreAllPhotosLoaded);
    if (parameters.page !== 1 && areAllPhotosLoaded) {
      return;
    }
    const result = yield call(retrievePhotosByParameters, parameters);
    const isLastPage = result.length < PER_PAGE_ITEMS;
    const existedPhotos = yield select(getPhotos);
    const newPhotos = [...existedPhotos, ...result];
    yield put(roverPhotosQuerySuccess(newPhotos, parameters, isLastPage));
  } catch(e) {
    yield put(roverPhotosQueryFailure(e.message));
  }
}

export function* loadMorePhotos() {
  const query = yield select(getPhotosQuery);
  const parameters = {
    ...query,
    page: query.page + 1,
  };
  yield* loadPhotos({ parameters });
}

export default function roverPhotosSaga() {
  return [
    takeLatest(ROVER_PHOTOS_QUERY_START, loadPhotos),
    takeLatest(ROVER_PHOTOS_LOAD_MORE, loadMorePhotos),
  ]
}
