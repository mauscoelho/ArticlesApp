import { compose, mapProps } from 'recompose';
import { connect } from 'react-redux';
import FilterList from '../../components/FilterList';
import { Filter } from '../../contansts';

const mapStateToProps = state => ({
  visibilityFilter: state.get('settings').get('visibilityFilter'),
});

const enhance = compose(
  connect(mapStateToProps, {}),
  mapProps(({ visibilityFilter, ...rest }) => ({
    filters: [
      { title: Filter.Default, selected: visibilityFilter === Filter.Default },
      { title: Filter.Authors, selected: visibilityFilter === Filter.Authors },
      { title: Filter.Date, selected: visibilityFilter === Filter.Date },
      { title: Filter.Title, selected: visibilityFilter === Filter.Title },
      { title: Filter.Website, selected: visibilityFilter === Filter.Website },
    ],
    ...rest,
  })),
);

export default enhance(FilterList);
