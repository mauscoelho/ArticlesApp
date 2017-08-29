import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import { createEpicMiddleware } from 'redux-observable';
import reducers from '../reducers';
import epics from '../epics';

const composeEnhancers = composeWithDevTools({ realtime: true });

const epicMiddleware = createEpicMiddleware(epics);

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(epicMiddleware)),
);

export default store;
