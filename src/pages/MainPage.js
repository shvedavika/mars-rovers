import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { loadRoversRequest } from "../modules/Rovers/actionCreators/roversActions";
import Rovers from "../modules/Rovers/components/Rovers";
import './MainPage.scss';

function MainPage(props) {
  const { loadRoversRequest } = props;
  
  useEffect(() => {
    loadRoversRequest();
  }, []);
  
  return (
    <>
      <h1 className="roversLogo">Mars Rovers</h1>
      <Rovers />
    </>
  )
}

const mapDispatchToProps = {
  loadRoversRequest,
};

export default connect(
  null,
  mapDispatchToProps
)(MainPage);
