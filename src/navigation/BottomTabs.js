import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  ImageBackground,
  View,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainAudios, MainBooks, MainApp, MainMyLibrary } from '../screens';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';
import { TransitionPresets } from '@react-navigation/stack';
import FastImage from 'react-native-fast-image';

import * as Animatable from 'react-native-animatable';


import LinearGradient from 'react-native-linear-gradient';
import { Favorite, Home, Inbox, MyBooking } from '../screens/appScreens';

const Tab = createBottomTabNavigator();
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const TabArr = [
  {
    route: 'Home',
    label: 'Home',
    activeIcon: icons.tabHome,
    component: Home,
  },
  {
    route: 'MyBooking',
    label: 'My Booking',
    activeIcon: icons.calender,
    component: MyBooking,
  },
  {
    route: 'Inbox',
    label: 'Inbox',
    activeIcon: icons.inbox,
    component: Inbox,
  },
  {
    route: 'Favorite',
    label: 'Favorite',
    activeIcon: icons.love,
    component: Favorite,
  },

];

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ ...styles.tabBarContainer }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const ViewRef = useRef();

        useEffect(() => {
          if (isFocused) {
            ViewRef.current.animate({
              0: { scale: 0.5, rotate: '0deg' },
              1: { scale: 1.2, rotate: '360deg' },
            });
          } else {
            ViewRef.current.animate({
              0: { scale: 1.2, rotate: '360deg' },
              1: { scale: 1, rotate: '0deg' },
            });
          }
        }, [isFocused]);

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: RFValue(5),
              //   backgroundColor: isFocused ? COLORS.primary : COLORS.white,

              //   marginVertical: RFValue(5),

              //   paddingVertical: RFValue(5),
              //   borderRadius: RFValue(SIZES.base),
            }}
            key={index}>
            {/* <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={
                isFocused
                  ? [COLORS.primary, COLORS.primary, COLORS.primary + '90']
                  : [COLORS.white, COLORS.white]
              }
              style={{
                marginVertical: RFValue(5),

                paddingVertical: RFValue(5),
                borderRadius: RFValue(SIZES.base),
                // padding: SIZES.radius,
                width: '100%',
                // flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                // borderRadius: 100,
              }}> */}
            {/* <MaterialCommunityIcons
                name={options.tabBarIcon.activeIcon}
                size={RFValue(28)}
                color={isFocused ? COLORS.white : COLORS.primary}
                /> */}
            <Animatable.View
              ref={ViewRef}
              animation={'zoomIn'}
              duration={1000}>
              <FastImage
                source={options.tabBarIcon.activeIcon}
                tintColor={isFocused ? COLORS.primary : COLORS.gray5}
                // size={SIZES.padding}
                style={{
                  width: RFValue(24),
                  height: RFValue(24),
                  marginVertical: RFValue(5)
                  // marginBottom: RFValue(4),
                  // width: options.route == 'MyLibrary' ? 25 : 18,
                  // height: options.route == 'MyLibrary' ? 25 : 18,
                }}
              />
            </Animatable.View>

            <Text
              style={{
                color: isFocused ? COLORS.primary : COLORS.gray5,
                fontFamily: FONTS.fontFamily,
                fontSize: 10,
              }}>
              {label}
            </Text>
            {/* </LinearGradient> */}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        ...TransitionPresets.SlideFromRightIOS,
        headerShown: false,
      }}
      tabBar={props => <MyTabBar {...props} />}>
      {TabArr.map((_, index) => {
        return (
          <Tab.Screen
            key={index}
            name={_.route}
            component={_.component}
            options={{
              tabBarLabel: _.label,
              tabBarIcon: {
                activeIcon: _.activeIcon,
                inActiveIcon: _.activeIcon,
              },
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    paddingHorizontal: RFValue(3),
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
export default BottomTab;
