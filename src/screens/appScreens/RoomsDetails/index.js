// // import React, { useState, useRef, useEffect } from 'react';
// // import { View, Text, TouchableOpacity, Image, TextInput, FlatList, Dimensions, ScrollView } from 'react-native';
// // import { COLORS, FONTS, SIZES, images, } from '../../../constants';
// // import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

// // import FastImage from 'react-native-fast-image';
// // import { RFValue } from 'react-native-responsive-fontsize';
// // import ReadMore from 'react-native-read-more-text';
// // import { TextButton } from '../../../components';
// // const ImageSlider = ({ images }) => {
// //     const [currentIndex, setCurrentIndex] = useState(0);
// //     const flatListRef = useRef(null);
// //     const windowWidth = Dimensions.get('window').width;

// //     useEffect(() => {
// //         if (flatListRef.current) {
// //             const offset = currentIndex * (windowWidth - SIZES.margin * 2);
// //             flatListRef.current.scrollToOffset({ animated: true, offset });
// //         }
// //     }, [currentIndex]);

// //     const handlePress = (index) => {
// //         setCurrentIndex(index);
// //     };

// //     const renderItem = ({ item, index }) => {
// //         return (
// //             <TouchableOpacity onPress={() => handlePress(index)}>
// //                 <Image source={{ uri: item }} style={{ width: windowWidth - SIZES.margin * 2, height: 200 }} borderRadius={SIZES.radius} />
// //             </TouchableOpacity>
// //         );
// //     };

// //     return (
// //         <View style={{ flex: 1 }}>
// //             <FlatList
// //                 ref={flatListRef}
// //                 data={images}
// //                 horizontal
// //                 // pagingEnabled
// //                 showsHorizontalScrollIndicator={false}
// //                 keyExtractor={(item, index) => index.toString()}
// //                 renderItem={renderItem}
// //                 onScroll={(event) => {
// //                     const slideWidth = event.nativeEvent.layoutMeasurement.width;
// //                     const offset = event.nativeEvent.contentOffset.x;
// //                     const index = Math.round(offset / slideWidth);
// //                     setCurrentIndex(index);
// //                 }}
// //             />
// //             <View style={{
// //                 flexDirection: 'row', justifyContent: 'center', position: "absolute", bottom: 10,
// //                 left: "40%"
// //             }}>
// //                 {images.map((_, index) => (
// //                     <TouchableOpacity key={index} onPress={() => handlePress(index)}>
// //                         <View
// //                             style={{
// //                                 width: 8,
// //                                 height: 8,
// //                                 borderRadius: 4,
// //                                 backgroundColor: index === currentIndex ? COLORS.primary : COLORS.gray5,
// //                                 marginHorizontal: 5,
// //                             }}
// //                         />
// //                     </TouchableOpacity>
// //                 ))}
// //             </View>
// //         </View>
// //     );
// // };
// // const RoomsDetails = ({ navigation }) => {
// // const image = [
// //     "https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill",
// //     "https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill",
// //     "https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill",
// // ];

// //     const renderTruncatedFooter = (handlePress) => {
// //         return (
// //             <Text style={{ color: COLORS.primary, marginTop: 5 }} onPress={handlePress}>
// //                 Show more
// //             </Text>
// //         );
// //     }

// //     const renderRevealedFooter = (handlePress) => {
// //         return (
// //             <Text style={{ color: COLORS.primary, marginTop: 5 }} onPress={handlePress}>
// //                 Show less
// //             </Text>
// //         );
// //     }

// //     return (
// //         <View
// //             style={{
// //                 flex: 1,
// //                 backgroundColor: COLORS.white,
// //                 paddingHorizontal: SIZES.margin
// //             }}>
// //             {/**Header */}
// //             <View style={{
// //                 flexDirection: "row",
// //                 justifyContent: "space-between",
// //                 paddingVertical: SIZES.margin
// //             }}>
// //                 <View>

// //                 </View>
// //                 <Text style={{
// //                     ...FONTS.body3,
// //                     fontFamily: FONTS.fontFamilyMedium,
// //                     color: COLORS.third
// //                 }}>
// //                     Details
// //                 </Text>
// //                 <View />

// //             </View>

// //             {/**Image Slider */}

// //             <ScrollView showsVerticalScrollIndicator={false}>
// //                 <View style={{
// //                     height: 200,
// //                     borderRadius: SIZES.radius,

