import { Platform } from 'react-native'

export let isAndroid = Platform.OS === 'android'

export let isIos = Platform.OS === 'android'

export let sleep = function(delay = 200) {
  return new Promise(resolve => {
    setTimeout(_ => {
      resolve()
    }, delay)
  })
}

export function makeRetry(fn, {
  retryTimes = 3,
  retryPeriod = 1000
} = {}) {
  return function() {
    let count = 0
    var context = this
    var args = arguments

    let doRetryCall
    let promise = new Promise((resolve, reject) => {
      doRetryCall = function() {
        fn.apply(context, args).then((value) => {
          resolve(value)
        }, error => {
          if (count++ < retryTimes) {
            console.log(`will retry ${fn} in ${retryPeriod} second`, error)
            window.setTimeout(() => {
              doRetryCall()
            }, retryPeriod)
          } else {
            reject(new Error('RETRY_FAIL'))
          }
        })
      }
    })

    doRetryCall()
    return promise
  }
}
