import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput, FlatList, Dimensions, ScrollView } from 'react-native';
import { COLORS, FONTS, SIZES, images, } from '../../../constants';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import FastImage from 'react-native-fast-image';
import { RFValue } from 'react-native-responsive-fontsize';
import ReadMore from 'react-native-read-more-text';
import { TextButton } from '../../../components';
const ImageSlider = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const flatListRef = useRef(null);
    const windowWidth = Dimensions.get('window').width;

    useEffect(() => {
        if (flatListRef.current) {
            const offset = currentIndex * (windowWidth - SIZES.margin * 2);
            flatListRef.current.scrollToOffset({ animated: true, offset });
        }
    }, [currentIndex]);

    const handlePress = (index) => {
        setCurrentIndex(index);
    };

    const renderItem = ({ item, index }) => {
        return (
            <TouchableOpacity onPress={() => handlePress(index)}>
                <Image source={{ uri: item }} style={{ width: windowWidth - SIZES.margin * 2, height: 200 }} borderRadius={SIZES.radius} />
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                ref={flatListRef}
                data={images}
                horizontal
                // pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                onScroll={(event) => {
                    const slideWidth = event.nativeEvent.layoutMeasurement.width;
                    const offset = event.nativeEvent.contentOffset.x;
                    const index = Math.round(offset / slideWidth);
                    setCurrentIndex(index);
                }}
            />
            <View style={{
                flexDirection: 'row', justifyContent: 'center', position: "absolute", bottom: 10,
                left: "40%"
            }}>
                {images.map((_, index) => (
                    <TouchableOpacity key={index} onPress={() => handlePress(index)}>
                        <View
                            style={{
                                width: 8,
                                height: 8,
                                borderRadius: 4,
                                backgroundColor: index === currentIndex ? COLORS.primary : COLORS.gray5,
                                marginHorizontal: 5,
                            }}
                        />
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};
const RoomsDetails = ({ navigation }) => {
    const image = [
        "https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill",
        "https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill",
        "https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill",
    ];

    const renderTruncatedFooter = (handlePress) => {
        return (
            <Text style={{ color: COLORS.primary, marginTop: 5 }} onPress={handlePress}>
                Show more
            </Text>
        );
    }

    const renderRevealedFooter = (handlePress) => {
        return (
            <Text style={{ color: COLORS.primary, marginTop: 5 }} onPress={handlePress}>
                Show less
            </Text>
        );
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white,
                paddingHorizontal: SIZES.margin
            }}>
            {/**Header */}
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
                    Details
                </Text>
                <View />

            </View>

            {/**Image Slider */}

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    height: 200,
                    borderRadius: SIZES.radius,

                    backgroundColor: COLORS.white,
                    elevation: 1
                }}>
                    <ImageSlider images={image} />
                </View>
                {/** Room details */}

                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginTop: SIZES.base
                }}>
                    <View style={{
                        width: "75%",
                    }}>
                        <Text style={{
                            ...FONTS.body4,
                            fontFamily: FONTS.fontFamilyMedium,
                            color: COLORS.third
                        }}>Blue Yoga Hotel, Bali</Text>
                        <Text style={{
                            ...FONTS.body5,
                            fontFamily: FONTS.fontFamilyMedium,
                            color: COLORS.third,
                            // textAlign: "center"
                        }}><SimpleLineIcons name={"location-pin"} /> Legian Nort St, Kuta, Bali</Text>

                    </View>
                    <View style={{
                        width: "25%",
                        alignItems: "flex-end",
                        justifyContent: "center",
                        // backgroundColor: "red"
                    }}>
                        <View style={{
                            backgroundColor: COLORS.secondary,
                            alignItems: "center",
                            justifyContent: "center",
                            maxWidth: "95%",
                            flexWrap: "wrap",
                            paddingHorizontal: SIZES.base,
                            paddingVertical: SIZES.base,
                            borderRadius: RFValue(5)
                        }}>
                            <Text
                                style={{
                                    ...FONTS.body3,
                                    textAlign: "center",
                                    fontFamily: FONTS.fontFamilySemiBold,
                                    color: COLORS.primary,
                                }}
                            >
                                $15 Night
                            </Text>
                        </View>



                    </View>

                </View>


                {/**Reviews */}

                <View style={{
                    marginTop: SIZES.margin
                }}>
                    <Text style={{
                        ...FONTS.body3,
                        color: COLORS.black,
                        fontFamily: FONTS.fontFamilySemiBold
                    }}>
                        Reviews
                    </Text>

                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between"

                        }}
                    >

                        <Text style={{
                            ...FONTS.body4,
                            alignItems: "center", color: COLORS.black,
                            fontFamily: FONTS.fontFamilyMedium
                        }}>
                            4.5 ⭐  <Text style={{
                                ...FONTS.body5,
                                color: COLORS.gray2
                            }} >(750 Reviews)</Text>
                        </Text>

                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("Reviewers")
                            }}
                        >
                            <Text style={{ ...FONTS.body4, color: COLORS.primary, fontFamily: FONTS.fontFamilySemiBold, textDecorationLine: "underline" }}>
                                See All
                            </Text>
                        </TouchableOpacity>



                    </View>


                </View>

                {/** describtion */}

                <View style={{
                    marginTop: SIZES.margin
                }}>
                    <Text style={{
                        ...FONTS.body3,
                        color: COLORS.black,
                        fontFamily: FONTS.fontFamilySemiBold
                    }}>
                        Description
                    </Text>
                    <ReadMore
                        numberOfLines={6}
                        renderTruncatedFooter={renderTruncatedFooter}
                        renderRevealedFooter={renderRevealedFooter}
                    >
                        <Text style={{
                            ...FONTS.body5,
                            fontFamily: FONTS.fontFamilyRegular,
                            textAlign: "justify"


                        }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </Text>
                    </ReadMore>

                </View>
            </ScrollView>
            <TextButton
                onPress={() => {
                    // setModalVisible(false)
                    navigation.navigate("BookingDetails")
                }}
                buttonContainerStyle={{
                    marginVertical: SIZES.margin,
                    paddingVertical: SIZES.base * 1.5,
                    width: "100%",
                    alignSelf: "center",
                    borderRadius: SIZES.radius
                }}
                label={"Book Now"}
            />





        </View>
    );
};
export default RoomsDetails;
