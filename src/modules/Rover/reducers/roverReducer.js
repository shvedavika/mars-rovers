import { ROVER_INIT, LOAD_ROVER_FAILURE, LOAD_ROVER_SUCCESS } from "../actionCreators/roverActions";


const initialState = {
  rover: null,
  error: null,
  isLoading: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ROVER_INIT: {
      return {
        ...initialState
      };
    }
    case LOAD_ROVER_SUCCESS: {
      return {
        ...state,
        rover: action.rover,
      }
    }
    case LOAD_ROVER_FAILURE: {
      return {
        ...state,
        error: action.error,
      }
    }
    default: {
      return state;
    }
  }
}
