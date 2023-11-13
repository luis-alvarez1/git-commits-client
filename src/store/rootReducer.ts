import { combineReducers } from 'redux';
import commitsReducer from './reducers/commits.reducer';

export const rootReducers = combineReducers({ commitsReducer });
