import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { initRover, loadRoverRequest, loadRoverSuccess } from "../modules/Rover/actionCreators/roverActions";
import { getCurrentRover, getError, getIsRoverLoading } from "../modules/Rover/selectors/roverSelectors";
import RoverPhotosFormContainer from "../modules/RoverPhotosForm/containers/RoverPhotosFormContainer";
import RoverSliderContainer from "../modules/RoverSlider/containers/RoverSliderContainer";
import './RoverPage.scss';

function RoverPage(props) {
  const { id, loadRoverRequest, currentRover, initRover, error } = props;
  
  useEffect(() => {
    initRover();
    loadRoverRequest(id);
  }, []);
  
  if(error) {
    return (
      <div>
        <h1>Something went wrong</h1>
        <h4>{error}</h4>
      </div>
    );
  }
  
  if(!currentRover) {
    return null;
  }
  
  return (
    <>
      <header>
        <h1 className="logo">{generateHeader()}</h1>
        <h6 className="subLogo">{`(Total: ${currentRover && currentRover.total_photos} photos)`}</h6>
      </header>
      <RoverPhotosFormContainer />
      <RoverSliderContainer />
    </>
  );
  
  function generateHeader() {
    const name =
      currentRover
      && currentRover.name
      && currentRover.name.charAt(0).toUpperCase() + currentRover.name.slice(1);
    return `Photos of a Rover ${name}`;
  }
}

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.match.params.id,
  currentRover: getCurrentRover(state),
  error: getError(state),
  isLoading: getIsRoverLoading(state),
});

const mapDispatchToProps = {
  initRover,
  loadRoverRequest,
  loadRoverSuccess,
};

export default connect(mapStateToProps, mapDispatchToProps)(RoverPage);
