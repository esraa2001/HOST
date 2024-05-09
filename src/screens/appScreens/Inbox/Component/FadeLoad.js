import { View, Text, TextInput, TouchableOpacity, Image,FlatList } from 'react-native'
import React from 'react'

import { FadeLoading } from 'react-native-fade-loading';

const FadeLoad = () => {

    return (
        <>
            <View style={{
                paddingHorizontal: 20,
                flex: 1,
                backgroundColor:"#fff",
                paddingTop:20
            }}>
               

               <FlatList
               showsVerticalScrollIndicator={false}
                        data={[1,2,3,4]}
                        
                        renderItem={({ item, index }) => ( 
                            <FadeLoading style={{
                                width: "100%",
                                height: 65,
                                borderRadius: 10,
                                marginBottom: 20
                            }} />
                     )}
                    /> 
               
                



            </View>

        </>
    )
}

export default FadeLoad