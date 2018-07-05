import React, { Component } from 'react'
import { ScreenHoc } from '../components/Screen'
import { StyleSheet,View, Text } from 'react-native'
import Button from 'antd-mobile-rn/lib/button'
import List from 'antd-mobile-rn/lib/list'
import InputItem from 'antd-mobile-rn/lib/input-item'
import Toast from 'antd-mobile-rn/lib/toast'

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red'
  }
})

@ScreenHoc
export default class Login extends Component {
  state = {
    userName: '',
    password: ''
  }

  login = () => {
    Toast.info(`${this.state.userName} ${this.state.password}`)
  }

  render() {
    return (
      <View>
        <List>
          <InputItem style={ styles.input } value={ this.state.userName }
            onChange={ (value) => this.setState({ userName: value }) }>
            用户名
          </InputItem>
          <InputItem style={ styles.input } type='password' value={ this.state.password }
            onChange={ (value) => this.setState({ password: value }) }>
            密码
          </InputItem>
          <Button style={ styles.button } onClick={ this.login }>登录</Button>
        </List>
      </View>
    )
  }
}
