import { createStore } from 'redux';
import * as reducers from './reducers';

export const store = createStore((state, action) => console.log('test'));
