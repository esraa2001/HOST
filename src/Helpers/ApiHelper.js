import axios from './api';
import utils from '../utils';
import Auth from '../../src/Services';
import store from '../redux';
import {removeUser} from '../redux/reducers/UserReducer';

export const POST = async (path, data) => {
  try {
    let fetch = await axios.post(`${path}`, data);
    if (fetch.status == 200) {
      let res = fetch.data;
      if (res.status == 'out') {
        await Auth.logout();
        store.dispatch(removeUser());
        utils.toastAlert('error', res?.message || 'Your session is expired#2');
        return null;
      } else if (res.status == 'success') {
        return res.message;
      } else {
        utils.toastAlert(
          'error',
          res?.message || 'something went wrong, please try again later',
        );
        // let modalData = {show: true, message: res.message, res: 'error'};
        // store.dispatch(modifyAlertModal(modalData));
        return null;
      }
    } else {
      utils.toastAlert('error', 'something went wrong, please try again later');
      // let modalData = {show: true, message: 'حدث خطأ ما', res: 'error'};
      // store.dispatch(modifyAlertModal(modalData));
      return null;
    }
  } catch (error) {
    utils.toastAlert('error', 'something went wrong, please try again later');
    return null;

    // let modalData = {show: true, message: 'حدث خطأ ما', res: 'error'};
    // store.dispatch(modifyAlertModal(modalData));
  }
};

export const GET = async path => {
  try {
    let fetch = await axios.get(`${path}`);

    if (fetch.status == 200) {
      let res = fetch.data;
      if (res.status == 'success') {
        return res.message;
      } else {
        utils.toastAlert(
          'error',
          res.message || 'something went wrong, please try again later',
        );
        // let modalData = {show: true, message: res.message, res: 'error'};
        // store.dispatch(modifyAlertModal(modalData));
        return null;
      }
    } else {
      utils.toastAlert('error', 'something went wrong, please try again later');
      // let modalData = {show: true, message: 'حدث خطأ ما', res: 'error'};
      // store.dispatch(modifyAlertModal(modalData));
      return null;
    }
  } catch (error) {
    utils.toastAlert('error', 'something went wrong, please try again later');
    return null;

    // let modalData = {show: true, message: 'حدث خطأ ما', res: 'error'};
    // store.dispatch(modifyAlertModal(modalData));
  }
};
