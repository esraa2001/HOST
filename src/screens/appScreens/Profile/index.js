import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, images } from '../../../constants';
const Profile = () => {
    function renderHeader() {
        return (
            <View
                style={{
                    width: '100%',
                    alignItems: 'center',
                    paddingTop: 20,
                }}>
                <Text
                    style={{
                        color: '#016064',
                        fontSize: 18,
                        fontWeight: 'bold',
                    }}>
                    Profile
                </Text>
                <Image
                    source={images.Group}
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 50,
                        marginTop: 15,
                    }}
                />
                <Image
                    source={images.editing}
                    style={{
                        width: 22,
                        height: 22,
                        marginTop: -22,
                        marginLeft: 70,
                    }}
                />
                <Text
                    style={{
                        color: COLORS.black,
                        marginTop: 18,
                        fontWeight: 'bold',
                        fontSize: 18,
                    }}>
                    Salma Ahmed
                </Text>
                <Text
                    style={{
                        color: COLORS.gray,
                        marginTop: 5,
                        fontSize: 15,
                    }}>
                    Salma Ahmed@ Gmail.com
                </Text>
            </View>
        );
    }

    function renderRow(iconSource, text) {
        return (
            <TouchableOpacity
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
            </TouchableOpacity>
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
                {renderRow(images.outline_edit, 'Edit Profile')}
                {renderRow(images.changePassword, 'Change Password')}
                {renderRow(images.contact, 'Contact Information')}
                {/* {renderRow(images.offer, 'Offers')} */}
                {renderRow(images.setting, 'Setting')}
                {renderRow(images.logOut, 'Log Out')}
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
export default Profile;
