import { combineReducers } from 'redux-immutable';
import articles from './articles';
import settings from './settings';

export default combineReducers({
  articles,
  settings,
});
