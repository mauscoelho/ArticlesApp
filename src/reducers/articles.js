import { List } from 'immutable';
import { GET_ARTICLES_RESPONSE, MARK_AS_READ } from '../contansts';

const initialState = List([]);

const getArticles = (state, { payload }) => state.merge(payload);

const findArticle = (state, title) =>
  state.findIndex(article => article.get('title') === title);

const markAsRead = (state, { payload }) =>
  state.setIn([findArticle(state, payload), 'isRead'], true);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES_RESPONSE:
      return getArticles(state, action);
    case MARK_AS_READ:
      return markAsRead(state, action);
    default:
      return state;
  }
};

export default reducer;
