import { createSlice } from '@reduxjs/toolkit';

const UserReducer = createSlice({
  name: 'UserReducer',
  initialState: {
    userData: {},
    temp_data: {},
    notification_setting: {
      general_notification: true,
      app_updates: true,
      new_courses: true,
      new_tips: true,
      special_offer: true,
    },
    network: true,
    login: false,
    first: false,

  },
  reducers: {
    setUser(state, action) {
      const user = action.payload;
      return { ...state, userData: user, login: true };
    },
    setTempUser(state, action) {
      const user = action.payload;
      return { ...state, temp_data: user };
    },

    removeUser(state, action) {
      return { ...state, userData: {}, login: false };
    },
    modifyNetWork(state, action) {
      return { ...state, network: action.payload };
    },
    modifyIsFirst(state, action) {
      return { ...state, first: action.payload };
    },
    modifyIsLogin(state, action) {
      return { ...state, login: action.payload };
    },

    setNotificationSetting(state, action) {
      const settings = action.payload;
      return { ...state, notification_setting: settings };
    }
  },
});

export const {
  setUser,
  removeUser,
  modifyNetWork,
  modifyIsFirst,
  setTempUser,
  setNotificationSetting,
  modifyIsLogin,

} = UserReducer.actions;
export default UserReducer.reducer;
