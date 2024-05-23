import { createStore } from 'redux';
import todo from './reducer/todo';

let store = createStore(todo);

export default store;
