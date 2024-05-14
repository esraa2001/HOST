import React, { useState } from 'react';
import { View , TouchableOpacity, Text, Image , map } from 'react-native';
import { COLORS , icons , images , SIZES , FONTS } from '../../../constants';
import { Header } from '../../../components';
import FastImage from 'react-native-fast-image';
import { RFValue } from 'react-native-responsive-fontsize';

function Details({route,navigation}) {
    const [Items,setItems] = useState([
        {
         icon : icons.beach,
         title :"View on the beach",
         nav:""
        },
        {
            icon : icons.mountain,
            title :"View on the mountain",
            nav:""
           },
           {
            icon : icons.sea,
            title :"View on the ocean",
            nav:""
           },
           {
            icon : icons.valley,
            title :"View on the valley",
            nav:""
           },
    ])
    const [Bathroomarr,setBathroomarr] = useState([
        {
         icon : icons.dispenser,
         title :"Shampoo",
         nav:""
        },
        {
            icon : icons.shampoo,
            title :"Hair conditionar",
            nav:""
           },
           {
            icon : icons.soap,
            title :"body soap",
            nav:""
           },
           {
            icon : icons.shower, 
            title :"shower",
            nav:""
           },
    ])
   
    return (
      <View style={{
        flex: 1,
        backgroundColor: COLORS.white,
        padding: SIZES.padding,
      }}>
       <Header 
       onPress={()=>{
         navigation.goBack()
    }}
       ></Header>
        <View style={{
            
        }}>
            <Text style={{
               ...FONTS.body2,
               fontFamily: FONTS.fontFamilyBold,
               color: COLORS.primary,
               marginTop:'7%'
            }}>What This place Offers</Text>

<Text style={{
               ...FONTS.body3,
               fontFamily: FONTS.fontFamilyMedium,
               color: COLORS.darkGray,
               marginTop:'7%',
             
            }}>Stunning views</Text>
           
      {Items.map((item , index)=>(
        <TouchableOpacity style={{
            flexDirection:'row',
            alignItems:'center',
            borderBottomWidth:1,
            borderColor:'#ddd',  
            marginTop:index==0 ?'10%':0,
            height:RFValue(50)
          
        }}
        onPress={()=>{
            navigation.navigate(item.nav)
        }}>
            <Image style={{
                width:RFValue(25),
                height:RFValue(25),
                marginRight:RFValue(10)

            }}  source={item.icon}></Image>
            <Text style={{
                ...FONTS.body3,
                color:COLORS.black
            }}>{item.title}</Text>
        </TouchableOpacity>
      ))}
      
      
<Text style={{
               ...FONTS.body3,
               fontFamily: FONTS.fontFamilyMedium,
               color: COLORS.darkGray,
               marginTop:'10%',
             
            }}>Bathroom</Text>
           
      {Bathroomarr.map((item , index)=>(
        <TouchableOpacity style={{
            flexDirection:'row',
            alignItems:'center',
            borderBottomWidth:1,
            borderColor:'#ddd',  
            marginTop:index==0 ?'10%':0,
            height:RFValue(50)

           
              
        }}
        onPress={()=>{
            // navigation.navigate(item.nav)
        }}>
            <Image style={{
                width:RFValue(25),
                height:RFValue(25),
                marginRight:RFValue(10)

            }}  source={item.icon}></Image>
            <Text style={{
                ...FONTS.body3,
                color:COLORS.black
            }}>{item.title}</Text>
        </TouchableOpacity>
      ))}
     
</View>
        </View>

    );
}

export default Details;