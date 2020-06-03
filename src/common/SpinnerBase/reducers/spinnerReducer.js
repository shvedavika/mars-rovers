import { SET_IS_LOADING } from "../actionCreators/spinnerActions";
import {
  ROVER_PHOTOS_QUERY_FAILURE,
  ROVER_PHOTOS_QUERY_START,
  ROVER_PHOTOS_QUERY_SUCCESS
} from "../../../modules/RoverPhotosForm/actionCreators/roverPhotosFormActions";
import {
  LOAD_ROVERS_FAILURE,
  LOAD_ROVERS_REQUEST,
  LOAD_ROVERS_SUCCESS
} from "../../../modules/Rovers/actionCreators/roversActions";
import {
  LOAD_ROVER_FAILURE,
  LOAD_ROVER_REQUEST,
  LOAD_ROVER_SUCCESS
} from "../../../modules/Rover/actionCreators/roverActions";

const initialState = {
  isLoading: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.status,
      };
    }
    case LOAD_ROVER_REQUEST:
    case LOAD_ROVERS_REQUEST:
    case ROVER_PHOTOS_QUERY_START:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_ROVER_SUCCESS:
    case LOAD_ROVER_FAILURE:
    case LOAD_ROVERS_SUCCESS:
    case LOAD_ROVERS_FAILURE:
    case ROVER_PHOTOS_QUERY_SUCCESS:
    case ROVER_PHOTOS_QUERY_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default: {
      return state;
    }
  }
}
