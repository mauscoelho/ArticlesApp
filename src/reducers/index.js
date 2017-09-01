import { combineReducers } from 'redux-immutable';
import articles from './articles';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  articles,
  visibilityFilter,
});
