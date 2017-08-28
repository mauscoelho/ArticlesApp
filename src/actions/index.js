import { GET_ARTICLES } from '../contansts';

const getArticlesAction = args => ({
  type: GET_ARTICLES,
  payload: args,
});

export default getArticlesAction;
