import React from 'react';

import messaging from '@react-native-firebase/messaging';

const FcmToken = async () => await messaging().getToken();

import utils from '../utils';
async function getAccount() {
  return await utils.get('account');
}
async function setAccount(data) {
  return await utils.set('account', data);
}

async function getNotificationSetting() {
  return await utils.get('notification_setting');
}
async function setNotificationSetting(data) {
  return await utils.set('notification_setting', data);
}

async function getFirst() {
  return await utils.get('first');
}
async function gethistorySearch() {
  return await utils.get('historySearch');
}
async function setFirst(data) {
  return await utils.set('first', data);
}
async function setHistorySearch(data) {
  return await utils.set('historySearch', data);
}
async function logout() {
  let a = await utils.set('account', null);
  let b = await utils.set('historySearch', null);

  return a && b;
}

export default {
  logout,
  setAccount,
  getAccount,
  getFirst,
  setFirst,
  getNotificationSetting,
  setNotificationSetting,

  gethistorySearch,
  setHistorySearch,

  FcmToken,
};
