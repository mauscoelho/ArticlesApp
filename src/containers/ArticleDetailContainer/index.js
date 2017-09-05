import { connect } from 'react-redux';
import { compose, mapProps, withHandlers } from 'recompose';
import ArticleDetail from '../../components/ArticleDetail';
import { getArticlesAction, markAsReadAction } from '../../actions';

const mapStateToProps = (state, { navigation }) => ({
  article: state
    .get('articles')
    .find(article => article.get('title') === navigation.state.params.title),
});

const mapDispatchToProps = dispatch => ({
  getArticles: (args) => {
    dispatch(getArticlesAction(args));
  },
  markAsRead: (args) => {
    dispatch(markAsReadAction(args));
  },
});

const markAsReadHandler = ({ markAsRead, title }) => () => {
  markAsRead(title);
};

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  mapProps(({ article, ...rest }) => ({
    ...article.toJSON(),
    ...rest,
  })),
  withHandlers({
    markAsReadHandler,
  }),
);

export default enhance(ArticleDetail);
