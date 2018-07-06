import React, { Component } from 'react'
import { Text } from 'react-native';
import { Button } from 'antd-mobile-rn'
import { withNavigation } from 'react-navigation'

@withNavigation
export default class Orders extends Component {
  render() {
    return (
      <Button type='primary' onClick={() => {
        this.props.navigation.navigate('OrderDetail')
      }}>
        去详情
      </Button>
    )
  }
}
