import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import ActionTypes from './actionTypes';
import Dispatcher from './dispatcher';
import Task from './task';

let uid = 0;

const Uids = {
  increment() {
    return 'id-' + uid++;
  },
};

class Store extends ReduceStore {
  constructor() {
    super(Dispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  reduce(state, action) {
    switch (action.type) {
      case ActionTypes.add_task:
        // Don't add tasks with no text.
        if (!action.text) {
          return state;
        }
        const id = Uids.increment();
        return state.set(id, new Task({
          id,
          text: action.text,
          complete: false,
        }));
      case ActionTypes.remove_task:
        return state.delete(action.id);
      case ActionTypes.toggle_task:
        return state.update(
          action.id,
          task => task.set('complete', !task.complete)
        );
      case ActionTypes.update_task:
        return state.update(
          action.id,
          task => task.set('text', action.text)
        )
      default:
        return state;
    }
  }
}

export default new Store();