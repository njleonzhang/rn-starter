'use strict';

import { AsyncStorage } from 'react-native';

class DeviceStorage {
  // workaround issue https://github.com/facebook/react-native/issues/12830

  static get(key) {
    if (__DEV__) {
      return new Promise((resolve) => {
        resolve(null)
      })
    }

    return AsyncStorage.getItem(key).then(function(value) {
      return JSON.parse(value);
    });
  }

  static save(key, value) {
    if (__DEV__) {
      return new Promise((resolve) => {
        resolve(null)
      })
    }
    return AsyncStorage.setItem(key, JSON.stringify(value));
  }

  static update(key, value) {
    if (__DEV__) {
      return new Promise((resolve) => {
        resolve(null)
      })
    }

    return deviceStorage.get(key).then((item) => {
      value = typeof value === 'string' ? value : Object.assign({}, item, value);
      return AsyncStorage.setItem(key, JSON.stringify(value));
    });
  }

  static delete(key) {
    if (__DEV__) {
      return new Promise((resolve) => {
        resolve(null)
      })
    }

    return AsyncStorage.removeItem(key);
  }
}

export default DeviceStorage;
