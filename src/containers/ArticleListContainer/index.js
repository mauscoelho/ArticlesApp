import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderNothing, mapProps } from 'recompose';
import ArticleList from '../../components/ArticleList';
import getArticlesAction from '../../actions';

const mapStateToProps = state => ({
  articles: state.articles,
});

const mapDispatchToProps = dispatch => ({
  getArticles: (args) => {
    dispatch(getArticlesAction(args));
  },
});

const hideIfNoArticles = branch(({ articles }) => !articles, renderNothing);

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      const { getArticles } = this.props;
      getArticles();
    },
  }),
  hideIfNoArticles,
  mapProps(({ articles }) => ({
    articles: articles.toJSON(),
  })),
);

export default enhance(ArticleList);
