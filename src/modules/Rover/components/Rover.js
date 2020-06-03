import React from 'react';
import { withRouter } from "react-router-dom";
import { Button, Card } from 'react-bootstrap';
import roverIcon from '../../../assets/rover.png';
import PropTypes from "prop-types";
import './Rover.scss';

function Rover(props) {
  const { rover: { name, status, launch_date, landing_date } } = props;
  return (
    <Card className="rover" bg="light">
      <Card.Body>
        <Card.Title className="rover__header">
          <img className="rover__image" src={roverIcon} alt="roverIcon" />
          <span>{name}</span>
        </Card.Title>
        <Card.Text className="rover-details">
          <span>
            <span className="rover-details__label">Status: </span>{status}
          </span><br/>
          <span>
            <span className="rover-details__label">Launch Date: </span>{launch_date}
          </span><br/>
          <span>
            <span className="rover-details__label">Landing Date: </span>{landing_date}
          </span>
        </Card.Text>
        <Button className="rover__button" variant="info" onClick={handleClick}>View Photos</Button>
      </Card.Body>
    </Card>
  );
  
  function handleClick() {
    props.history.push(`/rover/${name.toLowerCase()}`);
  }
}

Rover.propTypes = {
  rover: PropTypes.object,
};

export default withRouter(Rover);
