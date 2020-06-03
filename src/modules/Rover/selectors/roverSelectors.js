function getState(state) {
  return state.rover;
}

export function getCurrentRover(state) {
  return getState(state).rover;
}

export function getIsRoverLoading(state) {
  return getState(state).isLoading;
}

export function getError(state) {
  return getState(state).error;
}
