import AnimatedLottieView from 'lottie-react-native';
import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Modal,
  Animated,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {useDispatch, useSelector} from 'react-redux';
import {TextButton} from '../components';
import {COLORS, FONTS, icons, images, lotties, SIZES} from '../constants';
import {modifyIsFirst} from '../redux/reducers/UserReducer';
import Auth from '../Services';
import FastImage from 'react-native-fast-image';
import utils from '../utils';
import {POST} from '../Helpers/ApiHelper';
// import Video from 'react-native-af-video-player-updated';
const OnBoarding = () => {
  const {network} = useSelector(s => s.UserReducer);
  const [loadingPage, setLoadingPage] = useState(false);
  const [showVidModal, setShowVidModal] = useState(false);
  const [videoLink, setVideoLink] = useState('');
  const [canGo, setCanGo] = useState(false);

  const onboarding_screens = [
    {
      id: 1,
      image: images.intro,
      text: 'We provide the best surgical courses & great mentors!',
    },
    {
      id: 2,
      image: images.intro,
      text: 'Learn anytime and anywhere easily and conveniently',
    },
    {
      id: 3,
      image: images.intro,
      text: 'Let’s improve your knowledge together right now!',
    },
  ];
  async function _checkCod() {
    setLoadingPage(true);
    // let res = await POST('auth/check_intro_vid.php');
    // if (res?.link != '') {
    //   setVideoLink(res?.link);
    //   setShowVidModal(true);
    // } else {
    dispatch(modifyIsFirst(false));
    await Auth.setFirst('1');
    // }

    setLoadingPage(false);
  }
  const dispatch = useDispatch();
  const flatListRef = useRef();
  const onViewChangeRef = React.useRef(({viewableItems, changes}) => {
    setCurrentIndex(viewableItems[0].index);
  });
  const scrollX = useRef(new Animated.Value(0)).current;
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const Dots = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width);
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {onboarding_screens.map((item, index) => {
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [
              COLORS.primary + '20',
              COLORS.primary,
              COLORS.primary + '20',
            ],
            extrapolate: 'clamp',
          });
          const dotWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [10, 30, 10],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={`Dots-${index}`}
              style={{
                borderRadius: 5,
                marginHorizontal: 5,
                width: dotWidth,
                height: 10,
                backgroundColor: dotColor,
              }}
            />
          );
        })}
      </View>
    );
  };

  function renderEllipse() {
    return (
      <View>
        <FastImage
          source={icons.ellipse}
          style={{
            width: RFValue(20),
            height: RFValue(20),
            position: 'absolute',
            top: RFValue(200),
            left: RFValue(16),
          }}
        />
        <FastImage
          source={icons.ellipse}
          style={{
            width: RFValue(8),
            height: RFValue(8),
            position: 'absolute',
            top: RFValue(150),
            left: RFValue(40),
          }}
        />
        <FastImage
          source={icons.ellipse}
          style={{
            width: RFValue(20),
            height: RFValue(20),
            position: 'absolute',
            top: RFValue(110),
            left: RFValue(80),
          }}
        />
        <FastImage
          source={icons.ellipse}
          style={{
            width: RFValue(16),
            height: RFValue(16),
            position: 'absolute',
            top: RFValue(60),
            left: RFValue(40),
          }}
        />
        <FastImage
          source={icons.ellipse}
          style={{
            width: RFValue(30),
            height: RFValue(30),
            position: 'absolute',
            top: RFValue(50),
            left: RFValue(150),
          }}
        />
        <FastImage
          source={icons.ellipse}
          style={{
            width: RFValue(14),
            height: RFValue(14),
            position: 'absolute',
            top: RFValue(60),
            right: RFValue(100),
          }}
        />
        <FastImage
          source={icons.ellipse}
          style={{
            width: RFValue(30),
            height: RFValue(30),
            position: 'absolute',
            top: RFValue(50),
            right: RFValue(40),
          }}
        />
        <FastImage
          source={icons.ellipse}
          style={{
            width: RFValue(8),
            height: RFValue(8),
            position: 'absolute',
            top: RFValue(120),
            right: RFValue(45),
          }}
        />

        <FastImage
          source={icons.ellipse}
          style={{
            width: RFValue(16),
            height: RFValue(16),
            position: 'absolute',
            top: RFValue(160),
            right: RFValue(20),
          }}
        />
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <View
        style={{
          flex: 1,
          backgroundColor: COLORS.primaryLite,
        }}>
        {renderEllipse()}
        <FastImage
          source={images.intro}
          style={{
            width: RFValue(250),
            height: RFValue(250),
            alignSelf: 'center',
            marginTop: RFValue(90),
          }}
          resizeMode="contain"
        />

        <Animated.FlatList
          ref={flatListRef}
          horizontal
          pagingEnabled
          data={onboarding_screens}
          scrollEventThrottle={16}
          snapToAlignment="center"
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
              useNativeDriver: false,
            },
          )}
          onViewableItemsChanged={onViewChangeRef.current}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  width: SIZES.width,
                  alignItems: 'center',
                  justifyContent: 'center',
                  //   backgroundColor: 'red',
                }}>
                <View
                  style={{
                    // flex: 1,
                    marginTop: RFValue(15),
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '70%',
                  }}>
                  <Text
                    style={{
                      ...FONTS.h2,
                      color: COLORS.black,
                      fontFamily: FONTS.fontFamilyBold,
                      textAlign: 'center',
                    }}>
                    {onboarding_screens[currentIndex].text}
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </View>
      <View
        style={{
          //   flex: 1,
          backgroundColor: COLORS.white,
          ...COLORS.shadow,
          padding: SIZES.padding * 2,
        }}>
        <Dots />

        {currentIndex < onboarding_screens.length - 1 && (
          <View
            style={{
              paddingHorizontal: SIZES.padding,
              marginVertical: SIZES.padding,
              //   alignItems: 'center',
              //   justifyContent: 'center',
            }}>
            <TextButton
              label={'Next'}
              labelStyle={{
                color: COLORS.white,
                ...FONTS.h3,
                fontFamily: FONTS.fontFamilyBold,
              }}
              buttonContainerStyle={{
                height: RFValue(45),
                borderRadius: SIZES.padding * 2,
              }}
              onPress={() => {
                flatListRef?.current?.scrollToIndex({
                  index: currentIndex + 1,
                  animated: true,
                });
              }}
            />
          </View>
        )}

        {currentIndex == 2 && (
          <View
            style={{
              paddingHorizontal: SIZES.padding,
              marginVertical: SIZES.padding,
            }}>
            <TextButton
              loading={loadingPage}
              disabled={loadingPage}
              label="Let's Start"
              labelStyle={{
                ...FONTS.h3,
                color: COLORS.white,
                fontFamily: FONTS.fontFamilyMedium,
              }}
              buttonContainerStyle={{
                height: RFValue(45),
                borderRadius: SIZES.padding * 2,
              }}
              onPress={async () => {
                if (network) {
                  _checkCod();
                } else {
                  utils.toastAlert(
                    'info',
                    'Please check your network connection',
                  );
                }
              }}
            />
          </View>
        )}
      </View>

      {/* <Modal visible={showVidModal}>
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.white,
          }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Video
              url={videoLink}
              style={{
                width: '100%',
                // height: SIZES.height * 0.6,
                // marginTop: 15,
              }}
              title={'Dr-Matary'}
              logo={images.mainLogo}
              // placeholder={images.splashLogo}

              lockRatio={16 / 9}
              rotateToFullScreen={true}
              lockPortraitOnFsExit={true}
              hideFull
              scrollBounce={true}
              onEnd={async () => {
                // this.props.navigation.navigate("Enter")
                setCanGo(true);
              }}
            />
            <TouchableOpacity
              disabled={canGo ? false : true}
              onPress={async () => {
                dispatch(modifyIsFirst(false));
                await Auth.setFirst('1');
              }}
              style={{
                // width: 70,
                // height: 40,
                backgroundColor: COLORS.primary,
                alignSelf: 'center',
                marginTop: 20,
                // padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 20,
                paddingVertical: 10,

                // marginLeft: 15,

                borderRadius: 7,
                opacity: canGo ? 1 : 0.6,
              }}>
              <Text
                style={{
                  ...FONTS.h3,
                  fontFamily: FONTS.fontFamilyBold,
                  color: COLORS.white,
                }}>
                NEXT
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                ...FONTS.h3,
                color: COLORS.secondary,
                textAlign: 'center',
                marginTop: 15,
              }}>
              (You cannot skip the video until you have finished watching it
              completely)
            </Text>
          </ScrollView>
        </View>
      </Modal> */}
    </View>
  );
};

export default OnBoarding;
