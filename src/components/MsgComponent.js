import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import Clipboard from '@react-native-clipboard/clipboard';
// import Toast from 'react-native-simple-toast';
import { COLORS, FONTS, SIZES, images } from '../constants';
import TimeDelivery from './TimeDelivery';
import FastImage from 'react-native-fast-image';
import { RFValue } from 'react-native-responsive-fontsize';
const MsgComponent = props => {
  const { sender, massage, item, sendTime, index } = props;

  return (
    <>


      {item.question_replay != '' && item.question_replay != null && (
        <View
          // onLongPress={() => {
          // Clipboard.setString(item.message);
          // Toast.showWithGravity('تم نسخ النص', Toast.SHORT, Toast.BOTTOM);
          // }}
          style={{ marginVertical: 0 }}>
          <View style={[styles.TriangleShapeCSS, styles.left]} />
          <View
            style={[
              styles.masBox,
              {
                alignSelf: 'flex-start',
                backgroundColor: COLORS.white,
              },
            ]}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <FastImage
                source={images.mainLogo}
                style={{
                  width: RFValue(20),
                  height: RFValue(20),
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  ...FONTS.h4,
                  color: COLORS.black,
                  fontFamily: FONTS.fontFamilyBold,
                  marginLeft: 10,
                }}>
                DR-MATARY
              </Text>
            </View>
            <Text
              style={{
                paddingLeft: 5,
                color: COLORS.black,
                ...FONTS.h4,
              }}>
              {item.question_replay}
            </Text>

            <View style={{
              marginBottom: 2,
            }} />
            {/* <TimeDelivery sender={false} item={item} /> */}

          </View>
        </View>
      )}


      <View
        // onLongPress={() => {
        // Clipboard.setString(item.message);
        // Toast.showWithGravity('تم نسخ النص', Toast.SHORT, Toast.BOTTOM);
        // }}

        style={{ marginVertical: 0 }}>
        <View style={[styles.TriangleShapeCSS, styles.right]} />
        <View
          style={[
            styles.masBox,
            {
              alignSelf: 'flex-end',
              backgroundColor: COLORS.primary,
            },
          ]}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <FastImage
              source={{ uri: item.student_avater_url }}
              style={{
                width: RFValue(30),
                height: RFValue(30),
              }}
              resizeMode="contain"
            />
            <Text
              style={{
                ...FONTS.h4,
                color: COLORS.white,
                fontFamily: FONTS.fontFamilyBold,
                marginLeft: 10,
              }}>
              {item.student_nickname}
            </Text>
          </View>
          <Text
            style={{
              paddingLeft: 5,
              color: COLORS.white,
              ...FONTS.h4,
            }}>
            {item.question_text}
          </Text>

          <TimeDelivery sender={true} item={item} />
        </View>
      </View>
      <View style={{
        flexDirection: "row", marginBottom: SIZES.base, justifyContent: "space-between", alignItems: "center", paddingHorizontal: SIZES.radius
      }}>
        <View style={{
          flex: 1, height: 2,
          backgroundColor: COLORS.white,

        }}>

        </View>
        <View style={{
          justifyContent: "center",
          alignItems: "center", paddingHorizontal: RFValue(10)
        }}>
          <Text
            numberOfLines={1}
            style={{
              flex: 1,
              color: COLORS.white,

            }}>{item.question}</Text>
        </View>
        <View style={{
          flex: 1, height: 2,
          backgroundColor: COLORS.white,

        }}>

        </View>

      </View>
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
    backgroundColor: COLORS.primary,
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
    borderBottomColor: COLORS.white,
    left: 2,
    bottom: 10,
    transform: [{ rotate: '0deg' }],
  },
  right: {
    borderBottomColor: COLORS.primary,
    right: 1,
    bottom: 5,
    transform: [{ rotate: '103deg' }],
  },
});

export default MsgComponent;
