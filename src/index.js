import React from 'react';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import store from './store';
import Home from './screens/Home';

const Screens = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: { title: 'Home' },
  },
});

const App = () => (
  <Provider store={store}>
    <Screens />
  </Provider>
);


export default App;
