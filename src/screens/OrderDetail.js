import React, { Component } from 'react'
import { ScreenHoc } from '../components/Screen'
import { Text, View } from 'react-native'

@ScreenHoc
export default class Detail extends Component {
  static navigationOptions = {
    title: '订单详情'
  }

  render() {
    return (
      <View>
        <Text>
          orderDetail
        </Text>
      </View>
    )
  }
}
