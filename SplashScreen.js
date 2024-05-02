import React, { useEffect, useRef } from 'react';
import { View, StatusBar, Platform, NativeModules } from 'react-native';
import { COLORS, images } from './src/constants';
import { RFValue } from 'react-native-responsive-fontsize';
import * as Animatable from 'react-native-animatable';

import DeviceInfo from 'react-native-device-info';
import { useDispatch } from 'react-redux';

const SplashScreen = () => {
  const dispatch = useDispatch();
  const iconRef = useRef();




  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <StatusBar backgroundColor={COLORS.primary} />

      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Animatable.Image
          ref={iconRef}
          delay={200}
          animation={'flipInY'}
          source={images.splashLogo}
          style={{
            width: RFValue(250),
            height: RFValue(250),
          }}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default SplashScreen;
