import Immutable from 'immutable';
import { GET_ARTICLES_RESPONSE } from '../contansts';

const initialState = Immutable.fromJS({
  articles: [],
});

const getArticles = (state, { payload }) =>
  state.get('articles').concat(payload);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES_RESPONSE:
      return getArticles(state, action);
    default:
      return state;
  }
};

export default reducer;
