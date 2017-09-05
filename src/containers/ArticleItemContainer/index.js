import { compose, withHandlers, setPropTypes } from 'recompose';
import propTypes from 'prop-types';
import ArticleItem from '../../components/ArticleItem';

const onPress = ({ navigation, title }) => () => {
  navigation.navigate('Detail', { title });
};

const enhance = compose(
  setPropTypes({
    index: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    date: propTypes.string.isRequired,
    authors: propTypes.string.isRequired,
    website: propTypes.string.isRequired,
    image_url: propTypes.string.isRequired,
    isRead: propTypes.bool,
    navigation: propTypes.object,
  }),
  withHandlers({
    onPress,
  }),
);

export default enhance(ArticleItem);
