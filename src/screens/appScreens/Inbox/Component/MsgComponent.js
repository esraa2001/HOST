import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  Platform,
  PermissionsAndroid,
  ToastAndroid,
} from 'react-native';
import { ActivityIndicator, Avatar } from 'react-native-paper';
import { FONTS, icons, images, SIZES } from '../Constant';
import TimeDelivery from './TimeDelivery';
import ImageZoom from 'react-native-image-pan-zoom';
import AntDesign from 'react-native-vector-icons/AntDesign';
import RNFetchBlob from 'rn-fetch-blob';
// import {AudioPlayer} from 'react-native-simple-audio-player';
import Video from 'react-native-video';
import Slider from '@react-native-community/slider';
import { COLORS } from '../../../../constants';
// import { colors } from 'theme/colors';
const MsgComponent = props => {
  const { sender, massage, item, sendTime, index, msgType, onLongPress } = props;
  const [openShowImageModal, setOpenShowImageModal] = useState(false);
  const [imageLoading, setImageLoading] = useState(false);

  //
  const [paused, setPaused] = useState(true);
  const videoRef = useRef(null);

  const [totalLength, setTotalLength] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(0);

  const onSeek = time => {
    time = Math.round(time);
    videoRef && videoRef.current.seek(time);
    setCurrentPosition(time);
    setPaused(false);
  };

  const fixDuration = data => {
    setTotalLength(Math.floor(data.duration));
  };

  const setTime = data => {
    setCurrentPosition(Math.floor(data.currentTime));
  };

  const togglePlay = () => {
    setPaused(!paused);
  };
  const resetAudio = () => {
    // if (!repeat) {
    setPaused(true);
    // }
    setCurrentPosition(0);
  };

  //
  const checkPermission = async () => {
    if (Platform.OS === 'ios') {
      downloadImage();
    } else {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'Storage Permission Required',
            message: 'App needs access to your storage to download Photos',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          downloadImage();
        } else {
          // If permission denied then show alert
          alert('Storage Permission Not Granted');
        }
      } catch (err) {
        // To handle permission related exception
        console.warn(err);
      }
    }
  };
  function toHHMMSS(secs) {
    const sec_num = parseInt(secs, 10);
    const hours = Math.floor(sec_num / 3600);
    const minutes = Math.floor(sec_num / 60) % 60;
    const seconds = sec_num % 60;

    return [hours, minutes, seconds]
      .map(v => (v < 10 ? '0' + v : v))
      .filter((v, i) => v !== '00' || i > 0)
      .join(':');
  }

  const getExtention = filename => {
    return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
  };
  const downloadImage = () => {
    setImageLoading(true);
    let date = new Date();
    let image_URL = item?.messagePhoto;
    // console.log(image_URL);
    // let ext = getExtention(image_URL);
    // console.log(ext);

    // ext = '.' + ext[0];
    // console.log(ext);

    const { config, fs } = RNFetchBlob;
    let PictureDir = fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path:
          PictureDir +
          '/image_' +
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          '.jpj',
        description: 'Image',
      },
    };
    config(options)
      .fetch('GET', image_URL)
      .then(res => {
        setImageLoading(false);
        // Showing alert after successful downloading
        ToastAndroid.showWithGravityAndOffset(
          'Image Saved Successfully',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          25,
          50,
        );
      });
  };
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.9}
        onLongPress={() => {
          onLongPress(item, index);
        }}
        style={{
          marginVertical: 0,
        }}>
        <View
          style={[
            styles.TriangleShapeCSS,
            sender ? styles.right : [styles.left],
          ]}
        />
        <View
          style={[
            styles.masBox,
            {
              alignSelf: sender ? 'flex-end' : 'flex-start',
              backgroundColor: sender ? COLORS.primary : COLORS.secondary,
            },
          ]}>
          {!sender && (
            <Text
              style={{
                ...FONTS.h5,
                fontSize: 11,
                color: COLORS.black,
              }}>
              {item.name}
            </Text>
          )}

          {msgType == 'text' ? (
            <Text
              style={{
                paddingLeft: 5,
                color: sender ? COLORS.white : COLORS.black,
                fontFamily: FONTS.fontFamily,
                fontSize: 12.5,
              }}>
              {item.message}
            </Text>
          ) : msgType == 'image' ? (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                setOpenShowImageModal(true);
              }}>
              <Image
                source={{ uri: item.messagePhoto }}
                style={{
                  width: '100%',
                  minWidth: 200,
                  height: 200,
                }}
                resizeMode="cover"
              />
              <Text
                style={{
                  paddingLeft: 5,
                  color: sender ? COLORS.white : COLORS.black,
                  fontFamily: FONTS.fontFamily,
                  fontSize: 12.5,
                }}>
                {item.messageCaption}
              </Text>
            </TouchableOpacity>
          ) : (
            <View
              style={{
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <Video
                source={{ uri: item.messageAudio }}
                ref={videoRef}
                playInBackground={false}
                audioOnly={true}
                playWhenInactive={false}
                paused={paused}
                onEnd={resetAudio}
                onLoad={fixDuration}
                // onLoadStart={() => setLoading(true)}
                onProgress={setTime}
                // volume={volume}
                // repeat={repeat}
                style={{ height: 0, width: 0 }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                  width: '90%',
                  // marginBottom: 10,
                }}>
                <TouchableOpacity
                  style={[styles.iconContainer, styles.playBtn]}
                  onPress={togglePlay}>
                  <Image
                    source={paused ? icons.play : icons.pause}
                    style={styles.playIcon}
                    tintColor={COLORS.white}
                  />
                </TouchableOpacity>
                <View style={styles.sliderContainer}>
                  <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={Math.max(totalLength, 1, currentPosition + 1)}
                    minimumTrackTintColor={COLORS.white}
                    // maximumTrackTintColor={COLORS.third}
                    onSlidingComplete={onSeek}
                    value={currentPosition}
                    thumbTintColor={COLORS.white}
                  />

                  <View
                    style={{
                      paddingHorizontal: 16,
                      ...styles.durationContainer,
                    }}>
                    <Text style={styles.timeText}>
                      {toHHMMSS(currentPosition)}
                    </Text>
                    <Text style={styles.timeText}>{toHHMMSS(totalLength)}</Text>
                  </View>
                </View>
              </View>
            </View>
            // <AudioPlayer url={item.messageAudio} />
          )}

          <TimeDelivery sender={sender} item={item} />
        </View>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        visible={openShowImageModal}
        onRequestClose={() => {
          setOpenShowImageModal(false);
        }}>
        <View style={{ flex: 1, backgroundColor: '#000' }}>
          <ImageZoom
            cropWidth={SIZES.width}
            cropHeight={SIZES.height}
            imageWidth={SIZES.width}
            imageHeight={SIZES.height}>
            <Image
              source={{ uri: item?.messagePhoto }}
              style={{
                // flex: 1,
                height: '100%',
                width: '100%',
              }}
              resizeMode="center"
            />
          </ImageZoom>
          <TouchableOpacity
            onPress={() => checkPermission()}
            activeOpacity={0.5}
            style={{
              position: 'absolute',
              margin: 16,
              right: 0,
              bottom: 0,
              width: 50,
              height: 50,
              borderRadius: 100,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#fff',
            }}>
            {imageLoading ? (
              <ActivityIndicator color={'#000'} size={25} />
            ) : (
              <AntDesign name="download" size={30} color={'#000'} />
            )}
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  masBox: {
    alignSelf: 'flex-end',
    marginHorizontal: 10,
    minWidth: 80,
    maxWidth: '80%',
    paddingHorizontal: 10,
    marginVertical: 5,
    paddingTop: 5,
    borderRadius: 8,

  },
  timeText: {
    fontFamily: 'AveriaSerifLibre-Light',
    fontSize: 10,
  },
  dayview: {
    alignSelf: 'center',
    height: 30,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: COLORS.white,
    borderRadius: 30,
    marginTop: 10,
  },
  iconView: {
    width: 42,
    height: 42,
    borderRadius: 21,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: COLORS.themecolor,
  },
  TriangleShapeCSS: {
    position: 'absolute',
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 15,
    borderRightWidth: 5,
    borderBottomWidth: 20,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  left: {
    borderBottomColor: COLORS.secondary,
    left: 2,
    bottom: 10,
    transform: [{ rotate: '0deg' }],

  },
  right: {
    borderBottomColor: COLORS.primary,
    right: 2,
    bottom: 5,
    transform: [{ rotate: '103deg' }],
  },
  sliderContainer: {
    paddingTop: 5,
    paddingHorizontal: 16,
    // paddingBottom: 12,
    width: '100%',
  },
  slider: {
    // height: 30,
    width: '100%',
    // marginBottom: 3,

  },
  durationContainer: { flexDirection: 'row', justifyContent: 'space-between' },
  playIcon: { height: 30, width: 30, resizeMode: 'contain' },
  timeText: {
    color: '#fff',
    ...FONTS.h4,
    // fontSize: 18,
  },
});

export default MsgComponent;
