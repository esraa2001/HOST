import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { FONTS, COLORS, SIZES } from '../constants';

const FormInput = ({
    containerStyle,
    InputContainerStyle,
    placeholder,
    inputStyle,
    value = '',
    prependComponent,
    appendComponent,
    onChange,
    onPress,
    editable,
    secureTextEntry,
    keyboardType = 'default',
    autoCapitalize = 'none',
    autoCompleteType = 'off',
    maxLength,
    placeholderTextColor = COLORS.grey60,
}) => {
    return (
        <View style={{ ...containerStyle }}>
            {/* Label & Error msg */}
            <View
                style={{
                    flexDirection: 'row',
                    height: RFValue(50),
                    paddingHorizontal: 10,
                    borderRadius: SIZES.radius,
                    backgroundColor: COLORS.lightGray,
                    alignItems: 'center',
                    ...InputContainerStyle,
                    borderWidth: 0.4,
                }}>
                {prependComponent}
                <TextInput
                    editable={editable}
                    style={{
                        flex: 1,
                        paddingVertical: 0,
                        ...FONTS.h4,
                        ...inputStyle,
                        textAlign: 'left',
                        fontFamily: FONTS.fontFamilyRegular
                    }}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    autoCapitalize={autoCapitalize}
                    autoComplete={autoCompleteType}
                    maxLength={maxLength}
                    onChangeText={text => onChange(text)}
                />
                {appendComponent}
            </View>
        </View>
    );
};

export default FormInput;
