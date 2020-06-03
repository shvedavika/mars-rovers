export const LOAD_ROVERS_REQUEST = 'rovers/load-rovers-request';
export const LOAD_ROVERS_SUCCESS = 'rovers/load-rovers-success';
export const LOAD_ROVERS_FAILURE = 'rovers/load-rovers-failure';

export const loadRoversRequest = () => ({ type: LOAD_ROVERS_REQUEST });
export const loadRoversSuccess = rovers => ({ type: LOAD_ROVERS_SUCCESS, rovers });
export const loadRoversFailure = error => ({ type: LOAD_ROVERS_FAILURE, error });
