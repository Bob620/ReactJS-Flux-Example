import ActionTypes from './actionTypes';
import Dispatcher from './dispatcher';

const Actions = {
  addTask(text) {
    Dispatcher.dispatch({
      type: ActionTypes.add_task,
      text,
    });
  },
  removeTask(id) {
    Dispatcher.dispatch({
      type: ActionTypes.remove_task,
      id,
    });
  },
  toggleTask(id) {
    Dispatcher.dispatch({
      type: ActionTypes.toggle_task,
      id,
    });
  },
  updateTask(text) {
    Dispatcher.dispatch({
      type: ActionTypes.update_task,
      text,
    });
  }
};

export default Actions;