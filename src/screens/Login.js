import React, { Component } from 'react'
import { ScreenHoc } from '../components/Screen'
import { View, Text } from 'react-native'
import Button from 'antd-mobile-rn/lib/button'
import List from 'antd-mobile-rn/lib/list'
import InputItem from 'antd-mobile-rn/lib/input-item'

@ScreenHoc
export default class Login extends Component {
  render() {
    return (
      <View>
        <Text>
          login
        </Text>
        <List>
          <InputItem>
          </InputItem>
          <InputItem>
          </InputItem>
        </List>
      </View>
    )
  }
}
