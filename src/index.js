import React from 'react';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import store from './store';
import Home from './screens/Home';
import Detail from './screens/Detail';
import Filter from './screens/Filter';
import HeaderFilter from './components/HeaderFilter';

const Screens = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerRight: <HeaderFilter navigation={navigation} />,
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
