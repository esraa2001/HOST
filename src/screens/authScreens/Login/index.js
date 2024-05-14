import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker';
import countries from '../../../countries/countries.json';
import { RFValue } from 'react-native-responsive-fontsize';
import { COLORS, FONTS, SIZES, icons } from '../../../constants';
function Login(props) {
    const [arr, setArr] = useState([
        {
            title: "Contiune with Gmail",
            icon: icons.email,
            nav: ''
        },
        {
            title: "Contiune with Facebook",
            icon: icons.Facebook,
            nav: ''
        },
        {
            title: "Contiune with Google",
            icon: icons.google,
            nav: ''
        },
        {
            title: "Contiune with Apple",
            icon: icons.Apple,
            nav: ''
        }
    ])

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [items, setItems] = useState(countries);

    const handleValueChange = (item) => {
        setValue(item);
        setSelectedCountry(item);
    };

    return (
        <View style={{
            flex: 1,
            backgroundColor: COLORS.white,
            padding: SIZES.padding,


        }}>
            <Text style={{
                ...FONTS.h2,
                color: COLORS.primary,
            }}>Login / Subscribe to Airbnb</Text>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={handleValueChange}
                setItems={setItems}
                placeholder={'Choose a country.'}
                style={{
                    color: COLORS.primary,


                }}
                containerStyle={{
                    width: '85%',
                    alignSelf: 'center',
                    marginTop: '8%'

                }}
                dropDownMaxHeight={200} 
                selectedItemContainerStyle={{ backgroundColor: COLORS.primary }} 
            />
            <TextInput style={{


                padding: '3%',
                ...FONTS.body4,
                borderWidth: 1,
                borderColor: '#000',
                width: '85%',
                height: '7%',
                borderTopWidth: 0,
                borderRadius: 7,
                alignSelf: 'center'

            }}
                placeholder='Phone number'
                placeholderTextColor={'#aaa'}
            ></TextInput>

            <Text style={{
                ...FONTS.body5,
                color: '#ccc',
                marginVertical: '2%'

            }}>we will call you or send a message to confirm your number</Text>

            <TouchableOpacity style={{
                backgroundColor: COLORS.primary,
                padding: '5%',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10

            }}
                onPress={() => {

                }}
            >
                <Text style={{
                    ...FONTS.body3,

                }}>Continue</Text>
            </TouchableOpacity>

            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 15,

            }}>
                <View style={{
                    flex: 1,
                    height: RFValue(1),
                    backgroundColor: '#aaa',




                }} />
                <Text style={{
                    ...FONTS.body4,
                    marginLeft: '5%',
                    marginRight: '5%',
                    color: '#aaa',
                }}>OR</Text>
                <View style={{
                    flex: 1,
                    height: RFValue(1),
                    backgroundColor: '#aaa',



                }} />
            </View>

            {arr.map((item, index) => (
                <>
                    <TouchableOpacity style={{
                        backgroundColor: COLORS.white,
                        padding: '5%',
                        alignItems: 'center',
                        flexDirection: 'row',
                        borderWidth: 1,
                        borderColor: '#aaa',
                        borderRadius: 10,
                        marginBottom: '3%'

                    }}>
                        <Image style={{
                            marginRight: '15%',
                            width: '9%',
                            height: '80%'


                        }}
                            resizeMode='cover'
                            source={item.icon}></Image>
                        <Text style={{
                            ...FONTS.body3,
                            color: '#000'
                        }}>{item.title}</Text>
                    </TouchableOpacity>
                </>
            ))}

        </View>
    );
}

export default Login;