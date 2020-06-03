import {
  ROVER_PHOTOS_INIT,
  ROVER_PHOTOS_QUERY_FAILURE,
  ROVER_PHOTOS_QUERY_SUCCESS
} from "../actionCreators/roverPhotosFormActions";

const initialState = {
  photos: [],
  areAllPhotosLoaded: false,
  query: {
    page: 1,
    sol: 0,
    camera: null,
  },
  isSearchPerformed: false,
  error: null,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ROVER_PHOTOS_INIT: {
      return {
        ...initialState
      };
    }
    case ROVER_PHOTOS_QUERY_SUCCESS: {
      return {
        ...state,
        isSearchPerformed: true,
        photos: action.photos,
        query: action.query,
        areAllPhotosLoaded: action.areAllPhotosLoaded
      };
    }
    case ROVER_PHOTOS_QUERY_FAILURE: {
      return {
        ...state,
        isSearchPerformed: true,
        error: action.error,
      }
    }
    default: {
      return state;
    }
  }
}
