import { compose, withHandlers, setPropTypes } from 'recompose';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import FilterItem from '../../components/FilterItem';
import { changeFilterAction } from '../../actions';

const onPress = ({ title, changeFilter }) => () => {
  changeFilter(title);
};

const mapStateToProps = state => ({
  visibilityFilter: state.get('settings').get('visibilityFilter'),
});

const mapDispatchToProps = dispatch => ({
  changeFilter: (args) => {
    dispatch(changeFilterAction(args));
  },
});

const enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  setPropTypes({
    title: propTypes.string.isRequired,
    selected: propTypes.bool,
    navigation: propTypes.object,
  }),
  withHandlers({
    onPress,
  }),
);

export default enhance(FilterItem);
