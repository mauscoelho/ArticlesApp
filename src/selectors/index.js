import { createSelector } from 'reselect';
import { Filter } from '../contansts';

const getVisibilityFilter = state => state.get('settings').get('visibilityFilter');
const getArticles = state => state.get('articles');

const getVisibleArticles = createSelector(
  [getVisibilityFilter, getArticles],
  (visibilityFilter, articles) => {
    switch (visibilityFilter) {
      case Filter.Date:
        return articles.sort(
          (a, b) => new Date(b.get('date')) - new Date(a.get('date')),
        );
      case Filter.Title:
        return articles.sort((a, b) =>
          a.get('title').localeCompare(b.get('title')),
        );
      case Filter.Website:
        return articles.sort((a, b) =>
          a.get('website').localeCompare(b.get('website')),
        );
      case Filter.Authors:
        return articles.sort((a, b) =>
          a.get('authors').localeCompare(b.get('authors')),
        );
      default:
        return articles;
    }
  },
);

export default getVisibleArticles;
