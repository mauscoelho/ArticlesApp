import { GET_ARTICLES, GET_ARTICLES_RESPONSE, CHANGE_FILTER } from '../contansts';

const getArticlesAction = args => ({
  type: GET_ARTICLES,
  payload: args,
});

const getArticlesResponse = args => ({
  type: GET_ARTICLES_RESPONSE,
  payload: args,
});

const changeFilterAction = args => ({
  type: CHANGE_FILTER,
  payload: args,
});

export { getArticlesAction, getArticlesResponse, changeFilterAction };
