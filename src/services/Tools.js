import { Platform } from 'react-native'

export let isAndroid = function() {
  return Platform.OS === 'android'
}

export let isIos = function() {
  return Platform.OS === 'ios'
}
