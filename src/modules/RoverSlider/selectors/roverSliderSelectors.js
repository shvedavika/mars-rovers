function getState(state){
  return state.roverPhotos;
}

export function getPhotos(state) {
  return getState(state).photos;
}

export function getIsSearchPerformed(state) {
  return getState(state).isSearchPerformed;
}

export function getPhotosCount(state) {
  const photos = getState(state).photos;
  return photos ? photos.length : 0;
}

export function getPhotosQuery(state) {
  return getState(state).query;
}


export function getAreAllPhotosLoaded(state) {
  return getState(state).areAllPhotosLoaded;
}

export function getError(state) {
  return getState(state).error;
}


