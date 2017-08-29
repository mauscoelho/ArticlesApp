import { combineEpics } from 'redux-observable';
import article from './article';

export default combineEpics(article);
