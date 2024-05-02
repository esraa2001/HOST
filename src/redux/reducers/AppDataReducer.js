import {createSlice} from '@reduxjs/toolkit';

const AppDataReducer = createSlice({
  name: 'AppDataReducer',
  initialState: {
    homeData: {},
    homeLoading: true,
    notifications: [],
    notificationsLoading: true,
    reports_data:[],
    
  },
  reducers: {
    setHome(state, action) {
      const data = action.payload;
      return {...state, homeData: data, homeLoading: false};
    },
    setReports(state, action) {
      const data = action.payload;
      return {...state, reports_data: data};
    },
    setHomeLoading(state, action) {
      const data = action.payload;
      return {...state, homeLoading: data};
    },
    setNotifications(state, action) {
      const data = action.payload;
      return {...state, notifications: data, notificationsLoading: false};
    },
    setNotificationsLoading(state, action) {
      const data = action.payload;
      return {...state, notificationsLoading: data};
    },
  },
});

export const {
  setHome,
  setHomeLoading,
  setNotifications,
  setNotificationsLoading,
  setReports
} = AppDataReducer.actions;
export default AppDataReducer.reducer;
