import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Rover from '../../Rover/components/Rover';
import { getError, getRovers } from '../selectors/roversSelectors';
import './Rovers.scss';

function Rovers(props) {
  const { rovers, error } = props;
  
  if(!rovers) {
    return <span>{error}</span>
  }
  
  return (
    <section className="rovers">
      {
        rovers.map(rover => <Rover rover={rover} key={rover.name}/>)
      }
    </section>
  )
}

const mapStateToProps = state => ({
  rovers: getRovers(state),
  error: getError(state),
});

Rovers.propTypes = {
  rovers: PropTypes.arrayOf(PropTypes.object),
};

export default connect(
  mapStateToProps
)(Rovers)
