import { Toast as oToast } from 'antd-mobile-rn';

let createToastFunc = (oFunc) => {
  return (content, duration, onClose, mask = false) => oFunc(content, duration, onClose, mask = false)
}

export default {
  success: createToastFunc(oToast.success),
  fail: createToastFunc(oToast.fail),
  info: createToastFunc(oToast.info),
  loading: createToastFunc(oToast.loading),
  offline: createToastFunc(oToast.offline),
}
