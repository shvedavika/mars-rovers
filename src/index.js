import React from 'react';
import { render } from 'react-dom';
import Routes from './routes';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap-reboot.css';
import 'bootstrap/dist/css/bootstrap.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.scss';
import './Global.scss';

import configureStore from "./store/configureStore";

const store = configureStore();
export const renderApp = () => {
  const App = () => {
    return (
      <Provider store={store}>
        <Router>
          {Routes}
        </Router>
      </Provider>
    )
  };
  render(
    <App />,
    document.getElementById('root'),
  )
};
renderApp();