// //                     backgroundColor: COLORS.white,
// //                     elevation: 1
// //                 }}>
// //                     <ImageSlider images={image} />
// //                 </View>
// //                 {/** Room details */}

// //                 <View style={{
// //                     flexDirection: "row",
// //                     alignItems: "center",
// //                     marginTop: SIZES.base
// //                 }}>
// //                     <View style={{
// //                         width: "75%",
// //                     }}>
// //                         <Text style={{
// //                             ...FONTS.body4,
// //                             fontFamily: FONTS.fontFamilyMedium,
// //                             color: COLORS.third
// //                         }}>Blue Yoga Hotel, Bali</Text>
// //                         <Text style={{
// //                             ...FONTS.body5,
// //                             fontFamily: FONTS.fontFamilyMedium,
// //                             color: COLORS.third,
// //                             // textAlign: "center"
// //                         }}><SimpleLineIcons name={"location-pin"} /> Legian Nort St, Kuta, Bali</Text>

// //                     </View>
// //                     <View style={{
// //                         width: "25%",
// //                         alignItems: "flex-end",
// //                         justifyContent: "center",
// //                         // backgroundColor: "red"
// //                     }}>
// //                         <View style={{
// //                             backgroundColor: COLORS.secondary,
// //                             alignItems: "center",
// //                             justifyContent: "center",
// //                             maxWidth: "95%",
// //                             flexWrap: "wrap",
// //                             paddingHorizontal: SIZES.base,
// //                             paddingVertical: SIZES.base,
// //                             borderRadius: RFValue(5)
// //                         }}>
// //                             <Text
// //                                 style={{
// //                                     ...FONTS.body3,
// //                                     textAlign: "center",
// //                                     fontFamily: FONTS.fontFamilySemiBold,
// //                                     color: COLORS.primary,
// //                                 }}
// //                             >
// //                                 $15 Night
// //                             </Text>
// //                         </View>



// //                     </View>

// //                 </View>


// //                 {/**Reviews */}

// //                 <View style={{
// //                     marginTop: SIZES.margin
// //                 }}>
// //                     <Text style={{
// //                         ...FONTS.body3,
// //                         color: COLORS.black,
// //                         fontFamily: FONTS.fontFamilySemiBold
// //                     }}>
// //                         Reviews
// //                     </Text>

// //                     <View
// //                         style={{
// //                             flexDirection: "row",
// //                             alignItems: "center",
// //                             justifyContent: "space-between"

// //                         }}
// //                     >

// //                         <Text style={{
// //                             ...FONTS.body4,
// //                             alignItems: "center", color: COLORS.black,
// //                             fontFamily: FONTS.fontFamilyMedium
// //                         }}>
// //                             4.5 ⭐  <Text style={{
// //                                 ...FONTS.body5,
// //                                 color: COLORS.gray2
// //                             }} >(750 Reviews)</Text>
// //                         </Text>

// //                         <TouchableOpacity
// //                             onPress={() => {
// //                                 navigation.navigate("Reviewers")
// //                             }}
// //                         >
// //                             <Text style={{ ...FONTS.body4, color: COLORS.primary, fontFamily: FONTS.fontFamilySemiBold, textDecorationLine: "underline" }}>
// //                                 See All
// //                             </Text>
// //                         </TouchableOpacity>



// //                     </View>


// //                 </View>

// //                 {/** describtion */}

// //                 <View style={{
// //                     marginTop: SIZES.margin
// //                 }}>
// //                     <Text style={{
// //                         ...FONTS.body3,
// //                         color: COLORS.black,
// //                         fontFamily: FONTS.fontFamilySemiBold
// //                     }}>
// //                         Description
// //                     </Text>
// //                     <ReadMore
// //                         numberOfLines={6}
// //                         renderTruncatedFooter={renderTruncatedFooter}
// //                         renderRevealedFooter={renderRevealedFooter}
// //                     >
// //                         <Text style={{
// //                             ...FONTS.body5,
// //                             fontFamily: FONTS.fontFamilyRegular,
// //                             textAlign: "justify"


// //                         }}>
// //                             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
// //                         </Text>
// //                     </ReadMore>

