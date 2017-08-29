import { connect } from 'react-redux';
import { compose, mapProps } from 'recompose';
import ArticleItem from '../../components/ArticleItem';
import { getArticlesAction } from '../../actions';

const mapStateToProps = state => ({
  article: state.get('articles').get(0),
});

const mapDispatchToProps = dispatch => ({
  getArticles: (args) => {
    dispatch(getArticlesAction(args));
  },
});

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  mapProps(({ article }) => ({
    ...article.toJSON(),
  })));

export default enhance(ArticleItem);
