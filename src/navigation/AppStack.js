import React from 'react';
import { TransitionPresets } from '@react-navigation/stack';


import BottomTab from './BottomTabs';
import { createStackNavigator } from '@react-navigation/stack';
import { BookingDetails, MainMap, Profile, Reviewers, RoomsDetails, SearchPage, Settings } from '../screens/appScreens';



const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureDirection: 'horizontal',
        ...TransitionPresets.SlideFromRightIOS,
        headerShown: false,
      }}
      initialRouteName="BottomTab">
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="RoomsDetails" component={RoomsDetails} />
      <Stack.Screen name="MainMap" component={MainMap} />
      <Stack.Screen name="BookingDetails" component={BookingDetails} />
      <Stack.Screen name="Reviewers" component={Reviewers} />
      <Stack.Screen name="SearchPage" component={SearchPage} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Profile" component={Profile} />


    </Stack.Navigator>
  );
};

export default AppStack;
