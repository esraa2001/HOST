import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS, images, SIZES, icons } from '../../../constants';
import { TextInput } from 'react-native-paper';
// import FormInput from '../components/FormInput';
import FastImage from 'react-native-fast-image';
import { FormInput } from '../../../components';
const SignUp = () => {
    function renderHeader() {
        return (
            <View
                style={{
                    height: 60,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 10,
                    marginTop: 10,
                    //           marginBottom: 10,
                }}>
                <View
                    style={{
                        width: 40,
                    }}></View>

                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                    }}>
                    <Text
                        style={{
                            color: '#002D3A',
                            textAlign: 'center',
                            fontWeight: 'bold',
                            fontSize: 20,
                        }}>
                        Sign Up{' '}
                    </Text>
                </View>

                <View
                    style={{
                        width: 40,
                    }}></View>
            </View>
        );
    }

    function renderBodey() {
        return (
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: 10,
                }}>
                <Text
                    style={{
                        color: COLORS.black,
                    }}>
                    User name
                </Text>
                <FormInput
                    key={'name'}
                    containerStyle={{
                        marginTop: SIZES.radius,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.lightGray,
                    }}
                    placeholder=" Enter your name"
                    //           value={loginPhone}
                    //           onChange={text => setLoginPhone(text)}
                    prependComponent={
                        <FastImage
                            source={images.user}
                            style={{ width: 20, height: 20, marginRight: SIZES.base }}
                        />
                    }
                />

                <Text
                    style={{
                        color: COLORS.black,
                        marginTop: 30,
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
                />

                <Text
                    style={{
                        color: COLORS.black,
                        marginTop: 30,
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
                />

                <TouchableOpacity
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
                            color: COLORS.white,
                            fontWeight: 'bold',
                        }}>
                        Sign Up
                    </Text>
                </TouchableOpacity>

                <View>
                    <Text
                        style={{
                            color: COLORS.black,
                            textAlign: 'center',
                            marginTop: 15,
                        }}>
                        {'By creating account or signing you agree '}
                    </Text>

                    <View
                        style={{
                            alignSelf: 'center',
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 2,
                        }}>
                        <Text
                            style={{
                                color: COLORS.black,
                            }}>
                            to our{' '}
                        </Text>
                        <Text
                            style={{
                                color: COLORS.black,
                                textAlign: 'center',
                                textDecorationLine: 'underline',
                            }}>
                            Terms and Conditions
                        </Text>
                    </View>
                </View>
                {/* <View
                    style={{ flexDirection: 'row', alignItems: 'center', marginTop: 30 }}>
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

                {/* <View
                    style={{
                        flexDirection: 'row',
                        alignSelf: 'center',
                        alignItems: 'center',
                        marginTop: 20,
                        width: '50%',
                        justifyContent: 'space-between',
                    }}>
                    <View
                        style={{
                            width: 70,
                            height: 55,
                            borderWidth: 0.5,
                            borderRadius: 15,
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
                            borderRadius: 15,
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
                        position: 'absolute',
                        bottom: 30,
                    }}>
                    <Text
                        style={{
                            color: COLORS.black,
                            marginTop: 15,
                            marginRight: 5,
                        }}>
                        Already A Member ?
                    </Text>
                    <TouchableOpacity>
                        <Text
                            style={{
                                color: '#30BADC',
                                marginTop: 15,
                                textDecorationLine: 'underline',
                            }}>
                            Sign in
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
            {renderBodey()}
        </View>
    );
};
export default SignUp;
