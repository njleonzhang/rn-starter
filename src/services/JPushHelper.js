import { isAndroid, makeRetry } from '../services/Tools'
import JPushModule from 'jpush-react-native'
import DeviceStorage from '../services/Storage'

let regId = ''

export let initJPush = function() {
  return new Promise((resolve, reject) => {
    try {
      if (isAndroid) {
        JPushModule.initPush()
      } else {
        JPushModule.setupPush()
      }
      resolve(true)
    } catch(e) {
      reject(e)
    }
  })
}

export let retryInitJPush = makeRetry(initJPush, {
  retryTimes: 10,
  retryPeriod: 1000
})
