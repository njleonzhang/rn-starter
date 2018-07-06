import React, { Component } from 'react'
import { ScreenHoc } from '../components/Screen'
import { Text, View } from 'react-native'

@ScreenHoc
export default class Detail extends Component {
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
