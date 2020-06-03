function getState(state) {
  return state.spinner;
}

export function getIsLoading(state) {
  return getState(state).isLoading;
}
