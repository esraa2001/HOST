import React, { useState, useEffect, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    PermissionsAndroid,
    Animated,
    Platform,
    TouchableOpacity,
    FlatList,
    ScrollView,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import FastImage from 'react-native-fast-image';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { COLORS, FONTS, icons, images, SIZES } from '../../../constants';
// import Geolocation from 'react-native-geolocation-service';
import Geolocation from '@react-native-community/geolocation';

import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from 'react-native-paper';
import utils from '../../../utils';
import lodash from 'lodash/lodash';

// import { GET } from '../../../Helpers/ApiHelper';
// import CategoryLoader from '../Categories/CategoryLoader';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { TextInput } from 'react-native-gesture-handler';
const CARD_HEIGHT = RFValue(140);
const CARD_WIDTH = SIZES.width * 0.8;
const SPACING_FOR_CARD_INSET = SIZES.width * 0.1 - 10;
const MainMap = ({ navigation }) => {
    const dispatch = useDispatch();
    const [builds, setBuilds] = useState([]);
    const [loading, setLoading] = useState(true);
    // Ref
    const mapView = useRef();
    const _scrollView = useRef();
    const [searchTxt, setSearchTxt] = useState('');
    let mapIndex = 0;
    let mapAnimation = new Animated.Value(0);

    const interpolations = builds?.map((maker, index) => {
        const inputRange = [
            (index - 1) * CARD_WIDTH,
            index * CARD_WIDTH,
            (index + 1) * CARD_WIDTH,
        ];
        const scale = mapAnimation.interpolate({
            inputRange,
            outputRange: [1, 1.5, 1],
            extrapolate: 'clamp',
        });
        return { scale };
    });

    useEffect(() => {
        mapAnimation.addListener(({ value }) => {
            let index = Math.floor(value / CARD_WIDTH + 0.3);
            if (index >= builds.length) {
                index = builds.length - 1;
            }
            if (index <= 0) {
                index = 0;
            }
            clearTimeout(resionTimeout);
            const resionTimeout = setTimeout(() => {
                if (mapIndex !== index) {
                    mapIndex = index;
                    let arr = [...builds];

                    const { latitude, longitude } = arr[index];
                    mapView.current.animateToRegion(
                        {
                            latitude: Number(latitude),
                            longitude: Number(longitude),

                            latitudeDelta: 0.002,
                            longitudeDelta: 0.002,
                        },
                        350,
                    );
                }
            }, 10);
        });
    });

    useEffect(() => {
        _getData();

        _requestMapPermission();
    }, []);

    async function _searchPlace(e) {
        setSearchTxt(e);
        const formattedQuery = e.toLowerCase();
        let allData = [...builds];
        const filteredData = lodash.filter(allData, item => {
            return containsPlace(item, formattedQuery);
        });
        if (filteredData.length > 0) {
            let index = allData.findIndex(
                item => item.item_id == filteredData[0].item_id,
            );
            let x = index * CARD_WIDTH + index * 20;
            if (Platform.OS === 'ios') {
                x = x - SPACING_FOR_CARD_INSET;
            }

            _scrollView.current.scrollTo({ x: x, y: 0, animated: true });
            mapView.current.animateToRegion(
                {
                    latitude: Number(filteredData[0].latitude),
                    longitude: Number(filteredData[0].longitude),

                    latitudeDelta: 0.002,
                    longitudeDelta: 0.002,
                },
                350,
            );
        } else {
            utils.toastAlert('info', 'There is no place by this name or description');
        }
    }

    const containsPlace = (item, query) => {
        if (
            item?.item_name?.toLowerCase().includes(query) ||
            item?.item_describtion?.toLowerCase().includes(query)
        ) {
            return true;
        }

        return false;
    };
    async function _getData() {
        // let res = await GET('user/home/select_all_builders.php');
        if (true) {
            let arr = [
                {
                    item_id: '2',
                    category_id: '1',
                    company_id: '1',
                    item_name: 'Royal Hotel',
                    item_describtion:
                        'دار مساحه 250 متر\n\nدرجه اولى للبيع الواجهه ١٢ متر - نزال ٢٠ متر\n\n يحتوي على ٥ نوم وصاله وهول \n\nوملحقات ارضيه مرمر واجهه مرمر \n\nللاستفسار ٠٠٩٦٤٠٧٧٠٥٩٠٠٧٧٠',
                    item_type: 'sale',
                    rating: 4.5,
                    reviews: 300,
                    price_per_night: 15,

                    item_price: '300 مليون دينار',
                    latitude: '33.311686',
                    longitude: '44.355905',
                    category_name: 'مباني سكنية في بغداد',
                    company_name: 'مكتب الفرقان للعقارات',
                    company_logo:
                        'https://camp-coding.tech/furqan_office/images/main_logo_sin.png',
                    company_phone: '+9647705900770',
                    company_gmail: 'vim@gmail.com',
                    builder_option: {
                        option_id: '2',
                        num_room: '5',
                        bathroom_num: '2',
                        parking: '2',
                        size: '240',
                        builder_id: '2',
                    },
                    builder_image: [
                        {
                            item_image_id: '2',
                            builder_id: '2',
                            image_url:
                                'https://camp-coding.tech/furqan_office/user/home/image/bulll.jpg',
                        },
                        {
                            item_image_id: '59',
                            builder_id: '2',
                            image_url:
                                'https://camp-coding.tech/furqan_office/user/home/image/bul1.jpeg',
                        },
                    ],
                    amenities: [
                        { option: 'مدفأه', builder_id: '2' },
                        { option: 'واجهه امامية', builder_id: '2' },
                        { option: 'شرفة', builder_id: '2' },
                    ],
                    floor_plan: [
                        {
                            plan_id: '3',
                            plan_image:
                                'https://nafezly-production.fra1.digitaloceanspaces.com/uploads/portfolios/8735_5fd9f9badd34f-1608120762.jpg',
                            builder_id: '2',
                        },
                    ],
                    facts_feature: [
                        {
                            feature_id: '3',
                            feature: 'الصاله',
                            description: '15 x 12',
                            builder_id: '2',
                        },
                        {
                            feature_id: '4',
                            feature: 'المطبخ',
                            description: '5 x 6',
                            builder_id: '2',
                        },
                        {
                            feature_id: '5',
                            feature: 'غرفة نوم',
                            description: '6 x 6',
                            builder_id: '2',
                        },
                        {
                            feature_id: '6',
                            feature: 'الجراج',
                            description: '6 x 20',
                            builder_id: '2',
                        },
                    ],
                },
                {
                    item_id: '3',
                    category_id: '1',
                    company_id: '1',
                    item_name: 'Blue Yoga Hotel',
                    item_describtion:
                        'دار مساحه 600 متر\n\nدرجه اولى للبيع الواجهه ١٢ متر - نزال ٢٠ متر\n\n يحتوي على ٥ نوم وصاله وهول \n\nوملحقات ارضيه مرمر واجهه مرمر \n\nللاستفسار ٠٠٩٦٤٠٧٧٠٥٩٠٠٧٧٠',
                    item_type: 'sale',
                    rating: 3.2,
                    reviews: 140,
                    price_per_night: 9,
                    item_price: '300 مليون دينار',
                    latitude: '33.311290',
                    longitude: '44.355902',
                    category_name: 'مباني سكنية في كرك',
                    company_name: 'مكتب الفرقان للعقارات',
                    company_logo:
                        'https://camp-coding.tech/furqan_office/images/main_logo_sin.png',
                    company_phone: '+9647705900770',
                    company_gmail: 'vim@gmail.com',
                    builder_option: {
                        option_id: '2',
                        num_room: '5',
                        bathroom_num: '2',
                        parking: '2',
                        size: '240',
                        builder_id: '2',
                    },
                    builder_image: [
                        {
                            item_image_id: '2',
                            builder_id: '2',
                            image_url:
                                'https://camp-coding.tech/furqan_office/user/home/image/bulll.jpg',
                        },
                        {
                            item_image_id: '59',
                            builder_id: '2',
                            image_url:
                                'https://camp-coding.tech/furqan_office/user/home/image/bul1.jpeg',
                        },
                    ],
                    amenities: [
                        { option: 'مدفأه', builder_id: '2' },
                        { option: 'واجهه امامية', builder_id: '2' },
                        { option: 'شرفة', builder_id: '2' },
                    ],
                    floor_plan: [
                        {
                            plan_id: '3',
                            plan_image:
                                'https://nafezly-production.fra1.digitaloceanspaces.com/uploads/portfolios/8735_5fd9f9badd34f-1608120762.jpg',
                            builder_id: '2',
                        },
                    ],
                    facts_feature: [
                        {
                            feature_id: '3',
                            feature: 'الصاله',
                            description: '15 x 12',
                            builder_id: '2',
                        },
                        {
                            feature_id: '4',
                            feature: 'المطبخ',
                            description: '5 x 6',
                            builder_id: '2',
                        },
                        {
                            feature_id: '5',
                            feature: 'غرفة نوم',
                            description: '6 x 6',
                            builder_id: '2',
                        },
                        {
                            feature_id: '6',
                            feature: 'الجراج',
                            description: '6 x 20',
                            builder_id: '2',
                        },
                    ],
                },
                {
                    item_id: '4',
                    category_id: '1',
                    company_id: '1',
                    item_name: 'Daimond Hotel',
                    item_describtion:
                        'دار مساحه 960 متر\n\nدرجه اولى للبيع الواجهه ١٢ متر - نزال ٢٠ متر\n\n يحتوي على ٥ نوم وصاله وهول \n\nوملحقات ارضيه مرمر واجهه مرمر \n\nللاستفسار ٠٠٩٦٤٠٧٧٠٥٩٠٠٧٧٠',
                    item_type: 'sale',
                    rating: 3.2,
                    reviews: 140,
                    price_per_night: 9,
                    item_price: '300 مليون دينار',
                    latitude: '33.311490',
                    longitude: '44.355602',
                    category_name: 'مباني سكنية في كرك',
                    company_name: 'مكتب الفرقان للعقارات',
                    company_logo:
                        'https://camp-coding.tech/furqan_office/images/main_logo_sin.png',
                    company_phone: '+9647705900770',
                    company_gmail: 'vim@gmail.com',
                    builder_option: {
                        option_id: '2',
                        num_room: '5',
                        bathroom_num: '2',
                        parking: '2',
                        size: '240',
                        builder_id: '2',
                    },
                    builder_image: [
                        {
                            item_image_id: '2',
                            builder_id: '2',
                            image_url:
                                'https://camp-coding.tech/furqan_office/user/home/image/bulll.jpg',
                        },
                        {
                            item_image_id: '59',
                            builder_id: '2',
                            image_url:
                                'https://camp-coding.tech/furqan_office/user/home/image/bul1.jpeg',
                        },
                    ],
                    amenities: [
                        { option: 'مدفأه', builder_id: '2' },
                        { option: 'واجهه امامية', builder_id: '2' },
                        { option: 'شرفة', builder_id: '2' },
                    ],
                    floor_plan: [
                        {
                            plan_id: '3',
                            plan_image:
                                'https://nafezly-production.fra1.digitaloceanspaces.com/uploads/portfolios/8735_5fd9f9badd34f-1608120762.jpg',
                            builder_id: '2',
                        },
                    ],
                    facts_feature: [
                        {
                            feature_id: '3',
                            feature: 'الصاله',
                            description: '15 x 12',
                            builder_id: '2',
                        },
                        {
                            feature_id: '4',
                            feature: 'المطبخ',
                            description: '5 x 6',
                            builder_id: '2',
                        },
                        {
                            feature_id: '5',
                            feature: 'غرفة نوم',
                            description: '6 x 6',
                            builder_id: '2',
                        },
                        {
                            feature_id: '6',
                            feature: 'الجراج',
                            description: '6 x 20',
                            builder_id: '2',
                        },
                    ],
                },
            ];
            setBuilds(arr);
        }
        setLoading(false);
    }

    async function _requestMapPermission() {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: 'Need Location Permission',
                message: 'Need access to your location ',
            },
        );


        if (granted) {


            Geolocation.getCurrentPosition(
                // # here

                async position => {
                    mapView.current.animateToRegion({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: 0.002,
                        longitudeDelta: 0.002,
                    });
                },
                error => {
                    console.log(error.code, error.message);
                },
                {
                    enableHighAccuracy: true,
                    timeout: 15000,
                    maximumAge: 10000,
                    // distanceFilter: 0,
                    // forceRequestLocation: true,
                },
            );
        }
    }

    function onMarkerPress(mapEventData) {
        const markerId = mapEventData._targetInst.return.key;
        let x = markerId * CARD_WIDTH + markerId * 20;
        if (Platform.OS === 'ios') {
            x = x - SPACING_FOR_CARD_INSET;
        }

        _scrollView.current.scrollTo({ x: x, y: 0, animated: true });
    }

    function renderMap() {
        return (
            <>
                <MapView
                    showsCompass
                    showsUserLocation={true}
                    showsMyLocationButton={false}
                    ref={mapView}
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.container}>
                    {builds?.map((marker, index) => {
                        const scaleStyle = {
                            transform: [
                                {
                                    scale: interpolations[index].scale,
                                },
                            ],
                        };
                        return (
                            <Marker
                                key={index}
                                coordinate={{
                                    latitude: Number(marker?.latitude),
                                    longitude: Number(marker?.longitude),
                                }}
                                onPress={e => onMarkerPress(e)}>
                                <Animated.View style={[styles.markerWrap, scaleStyle]}>
                                    <Animated.Image source={icons.pin} style={[styles.marker]} />
                                </Animated.View>
                            </Marker>
                        );
                    })}
                </MapView>
                <View
                    style={{
                        ...styles.searchBox,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                    <TextInput
                        value={searchTxt}
                        onChangeText={e => _searchPlace(e)}
                        placeholder="Search..."
                        style={{
                            flex: 1,
                        }}
                    />

                    <IconButton
                        icon={() => {
                            return (
                                <FastImage
                                    source={icons.search}
                                    style={{
                                        width: 25,
                                        height: 25,
                                    }}
                                />
                            );
                        }}
                        size={8}
                    // onPress={() => {
                    //   _requestMapPermission();
                    // }}
                    />
                    {/* <IconButton
            icon={() => {
              return (
                <FastImage
                  source={icons.target}
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
              );
            }}
            size={8}
            onPress={() => {
              _requestMapPermission();
            }}
          /> */}
                </View>
            </>
        );
    }

    function renderPlaces() {
        return (
            <Animated.ScrollView
                ref={_scrollView}
                horizontal
                pagingEnabled
                scrollEventThrottle={16}
                showsHorizontalScrollIndicator={false}
                snapToInterval={CARD_WIDTH + RFValue(20)}
                snapToAlignment="center"
                style={styles.scrollView}
                contentInset={{
                    top: 0,
                    left: SPACING_FOR_CARD_INSET,
                    bottom: 0,
                    right: SPACING_FOR_CARD_INSET,
                }}
                contentContainerStyle={{
                    paddingHorizontal:
                        Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0,
                }}
                onScroll={Animated.event(
                    [
                        {
                            nativeEvent: {
                                contentOffset: {
                                    x: mapAnimation,
                                },
                            },
                        },
                    ],
                    {
                        useNativeDriver: true,
                    },
                )}>
                <FlatList
                    data={builds}
                    horizontal
                    keyExtractor={(_, index) => ` st#-${index}`}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item, index }) => (
                        <View style={{ ...styles.card, flexDirection: 'row' }} key={index}>
                            <View style={styles.textContent}>
                                <Text
                                    numberOfLines={1}
                                    style={{
                                        ...FONTS.h3,
                                        color: COLORS.black,
                                    }}>
                                    {item?.item_name}
                                </Text>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'space-around',
                                    }}>
                                    <Text
                                        style={{
                                            ...FONTS.h5,
                                            color: COLORS.gray,
                                        }}>
                                        Reviews ({item.reviews})
                                    </Text>
                                    <AntDesign
                                        name="star"
                                        size={RFValue(20)}
                                        color={COLORS.gold}
                                    />
                                    <Text
                                        style={{
                                            ...FONTS.h3,
                                            color: COLORS.black,
                                        }}>
                                        {item.rating}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flex: 1,
                                        // alignItems: 'flex-start',
                                    }}>
                                    <Text
                                        numberOfLines={1}
                                        style={{
                                            ...FONTS.h3,
                                            color: COLORS.primary,
                                        }}>
                                        ${item?.price_per_night}/Night
                                    </Text>
                                </View>

                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    onPress={() => {
                                        // navigation.navigate('BuildingUnitDetails', {
                                        //   psData: item,
                                        // });
                                    }}
                                    style={{
                                        width: '100%',
                                        padding: SIZES.base,
                                        borderRadius: SIZES.radius,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: COLORS.primary,
                                    }}>
                                    <Text
                                        style={{
                                            ...FONTS.h3,
                                            color: COLORS.white,
                                        }}>
                                        Book Now
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <FastImage
                                source={{ uri: item?.builder_image[0]?.image_url }}
                                style={styles.cardImage}
                                resizeMode="stretch"
                            />
                        </View>
                    )}
                />
            </Animated.ScrollView>
        );
    }
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white,
            }}>
            {renderMap()}
            {loading ? (
                <ScrollView
                    horizontal
                    pagingEnabled
                    scrollEventThrottle={1}
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={CARD_WIDTH + 20}
                    snapToAlignment="center"
                    style={styles.scrollView}
                    contentInset={{
                        top: 0,
                        left: SPACING_FOR_CARD_INSET,
                        bottom: 0,
                        right: SPACING_FOR_CARD_INSET,
                    }}
                    contentContainerStyle={{
                        paddingHorizontal:
                            Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0,
                    }}>
                    {/* <FlatList
                        horizontal
                        keyExtractor={item => `wcp22#-${item}`}
                        data={['0', '1', '2', '3', '4', '5', '6', '7']}
                        renderItem={() => <CategoryLoader />}
                        showsVerticalScrollIndicator={false}
                    /> */}
                </ScrollView>
            ) : (
                builds && renderPlaces()
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    markerWrap: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
    },
    searchBox: {
        position: 'absolute',
        marginTop: Platform.OS === 'ios' ? 40 : 20,
        flexDirection: 'row',
        backgroundColor: COLORS.white,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 5,
        padding: 10,
        shadowColor: '#ccc',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
    },
    chipsScrollView: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 90 : 80,
        paddingHorizontal: 10,
    },
    chipsIcon: {
        marginRight: 5,
    },
    marker: {
        width: 30,
        height: 30,
    },
    button: {
        alignSelf: 'center',
        marginTop: 5,
    },
    signIn: {
        width: '100%',
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
    },
    scrollView: {
        position: 'absolute',
        bottom: RFValue(60),
        left: 0,
        right: 0,
        paddingVertical: 10,
    },
    card: {
        elevation: 2,
        backgroundColor: COLORS.white,
        borderRadius: 8,
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffcardImageset: { x: 2, y: -2 },
        minHeight: CARD_HEIGHT,
        width: CARD_WIDTH,
        overflow: 'hidden',
        marginBottom: 4,
    },
    cardImage: {
        flex: 1.5,
        width: '100%',
        height: '100%',
        alignSelf: 'center',
    },
    textContent: {
        flex: 2,
        padding: 10,
    },
});
export default MainMap;
