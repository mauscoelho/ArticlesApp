import { connect } from 'react-redux';
import { compose, lifecycle, branch, renderNothing } from 'recompose';
import ArticleList from '../../components/ArticleList';

const mapStateToProps = state => ({
  articles: state.articles,
});

const hideIfNoArticles = branch(({ articles }) => !articles, renderNothing);

const enhance = compose(
  connect(mapStateToProps, {}),
  hideIfNoArticles,
  lifecycle({
    componentDidMount() {

    },
  }),
);

export default enhance(ArticleList);
