import React from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { FONTS , COLORS , icons , images , SIZES } from '../../../constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import { RFValue } from 'react-native-responsive-fontsize';
import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';

function Notification({route, navigation}) {
  const  notificationData=[
        {
            userImage :images.user,
            time :'1 hr',
            title:'what is your opinion ?',
            description :'simply dummy text of the printing and typesetting'

        },
        {
            userImage :images.person,
            time :'1 hr',
            title:'what is your opinion ?',
            description :'simply dummy text of the printing and typesetting'

        },
        {
            userImage :images.natural,
            time :'1 hr',
            title:'what is your opinion ?',
            description :'simply dummy text of the printing and typesetting'

        }
    ]
    return (
       <View style={{
         flex:1,
         backgroundColor:COLORS.white,
        //  padding :SIZES.padding
       }}>
        <View style={{
            backgroundColor:COLORS.primary,
            paddingHorizontal:'5%',
            height:'10%',
            flexDirection:'row',
            alignItems:'center'


        }}>
            <TouchableOpacity style={{
                marginRight:RFValue(70)
            }} onPress={()=>{
                 navigation.goBack()
            }}>
            <Icon name="arrow-left" size={30} color={COLORS.white} />
            </TouchableOpacity>
            <Text style={{
                ...FONTS.body2,
                color:COLORS.white 
            }}>Notifications</Text>
        </View>
        <ScrollView>
            {notificationData.map((item,index)=>(
                <>
                <View style={{
                    flexDirection:'row',
                    padding:'5%',
                   paddingBottom:0,
                   marginBottom: RFValue(-5)
                }}>
                 <Image source={item.userImage} style={{
                    borderRadius:50,
                    width:RFValue(50),
                    height:RFValue(50),
                    marginRight:RFValue(14)
                 }}
                 resizeMode='cover'
                 ></Image>
                 <View >
                    <Text style={{
                        color:COLORS.black,
                        ...FONTS.body3
                    }}>{item.title}</Text>
                    <Text style={{
                        color:COLORS.darkGray,
                        ...FONTS.body4
                    }}
                    numberOfLines={2}>{item.description}</Text>
                    <Text style={{
                        color:COLORS.gray,
                        ...FONTS.body5
                    }}>{item.time}</Text>
                 </View>
                </View>
                </>
            ))}
        </ScrollView>
       </View>
    );
}

export default Notification;