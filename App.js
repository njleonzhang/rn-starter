import { createSwitchNavigator, createStackNavigator } from 'react-navigation'

import Home from './src/screens/Home'
import OrderDetail from './src/screens/OrderDetail'
import Login from './src/screens/Login'
import AuthLoading from './src/screens/AuthLoading'
import Colors from './src/services/Colors'
import { YellowBox } from 'react-native'

console.disableYellowBox = true

const AppStack = createStackNavigator({
  Home,
  OrderDetail,
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: Colors.primary
    },
    headerTintColor: 'white',
  }
})

const AuthStack = createStackNavigator({
  Login
})

export default createSwitchNavigator(
  {
    AuthLoading,
    App: AppStack,
    Auth: AuthStack
  },
  {
    initialRouteName: 'AuthLoading'
  }
)
