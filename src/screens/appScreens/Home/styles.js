import {
    StyleSheet, Dimensions
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import { COLORS, FONTS, SIZES } from '../../../constants';
const { width, height } = Dimensions.get('window');

export const HomeStyle = StyleSheet.create({

    HeaderContainer: {
        // backgroundColor: 'rgba(0,0,0,0.1)',
        paddingVertical: RFValue(10),


    },
    HeaderRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // paddingHorizontal: 25
    },
    HelloText: {
        ...FONTS.h4,
        // fontFamily: FONTS.fontFamilySemiBold,
        color: COLORS.black
    },
    name: {
        ...FONTS.h4,
        fontFamily: FONTS.fontFamilySemiBold,
        color: COLORS.black,
        // marginTop: RFValue
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F0F0F0',
        borderRadius: RFValue(5),
        // padding: 10,
        marginTop: SIZES.radius,
        height: RFValue(35),
        paddingHorizontal: SIZES.base,
        color: COLORS.gray5
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        color: '#000',
    },


})

