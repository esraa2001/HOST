import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import React from 'react';

import { HomeStyle } from '../styles';
import { useNavigation } from '@react-navigation/native';


import { RFValue } from 'react-native-responsive-fontsize';
import { COLORS, SIZES, icons, images } from '../../../../constants';
import { useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TextButton } from '../../../../components';
const Header = ({ lang, setDatesVis, setAdultsVis, navigation, navigationProfile }) => {
    // const { navigate } = useNavigation();
    const dispatch = useDispatch();

    return (
        // <View style={HomeStyle.HeaderContainer}>

        <View style={HomeStyle.HeaderContainer}>
            <View style={HomeStyle.HeaderRow}>
                <View>
                    {/* <Text
                        style={[
                            HomeStyle.HelloText,

                        ]}>
                        {('Hello!')}
                    </Text> */}
                    <Text
                        style={[
                            HomeStyle.name,

                        ]}>
                        {"Kara"}
                    </Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        onPress={

                            navigationProfile
                        }
                        style={{
                            // padding: RFValue(.5),
                            borderWidth: 1,
                            borderColor: COLORS.black,
                            borderRadius: RFValue(50)
                        }}
                    >
                        <Image
                            source={images.Group}
                            style={{
                                width: RFValue(30),
                                height: RFValue(30),
                                borderRadius: RFValue(15),
                            }}
                        />
                        {/* <Profile fill={colors.secblack} /> */}
                    </TouchableOpacity>
                </View>
            </View>

            <TouchableOpacity onPress={navigation} style={HomeStyle.searchContainer}>
                <Icon name="search" size={RFValue(14)} color={COLORS.gray} />
                <TextInput
                    placeholder="Search"
                    style={HomeStyle.searchInput}
                    placeholderTextColor={COLORS.gray}
                    editable={false}

                />
                <Icon name="sliders" size={RFValue(14)} color={COLORS.gray} />
            </TouchableOpacity>
            <View >
                {/* <TextButton
                    onPress={navigation}
                    buttonContainerStyle={{
                        marginTop: SIZES.margin,
                        paddingVertical: SIZES.base * 1.5,
                        width: "100%",
                        alignSelf: "center",
                        borderRadius: SIZES.radius
                    }}
                    label={"Search"}
                /> */}

                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "100%",
                    marginTop: SIZES.margin,

                }}>
                    <TextButton
                        onPress={() => {
                            setDatesVis(true)
                        }}
                        buttonContainerStyle={{

                            paddingVertical: SIZES.base * 1.5,
                            width: "45%",
                            alignSelf: "center",
                            borderRadius: SIZES.radius,
                            backgroundColor: "#fff",
                            borderWidth: 1,
                            borderColor: COLORS.primary

                        }}
                        label={"Select dates"}
                        labelStyle={{
                            color: COLORS.primary
                        }}
                    />
                    <TextButton
                        onPress={() => {

                        }}
                        buttonContainerStyle={{
                            // marginTop: SIZES.margin,
                            paddingVertical: SIZES.base * 1.5,
                            width: "45%",
                            alignSelf: "center",
                            borderRadius: SIZES.radius,
                            backgroundColor: "#fff",
                            borderWidth: 1,
                            borderColor: COLORS.primary

                        }}
                        label={"Adults"}
                        labelStyle={{
                            color: COLORS.primary
                        }}
                    />

                </View>


            </View>








        </View>

        // </View>
    );
};

export default Header;
