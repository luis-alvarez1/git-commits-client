import { combineReducers } from 'redux';
import commits from './reducers/commits.reducer';

export const rootReducers = combineReducers({ commits });
