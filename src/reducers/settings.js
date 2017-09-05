import { Map } from 'immutable';
import { Filter, CHANGE_FILTER } from '../contansts';

const initialState = Map({ visibilityFilter: Filter.Default });

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return state.set('visibilityFilter', action.payload);
    default:
      return state;
  }
};

export default reducer;
