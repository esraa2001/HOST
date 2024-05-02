import React from 'react';
import { TransitionPresets } from '@react-navigation/stack';


import BottomTab from './BottomTabs';
import { createStackNavigator } from '@react-navigation/stack';


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


    </Stack.Navigator>
  );
};

export default AppStack;
