import { createStackNavigator } from 'react-navigation';

import Main from './pages/main';

export default createStackNavigator(
  {
    Main
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#B0C4DE'
      },
      headerTintColor: '#FFF'
    }
  });