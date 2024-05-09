import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
    TouchableWithoutFeedback,
    Animated,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Header, ModalPopup, TextButton } from '../../../components';
import FastImage from 'react-native-fast-image';
import { COLORS, FONTS, SIZES, icons, images, lotties } from '../../../constants';
import { RFValue } from 'react-native-responsive-fontsize';
import { Rating } from 'react-native-stock-star-rating';
import { useSelector } from 'react-redux';
import { POST } from '../../../Helpers/ApiHelper';
import { FadeLoading } from 'react-native-fade-loading';
import AnimatedLottieView from 'lottie-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import utils from '../../../utils';
const Reviewers = ({ navigation, route }) => {
    // const { psData } = route.params;
    // const { userData } = useSelector(s => s.UserReducer);
    const [loadingPage, setLoadingPage] = useState(true);
    const [reviews, setReviews] = useState([]);
    const [allowWritting, setAllowWritting] = useState(false);
    const [viableAddReview, setVisableAddReview] = useState(false);
    const [reviewTxt, setReviewTxt] = useState('');
    const [starRating, setStarRating] = useState(null);
    const [loadingReq, setLoadingReq] = useState(false);
    const animatedButtonScale = new Animated.Value(1);

    const handlePressIn = () => {
        Animated.spring(animatedButtonScale, {
            toValue: 1.5,
            useNativeDriver: true,
            speed: 50,
            bounciness: 4,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(animatedButtonScale, {
            toValue: 1,
            useNativeDriver: true,
            speed: 50,
            bounciness: 4,
        }).start();
    };
    const animatedScaleStyle = {
        transform: [{ scale: animatedButtonScale }],
    };

    useEffect(() => {
        _getReviews();
    }, []);

    async function _getReviews() {
        let data_to_send = {
            course_id: 1150,
            student_id: 262,
        };

        let res = await POST(
            'home/courses/reviews/select_course_reviews.php',
            data_to_send,
        );

        if (res) {


            // setReviews(res.reviews);
            setAllowWritting(!res.have_review);
        }
        setReviews(
            [
                {
                    student_avater_url: "",
                    student_nickname: "moahmed",
                    rate_val: 5,
                    review_text: "its the best hotel"


                }
            ]
        );
        setLoadingPage(false);
    }

    // async function confirmAddigReview() {
    //   if (reviewTxt == '') {
    //     utils.toastAlert('info', 'Please write your comment');
    //     return;
    //   }
    //   if (!starRating) {
    //     utils.toastAlert('info', 'Please select a star rating');
    //     return;
    //   }

    //   setLoadingReq(true);

    //   let data_to_send = {
    //     course_id: psData?.course_id,
    //     student_id: userData?.student_id,
    //     rate_val: starRating,
    //     review_text: reviewTxt.trim(),
    //   };

    //   let res = await POST(
    //     'home/courses/reviews/insert_review.php',
    //     data_to_send,
    //   );

    //   if (res) {
    //     setAllowWritting(false);
    //     setVisableAddReview(false);
    //     utils.toastAlert('success', 'Your Review has been added successfully');
    //     _getReviews();
    //   }

    //   setLoadingReq(false);
    // }

    function renderHeader() {
        return (
            <Header
                onPress={() => {
                    navigation.goBack();
                }}
                title={'Review'}
            />
        );
    }

    function renderBody() {
        if (loadingPage) {
            return (
                <FlatList
                    data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(_, index) => `loadingNoti-${index}`}
                    contentContainerStyle={{
                        marginTop: SIZES.radius,
                        paddingHorizontal: SIZES.padding,
                        paddingBottom: SIZES.padding,
                    }}
                    renderItem={({ _, index }) => {
                        return (
                            <View>
                                <FadeLoading
                                    duration={index * 2000}
                                    style={{
                                        height: RFValue(60),
                                        marginBottom: SIZES.radius,
                                    }}
                                />
                            </View>
                        );
                    }}
                />
            );
        }
        return (
            <FlatList
                data={reviews}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    marginTop: SIZES.radius,
                    paddingHorizontal: SIZES.padding,
                    paddingBottom: SIZES.padding,
                }}
                keyExtractor={(_, index) => `reviewID-${index}`}
                ListHeaderComponent={

                    <TouchableOpacity
                        onPress={() => {
                            setVisableAddReview(true);
                        }}
                        style={{
                            borderWidth: 1,
                            borderColor: COLORS.primary,
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: SIZES.radius,
                            borderRadius: SIZES.radius,
                        }}>
                        <Ionicons
                            name="add-circle"
                            size={RFValue(30)}
                            color={COLORS.primary}
                        />
                        <Text
                            style={{
                                ...FONTS.h3,
                                color: COLORS.gray,
                            }}>
                            Add a review
                        </Text>
                    </TouchableOpacity>

                }
                renderItem={({ item, index }) => {
                    return (
                        <View
                            style={{
                                marginTop: SIZES.radius,
                                padding: SIZES.base,
                                // backgroundColor: COLORS.gray5
                                borderWidth: 1,
                                borderColor: COLORS.third,
                                borderRadius: SIZES.radius

                            }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    // backgroundColor:"red",
                                    alignItems: 'center',
                                    marginBottom: SIZES.base,
                                }}>
                                <FastImage
                                    source={item?.student_avater_url ? { uri: item?.student_avater_url } : images.mainLogo}
                                    style={{
                                        width: RFValue(35),
                                        height: RFValue(35),
                                        borderRadius: RFValue(35 / 2),
                                        marginRight: SIZES.radius,
                                    }}
                                    resizeMode="contain"
                                />
                                <View style={{ marginBottom: SIZES.margin }}>
                                    <Text
                                        style={{
                                            ...FONTS.body4,
                                            fontWeight: 'bold',
                                            color: COLORS.black,
                                            // marginBottom: SIZES.base
                                        }}>
                                        {item.student_nickname}
                                    </Text>
                                    <View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Rating
                                                stars={+item?.rate_val}
                                                maxStars={5}
                                                size={SIZES.h4}
                                                color={COLORS.primary}
                                            />
                                            <Text
                                                style={{
                                                    ...FONTS.body4,
                                                    fontSize: RFValue(10),
                                                    marginLeft: RFValue(5),
                                                    fontWeight: 'bold',
                                                    color: COLORS.black,
                                                }}>
                                                {item?.rate_val}
                                            </Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <Text
                                style={{
                                    ...FONTS.body4,
                                    textAlign: 'justify',
                                    // color:COLORS.black
                                }}>
                                {item.review_text}
                            </Text>
                        </View>
                    );
                }}
                ListEmptyComponent={
                    <View>
                        <AnimatedLottieView
                            source={lotties.emptyData}
                            loop
                            autoPlay
                            style={{
                                width: RFValue(100),
                                height: RFValue(100),
                                alignSelf: 'center',
                            }}
                            resizeMode="contain"
                        />
                        <Text
                            style={{
                                ...FONTS.h3,
                                fontFamily: FONTS.fontFamilySemiBold,
                                color: COLORS.black,
                                textAlign: 'center',
                            }}>
                            There is no Reviews Yet!
                        </Text>
                    </View>
                }
            />
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

            <ModalPopup
                visible={viableAddReview}
                onRequestClose={() => {
                    setVisableAddReview(false);
                }}>
                <View
                    style={{
                        alignItems: 'center',
                        // marginTop: SIZES.margin,
                    }}>
                    <AnimatedLottieView
                        source={lotties.reviews}
                        autoPlay
                        loop
                        style={{
                            width: RFValue(190),
                            height: RFValue(190),
                        }}
                        resizeMode="contain"
                    />
                </View>

                <TextInput
                    multiline
                    mode="outlined"
                    autoCapitalize="none"
                    label={'review'}
                    placeholder={'review'}
                    value={reviewTxt}
                    style={{
                        marginVertical: SIZES.padding,
                    }}
                    theme={{
                        colors: {
                            primary: COLORS.primary,
                            underlineColor: 'transparent',
                        },
                    }}
                    onChangeText={e => {
                        setReviewTxt(e);
                    }}
                />

                <View style={styles.stars}>
                    <TouchableWithoutFeedback
                        onPressIn={handlePressIn}
                        onPressOut={handlePressOut}
                        onPress={() => setStarRating(1)}>
                        <Animated.View style={animatedScaleStyle}>
                            <MaterialIcons
                                name={starRating >= 1 ? 'star' : 'star-border'}
                                size={32}
                                style={
                                    starRating >= 1 ? styles.starSelected : styles.starUnselected
                                }
                            />
                        </Animated.View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        onPressIn={handlePressIn}
                        onPressOut={handlePressOut}
                        onPress={() => setStarRating(2)}>
                        <Animated.View style={animatedScaleStyle}>
                            <MaterialIcons
                                name={starRating >= 2 ? 'star' : 'star-border'}
                                size={32}
                                style={
                                    starRating >= 2 ? styles.starSelected : styles.starUnselected
                                }
                            />
                        </Animated.View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        onPressIn={handlePressIn}
                        onPressOut={handlePressOut}
                        onPress={() => setStarRating(3)}>
                        <Animated.View style={animatedScaleStyle}>
                            <MaterialIcons
                                name={starRating >= 3 ? 'star' : 'star-border'}
                                size={32}
                                style={
                                    starRating >= 3 ? styles.starSelected : styles.starUnselected
                                }
                            />
                        </Animated.View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        onPressIn={handlePressIn}
                        onPressOut={handlePressOut}
                        onPress={() => setStarRating(4)}>
                        <Animated.View style={animatedScaleStyle}>
                            <MaterialIcons
                                name={starRating >= 4 ? 'star' : 'star-border'}
                                size={32}
                                style={
                                    starRating >= 4 ? styles.starSelected : styles.starUnselected
                                }
                            />
                        </Animated.View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        onPressIn={handlePressIn}
                        onPressOut={handlePressOut}
                        onPress={() => setStarRating(5)}>
                        <Animated.View style={animatedScaleStyle}>
                            <MaterialIcons
                                name={starRating >= 5 ? 'star' : 'star-border'}
                                size={32}
                                style={
                                    starRating >= 5 ? styles.starSelected : styles.starUnselected
                                }
                            />
                        </Animated.View>
                    </TouchableWithoutFeedback>
                </View>

                <TextButton
                    label={'Add'}
                    buttonContainerStyle={{
                        alignSelf: 'center',
                        width: '100%',
                        height: RFValue(40),
                        borderRadius: 50,
                        marginTop: SIZES.margin,
                    }}
                    loading={loadingReq}
                    disabled={loadingReq}
                    onPress={() => {
                        confirmAddigReview();
                    }}
                />
            </ModalPopup>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    stars: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'red',
    },
    starUnselected: {
        color: '#aaa',
    },

    starSelected: {
        color: '#ffb300',
    },
});

export default Reviewers;
