import React, { Component } from 'react'
import { ScreenHoc } from '../../components/Screen'
import { View, Text } from 'react-native'
import { Button, TabBar, SearchBar } from 'antd-mobile-rn'
import TakerOrder from './TakeOrder'
import Orders from './Orders'
import My from './My'

@ScreenHoc
export default class Home extends Component {
  static navigationOptions = {
    title: '首页'
  }

  items = [
    {
      key: 'takeOrder',
      title: '接单'
    },
    {
      key: 'orders',
      title: '订单'
    },
    {
      key: 'my',
      title: '我的'
    },
  ]

  state = {
    selectedTab: 'takeOrder'
  }

  onChangeTab(key) {
    this.setState({
      selectedTab: key,
    });
  }

  renderContent(key) {
    return (
      <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
        {
          key === 'takeOrder' && <TakerOrder/>
        }
        {
          key === 'orders' && <Orders/>
        }
        {
          key === 'my' && <My/>
        }
      </View>
    )
  }

  render() {
    return (
      <TabBar
        unselectedTintColor="#949494"
        tintColor="#33A3F4"
        barTintColor="#ccc"
      >
        {
          this.items.map(item => {
            return (
              <TabBar.Item
                title={ item.title }
                key={ item.key }
                selected={ this.state.selectedTab === item.key }
                onPress={ () => this.onChangeTab(item.key) }
              >
                {
                  this.renderContent(item.key)
                }
              </TabBar.Item>
            )
          })
        }
      </TabBar>
    )
  }
}
