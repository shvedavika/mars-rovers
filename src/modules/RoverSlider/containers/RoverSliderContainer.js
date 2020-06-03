import { getError, getIsSearchPerformed, getPhotos } from "../selectors/roverSliderSelectors";
import { roverPhotosLoadMore } from "../../RoverPhotosForm/actionCreators/roverPhotosFormActions";
import { connect } from "react-redux";
import RoverSlider from "../components/RoverSlider";

const mapStateToProps = state => ({
  photos: getPhotos(state),
  isSearchPerformed: getIsSearchPerformed(state),
  error: getError(state),
});

const mapDispatchToProps = {
  roverPhotosLoadMore,
};

export default connect(mapStateToProps, mapDispatchToProps)(RoverSlider);
