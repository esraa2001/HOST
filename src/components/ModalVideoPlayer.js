import {
  View,
  StatusBar,
  Modal,
  Text,
  Animated,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {WebView} from 'react-native-webview';
import {COLORS, FONTS, SIZES, icons} from '../constants';
import Tts from 'react-native-tts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HeadphoneDetection from 'react-native-headphone-detection';
import ModalPopup from './ModalPopup';
import {RFValue} from 'react-native-responsive-fontsize';
import {useSelector} from 'react-redux';
import {POST} from '../Helpers/ApiHelper';
import DeviceInfo from 'react-native-device-info';
import {ActivityIndicator} from 'react-native-paper';

const ModalVideoPlayer = ({visable, onPress, data, navigation, player}) => {
  const {userData, skip_headphone} = useSelector(s => s.UserReducer);
  const [showModal, setShowModal] = useState(visable);
  const [moveingIdUp, setMoveingIdUp] = useState(0);
  const [moveingIdLeft, setMoveingIdLeft] = useState(0);
  const bottomConnectionMsg = new Animated.Value(-100);
  const [enableJack, setEnableJack] = useState(false);
  useEffect(() => {
    student_serial();

    setTimeout(() => {
      _insertView();
    }, 2 * 60000);
    if (skip_headphone == 'no') {
      HeadphoneDetection.isAudioDeviceConnected().then(e => {
        if (e.audioJack || e.bluetooth) {
          setEnableJack(true);
        } else {
          setEnableJack(true);
        }
      });
      HeadphoneDetection.addListener(e => {
        if (e.audioJack || e.bluetooth) {
          setEnableJack(true);
        } else {
          setEnableJack(true);
        }
      });
    } else {
      setEnableJack(true);
    }
    // console.log('skip_headphone', skip_headphone);
    // if (skip_headphone == 'no') {
    //   AudioJackManager.isPluggedIn().then(isPluggedIn => {
    //     console.log('isPluggedIn11111111', isPluggedIn);
    //     if (isPluggedIn == true) {
    //       setEnableJack(true);
    //     } else {
    //       setEnableJack(false);
    //     }
    //   });
    //   const audioJackListener = AudioJackManager.addListener(
    //     ({isPluggedIn}) => {
    //       console.log('isPluggedIn2222', isPluggedIn);
    //       if (isPluggedIn == true) {
    //         setEnableJack(true);
    //       } else {
    //         setEnableJack(false);
    //       }
    //     },
    //   );
    // } else {
    //   setEnableJack(true);
    // }
    // return () => {
    //   if (HeadphoneDetection.remove) {
    //     // The remove is not necessary on Android
    //     HeadphoneDetection.remove();
    //   }
    // };
  }, []);

  async function _insertView() {
    let data_to_send = {
      course_id: data.course_id,
      video_id: data?.video_id,
      student_id: userData?.student_id,
      student_serial: serial,
    };

    let res = await POST('home/courses/insert_view.php', data_to_send);
  }
  useEffect(() => {
    let dynamic_interval = parseInt(Math.random() * 6000000 + 300000);
    let interval = setInterval(() => {
      Tts.setDefaultRate(0.4);

      Tts.speak(userData?.student_name, {
        androidParams: {
          KEY_PARAM_PAN: -1,
          KEY_PARAM_VOLUME: 0.5,
          KEY_PARAM_STREAM: 'STREAM_MUSIC',
        },
      });
      new Promise(resolve => setTimeout(resolve, 2000));
      Tts.speak(userData?.student_id, {
        androidParams: {
          KEY_PARAM_PAN: -1,
          KEY_PARAM_VOLUME: 0.5,
          KEY_PARAM_STREAM: 'STREAM_MUSIC',
        },
      });
    }, dynamic_interval);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    Animated.spring(bottomConnectionMsg, {
      toValue: -100,
    }).start();

    // this.ref.current.animateNextTransition();
    setInterval(() => {
      if (SIZES.width > SIZES.height) {
        let translateY = Math.floor(
          Math.random() * (SIZES.height - 40 - 0 + 1) + 0,
        );

        let translatex = Math.floor(
          Math.random() * (SIZES.width - 160 - 0 + 1) + 0,
        );

        setMoveingIdLeft(translateY);
        setMoveingIdUp(translatex);
      } else {
        let translateY = Math.floor(
          Math.random() * (SIZES.height - 40 - 0 + 1) + 0,
        );

        let translatex = Math.floor(
          Math.random() * (SIZES.width - 160 - 0 + 1) + 0,
        );

        setMoveingIdLeft(translatex);
        setMoveingIdUp(translateY);
      }
    }, 7000);
  }, []);

  const close = () => {
    onPress();
  };

  const [loadingPage, setLoadingPage] = useState(true);

  let injectVimeo = `
  setInterval(()=>{
    if (document.getElementsByClassName('js-password') == null) {

    } else {
      document.getElementsByClassName('js-password')[0].value = 'camp1233';
      document.querySelector("input[type='submit']").click();
    }
  },1500)
  `;
  // let injectPublitio = `
  // setInterval(()=>{

  //   alert(document.querySelector("#password"))
  //    if (document.querySelector("#password")) {
  //     document.querySelector("#password").value= 'camp1233';
  //      document.querySelector("#submit").click();
  //     }
  // },1500)
  // `;

  const onShouldStartLoadWithRequest = request => {
    if (request.url.includes('youtube')) {
      return false;
    }

    return true;
  };
  const [serial, setSerial] = useState('');

  async function student_serial() {
    let d = await DeviceInfo.getUniqueId();
    setSerial(d);
  }

  return (
    <>
      <Modal
        animationType="slide"
        visible={showModal}
        onRequestClose={() => {
          close();
        }}>
        <View
          style={{
            flex: 1,
            marginTop: Platform.OS === 'ios' ? StatusBar.currentHeight : 0,
          }}>
          {/* <StatusBar hidden={true} /> */}

          {data.player == 'youtube' ? (
            <>
              <WebView
                ref={webview => {
                  this.webview = webview;
                }}
                source={{
                  uri: 'https://www.youtube.com',
                }}
                onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
              />
              {/* <View pointerEvents="auto">
                <YoutubePlayer
                  videoId="p5FOyO2x630"
                  play={false}
                  height={RFValue(300)}
                  initialPlayerParams={{
                    // controls: false,
                    // modestbranding: true,
                    modestbranding: true,
                    rel: false,
                  }}
                  webViewProps={{
                    onMessage: res => {
                      console.log(
                        'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
                      );
                    },
                    onShouldStartLoadWithRequest: request => {
                      console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
                      // return request.mainDocumentURL === 'about:blank';
                    },
                    onStartShouldSetResponder: res => {
                      console.log(
                        'cccccccccccccccccccccccccccccccc',
                        res.target,
                      );
                    },
                    javaScriptCanOpenWindowsAutomatically: e => {
                      console.log(e);
                    },
                  }}
                />
              </View> */}
              {/* <VideoPlayer
                autoStart={false}
                mainControl={args => <DefaultMainControl {...args} />}
                bottomControl={args => <DefaultBottomControlsBar {...args} />}
                videoId="CKrf4dq4kx0">
                {args => {
                  console.log('Aaaaaaaaaaa', args);
                  args.youtubeCustomUrl && (
                    <Video
                      ref={args.playerRef}
                      source={{
                        uri: args.youtubeCustomUrl,
                      }}
                      style={styles.backgroundVideo}
                      resizeMode="cover"
                      paused={args.videoPaused}
                      onLoad={args.onLoad}
                      onProgress={args.onProgress}
                      onEnd={args.onEnd}
                    />
                  );
                }}
              </VideoPlayer> */}
              {/* <YoutubePlayer
                videoId="p5FOyO2x630"
                play={false}
                height={RFValue(300)}
                initialPlayerParams={{
                  // controls: false, 
                  // modestbranding: true,
                  modestbranding: true,
                }}
              /> */}
              {/* <WebView
                source={{
                  html: `
          <html>
            <body style="margin:0">
              <iframe
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/p5FOyO2x630?rel=0&controls=0&disablekb=0"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </body>
          </html>
        `,
                }}
              /> */}
              {/* <YouTube
                videoId="p5FOyO2x630"
                apiKey="AIzaSyDTwRGaL30hd7t8LEdk9x1JOjGEnclQ5sg"
                play={false} // Set to true to automatically play the video
                fullscreen={false} // Set to true to allow fullscreen mode
                loop={false} // Set to true to loop the video
                onReady={() => console.log('Ready')}
                onChangeState={event => console.log(event.state)}
                onError={error => console.log(error)}
              /> */}
            </>
          ) : (
            <>
              <WebView
                allowsFullscreenVideo={true}
                javaScriptEnabled={true}
                source={{
                  uri:
                    data.player == 'publitio'
                      ? 'https://elmatary.com/El_Matary_Platform/platform/publitio_player/test_user.php?student_id=' +
                        userData?.student_id +
                        '&serial=' +
                        serial +
                        '&link=' +
                        data?.lesson_url
                      : data?.lesson_url,
                }}
                onLoadEnd={() => {
                  setTimeout(() => {
                    setLoadingPage(false);
                  }, 2000);
                }}
                // forceDarkOn
                injectedJavaScript={data?.player == 'vimeo' ? injectVimeo : ''}
                style={{
                  flex: 1,
                  width: SIZES.width,
                  height: SIZES.height,

                  // backgroundColor: 'red',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                bounces={false}
                automaticallyAdjustContentInsets
              />

              <View
                style={{
                  position: 'absolute',
                  top: moveingIdUp,
                  left: moveingIdLeft,
                  width: 160,
                  height: 40,
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  borderRadius: 15,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{color: '#fff', fontFamily: FONTS.fontFamily}}>
                  {' '}
                  ID : {userData?.student_id}
                </Text>
              </View>

              {loadingPage && (
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    backgroundColor: COLORS.white,
                    width: '100%',

                    height: '100%',
                  }}>
                  <ActivityIndicator
                    size={RFValue(40)}
                    color={COLORS.primary}
                  />
                </View>
              )}
            </>
          )}
        </View>

        {/* {data?.title !== 'help' && (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('VideoQuestion');
              close();
            }}
            style={{
              paddingVertical: SIZES.base,
              paddingHorizontal: SIZES.margin,
              backgroundColor: COLORS.primary,
              position: 'absolute',
              top: StatusBar.currentHeight + RFValue(30),
              right: RFValue(10),
              borderRadius: RFValue(5),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                ...FONTS.body4,
                color: COLORS.white,
                textAlign: 'center',
              }}>
              Questions
            </Text>
          </TouchableOpacity>
        )} */}
      </Modal>

      <ModalPopup
        onRequestClose={() => {
          close();
        }}
        // result ? false : true
        // visible={skip_headphone == 'no' ? (result ? false : true) : false}>
        visible={!enableJack}>
        <MaterialCommunityIcons
          name="headset"
          color={COLORS.primary}
          size={RFValue(100)}
          style={{
            alignSelf: 'center',
            marginBottom: SIZES.margin,
          }}
        />

        <Text
          style={{
            ...FONTS.body3,
            textAlign: 'center',
            fontFamily: FONTS.fontFamilyBold,
            color: COLORS.black,
          }}>
          Please connect your headphone
        </Text>
      </ModalPopup>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
  },
});
export default ModalVideoPlayer;
