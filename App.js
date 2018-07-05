import { createSwitchNavigator, createStackNavigator } from 'react-navigation'

import Home from './src/screens/Home'
import Detail from './src/screens/Detail'
import Login from './src/screens/Login'
import My from './src/screens/My'
import Orders from './src/screens/Orders'
import AuthLoading from './src/screens/AuthLoading'

const AppStack = createStackNavigator({
  Home,
  Detail,
  My,
  Orders
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
