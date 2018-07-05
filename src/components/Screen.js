import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  ScrollView
} from 'react-native'
import { SafeAreaView } from 'react-navigation'
import Colors from '../services/Colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
})

export const ScreenHoc = (Comp) => {
  let Screen = function({ children, ...props }) {
    return (
      <SafeAreaView style={ styles.container }>
        <Comp { ...props }>
          { children }
        </Comp>
      </SafeAreaView>
    )
  }

  Screen.navigationOptions = Comp.navigationOptions
  return Screen
}
