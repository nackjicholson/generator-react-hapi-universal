import React from 'react';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Router } from 'react-router';
import routes from '../../app/routes';

const history = createBrowserHistory();

React.render(
  <Router children={routes} history={history} />,
  document.getElementById('react-view')
);
