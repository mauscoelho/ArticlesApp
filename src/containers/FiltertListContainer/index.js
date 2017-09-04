import { compose, mapProps } from 'recompose';
import FilterList from '../../components/FilterList';
import { Filter } from '../../contansts';

const enhance = compose(
  mapProps(({ ...rest }) => ({
    filters: [
      { title: Filter.Default },
      { title: Filter.Authors },
      { title: Filter.Date },
      { title: Filter.Title },
      { title: Filter.Website },
    ],
    ...rest,
  })),
);

export default enhance(FilterList);
