import React, { useState } from 'react';
import {View , Text, ScrollView, Image, TouchableOpacity} from 'react-native'
import Header from '../../../components/Header';
import { SIZES , COLORS , FONTS , icons , images} from '../../../constants';
import { RFValue } from 'react-native-responsive-fontsize';
function Favourite({route,navigation}) {
  const[ FavItems , setFavItms] = useState([
  {
    image : images.natural,
    text :'room in paris',
    description :'1 bed , 1 Bedroom',
    fav : true,
  },
  {
    image : images.natural,
    text :'room in paris',
    description :'1 bed , 1 Bedroom',
    fav : false,
  },
  {
    image : images.natural,
    text :'room in paris',
    description :'1 bed , 1 Bedroom',
    fav : false,
  },
  {
    image : images.natural,
    text :'room in paris',
    description :'1 bed , 1 Bedroom',
    fav : false,
  }
  ])
    return (
      <View style={{
        flex: 1,
        backgroundColor: COLORS.white,
        padding: SIZES.padding,

       
      }}>
        <Header></Header>
        <Text style={{
          ...FONTS.body2,
          color:COLORS.primary,
          marginTop:RFValue(15)
        }}>Last Seen</Text>
<View style={{
  marginTop:RFValue(20),
  flexDirection:'row',
  flexWrap:'wrap',
  justifyContent:'space-between'
}}> 

    {FavItems.map((item , index)=>(
      <>
      <View style={{
        width:'47%',
        height:RFValue(220),
        borderRadius:20,
        marginBottom:RFValue(10),
        
      }}>
         <TouchableOpacity style={{
            position: 'absolute',
            zIndex: 1,
            marginTop:'10%',
            marginLeft:'5%'
          }} 
          >
            <Image style={{
             width: 30,
             height: 30,
             tintColor: item.fav ? '#f00' :COLORS.white,
            }}
            source={icons.heart}
            ></Image>
          </TouchableOpacity>
      <Image style={{
        width:'100%',
        height:'70%',
        borderRadius:20,
       
      }} source={item.image}>
       
      </Image>

      <Text style={{
        ...FONTS.body4, 
        color:'#000',
        marginTop:'4%',
        marginLeft:'5%'
      }}>{item.text}</Text>
      <Text  style={{
        ...FONTS.body5,
        color:'#aaa',
        marginLeft:'5%'
      }}>{item.description}</Text>
</View>
      </>
    ))}

</View>
      </View>
    );
}

export default Favourite;