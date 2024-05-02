import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';



// import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

const Stack = createStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        gestureDirection: 'horizontal',
        ...TransitionPresets.SlideFromRightIOS,
        headerShown: false,
      }}
    >

    </Stack.Navigator>
  );
};

export default AuthStack;
