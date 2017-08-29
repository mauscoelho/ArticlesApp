import React from 'react';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import store from './store';
import Home from './screens/Home';
import Detail from './screens/Detail';

const Screens = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: { title: 'Home' },
  },
  Detail: {
    screen: Detail,
    navigationOptions: { title: 'Detail' },
  },
});

const App = () => (
  <Provider store={store}>
    <Screens />
  </Provider>
);


export default App;
