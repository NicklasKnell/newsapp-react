import { createStore } from 'redux';
import { toggleTheme } from './reducers';

export const store = createStore(toggleTheme);
