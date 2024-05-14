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
import { Login } from './src/screens/authScreens';
import Homesec from './src/screens/appScreens/secHome';



import NetInfo from '@react-native-community/netinfo';
import Auth from './src/Services';
import { COLORS, FONTS, SIZES, lotties } from './src/constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { AppStack, AuthStack } from './src/navigation';
import SplashScreen from './SplashScreen';
import OnBoarding from './src/screens/OnBoarding';
import { MyBooking } from './src/screens/appScreens';
import HOME from './src/screens/appScreens/HOME';
import Notification from './src/screens/appScreens/Notifications';

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
    // return <SplashScreen />;
  }



  return (
<Homesec></Homesec>
    // <View
    //   style={{
    //     flex: 1,
    //     marginTop: Platform.OS === 'ios' ? StatusBar.currentHeight + 40 : 0,
    //   }}>
    //   <SafeAreaView>
    //     <View
    //       style={{
    //         height: Platform.OS == 'ios' ? StatusBar.currentHeight : 0,
    //       }}>
    //       <StatusBar backgroundColor={COLORS.primary} />
    //     </View>
    //   </SafeAreaView>


<<<<<<< HEAD
    //   <NavigationContainer>
    //     {/* {first ? <ObBoardStack /> : login ?  */}
    //     <AppStack />
    //     {/* : <AuthStack />} */}
    //   </NavigationContainer>
    //   <Toast />
=======
      <NavigationContainer>
        {/* {first ? <ObBoardStack /> : login ?  */}
        {login ?
          <AppStack />
          : <AuthStack />}
      </NavigationContainer>
      <Toast />
>>>>>>> 8b1da21babf889d8ca0bcea0e6ca8d9d11daf535


    // </View>


  );
};

export default App;




// // import { StatusBar } from 'expo-status-bar';
// import React, { useState } from 'react';
// import { StyleSheet, Text, View, StatusBar, TouchableOpacity, Animated, Image, Dimensions, findNodeHandle } from 'react-native';
// const { width, height } = Dimensions.get("screen")
// const images = {
//   man:
//     'https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//   women:
//     'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//   kids:
//     'https://images.pexels.com/photos/5080167/pexels-photo-5080167.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//   skullcandy:
//     'https://images.pexels.com/photos/5602879/pexels-photo-5602879.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
//   help:
//     'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
// };
// const data = Object.keys(images).map((i) => ({
//   key: i,
//   title: i,
//   image: images[i],
//   ref: React.createRef()
// }));


// const Tab = React.forwardRef(({ item, onPressItem }, ref) => {
//   return (
//     <TouchableOpacity onPress={onPressItem}>
//       <View ref={ref}>
//         <Text
//           style={{
//             color: "white",
//             fontSize: 84 / data?.length,
//             textTransform: "uppercase",
//             fontWeight: "800"
//           }}
//         >
//           {item?.title}
//         </Text>

//       </View>

//     </TouchableOpacity>
//   )
// })

// const Indicator = ({ measures, scrollX }) => {
//   const inputRange = data?.map((_, i) => i * width)
//   const indicatorWidth = scrollX.interpolate({
//     inputRange,
//     outputRange: measures?.map((measure) => measure.width)
//   })
//   const translateX = scrollX.interpolate({
//     inputRange,
//     outputRange: measures?.map((measure) => measure.x)
//   })
//   return (
//     <Animated.View
//       style={{
//         position: "absolute",
//         height: 4,
//         left: measures[0].x,
//         width: indicatorWidth,
//         backgroundColor: "white",
//         bottom: -4,
//         transform: [
//           {
//             translateX
//           }
//         ]
//         // width: indicatorWidth,
//         // transform: [{
//         //   translateX
//         // }]
//       }}
//     />


//   )
// }
// const Tabs = ({ data, scrollX, onPressItem }) => {
//   const containerRef = React.useRef();
//   const [measures, setMeasures] = useState([]);
//   React.useEffect(() => {
//     const getMeasurement = async () => {
//       const measurementPromises = data.map(async (item, index) => {
//         return new Promise(resolve => {
//           item.ref?.current?.measureLayout(
//             containerRef?.current,
//             (x, y, width, height) => {

//               resolve({ x, y, width, height });
//             },
//           );
//         });
//       });

//       const measurements = await Promise.all(measurementPromises);
//       return measurements;
//     };

//     getMeasurement().then((e) => {
//       setMeasures(e);
//     });
//   }, [containerRef.current]);
//   return (

//     <View style={{ position: "absolute", top: 100, width }}>
//       <View
//         ref={containerRef}
//         style={{
//           justifyContent: "space-evenly",
//           flex: 1,
//           flexDirection: "row",
//           // backgroundColor: "red"
//         }}>
//         {data?.map((item, index) => {
//           return <Tab key={item.key} item={item} ref={item.ref} onPressItem={onPressItem(index)} />
//         })}
//       </View>
//       {measures?.length > 0 && <Indicator measures={measures} scrollX={scrollX} />
//       }
//     </View>


//   )
// }
// export default function App() {

//   const scrollX = React.useRef(new Animated.Value(0)).current
//   const ref = React.useRef();
//   const onPressItem = React.useCallback(itemIndex => {
//     ref?.current?.scrollToOffset({
//       offset: itemIndex * width
//     })
//   })
//   return (
//     <View style={styles.container}>
//       <StatusBar hidden />
//       <Animated.FlatList
//         ref={ref}
//         data={data}
//         keyExtractor={item => item.key}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         pagingEnabled
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { x: scrollX } } }],
//           { useNativeDriver: false }
//         )}
//         bounces={false}
//         renderItem={({ item, index }) => {
//           return (
//             <View style={{ width, height }}>
//               <Image
//                 source={{
//                   uri: item.image
//                 }}
//                 style={{
//                   flex: 1, resizeMode: "cover"
//                 }}
//               />
//               <View
//                 style={
//                   [StyleSheet.absoluteFillObject, {
//                     backgroundColor: "rgba(0,0,0,0.3)"
//                   }]
//                 }
//               >

//               </View>
//               <Tabs scrollX={scrollX} data={data} onPressItem={onPressItem} />

//             </View>
//           )
//         }}
//       ></Animated.FlatList>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });