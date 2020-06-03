export const ROVER_INIT = 'rover/init';
export const LOAD_ROVER_REQUEST = 'rover/load-rover-request';
export const LOAD_ROVER_SUCCESS = 'rover/load-rover-success';
export const LOAD_ROVER_FAILURE = 'rover/load-rover-failure';

export const initRover = () => ({ type: ROVER_INIT });
export const loadRoverRequest = id => ({ type: LOAD_ROVER_REQUEST, id });
export const loadRoverSuccess = rover => ({ type: LOAD_ROVER_SUCCESS, rover });
export const loadRoverFailure = error => ({ type: LOAD_ROVER_FAILURE, error });
