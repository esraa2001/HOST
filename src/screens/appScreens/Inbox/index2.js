import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    TouchableOpacity,
} from 'react-native';


import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import database from '@react-native-firebase/database';
import { useDispatch, useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';

import FadeLoad from './Component/FadeLoad';
import AnimatedLottieView from 'lottie-react-native';
// import { NoData } from 'assets/lotties';
// import { useTranslation } from 'react-i18next';
import { Logo3 } from 'assets/Images';
import { COLORS } from './Constant';
import { lotties } from '../../../constants';
// import { t } from 'i18next';

const Inbox = ({ navigation }) => {
    // const {userData} = useSelector(state => state.User);
    // const dispatch = useDispatch();
    const { t } = useTranslation()
    // const userData = useAppSelector(selectUserData)
    const [listData, setListData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // getChatList();
        // registerUser()
    }, []);

    // function getChatList() {
    //     database()
    //         .ref('groups/')
    //         .on('value', snapshot => {
    //             if (snapshot.val() != null) {
    //                 setListData(Object.values(snapshot.val()));
    //                 setLoading(false)
    //             } else {
    //                 setLoading(false)
    //                 setListData([])
    //             }
    //         });

    // }

    // async function registerUser() {

    //     let data = {
    //         id: userData.student_id,
    //         name: userData.student_name,
    //         // password: pass,
    //         email: userData.student_email,
    //         // avatar,
    //         // score: 0,
    //     };
    //     console.log(data)

    //     database()
    //         .ref('users/')
    //         .orderByChild('email')
    //         .equalTo(userData.student_email)
    //         .once('value')
    //         .then(async snapshot => {
    //             if (snapshot.val() == null) {
    //                 database()
    //                     .ref('/users/' + data.id)
    //                     .set(data)
    //                 // .then(res => {

    //                 // });
    //                 return false;
    //             } else {
    //                 // alert('Invalid Email');
    //                 return;
    //             }
    //         })
    //         .catch(e => {
    //             console.log(e);
    //         });
    // }

    function renderHeader() {
        return (
            <LinearGradient
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: 90,
                    backgroundColor: COLORS.primary,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    paddingHorizontal: 20,
                    marginBottom: 30
                }}

                colors={[COLORS.secondery, COLORS.primary]}>
                <TouchableOpacity activeOpacity={.8} onPress={() => goBack()}>
                    <View></View>
                </TouchableOpacity>
                <Text style={{
                    fontSize: 22,
                    fontWeight: '700',
                    color: COLORS.white
                }}>{("My Chats")}</Text>
                {/* <Bell fill={'#fff'} /> */}
                <View></View>
            </LinearGradient>

        );
    }
    const renderItem = item => {
        return (
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('SingleChat', {
                        receiverData: item,
                    });
                }}
                style={{
                    padding: 15,
                    marginVertical: 10,
                    backgroundColor: item.roomId == "g0" ? COLORS.third : COLORS.light,
                    width: '90%',
                    alignSelf: 'center',
                    borderRadius: 8,
                    alignItems: 'center',
                    minHeight: 60,
                    justifyContent: item.roomId == "g0" ? "space-between" : 'center',


                }}>
                {item.roomId == "g0" &&
                    <View>
                        <Image style={{ width: 90, height: 50 }} source={Logo3} tintColor={COLORS.primary} />
                    </View>
                }
                <View>

                    <Text style={{ ...FONTS.h3, color: item.roomId == "g0" ? COLORS.white : COLORS.black, textAlign: "center" }}>{item.groupName}</Text>
                    {item.roomId != "g0" && <Text numberOfLines={2} style={{ ...FONTS.h4, textAlign: "center" }}>{item.lastMsg}</Text>}
                </View>
            </TouchableOpacity>
        );
    };

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white,
            }}>
            {renderHeader()}
            {loading ? <FadeLoad /> :
                <FlatList
                    contentContainerStyle={{
                        paddingVertical: 8,
                    }}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    data={listData}
                    renderItem={({ item }) => renderItem(item)}
                    ListEmptyComponent={() => {
                        return (
                            <>
                                <AnimatedLottieView
                                    autoPlay
                                    source={lotties.emptyData}
                                    style={{
                                        height: 300,
                                        width: '100%'
                                    }}
                                />
                                {/* <Text style={{
                        textAlign: 'center',
                        fontWeight: '600',
                        color: colors.primary,
                        fontSize: 20
                    }}>No Chapter</Text> */}
                            </>
                        )
                    }}
                />
            }

        </View>
    );
};

const styles = StyleSheet.create({
    but: {
        position: 'absolute',
        bottom: 15,
        right: 15,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: COLORS.green,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
    },
});

export default Inbox;
