
import React, { useState } from 'react';
import { View, Text, Dimensions, Image } from 'react-native';
const { width, height } = Dimensions.get('window');
import { images, icons } from '../../../constants';
import { RFValue } from 'react-native-responsive-fontsize';

function Reviewres({route , navigation}) {
    
    const [ReviewresPeople, setReviewresPeople] = useState([{
        img: images.person,
        name : 'maha ahmed',
       date : '19/5/2024',
       review : 'Lorem ipsum dolor sit amet, consectetur accusantium doloremque laudantium, totam rem aperiam,',
       rate : 5

    },
    {
        img: images.person,
        name : 'nosa mohammed',
        date : '19/5/2024',
        review : 'Lorem ipsum dolor sit amet, consecteturt accusantium doloremque laudantium, totam rem aperiam,',
        rate : 2 
    }])
    return (
        <>
         <View style={{
            flex: 1,
            backgroundColor: '#fff'
        }}>
            <View style={{
                width: width,
                height: height * .1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    fontSize: 25,
                    fontWeight: '900',
                    color: '#000'
                }}>Reviewers</Text>
            </View> 
            {ReviewresPeople.map((item, index) => (
                <>
                    <View style={{
                        width: width * .9,
                        height: height * .22,
                        borderColor: '#ccc',
                        borderWidth: 2,
                        borderRadius: 15,
                        alignSelf: 'center',
                        marginTop: index == 0 ? height * .01 : height * .03,
                      paddingTop:'5%',
                        paddingHorizontal: '3%'
                    }}>
                        <View style={{
                              width: '100%',
                              height: '50%',
                              flexDirection: 'row',
                             
                           
                        }}>
                        <Image source={item.img}
                            style={{
                                width: '23%',
                                height: '70%',
                                borderRadius: 15,
                                marginRight: '2%'
                            }}
                            resizeMode='contain'></Image>
                        <View style={{
                            width: '45%',
                            height: '50%',
                            marginLeft: '4%',
                            marginRight:'7%'
                        }}>
                           
                            <Text style={{
                                fontSize: RFValue(15),
                                color: '#000',
                                fontWeight: '900',
                                marginBottom: '2%'
                            }}
                                numberOfLines={1}>{item.name}</Text>
                                
                            <Text style={{
                                fontSize: RFValue(14),
                                color: '#000',
                                fontWeight: '900',
                                marginBottom: '2%'
                            }}
                                numberOfLines={1}>{item.date}</Text>
                            <View style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                width: '100%'
                            }}>
                          
                            </View>

                        </View>
                        <View style={{
                            width: '16%',
                            height: '32%',                      
                            backgroundColor:'#30BADC',
                            borderRadius:8,
                            flexDirection:'row',
                            alignItems:'center',
                            justifyContent:'space-around',
                         
                        }}>
                            <Image source={icons.star} style={{
                               width:'25%',
                               height:'50%',
                               marginLeft:'10%'
                              
                            }}resizeMode='cover'></Image>
                            <Text style={{
                                fontSize:RFValue(16),
                                color:'#fff',
                                width:'35%'
                            }}>{item.rate}</Text>
                        </View>
                    </View>
                    <Text style={{
                        fontSize:RFValue(13),
                        color:'#000',
                        fontWeight:'900',        
                    }}
                    numberOfLines={3}
                    >{item.review}</Text>
                    </View>
                </>
            ))}
           
                        </View>
        
        </>
    );
}

export default Reviewres;