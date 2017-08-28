import { StackNavigator } from 'react-navigation';
import Home from './screens/Home';

const App = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: { title: 'Home' },
  },
});

export default App;
