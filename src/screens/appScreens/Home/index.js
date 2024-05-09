// Home.js


import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { COLORS, SIZES, FONTS, icons } from '../../../constants';
import Header from './components/Header';
import { RFValue } from 'react-native-responsive-fontsize';


import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const DATA = [
    { id: '1', title: 'Hotel 1', image: 'https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill', price: '$100', rating: '4.5' },
    { id: '2', title: 'Hotel 2', image: 'https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill', price: '$200', rating: '4.0' },
    { id: '3', title: 'Hotel 3', image: 'https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill', price: '$150', rating: '4.7' },
    { id: '4', title: 'Hotel 4', image: 'https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill', price: '$180', rating: '4.3' },
    { id: '4', title: 'Hotel 4', image: 'https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill', price: '$180', rating: '4.3' },
    { id: '4', title: 'Hotel 4', image: 'https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill', price: '$180', rating: '4.3' },
    { id: '4', title: 'Hotel 4', image: 'https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill', price: '$180', rating: '4.3' },
];
import Modal from "react-native-modal";
import { Calendar, DefaultTheme } from 'react-native-calendars';
import { TextButton } from '../../../components';


const Home = ({ navigation }) => {
    const Item = ({ title, image, price, rating }) => (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate("RoomsDetails")
            }}
            style={styles.item}>

            <Image source={{ uri: image }} style={styles.image} />
            <View style={{ padding: RFValue(10) }}>
                <Text style={styles.hotelName}>Blue Yoga Hotel, Bali</Text>
                <Text style={styles.address}><SimpleLineIcons name={"location-pin"} /> Legian Nort St, Kuta, Bali</Text>
                <View>
                    <Text style={{
                        ...FONTS.body5,
                        color: COLORS.gray,
                        marginTop: RFValue(2)
                    }}>Start From</Text>
                    <View style={{
                        flexDirection: "row",
                        alignItems: "center", justifyContent: "space-between",
                        width: "100%",
                        flexWrap: "wrap"
                    }}>
                        <Text style={styles.price}> <Text style={{ ...FONTS.body5, fontFamily: FONTS.fontFamilyBold, color: COLORS.primary }}>{price}</Text> / Night</Text>
                        <Text style={styles.rating}>4.5 ★</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={{
                position: "absolute",
                top: RFValue(5),
                right: RFValue(5),
                backgroundColor: COLORS.white,
                padding: RFValue(3),
                borderRadius: SIZES.radius
            }}>
                <Image source={icons.love} style={{
                    width: RFValue(20),
                    height: RFValue(20),
                    tintColor: "#ff1100"
                }} />

            </TouchableOpacity>
        </TouchableOpacity>


    );
    const categories = ['Hotels', 'Motels', 'Resort', 'Guest House', "kkkkk"];

    const renderItem = ({ item }) => (
        <Item title={item.title} image={item.image} price={item.price} rating={item.rating} />
    );
    const [selectedCategory, setSelectedCategory] = useState('Hotels');

    const filteredData = DATA.filter(item => item.category === selectedCategory);


    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalAdultVisible, setModalAdultVisible] = useState(false);



    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [markedDates, setMarkedDates] = useState({});

    const onDayPress = (day) => {
        if (startDate === null || (startDate !== null && endDate !== null)) {
            setStartDate(day.dateString);
            setEndDate(null);
            setMarkedDates({ [day.dateString]: { selected: true, startingDay: true, color: 'green' } });
        } else if (startDate !== null && endDate === null) {
            let dates = getDatesBetween(new Date(startDate), new Date(day.dateString));
            let newMarkedDates = {};
            dates.forEach((date) => {
                newMarkedDates[date] = { selected: true, color: 'green' };
            });
            newMarkedDates[startDate] = { ...newMarkedDates[startDate], startingDay: true };
            newMarkedDates[day.dateString] = { ...newMarkedDates[day.dateString], endingDay: true };
            setEndDate(day.dateString);
            setMarkedDates(newMarkedDates);
        }
    };

    const getDatesBetween = (startDate, endDate) => {
        let dates = [];
        let currentDate = startDate;
        while (currentDate <= endDate) {
            dates.push(currentDate.toISOString().split('T')[0]);
            currentDate.setDate(currentDate.getDate() + 1);
        }
        return dates;
    };

    const today = new Date();
    const nextYear = new Date();
    nextYear.setFullYear(today.getFullYear() + 1);




    const [count, setCount] = useState({ number: 0, weight: 0, floor: 0 });
    const [toggle, setToggle] = useState(false);

    const increment = (key) => {
        setCount({ ...count, [key]: count[key] + 1 });
    };

    const decrement = (key) => {
        if (count[key] > 0) {
            setCount({ ...count, [key]: count[key] - 1 });
        }
    };

    return (
        <View style={{ ...styles.container }}>
            <Header setDatesVis={setModalVisible} navigation={() => {
                // Alert.alert("hhh")
                navigation.navigate("SearchPage")
            }} navigationProfile={() => {
                // Alert.alert("hhh")
                navigation.navigate("Profile")
            }} />
            <ScrollView contentContainerStyle={{ alignItems: "center", height: RFValue(75), marginBottom: RFValue(50) }} horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.tabContainer}>
                    {categories.map(category => (
                        <TouchableOpacity
                            key={category}
                            style={{
                                ...styles.tab, backgroundColor: selectedCategory == category ? COLORS.primary : COLORS.white,
                                borderWidth: selectedCategory == category ? 0 : 1,
                                borderColor: COLORS.gray,
                            }}
                            onPress={() => { setSelectedCategory(category) }}
                        >
                            <Text style={{ ...FONTS.body4, fontFamily: FONTS.fontFamilyRegular, color: selectedCategory == category ? COLORS.white : COLORS.gray }}>{category}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={DATA}
                renderItem={renderItem}
                contentContainerStyle={{ marginTop: SIZES.margin, paddingBottom: SIZES.padding }}
                keyExtractor={item => item.id}
                numColumns={2} // set number of columns
            />
            <Modal
                isVisible={isModalVisible}
                onSwipeComplete={() => setModalVisible(false)}
                swipeDirection="down"
                style={{
                    justifyContent: "flex-end",
                    padding: 0,
                    margin: 0,
                    // borderTopLeftRadius: 50
                }}


            >
                {/* <View style={{ flex: 1, alignItems: "flex-end" }}> */}
                <View style={{

                    backgroundColor: "#fff",
                    // alignSelf: "flex-end",
                    height: "65%",
                    width: "100%",
                    borderTopLeftRadius: SIZES.radius,
                    borderTopRightRadius: SIZES.radius

                }}>
                    <ScrollView showsVerticalScrollIndicator={false}>

                        <View style={{
                            width: "20%",
                            height: RFValue(5),
                            backgroundColor: "rgba(0,0,0,.7)",
                            alignSelf: "center",
                            marginVertical: RFValue(10),
                            borderRadius: SIZES.radius
                        }} />

                        <Text
                            style={{
                                ...FONTS.body3,
                                margin: SIZES.margin,
                                fontFamily: FONTS.fontFamilyMedium,
                                color: COLORS.black

                            }}
                        >
                            Select dates
                        </Text>




                        <Calendar
                            theme={{
                                ...DefaultTheme,
                                'stylesheet.day.basic': {
                                    selected: {
                                        backgroundColor: COLORS.primary,
                                        borderRadius: SIZES.radius, // This will make the marker square
                                        margin: 0
                                    },
                                    selectedStart: {
                                        backgroundColor: COLORS.primary,
                                        borderRadius: 50, // This will make the marker round
                                        margin: 0
                                    },

                                    selectedEnd: {
                                        backgroundColor: COLORS.primary,
                                        borderRadius: 50, // This will make the marker round
                                        margin: 0
                                    },
                                },
                            }}
                            onDayPress={onDayPress}
                            markedDates={markedDates}
                            minDate={today}
                            maxDate={nextYear}


                        />
                        <TextButton
                            onPress={() => {
                                setModalVisible(false)
                            }}
                            buttonContainerStyle={{
                                marginTop: SIZES.margin,
                                paddingVertical: SIZES.base * 1.5,
                                width: "90%",
                                alignSelf: "center",
                                borderRadius: SIZES.radius
                            }}
                            label={"SELECT"}
                        />
                    </ScrollView>
                </View>
            </Modal>

            <Modal
                isVisible={isModalAdultVisible}
                onSwipeComplete={() => setModalVisible(false)}
                swipeDirection="down"
                style={{
                    justifyContent: "flex-end",
                    padding: 0,
                    margin: 0,
                    // borderTopLeftRadius: 50
                }}


            >
                {/* <View style={{ flex: 1, alignItems: "flex-end" }}> */}
                <View style={{

                    backgroundColor: "#fff",
                    // alignSelf: "flex-end",
                    height: "50%",
                    width: "100%",
                    borderTopLeftRadius: SIZES.radius,
                    borderTopRightRadius: SIZES.radius

                }}>

                    <View style={{
                        width: "20%",
                        height: RFValue(5),
                        backgroundColor: "rgba(0,0,0,.7)",
                        alignSelf: "center",
                        marginVertical: RFValue(10),
                        borderRadius: SIZES.radius
                    }} />

                    <Text
                        style={{
                            ...FONTS.body3,
                            margin: SIZES.margin,
                            fontFamily: FONTS.fontFamilyMedium,
                            color: COLORS.black

                        }}
                    >
                        Select
                    </Text>


                    {/* Number Input Field */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Rooms</Text>
                        <View style={styles.inputRow}>
                            <TouchableOpacity onPress={() => increment('number')}>
                                <FontAwesome5 name='plus' color={COLORS.third} />
                            </TouchableOpacity>
                            <Text style={styles.input}>{count.number}</Text>
                            <TouchableOpacity onPress={() => decrement('number')}>
                                <FontAwesome5 name='minus' color={COLORS.third} />
                            </TouchableOpacity>
                        </View>

                    </View>

                    {/* Weight Input Field */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Adults</Text>
                        <View style={styles.inputRow}>
                            <TouchableOpacity onPress={() => increment('weight')}>
                                <FontAwesome5 name='plus' color={COLORS.third} />
                            </TouchableOpacity>
                            <Text style={styles.input}>{count.weight}</Text>
                            <TouchableOpacity onPress={() => decrement('weight')}>
                                <FontAwesome5 name='minus' color={COLORS.third} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Floor Input Field */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Childern</Text>
                        <View style={styles.inputRow}>
                            <TouchableOpacity onPress={() => increment('floor')}>
                                <FontAwesome5 name='plus' color={COLORS.third} />
                            </TouchableOpacity>
                            <Text style={styles.input}>{count.floor}</Text>
                            <TouchableOpacity onPress={() => decrement('floor')}>
                                <FontAwesome5 name='minus' color={COLORS.third} />
                            </TouchableOpacity>
                        </View>
                    </View>








                    <TextButton
                        onPress={() => {
                            setModalAdultVisible(false)
                        }}
                        buttonContainerStyle={{
                            marginTop: SIZES.margin,
                            paddingVertical: SIZES.base * 1.5,
                            width: "90%",
                            alignSelf: "center",
                            borderRadius: SIZES.radius
                        }}
                        label={"SELECT"}
                    />

                </View>
            </Modal>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.margin

    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        // padding: 10,
        // backgroundColor: '#eee',
    },
    tab: {
        // padding: RFValue(2),
        paddingHorizontal: RFValue(15),
        alignItems: "center",
        justifyContent: "center",
        marginRight: RFValue(15),
        borderRadius: RFValue(5),
        height: RFValue(35)

    },


    item: {
        backgroundColor: COLORS.white,
        // padding: 20,
        marginVertical: RFValue(5),
        marginHorizontal: RFValue(5),
        flex: 1,
        borderRadius: SIZES.base,
        elevation: 1
        // width: "48%"
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
    image: {
        width: '100%',
        height: RFValue(150),
        borderTopLeftRadius: SIZES.base,
        borderTopRightRadius: SIZES.base,
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
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingHorizontal: SIZES.padding
    },
    label: {

        ...FONTS.body4,

        fontFamily: FONTS.fontFamilyMedium,
        color: COLORS.third
    },
    inputRow: {
        flexDirection: 'row',
        alignItems: 'center',
        width: "40%",
        justifyContent: "space-between",
        borderWidth: 1,
        padding: SIZES.base,
        borderColor: COLORS.primary,
        borderRadius: RFValue(5)

    },
    input: {
        ...FONTS.body4,
        marginHorizontal: 10,
        fontFamily: FONTS.fontFamilyMedium,
        color: COLORS.third

    },
    toggleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    toggleOff: {
        width: 50,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'grey',
        justifyContent: 'flex-start',
        padding: 5,
    },
    toggleOn: {
        width: 50,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'green',
        justifyContent: 'flex-end',
        padding: 5,
    },
    toggleCircle: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: 'white',
    },
    button: {
        backgroundColor: 'blue',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
    },



});
export default Home;








