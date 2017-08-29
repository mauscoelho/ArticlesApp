import { Observable } from 'rxjs';
import axios from 'axios';
import { GET_ARTICLES } from '../contansts';
import { getArticlesResponse } from '../actions';

const fetchArticles = () => axios.get('https://cheesecakelabs.com/challenge');

const transformData = article => ({
  ...article,
  image_url: article.image_url.replace('http://', 'https://'),
  isRead: false,
});

const getArticles = action$ =>
  action$
    .ofType(GET_ARTICLES)
    .mergeMap(() =>
      Observable.fromPromise(fetchArticles())
        .map(({ data }) => data.map(article => transformData(article)))
        .map(data => getArticlesResponse(data)),
    );

export default getArticles;
