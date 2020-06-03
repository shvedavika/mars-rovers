import { combineReducers } from 'redux';
import rovers from '../modules/Rovers/reducers/roversReducer';
import rover from '../modules/Rover/reducers/roverReducer';
import spinner from '../common/SpinnerBase/reducers/spinnerReducer';
import roverPhotos from '../modules/RoverPhotosForm/reducers/roverPhotosReducer';

export default combineReducers({
  rovers,
  rover,
  spinner,
  roverPhotos,
});
