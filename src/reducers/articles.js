import { List } from 'immutable';
import { GET_ARTICLES_RESPONSE } from '../contansts';

const initialState = List([]);

const getArticles = (state, { payload }) => state.merge(payload);

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTICLES_RESPONSE:
      return getArticles(state, action);
    default:
      return state;
  }
};

export default reducer;
