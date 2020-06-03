export const ROVER_PHOTOS_INIT = 'rover-photos/init';
export const ROVER_PHOTOS_LOAD_MORE = 'rover-photos/load-more';
export const ROVER_PHOTOS_QUERY_START = 'rover-photos/query-start';
export const ROVER_PHOTOS_QUERY_SUCCESS = 'rover-photos/query-success';
export const ROVER_PHOTOS_QUERY_FAILURE = 'rover-photos/query-failure';

export const roverPhotosInit = () => ({ type: ROVER_PHOTOS_INIT });
export const roverPhotosQueryStart = (parameters) => ({ type: ROVER_PHOTOS_QUERY_START, parameters});
export const roverPhotosLoadMore = () => ({ type: ROVER_PHOTOS_LOAD_MORE });
export const roverPhotosQuerySuccess = (photos, query, areAllPhotosLoaded) => ({
  type: ROVER_PHOTOS_QUERY_SUCCESS,
  photos,
  query,
  areAllPhotosLoaded
});
export const roverPhotosQueryFailure = error => ({ type: ROVER_PHOTOS_QUERY_FAILURE, error });
