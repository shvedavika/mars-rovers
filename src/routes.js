import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import RoverPage from './pages/RoverPage';
import SpinnerBase from "./common/SpinnerBase/components/SpinnerBase";

export default (
  <>
    <Route exact path="/" component={MainPage} />
    <Route exact path="/rover/:id" component={RoverPage} />
    <SpinnerBase />
  </>
)
