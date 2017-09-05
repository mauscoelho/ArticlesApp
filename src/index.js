import React from 'react';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { Button } from 'react-native';
import store from './store';
import Home from './screens/Home';
import Detail from './screens/Detail';
import Filter from './screens/Filter';

const Screens = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerRight: (
        <Button
          title={'Filter'}
          onPress={() => navigation.navigate('Filter')}
        />
      ),
    }),
  },
  Detail: {
    screen: Detail,
    navigationOptions: { title: 'Detail' },
  },
  Filter: {
    screen: Filter,
    navigationOptions: { title: 'Filter' },
  },
});

const App = () => (
  <Provider store={store}>
    <Screens />
  </Provider>
);

export default App;
