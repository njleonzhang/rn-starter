import React, { Component } from 'react'
import { ScreenHoc } from '../components/Screen'
import { View, Text } from 'react-native'
import { Button } from 'antd-mobile-rn';
import DeviceStorage from '../services/Storage';

@ScreenHoc
export default class Home extends Component {
  render() {
    return (
      <View>
        <Text>
          home
        </Text>

        <Button onClick={() => {
          DeviceStorage.delete('userToken')
          this.props.navigation.navigate('Login')
        }}>
          登出
        </Button>
      </View>
    )
  }
}
