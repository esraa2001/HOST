import React, { useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, SIZES, FONTS, images, icons } from '../../../constants';
import Icon from 'react-native-vector-icons/FontAwesome'
import { RFValue } from 'react-native-responsive-fontsize';
import { red100 } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

function Homesec(props) {
    const [name, setName] = useState('David')
    const [rates, setRates] = useState(128)
    const [rate, setRate] = useState(4.9)
    const [years, setYears] = useState(8)
    const [practical, setpractical] = useState('natural views store')
    const [languages, setlanguages] = useState('arabic , french , spanich')
    const [whichLove, setwhichLove] = useState('Flowers')
    const [place, setplace] = useState('Paris, france')
    const informations = [
        {
            title: 'ID',
            checked: true
        },
        {
            title: 'email address',
            checked: true
        },
        {
            title: 'Phone number',
            checked: false
        },

    ]
    const advertisements = [
        {
            image: images.Bedroom,
            rate: '2.3',
            title: 'apartment',
            description: 'paris , french-embaba '
        },
        {
            image: images.LivingRoom,
            rate: '2.3',
            title: 'apartment',
            description: 'paris , french-embaba '
        },
        {
            image: images.Living2,
            rate: '2.3',
            title: 'apartment',
            description: 'paris , french-embaba '
        }
    ]
    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.white,
            padding: SIZES.padding,
            backgroundColor: "#FFFFF1",

        }}>

            <TouchableOpacity style={{
                flexDirection: 'row-reverse'
            }} onPress={() => {

            }}>
                <Image style={{
                    tintColor: COLORS.black
                }} source={icons.x}></Image>
            </TouchableOpacity>

            <View style={{
                marginTop: RFValue(20),
                alignSelf: 'center',
                borderRadius: 25,
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: COLORS.white,
                paddingHorizontal: RFValue(10),
                shadowColor: COLORS.black,
                shadowOffset: { width: 20, height: 20 },
                shadowOpacity: .8,
                shadowRadius: 10,
                elevation: 5

            }}>
                <View style={{
                    width: '48%',

                }}>
                    <Image style={{
                        borderRadius: RFValue(40),
                        width: '48%',
                        height: '27%',
                        borderWidth:1,
                        borderColor:COLORS.gray

                    }} source={images.person}></Image>
                    <Image style={{
                        borderRadius: RFValue(40),
                        marginTop: RFValue(-20),
                        width: '10%',
                        height: '6%'
                    }} source={icons.secure} resizeMode='cover'></Image>
                    <Text style={{
                        color: COLORS.black,
                        ...FONTS.body3,
                        marginLeft: RFValue(10),
                        marginTop:RFValue(5)
                    }}
                        numberOfLines={1}
                    >{name}</Text>
                    <Text style={{
                        color: COLORS.black,
                        ...FONTS.body5,
                        marginLeft: RFValue(10)
                    }}
                        numberOfLines={1}
                    > Featured customer</Text>

                </View>
                <View style={{
                    width: '48%',

                }}>
                    <Text style={{
                        
                        color: COLORS.black,
                        ...FONTS.body3,

                    }}>{rates}</Text>
                    <Text style={{
                        fontWeight: '800',
                        color: COLORS.darkGray,
                        ...FONTS.body4,
                        borderBottomWidth: 1,
                        borderColor: COLORS.gray

                    }}>rates</Text>

                    <Text style={{
                       
                        color: COLORS.black,
                        ...FONTS.body3,


                    }}>{rate} ⋆</Text>
                    <Text style={{
                        fontWeight: '800',
                        color: COLORS.darkGray,
                        ...FONTS.body4,
                        borderBottomWidth: 1,
                        borderColor: COLORS.gray

                    }}>rates with stars</Text>
                    <Text style={{
                      
                        color: COLORS.black,
                        ...FONTS.body3,


                    }}>{years}</Text>
                    <Text style={{
                        fontWeight: '800',
                        color: COLORS.darkGray,
                        ...FONTS.body4,
                        borderBottomWidth: 1,
                        borderColor: COLORS.gray

                    }}>years in hosting</Text>
                </View>
            </View>
            <ScrollView>
                <View style={{
                    flexDirection: 'row',
                    marginTop: RFValue(20),
                }}>
                    <Image style={{
                        marginRight: RFValue(10),
                        width: RFValue(20),
                        height: RFValue(20),
                    }} source={icons.store}></Image>
                    <Text style={{
                        ...FONTS.body5,
                        color: COLORS.black
                    }}>Practical : {practical}</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginTop: RFValue(10),
                }}>
                    <Image style={{
                        marginRight: RFValue(10),
                        width: RFValue(20),
                        height: RFValue(20),
                    }} source={icons.language}></Image>
                    <Text style={{
                        ...FONTS.body5,
                        color: COLORS.black
                    }}>languages : {languages}</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginTop: RFValue(10),
                }}>
                    <Image style={{
                        marginRight: RFValue(10),
                        width: RFValue(20),
                        height: RFValue(20),
                    }} source={icons.heart}></Image>
                    <Text style={{
                        ...FONTS.body5,
                        color: COLORS.black
                    }}>Loves : {whichLove}</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    marginTop: RFValue(10),
                }}>
                    <Image style={{
                        marginRight: RFValue(10),
                        width: RFValue(20),
                        height: RFValue(20),
                    }} source={icons.place}></Image>
                    <Text style={{
                        ...FONTS.body5,
                        color: COLORS.black
                    }}>stay place : {place}</Text>
                </View>

                <View style={{
                    backgroundColor: COLORS.white,
                    padding: '5%'
                }}>
                    <Text style={{
                        color: COLORS.black,
                        ...FONTS.body4
                    }}>Certain informations about {name}</Text>

                    {informations.map((item, index) => (
                        <>
                            <View style={{
                                flexDirection: 'row',
                                marginTop: RFValue(10),
                            }}>
                                {item.checked ?
                                    <Image style={{
                                        marginRight: RFValue(10),
                                        width: RFValue(20),
                                        height: RFValue(20),

                                    }} source={icons.done}></Image> :
                                    <Image style={{
                                        marginRight: RFValue(10),
                                        width: RFValue(20),
                                        height: RFValue(20),
                                        tintColor: '#f00'
                                    }} source={icons.x}></Image>}
                                <Text style={{
                                    ...FONTS.body5,
                                    color: COLORS.black
                                }}>{item.title}</Text>
                            </View>

                        </>
                    ))}


                    <TouchableOpacity style={{

                        marginTop: RFValue(15)
                    }}>
                        <Text style={{
                            color: COLORS.black,
                            ...FONTS.body5,
                            borderBottomWidth: 1,
                            borderColor: COLORS.black,
                            alignSelf: 'flex-start'
                        }}>More informations about {name}</Text>
                    </TouchableOpacity>
                    <View style={{
                        height: RFValue(1),
                        backgroundColor: COLORS.gray,
                        marginTop: RFValue(20)
                    }}></View>
                    <Text style={{
                        color: COLORS.black,
                        ...FONTS.body4,
                        marginTop: RFValue(15),


                    }}>{name} advertisements</Text>
                    <View style={{
                        flexDirection: 'row',
                    }}>
                        <ScrollView horizontal>
                            {advertisements.map((item, index) => (
                                <>
                                    <View style={{
                                        marginRight: RFValue(10),

                                    }}>
                                        <Image style={{
                                            borderRadius: 20,
                                            height: RFValue(170),
                                            width: RFValue(150)
                                        }} source={item.image}
                                            resizeMode='cover'></Image>
                                        <Text style={{
                                            ...FONTS.body5,
                                            color: COLORS.black,
                                            marginTop: RFValue(5),
                                            marginLeft: RFValue(6)
                                        }}>{item.rate} ⋆</Text>
                                        <Text style={{
                                            ...FONTS.body5,
                                            color: COLORS.black,
                                            marginLeft: RFValue(6)
                                        }} numberOfLines={1}>{item.title}</Text>
                                        <Text style={{
                                            ...FONTS.body5,
                                            color: COLORS.gray,
                                            marginLeft: RFValue(6)
                                        }}
                                            numberOfLines={1}>{item.description} </Text>

                                    </View>

                                </>
                            ))}




                        </ScrollView>
                    </View>
                    <View style={{
                        height: RFValue(1),
                        backgroundColor: COLORS.gray,
                        marginTop: RFValue(20)
                    }}></View>
                    <TouchableOpacity style={{

                        marginTop: RFValue(15)
                    }}>
                        <Text style={{
                            color: COLORS.black,
                            ...FONTS.body5,
                            borderBottomWidth: 1,
                            borderColor: COLORS.black,
                            alignSelf: 'flex-start'
                        }}>Report about this personal profile</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View>



    );
}

export default Homesec;