import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Platform,
  StatusBar,
  Text,
  Modal,
  SafeAreaView,
  LogBox,
} from 'react-native';
LogBox.ignoreAllLogs();
import Toast from 'react-native-toast-message';
import { useDispatch, useSelector } from 'react-redux';
import messaging from '@react-native-firebase/messaging';
import {
  modifyIsFirst,
  modifyNetWork,
  setUser,
} from './src/redux/reducers/UserReducer';



import NetInfo from '@react-native-community/netinfo';
import Auth from './src/Services';
import { COLORS, FONTS, SIZES, lotties } from './src/constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { AppStack, AuthStack } from './src/navigation';
import SplashScreen from './SplashScreen';
import OnBoarding from './src/screens/OnBoarding';

import utils from './src/utils';


const Stack = createStackNavigator();

const ObBoardStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureDirection: 'horizontal',
        ...TransitionPresets.SlideFromRightIOS,
        headerShown: false,
      }}
      initialRouteName="Onboarding">
      <Stack.Screen name="Onboarding" component={OnBoarding} />
    </Stack.Navigator>
  );
};
const App = () => {


  const dispatch = useDispatch();

  const { login, first, } = useSelector(
    state => state.UserReducer,
  );
  const [loginChk, setloginChk] = useState(true);
  const [isNetworkConnect, setIsNetworkConnect] = useState(true);


  useEffect(() => {



    getUser();

    NetInfo.addEventListener(state => {
      dispatch(modifyNetWork(state.isInternetReachable));
      setIsNetworkConnect(!state.isInternetReachable);
      if (state.isInternetReachable)
        utils.toastAlert('success', 'Your internet connection was restored');
    });


  }, []);





  const getUser = async () => {
    let data = await Auth.getAccount();
    let isFirst = await Auth.getFirst();
    if (isFirst != '1') {
      dispatch(modifyIsFirst(true));
    }
    if (data != null) {
      // alert(data)
      dispatch(setUser(data));
    }

    setTimeout(() => {
      setloginChk(false);
    }, 2300);
  };

  if (loginChk) {
    return <SplashScreen />;
  }



  return (

    <View
      style={{
        flex: 1,
        marginTop: Platform.OS === 'ios' ? StatusBar.currentHeight + 40 : 0,
      }}>
      <SafeAreaView>
        <View
          style={{
            height: Platform.OS == 'ios' ? StatusBar.currentHeight : 0,
          }}>
          <StatusBar backgroundColor={COLORS.primary} />
        </View>
      </SafeAreaView>


      <NavigationContainer>
        {/* {first ? <ObBoardStack /> : login ?  */}
        <AppStack />
        {/* : <AuthStack />} */}
      </NavigationContainer>
      <Toast />


    </View>

  );
};

export default App;
