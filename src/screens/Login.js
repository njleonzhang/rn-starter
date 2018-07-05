import React, { Component } from 'react'
import { ScreenHoc } from '../components/Screen'
import { View, Text } from 'react-native'
import { Button, List, InputItem, WingBlank } from 'antd-mobile-rn'
import DeviceStorage from '../services/Storage'
import Toast from '../services/Toast'

@ScreenHoc
export default class Login extends Component {
  state = {
    userName: '',
    password: ''
  }

  login = async () => {
    Toast.info(`${this.state.userName} ${this.state.password}`)
    await DeviceStorage.save('userToken', 'token')
    this.props.navigation.navigate('App')
  }

  render() {
    return (
      <View>
        <List>
          <InputItem value={ this.state.userName }
            onChange={ (value) => this.setState({ userName: value }) }>
            用户名
          </InputItem>
          <InputItem type='password' value={ this.state.password }
            onChange={ (value) => this.setState({ password: value }) }>
            密码
          </InputItem>
          <WingBlank>
            <Button type='primary' onClick={ this.login }>
              登录
            </Button>
          </WingBlank>
        </List>
      </View>
    )
  }
}
