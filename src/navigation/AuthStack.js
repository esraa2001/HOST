import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { SignIn, SignUp } from '../screens/authScreens';



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
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />

    </Stack.Navigator>
  );
};

export default AuthStack;
