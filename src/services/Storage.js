'use strict';

import { AsyncStorage } from 'react-native';

function fakePromise(fakeValue = null) {
  // workaround issue https://github.com/facebook/react-native/issues/12830
  return new Promise((resolve) => {
    resolve(fakeValue)
  })
}

class DeviceStorage {

  static get(key, fakeValue = null) {
    if (__DEV__) {
      return fakePromise(fakeValue)
    }

    return AsyncStorage.getItem(key).then(function(value) {
      return JSON.parse(value);
    });
  }

  static save(key, value, fakeValue = null) {
    if (__DEV__) {
      return fakePromise(fakeValue)
    }

    return AsyncStorage.setItem(key, JSON.stringify(value));
  }

  static update(key, value, fakeValue = null) {
    if (__DEV__) {
      return fakePromise(fakeValue)
    }

    return deviceStorage.get(key).then((item) => {
      value = typeof value === 'string' ? value : Object.assign({}, item, value);
      return AsyncStorage.setItem(key, JSON.stringify(value));
    });
  }

  static delete(key, fakeValue = null) {
    if (__DEV__) {
      return fakePromise(fakeValue)
    }

    return AsyncStorage.removeItem(key);
  }
}

export default DeviceStorage;
