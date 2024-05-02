import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, SIZES, icons} from '../constants';
import FastImage from 'react-native-fast-image';
const CustomTextinput = ({
  value,
  onChangeText,
  placeholder,
  icon,
  type,
  keyboardType = 'default',
  TextContainerStyle,
}) => {
  const [showPass, setShowPass] = useState(false);
  return (
    <View style={TextContainerStyle}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <FastImage
          source={icon}
          style={{
            width: RFValue(24),
            height: RFValue(24),
            marginRight: SIZES.base,
          }}
          tintColor={COLORS.gray2}
        />
        <TextInput
          autoCapitalize="none"
          keyboardType={keyboardType}
          value={value}
          onChangeText={txt => {
            onChangeText(txt);
          }}
          placeholder={placeholder}
          style={{width: '80%'}}
          secureTextEntry={
            type == 'password' && showPass == false ? true : false
          }
        />
      </View>
      {type == 'password' && (
        <TouchableOpacity
          style={{
            width: RFValue(40),
            height: RFValue(40),
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => {
            setShowPass(!showPass);
          }}>
          <FastImage
            source={showPass ? icons.show : icons.invisible}
            style={{width: RFValue(24), height: RFValue(24)}}
            tintColor={COLORS.gray2}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
export default CustomTextinput;