// //                 </View>
// //             </ScrollView>
// // <TextButton
// //     onPress={() => {
// //         // setModalVisible(false)
// //         navigation.navigate("BookingDetails")
// //     }}
// //     buttonContainerStyle={{
// //         marginVertical: SIZES.margin,
// //         paddingVertical: SIZES.base * 1.5,
// //         width: "100%",
// //         alignSelf: "center",
// //         borderRadius: SIZES.radius
// //     }}
// //     label={"Book Now"}
// // />





// //         </View>
// //     );
// // };
// // export default RoomsDetails;



// import React, { useState, useRef } from 'react';
// import { View, Text, Image, FlatList, Dimensions, ImageBackground, StatusBar, Modal, TouchableOpacity, ScrollView } from 'react-native';
// import { COLORS, SIZES, FONTS, icons } from '../../../constants';
// import { RFValue } from 'react-native-responsive-fontsize';
// import ImageViewer from 'react-native-image-zoom-viewer';
// import FastImage from 'react-native-fast-image';
// import { TextButton } from '../../../components';
// const { width, height } = Dimensions.get('window');

// const images = [
//     "https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill",
//     "https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill",
//     "https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill",
// ];


// export default function RoomsDetails({ navigation }) {
//     const [active, setActive] = useState(0);
//     const flatListRef = useRef();
//     const [image_modal_src, setImage_modal_src] = React.useState("")
//     const [image_modal, setImage_modal] = React.useState(false)
//     const [image_index, setImage_index] = React.useState(0)

//     const change = ({ viewableItems }) => {
//         setActive(viewableItems[0].index);
//     };

//     return (
//         <View
//             style={{
//                 flex: 1,
//                 backgroundColor: COLORS.white,
//                 // paddingHorizontal: SIZES.margin
//             }}>
//             <ScrollView>
//                 <StatusBar translucent backgroundColor={"rgba(0,0,0,0.0001)"} />
//                 <View style={{ height: RFValue(260) }}>
//                     <FlatList
//                         ref={flatListRef}
//                         data={images}
//                         horizontal
//                         pagingEnabled
//                         onViewableItemsChanged={change}
//                         viewabilityConfig={{ viewAreaCoveragePercentThreshold: 50 }}
//                         showsHorizontalScrollIndicator={false}

//                         renderItem={({ item, index }) => (
//                             <>
//                                 <TouchableOpacity onPress={() => {
//                                     const modifiedArray = images.map((url) => {

//                                         return { url: url };
//                                     });
//                                     //   console.log(modifiedArray)
//                                     setImage_index(index)
//                                     setImage_modal_src(modifiedArray)
//                                     setImage_modal(true)
//                                 }}>


//                                     <ImageBackground

//                                         source={{ uri: item }}
//                                         style={{ width, height: RFValue(250), resizeMode: 'cover' }}
//                                     />
//                                 </TouchableOpacity>

//                             </>
//                         )}
//                         keyExtractor={(_, index) => index.toString()}
//                     />
//                     <View style={{ position: 'absolute', bottom: RFValue(15), right: RFValue(5), paddingHorizontal: RFValue(8), paddingVertical: RFValue(2), backgroundColor: "rgba(0,0,0,0.5)", borderRadius: RFValue(5), alignItems: "center", justifyContent: "center" }}>
//                         <Text style={{ ...FONTS.body5, fontFamily: FONTS.fontFamilyMedium, color: COLORS.white, letterSpacing: 1.5 }}>{active + 1}/{images.length}</Text>
//                     </View>
//                 </View>

//                 <View style={{
//                     paddingHorizontal: SIZES.radius
//                 }}>

//                     {/**TitleView */}

//                     <View style={{
//                         paddingHorizontal: SIZES.radius
//                     }}>
//                         <Text style={{
//                             ...FONTS.body2,
//                             color: COLORS.third,
//                             fontFamily: FONTS.fontFamilyMedium
//                         }}>
//                             Autarkes Tiny Home In Nature
//                         </Text>
//                         <Text style={{
//                             ...FONTS.body4,
//                             color: COLORS.third,
//                             fontFamily: FONTS.fontFamilyMedium,
//                             marginTop: SIZES.base
//                         }}>
//                             Tiny home in Oberndorf, Austria
//                         </Text>
//                         <Text style={{
//                             ...FONTS.body5,
//                             color: COLORS.third,
//                             fontFamily: FONTS.fontFamilyRegular,
//                             // marginTop: SIZES.base
//                         }}>
//                             3 guests. 1 bedroom. 1 bed. 1 bath
//                         </Text>
//                     </View>



