import Immutable from 'immutable';

const initialState = Immutable.fromJS({
  articles: [],
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
