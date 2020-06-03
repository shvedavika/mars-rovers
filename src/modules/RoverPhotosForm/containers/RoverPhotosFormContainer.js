import { getCurrentRover } from "../../Rover/selectors/roverSelectors";
import { roverPhotosInit, roverPhotosQueryStart } from "../actionCreators/roverPhotosFormActions";
import { connect } from "react-redux";
import RoverPhotosForm from "../components/RoverPhotosForm";

const mapStateToProps = state => ({
  rover: getCurrentRover(state),
});

const mapDispatchToProps = {
  roverPhotosInit,
  roverPhotosQueryStart,
};

export default connect(mapStateToProps, mapDispatchToProps)(RoverPhotosForm);
