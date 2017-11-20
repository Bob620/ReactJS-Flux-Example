import AppContainer from './containers/appContainer';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<AppContainer />, document.getElementById('app'));

// Basic Task Import Example

import TaskActions from './data/actions';

TaskActions.addTask('Create a Github repo');
TaskActions.addTask('Set up a React + Flux app');
TaskActions.addTask('Push to repo');