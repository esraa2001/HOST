import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { COLORS, images } from '../../../constants';
import ToggleSwitch from 'toggle-switch-react-native';

const Settings = () => {
    function renderHeader() {
        return (
            <View
                style={{
                    height: 60,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 10,
                }}>
                <View
                    style={{
                        width: 40,
                    }}>
                    <TouchableOpacity onPress={() => { }}>
                        <Image
                            source={images.leftArrow}
                            style={{
                                width: 30,
                                height: 30,
                                borderRadius: 50,
                            }}
                        />
                    </TouchableOpacity>
                </View>

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
                        Setting{' '}
                    </Text>
                </View>

                <View
                    style={{
                        width: 40,
                    }}></View>
            </View>
        );
    }

    function renderRow(iconSource, text) {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '90%',
                    alignSelf: 'center',
                    marginBottom: 30,
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                    }}>
                    <Image
                        source={iconSource}
                        style={{
                            width: 22,
                            height: 22,
                        }}
                    />
                    <Text
                        style={{
                            color: COLORS.black,
                            marginLeft: 10,
                            fontWeight: 'bold',
                        }}>
                        {text}
                    </Text>
                </View>
                <TouchableOpacity>
                    <Image
                        source={images.next}
                        style={{
                            width: 22,
                            height: 22,
                        }}
                    />
                </TouchableOpacity>
            </View>
        );
    }

    function renderBody() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: COLORS.white,
                    paddingHorizontal: 10,
                    marginTop: 30,
                }}>
                {renderRow(images.security, 'Security')}
                {renderRow(images.Help, 'Help ')}
                {renderRow(images.Privacy, 'Privacy')}
                {renderRow(images.contactMsg, 'Contact Us')}
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
            {renderBody()}
        </View>
    );
};
export default Settings;
