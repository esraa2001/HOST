import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES, icons} from '../constants';
import {RFValue} from 'react-native-responsive-fontsize';
import FastImage from 'react-native-fast-image';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = ({ onPress}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        // marginHorizontal: SIZES.padding,
        
      }}>
    <TouchableOpacity onPress={()=>{

    }}>
          <MaterialIcons
            name="arrow-back"
            size={RFValue(24)}
            color={COLORS.primary} 
          />
        </TouchableOpacity>
    </View>
  );
};

export default Header;
