import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  ScrollView
} from 'react-native'
import { SafeAreaView } from 'react-navigation'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9'
  },
})

export const ScreenHoc = (Comp) => {
  return ({ children, ...props }) => (
    <SafeAreaView style={ styles.container }>
      <Comp { ...props }>
        { children }
      </Comp>
    </SafeAreaView>
  )
}
