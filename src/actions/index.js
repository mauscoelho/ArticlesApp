import { GET_ARTICLES, GET_ARTICLES_RESPONSE } from '../contansts';

const getArticlesAction = args => ({
  type: GET_ARTICLES,
  payload: args,
});

const getArticlesResponse = args => ({
  type: GET_ARTICLES_RESPONSE,
  payload: args,
});

export { getArticlesAction, getArticlesResponse };
