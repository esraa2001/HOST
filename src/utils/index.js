import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
import messaging from '@react-native-firebase/messaging';
import DeviceInfo from 'react-native-device-info';

const getFcmToken = async () => {
  try {
    const token = await messaging().getToken();
    return token;
  } catch (error) {
    console.log('error in creating token');
  }
};
async function student_serial() {
  let d = await DeviceInfo.getUniqueId();
  return d;
}

async function get(key, defaultValue = null) {
  try {
    let value = await AsyncStorage.getItem(key);

    if (key != 'first') {
      if (value !== null) {
        value = JSON.parse(value);
      }
    }
    return value;
  } catch (error) {
    console.log("couldn't save data: " + key, error);
  }
}

async function set(key, value) {
  try {
    if (key == 'first') {
      return await AsyncStorage.setItem(key, value);
    } else {
      return await AsyncStorage.setItem(key, JSON.stringify(value));
    }
  } catch (error) {
    console.log("couldn't save data: " + key, error);
  }
}
async function clear() {
  try {
    return await AsyncStorage.clear(() => {
      console.log('cleared');
    });
  } catch (error) {
    console.log("couldn't save data: " + key, error);
  }
}

function toastAlert(type = 'success', text1, text2) {
  Toast.show({type, text1, text2});
}

function makeId(length) {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export default {
  get,
  set,
  clear,
  toastAlert,
  getFcmToken,
  student_serial,
};