//                     <TouchableOpacity style={{
//                         width: "100%",
//                         flexDirection: "row",
//                         alignItems: "center",
//                         justifyContent: "space-around", padding: SIZES.radius,
//                         borderWidth: 1,
//                         borderRadius: SIZES.radius,
//                         marginTop: SIZES.margin
//                     }}>
//                         <Text
//                             style={{
//                                 ...FONTS.body5,
//                                 textAlign: "center",
//                                 color: COLORS.third,
//                                 fontFamily: FONTS.fontFamilyMedium
//                             }}
//                         >
//                             {'4.99\n⭐⭐⭐⭐⭐'}
//                         </Text>

//                         <FastImage
//                             source={icons.satisfaction}
//                             style={{
//                                 width: RFValue(100),
//                                 height: RFValue(40),

//                             }}
//                             resizeMode='contain'
//                         />
//                         <Text
//                             style={{
//                                 ...FONTS.body5,
//                                 textAlign: "center",
//                                 color: COLORS.third,
//                                 fontFamily: FONTS.fontFamilyMedium,
//                                 // textDecorationLine: "underline"
//                             }}
//                         >
//                             {'90\nReviews'}
//                         </Text>

//                     </TouchableOpacity>






//                 </View>

//                 <Modal
//                     // presentationStyle="fullScreen"
//                     visible={image_modal}
//                     onRequestClose={() => {
//                         setImage_modal(false)
//                     }}
//                     animationType="slide"
//                     statusBarTranslucent={true}
//                     style={{ flex: 1 }}
//                 >

//                     <ImageViewer renderIndicator={() => <Text style={{ color: "white" }}></Text>} index={image_index} enableSwipeDown onSwipeDown={() => { setImage_modal(false) }} imageUrls={image_modal_src} />
//                 </Modal>
//             </ScrollView>

//             <View style={{
//                 backgroundColor: COLORS.white2,
//                 borderTopWidth: 1,
//                 borderColor: COLORS.gray3,
//                 bottom: 0,
//                 elevation: 2,
//                 flexDirection: "row",
//                 justifyContent: "space-around",
//                 alignItems: "center"
//             }}>
//                 <View>
//                     <Text style={{
//                         ...FONTS.body4,
//                         color: COLORS.third

//                     }}>
//                         <Text style={{
//                             fontFamily: FONTS.fontFamilyBold

//                         }}>
//                             $200
//                         </Text> /Night
//                     </Text>

//                     <Text style={{
//                         ...FONTS.body5,
//                         color: COLORS.third,
//                         fontFamily: FONTS.fontFamilySemiBold,
//                         textDecorationLine: "underline"

//                     }}>
//                         May 8 - 13
//                     </Text>
//                 </View>

//                 <TextButton
//                     onPress={() => {
//                         // setModalVisible(false)
//                         navigation.navigate("BookingDetails")
//                     }}
//                     buttonContainerStyle={{
//                         marginVertical: SIZES.margin,
//                         paddingVertical: SIZES.base * 2,
//                         width: "35%",
//                         alignSelf: "center",
//                         borderRadius: SIZES.radius
//                     }}
//                     label={"Book Now"}
//                 />

//             </View>
//         </View>
//     );
// }


import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

const images = {
    man:
        'https://images.pexels.com/photos/3147528/pexels-photo-3147528.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    women:
        'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    kids:
        'https://images.pexels.com/photos/5080167/pexels-photo-5080167.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    skullcandy:
        'https://images.pexels.com/photos/5602879/pexels-photo-5602879.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    help:
        'https://images.pexels.com/photos/2552130/pexels-photo-2552130.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
};
const data = Object.keys(images).map((i) => ({
    key: i,
    title: i,
    image: images[i],
}));

export default function RoomsDetails() {
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <Text style={{ fontSize: 42 }}>❤️</Text>
            <Text
                style={{
                    fontFamily: 'Menlo',
                    marginTop: 10,
                    fontWeight: '800',
                    fontSize: 16,
                }}
            >
                Expo
            </Text>
            <Text style={{ fontFamily: 'Menlo', fontStyle: 'italic', fontSize: 12 }}>
                (expo.io)
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});