import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, FONTS, SIZES, icons} from '../constants';
import {RFValue} from 'react-native-responsive-fontsize';
import FastImage from 'react-native-fast-image';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Header = ({icon, onPress, title}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: SIZES.padding,
        marginTop: 25,
      }}>
      <TouchableOpacity onPress={onPress}>
        {title == 'Tweets' ? (
          <AntDesign name="twitter" size={RFValue(24)} color={COLORS.primary} />
        ) : title == 'My Profile' ? (
          <FastImage
            source={icons.tabMyProfile}
            style={{
              width: RFValue(24),
              height: RFValue(24),
            }}
          />
        ) : title == 'My Courses' ? (
          <FastImage
            source={icons.tabMyCourses}
            style={{
              width: RFValue(24),
              height: RFValue(24),
            }}
          />
        ) : title == 'Flash Cards' || title == 'Enter Challenge' ? (
          <MaterialCommunityIcons
            name="message-flash"
            size={RFValue(24)}
            color={COLORS.primary}
          />
        ) : title == 'Waiting' || title == 'Challenges' ? (
          <MaterialCommunityIcons
            name="file-document-edit"
            size={RFValue(24)}
            color={COLORS.primary}
          />
        ) : title == 'Writen Qs' ? (
          <MaterialIcons
            name="edit-square"
            size={RFValue(24)}
            color={COLORS.primary}
          />
        ) : title == 'Interactive' ? (
          <FastImage
            source={icons.tabInteractive}
            style={{
              width: RFValue(24),
              height: RFValue(24),
            }}
          />
        ) : title == 'Questions' ? (
          <FastImage
            source={icons.tabQuestions}
            style={{
              width: RFValue(24),
              height: RFValue(24),
            }}
          />
        ) : (
          // <MaterialIcons
          //   name="playlist-add"
          //   size={RFValue(24)}
          //   color={COLORS.primary}
          // />
          <MaterialIcons
            name="arrow-back"
            size={RFValue(24)}
            color={COLORS.primary}
          />
        )}
      </TouchableOpacity>
      <Text style={{...FONTS.h3, color: COLORS.black, marginLeft: RFValue(4)}}>
        {title}
      </Text>
    </View>
  );
};

export default Header;
