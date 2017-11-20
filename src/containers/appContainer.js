// Import the application
import AppView from '../views/AppView';
import store from '../data/store';
import actions from '../data/actions';

// Use the offical Flux utility functions
import {createFunctional} from '../../util/FluxContainer';

function getStores() {
  return [
    store,
  ];
}

function getState() {
  return {
    tasks: store.getState(),
    onRemoveTask: actions.removeTask,
    onToggleTask: actions.toggleTask,
    onUpdateTask: actions.updateTask
  };
}

export default createFunctional(AppView, getStores, getState);