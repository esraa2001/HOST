

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import { COLORS, FONTS, SIZES, icons } from '../../../constants';
import { RFValue } from 'react-native-responsive-fontsize';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const Favorite = () => {
    const DATA = [
        { id: '1', title: 'Hotel 1', image: 'https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill', price: '$100', rating: '4.5' },
        { id: '2', title: 'Hotel 2', image: 'https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill', price: '$200', rating: '4.0' },
        { id: '3', title: 'Hotel 3', image: 'https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill', price: '$150', rating: '4.7' },
        { id: '4', title: 'Hotel 4', image: 'https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill', price: '$180', rating: '4.3' },
        { id: '4', title: 'Hotel 4', image: 'https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill', price: '$180', rating: '4.3' },
        { id: '4', title: 'Hotel 4', image: 'https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill', price: '$180', rating: '4.3' },
        { id: '4', title: 'Hotel 4', image: 'https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill', price: '$180', rating: '4.3' },
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={{ padding: RFValue(10), width: "70%" }}>
                <Text numberOfLines={1} style={styles.hotelName}>Blue Yoga Hotel, Bali</Text>
                <Text numberOfLines={1} style={styles.address}><SimpleLineIcons name={"location-pin"} /> Legian Nort St, Kuta, Bali</Text>
                <View>
                    {/* <Text style={{
                        ...FONTS.body5,
                        color: COLORS.gray,
                        marginTop: RFValue(2)
                    }}>Start From</Text> */}
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center", justifyContent: "space-between",
                        marginTop: RFValue(5)
                        // width: "100%",
                        // flexWrap: "wrap"
                    }}>
                        <Text style={{ ...FONTS.body5, fontFamily: FONTS.fontFamilyBold, color: COLORS.primary }}>{item.price} / Night</Text>
                        <Text style={styles.rating}>4.5 ★</Text>
                    </View>
                </View>

            </View>
            <TouchableOpacity style={{
                position: "absolute",
                top: RFValue(5),
                right: RFValue(5),
                // backgroundColor: COLORS.gray3,
                padding: RFValue(3),
                // borderRadius: SIZES.radius
            }}>
                <Image source={icons.love} style={{
                    width: RFValue(20),
                    height: RFValue(20),
                    tintColor: COLORS.primary
                }} />

            </TouchableOpacity>
        </TouchableOpacity>
    );
    return (
        <View style={{ ...styles.container }}>


            <View style={{
                paddingTop: SIZES.padding
            }} >
                <Text
                    style={{
                        ...FONTS.body3,
                        fontFamily: FONTS.fontFamilyMedium,
                        color: COLORS.third,
                        textAlign: "center",
                        marginBottom: SIZES.padding
                    }}
                >
                    Favourite
                </Text>
            </View>




            <FlatList
                showsVerticalScrollIndicator={false}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{
                    marginTop: SIZES.padding
                }}
            />

        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.margin

    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,


        // backgroundColor: '#f0f0f0',
        borderRadius: 10,
        overflow: 'hidden',
        padding: SIZES.base,
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: COLORS.gray,
        minHeight: RFValue(120)
    },
    image: {
        width: '30%',
        height: "100%",
        resizeMode: 'cover',
        borderRadius: SIZES.radius
    },
    detailsContainer: {
        // flex: 1,
        padding: 10,
        width: "70%"
    },
    title: {
        ...FONTS.body5
    },
    price: {
        ...FONTS.body5,
        color: COLORS.black
    },
    rating: {

        ...FONTS.body5,
        color: "gold"
    },

    hotelName: {
        ...FONTS.body4,
        fontFamily: FONTS.fontFamilyMedium,
        color: COLORS.third
    },
    address: {
        ...FONTS.body5,
        fontFamily: FONTS.fontFamilyMedium,
        color: COLORS.third,
        // textAlign: "center"
    },
});
export default Favorite;
