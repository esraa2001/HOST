import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS, FONTS, SIZES, icons, images } from '../../../constants';
// import FormInput from '../components/FormInput';
import FastImage from 'react-native-fast-image';
import { FormInput } from '../../../components';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../redux/reducers/UserReducer';
import { RFValue } from 'react-native-responsive-fontsize';
import { ScrollView } from 'react-native-gesture-handler';
const SignIn = ({ navigation }) => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    function renderHeader() {
        return (
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: SIZES.margin
            }}>
                <View>

                </View>
                <Text style={{
                    ...FONTS.body3,
                    fontFamily: FONTS.fontFamilyMedium,
                    color: COLORS.third
                }}>
                    Sign In
                </Text>
                <View />

            </View>
        );
    }

    function renderBodey() {
        return (
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: RFValue(10),
                    backgroundColor: COLORS.white,
                }}>
                <Text
                    style={{
                        ...FONTS.body3,
                        fontFamily: FONTS.fontFamilyMedium,
                        color: COLORS.third
                    }}>
                    Welcome Back!
                </Text>

                <Text
                    style={{
                        ...FONTS.body4,
                        color: COLORS.black,
                        marginTop: SIZES.margin * 2,

                    }}>
                    Email
                </Text>
                <FormInput
                    key={'Email'}
                    containerStyle={{
                        marginTop: SIZES.radius,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.lightGray,
                    }}
                    placeholder=" Enter your Email"
                    //           value={loginPhone}
                    //           onChange={text => setLoginPhone(text)}
                    prependComponent={
                        <FastImage
                            source={images.mail}
                            style={{ width: 20, height: 20, marginRight: SIZES.base }}
                        />
                    }
                    value={email}
                    onChange={(text) => {
                        setEmail(text)
                    }}
                />

                <Text
                    style={{
                        ...FONTS.body4,
                        color: COLORS.black,
                        marginTop: SIZES.margin * 2,
                    }}>
                    Password
                </Text>
                <FormInput
                    key={'Password'}
                    containerStyle={{
                        marginTop: SIZES.radius,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.lightGray,
                    }}
                    placeholder=" Enter your Password"
                    //           value={loginPhone}
                    //           onChange={text => setLoginPhone(text)}
                    prependComponent={
                        <FastImage
                            source={images.changePassword}
                            style={{ width: 20, height: 20, marginRight: SIZES.base }}
                        />
                    }
                    appendComponent={
                        <FastImage
                            tintColor={COLORS.black}
                            source={images.eye_off}
                            style={{ width: 20, height: 20, marginRight: SIZES.base }}
                        />

                    }
                    secureTextEntry={true}
                    value={password}
                    onChange={(text) => {
                        setPassword(text)
                    }}
                />
                <TouchableOpacity>
                    <Text
                        style={{
                            ...FONTS.body4,
                            fontFamily: FONTS.fontFamilyMedium,
                            alignSelf: "flex-end",
                            marginTop: SIZES.margin,
                            color: COLORS.primary,
                            textDecorationLine: "underline"
                        }}>
                        Forget Password?
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => {
                        dispatch(setUser({}))
                    }}
                    style={{
                        width: '95%',
                        height: 55,
                        backgroundColor: '#30BADC',
                        borderRadius: 15,
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        marginTop: 40,
                    }}>
                    <Text
                        style={{
                            ...FONTS.body3,
                            color: COLORS.white,
                            fontWeight: FONTS.fontFamilyMedium,
                        }}>
                        Sign In
                    </Text>
                </TouchableOpacity>

                {/* <View
                    style={{ flexDirection: 'row', alignItems: 'center', marginTop: 45 }}>
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: COLORS.gray,
                            marginRight: 10,
                            borderWidth: 0.2,
                        }}
                    />
                    <Text
                        style={{
                            color: COLORS.black,
                            alignSelf: 'center',
                            fontWeight: 'bold',
                            fontSize: 15,
                            marginTop: 10,
                        }}>
                        Or Continue With
                    </Text>
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: COLORS.gray,
                            marginLeft: 10,
                            borderWidth: 0.2,
                        }}
                    />
                </View> */}
                {/* 
                <View
                    style={{
                        flexDirection: 'row',
                        alignSelf: 'center',
                        alignItems: 'center',
                        marginTop: 60,
                        width: '50%',
                        justifyContent: 'space-between',
                    }}>
                    <View
                        style={{
                            width: 70,
                            height: 55,
                            borderWidth: 0.5,
                            borderRadius: 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderColor: COLORS.gray2,
                        }}>
                        <Image
                            source={icons.google}
                            style={{
                                width: 30,
                                height: 30,
                            }}
                        />
                    </View>
                    <View
                        style={{
                            width: 70,
                            height: 55,
                            borderWidth: 0.5,
                            borderRadius: 10,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderColor: COLORS.gray2,
                        }}>
                        <Image
                            source={icons.apple}
                            style={{
                                width: 30,
                                height: 30,
                            }}
                        />
                    </View>
                </View> */}

                <View
                    style={{
                        alignSelf: 'center',
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginTop: SIZES.margin * 4,
                        // position: 'absolute',
                        // bottom: RFValue(30),
                    }}>
                    <Text
                        style={{
                            ...FONTS.body4,
                            color: COLORS.black,
                            // marginTop: 15,
                            marginRight: 5,
                            fontFamily: FONTS.fontFamilyMedium
                        }}>
                        Dont Have Account ?
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("SignUp")
                        }}
                    >
                        <Text
                            style={{
                                ...FONTS.body4,
                                color: '#30BADC',
                                // marginTop: 15,
                                textDecorationLine: 'underline',
                                fontFamily: FONTS.fontFamilyMedium
                            }}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white,
            }}>
            {renderHeader()}
            <ScrollView showsVerticalScrollIndicator={false}>
                {renderBodey()}
            </ScrollView>
        </View>
    );
};
export default SignIn;
