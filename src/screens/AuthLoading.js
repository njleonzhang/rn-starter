import React from 'react'
import {
  ActivityIndicator,
  StatusBar,
  View,
} from 'react-native'
import { ScreenHoc } from '../components/Screen'
import DeviceStorage from '../services/Storage'
import { retryInitJPush } from '../services/JPushHelper'
import JPushModule from 'jpush-react-native'

@ScreenHoc
export default class AuthLoadingScreen extends React.Component {
  static navigationOptions = {
    header: {
      visible: false
    }
  }

  async componentDidMount() {
    try {
      await retryInitJPush()
      JPushModule.getRegistrationID(regId => {
        console.log(regId)
        DeviceStorage.save('jPushRegId', regId)
      })
    } catch(e) {
      console.error(e, 'init jPush fail after retry 10 times')
    }
  }

  constructor(props) {
    super(props)
    this._bootstrapAsync()
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await DeviceStorage.get('userToken')
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth')
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}
