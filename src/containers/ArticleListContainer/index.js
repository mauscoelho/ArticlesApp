import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderNothing, mapProps } from 'recompose';
import ArticleList from '../../components/ArticleList';
import { getArticlesAction } from '../../actions';
import getVisibleArticles from '../../selectors';

const mapStateToProps = state => ({
  articles: getVisibleArticles(state),
});

const mapDispatchToProps = dispatch => ({
  getArticles: (args) => {
    dispatch(getArticlesAction(args));
  },
});

const hideIfNoArticles = branch(({ articles }) => articles.isEmpty(), renderNothing);

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      const { getArticles } = this.props;
      getArticles();
    },
  }),
  hideIfNoArticles,
  mapProps(({ articles, ...rest }) => ({
    articles: articles.toJSON(),
    ...rest,
  })),
);

export default enhance(ArticleList);
