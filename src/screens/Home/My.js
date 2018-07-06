import React, { Component } from 'react'
import { Text } from 'react-native'
import { Button } from 'antd-mobile-rn'
import DeviceStorage from '../../services/Storage'
import { withNavigation } from 'react-navigation'

@withNavigation
export default class My extends Component {
  render() {
    return (
      <Button type='warning' onClick={() => {
        DeviceStorage.delete('userToken')
        this.props.navigation.navigate('Login')
      }}>
        退出登录
      </Button>
    )
  }
}
