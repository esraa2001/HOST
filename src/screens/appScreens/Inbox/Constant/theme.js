import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
const COLORS = {
  primary: '#ff2f68',
  primaryDark: '#ff4f7e',
  primaryLite: '#eb849c',
  third: '#faca0c',
  // primary: '#637aff',
  // primaryDark: '#2759ff',
  // primaryLite: '#637aff99',
  black: '#000',
  white: 'white',
  accent: '#112233',
  green: '#60c5a8',
  green2: '#039a83',
  light: '#EEEEEE',
  dark: '#333',
  gray: '#CCCCCC',
  gray2: '#BBBDC1',
  gray3: '#CFD0D7',
  lightGray1: '#DDDDDD',
  lightGray2: '#F5F5F8',
  transparent: 'transparent',
  red: '#ff2f68',
  lightRed: '#ff4f7e',
  darkRed: '#d9365e',
  purple: '#8f06e4',
  skyBlue: 'skyblue',
  yellow: '#f8c907',
  pink: '#ff4c98',
  gold: 'gold',
  line: '#282C35',
  gray: '#CCCCCC',
  darkGray: '#999999',
  darkOverlayColor: 'rgba(0, 0, 0, 0.4)',
  darkOverlayColor2: 'rgba(0, 0, 0, 0.8)',
  lightOverlayColor: 'rgba(255, 255, 255, 0.6)',
  primaryAlpha: 'rgba(99, 122, 255, 0.15)',
  redAlpha: 'rgba(255, 84, 84, 0.15)',
  greenAlpha: 'rgba(96, 197, 168, 0.15)',
  lightGreen: '#dcf8c6',
  purpleAlpha: 'rgba(146, 6, 228, 0.15)',
  liteBlack: '#0e293547',
  gradient: ['#268281', '#779f92', '#a2af9c'],

  // bags background colors
  bag1Bg: '#ea7a72',
  bag2Bg: '#c2c5d1',
  bag3Bg: '#82a7c9',
  bag4Bg: '#d49d8f',
  bag5Bg: '#ccd9c6',
  bag6Bg: '#767676',
  bag7Bg: '#d1c8c3',
  bag8Bg: '#dca47f',
  bag9Bg: '#eb849c',
  bag10Bg: '#979dc1',
  bag11Bg: '#c7d3c0',
  productsArr: ['#BF012C', '#d39c67', '#4EABA6', '#2B4660', '#A02E41'],
};
const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,
  // app dimensions
  width,
  height,
};
const FONTS = {
  largeTitle: {
    fontFamily: 'LamaSans-Medium',
    fontSize: SIZES.largeTitle,
  },
  h1: {
    fontFamily: 'LamaSans-Medium',
    fontSize: SIZES.h1,
  },
  h2: {
    fontFamily: 'LamaSans-Medium',
    fontSize: SIZES.h2,
  },
  h3: {
    fontFamily: 'LamaSans-Medium',
    fontSize: SIZES.h3,
  },
  h4: {
    fontFamily: 'LamaSans-Medium',
    fontSize: SIZES.h4,
  },
  h5: {
    fontFamily: 'LamaSans-Medium',
    fontSize: SIZES.h5,
  },
  body1: {
    fontFamily: 'LamaSans-Medium',
    fontSize: SIZES.body1,
  },
  body2: {
    fontFamily: 'LamaSans-Medium',
    fontSize: SIZES.body2,
  },
  body3: {
    fontFamily: 'LamaSans-Medium',
    fontSize: SIZES.body3,
  },
  body4: {
    fontFamily: 'LamaSans-Medium',
    fontSize: SIZES.body4,
  },
  body5: {
    fontFamily: 'LamaSans-Medium',
    fontSize: SIZES.body5,
  },
  fontFamily: 'LamaSans-Medium',
};
export {COLORS, SIZES, FONTS};
