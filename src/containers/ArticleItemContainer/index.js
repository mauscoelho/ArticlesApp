import { compose, withHandlers, setPropTypes } from 'recompose';
import propTypes from 'prop-types';
import ArticleItem from '../../components/ArticleItem';

const onPress = ({ navigation }) => () => {
  navigation.navigate('Detail');
};

const enhance = compose(
  setPropTypes({
    title: propTypes.string.isRequired,
    date: propTypes.string.isRequired,
    authors: propTypes.string.isRequired,
    website: propTypes.string.isRequired,
    image_url: propTypes.string.isRequired,
    navigation: propTypes.object,
  }),
  withHandlers({
    onPress,
  }),
);

export default enhance(ArticleItem);
