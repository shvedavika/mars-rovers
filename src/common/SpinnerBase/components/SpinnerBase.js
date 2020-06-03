import React from "react";
import { Spinner } from "react-bootstrap";
import { getIsLoading } from "../selectors/spinnerSelectors";
import { connect } from "react-redux";
import './SpinnerBase.scss';

function SpinnerBase(props) {
  const { isLoading } = props;
  return (
    <>
      {isLoading && <Spinner animation="border" variant="info" role="status" className="spinnerBase" />}
    </>
  )
}
const mapStateToProps = state => ({
  isLoading: getIsLoading(state)
});

export default connect(mapStateToProps)(SpinnerBase);
