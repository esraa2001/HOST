import React from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { COLORS, images, SIZES, FONTS } from '../../../constants';
import FastImage from 'react-native-fast-image';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
const BookingDetails = () => {
  function renderHeader() {
    return (
      <View
        style={{
          height: 60,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            width: 40,
          }}>
          <TouchableOpacity onPress={() => { }}>
            <Image
              source={images.leftArrow}
              style={{
                width: 30,
                height: 30,
                borderRadius: 50,
              }}
            />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flex: 1,
            alignItems: 'center',
          }}>
          <Text
            style={{
              ...FONTS.body3,
              fontFamily: FONTS.fontFamilyBold,
              color: COLORS.third
            }}>
            Booking Details{' '}
          </Text>
        </View>

        <View
          style={{
            width: 40,
          }}></View>
      </View>
    );
  }
  function renderBodey() {
    return (
      <View
        style={{
          flex: 1,
        }}>
        <View
          style={{
            width: '100%',
            borderWidth: 0.3,
            padding: 10,
            borderRadius: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 15,
            marginTop: 20,
          }}>
          <Image
            source={{ uri: "https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill" }}
            style={{
              width: '40%',
              height: 100,
              borderRadius: 10,
            }}
          />

          <View
            style={{
              //                   borderWidth: 1,
              width: '55%',
            }}>
            <Text style={{
              ...FONTS.body4,
              fontFamily: FONTS.fontFamilyMedium,
              color: COLORS.third
            }}>Blue Yoga Hotel, Bali</Text>
            <Text style={{
              ...FONTS.body5,
              fontFamily: FONTS.fontFamilyMedium,
              color: COLORS.third,
              // textAlign: "center"
            }}><SimpleLineIcons name={"location-pin"} /> Legian Nort St, Kuta, Bali</Text>

            <Text style={{
              ...FONTS.body4,
              alignItems: "center", color: COLORS.black,
              fontFamily: FONTS.fontFamilyMedium
            }}>
              4.5 ⭐  <Text style={{
                ...FONTS.body5,
                color: COLORS.gray2
              }} >(750 Reviews)</Text>
            </Text>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 10,
                // borderWidth: 1,
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  ...FONTS.body4,
                  fontFamily: FONTS.fontFamilyMedium,
                  color: COLORS.primary,
                }}>
                $ 15 /Night
              </Text>
              <TouchableOpacity
                style={{
                  width: 65,
                  height: 25,
                  //   borderWidth: 2,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: '#E3F9FF',
                  //   backgroundColor: '#BCE7FF',
                }}>
                <Text
                  style={{
                    color: COLORS.primary,
                    fontWeight: 'bold',
                    fontSize: 14,
                  }}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View
          style={{
            width: '100%',
            borderWidth: 0.3,
            padding: 15,
            borderRadius: 10,
            marginBottom: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 15,
              alignItems: 'center',

              //               borderWidth: 2,
            }}>
            <Text
              style={{
                ...FONTS.body4,
                fontFamily: FONTS.fontFamilyMedium,
                color: COLORS.third,
              }}>
              Check in
            </Text>
            <Text
              style={{
                ...FONTS.body5,
                fontFamily: FONTS.fontFamilyMedium,
                color: COLORS.third,
              }}>
              14 jun 2024
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 15,
              alignItems: 'center',
            }}>
            <Text
              style={{
                ...FONTS.body4,
                fontFamily: FONTS.fontFamilyMedium,
                color: COLORS.third,
              }}>
              Check Out
            </Text>
            <Text
              style={{
                ...FONTS.body5,
                fontFamily: FONTS.fontFamilyMedium,
                color: COLORS.third,
              }}>
              19 jun 2024
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 15,
            }}>
            <Text
              style={{
                ...FONTS.body4,
                fontFamily: FONTS.fontFamilyMedium,
                color: COLORS.third,
              }}>
              Room
            </Text>
            <Text
              style={{
                ...FONTS.body5,
                fontFamily: FONTS.fontFamilyMedium,
                color: COLORS.third,
              }}>
              1 Single Room
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              //               borderWidth: 2,
            }}>
            <Text
              style={{
                ...FONTS.body4,
                fontFamily: FONTS.fontFamilyMedium,
                color: COLORS.third,
              }}>
              Guest
            </Text>
            <Text
              style={{
                ...FONTS.body5,
                fontFamily: FONTS.fontFamilyMedium,
                color: COLORS.third,
              }}>
              2 Guest
            </Text>
          </View>
        </View>

        <View
          style={{
            width: '100%',
            borderWidth: 0.3,
            padding: 15,
            borderRadius: 10,
            marginBottom: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 15,
              alignItems: 'center',

              //               borderWidth: 2,
            }}>
            <Text
              style={{
                ...FONTS.body4,
                fontFamily: FONTS.fontFamilyMedium,
                color: COLORS.third,
              }}>
              5 Nights
            </Text>
            <Text
              style={{
                ...FONTS.body5,
                fontFamily: FONTS.fontFamilyMedium,
                color: COLORS.third,
              }}>
              $560.00
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 15,
              alignItems: 'center',

              //               borderWidth: 2,
            }}>
            <Text
              style={{
                ...FONTS.body4,
                fontFamily: FONTS.fontFamilyMedium,
                color: COLORS.third,
              }}>
              Taxes & Fees (10%)
            </Text>
            <Text
              style={{
                ...FONTS.body5,
                fontFamily: FONTS.fontFamilyMedium,
                color: COLORS.third,
              }}>
              $560.00
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              //               marginBottom: 15,
              //               borderWidth: 2,
            }}>
            <Text
              style={{
                ...FONTS.body4,
                fontFamily: FONTS.fontFamilyBold,
                color: COLORS.primary,
              }}>
              Total
            </Text>
            <Text
              style={{
                ...FONTS.body4,
                fontFamily: FONTS.fontFamilyMedium,
                color: COLORS.primary,
              }}>
              $560.00
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 15,
            padding: 10,
            //               borderWidth: 2,
          }}>
          <View
            style={{
              width: '65%',
              flexDirection: 'row',
              height: 45,
              paddingHorizontal: 10,
              borderRadius: 10,
              alignItems: 'center',
              borderWidth: 0.4,
            }}>
            <FastImage
              tintColor={COLORS.black}
              source={images.code}
              style={{ width: 20, height: 20, marginRight: SIZES.base }}
            />
            <TextInput
              style={{
                flex: 1,
                paddingVertical: 0,
                ...FONTS.h4,
                textAlign: 'left',
              }}
              placeholder={'Enter your code'}
              placeholderTextColor={COLORS.black}
            />
          </View>
          <View
            style={{
              width: '30%',
              borderWidth: 0.5,
              height: 45,
              borderRadius: 10,
            }}>
            <TextInput
              style={{
                flex: 1,
                paddingVertical: 0,
                ...FONTS.h4,
                textAlign: 'center',
              }}
              placeholder={'Apply'}
              placeholderTextColor={COLORS.black}
            />
          </View>
        </View>

        <TouchableOpacity
          style={{
            width: '95%',
            height: 55,
            borderRadius: 10,
            backgroundColor: '#30BADC',
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 15,
          }}>
          <Text
            style={{
              ...FONTS.body4,
              fontFamily: FONTS.fontFamilyBold,
              color: COLORS.white,
            }}>
            Pay
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 10,
      }}>
      {renderHeader()}
      {renderBodey()}
    </View>
  );
};
export default BookingDetails;
