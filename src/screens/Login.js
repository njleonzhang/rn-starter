import React, { Component } from 'react'
import { ScreenHoc } from '../components/Screen'
import { View, Text, StatusBar, StyleSheet } from 'react-native'
import { Button, List, InputItem, WingBlank } from 'antd-mobile-rn'
import DeviceStorage from '../services/Storage'
import Toast from '../services/Toast'
import Colors from '../services/Colors'
import { SafeAreaView } from 'react-navigation'
import JPushModule from 'jpush-react-native'
import { isAndroid } from '../services/Tools'

const styles = StyleSheet.create({
  button: {
    margin: 10,
  }
})

export default class Login extends Component {
  state = {
    userName: '',
    password: ''
  }

  static navigationOptions = {
    header: null,
  }

  login = async () => {
    Toast.info(`${this.state.userName} ${this.state.password}`)
    await DeviceStorage.save('userToken', 'token')
    this.props.navigation.navigate('App')
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <InputItem autoCapitalize='none' value={ this.state.userName }
          onChange={ (value) => this.setState({ userName: value }) }>
          用户名
        </InputItem>
        <InputItem type='password' value={ this.state.password }
          onChange={ (value) => this.setState({ password: value }) }>
          密码
        </InputItem>
        <Button type='primary' style={ styles.button } onClick={ this.login }>
          登录
        </Button>
        <Button type='primary' onClick={() => {
          isAndroid() && JPushModule.initPush()

          JPushModule.getRegistrationID(regId => {
            console.log(regId)
            DeviceStorage.save('jPushRegId', regId)
          })
        }}>注册jPush</Button>
      </SafeAreaView>
    )
  }
}
