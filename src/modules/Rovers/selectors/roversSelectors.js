function getState(state) {
  return state.rovers;
}

export function getRovers(state) {
  return getState(state).rovers;
}

export function getError(state) {
  return getState(state).error;
}
