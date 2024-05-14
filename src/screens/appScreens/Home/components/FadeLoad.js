import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'

import { colors } from 'theme/colors'
import { HomeStyle } from '../styles'

import { FadeLoading } from 'react-native-fade-loading';
const FadeLoad = () => {

    return (
        <>
            <View style={{
                paddingHorizontal: 20,
                flex: 1,
                // backgroundColor:"#fff",
                paddingTop: 20
            }}>

                <FadeLoading style={{
                    width: "100%",
                    height: 10,
                    borderRadius: 20,
                    marginBottom: 20,
                    backgroundColor: "rgba(94,94,94,0.3)"
                }} />
                <FadeLoading style={{
                    width: "35%",
                    height: 10,
                    borderRadius: 20,
                    marginBottom: 20,
                    backgroundColor: "rgba(94,94,94,0.3)"
                }} />



                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={[1, 2, 3]}

                    renderItem={({ item, index }) => (
                        <><FadeLoading style={{
                            width: "25%",
                            height: 10,
                            borderRadius: 20,
                            marginBottom: 20,
                            backgroundColor: "rgba(94,94,94,0.3)"
                        }} />
                            <FadeLoading style={{
                                width: "100%",
                                height: 170,
                                borderRadius: 20,
                                marginBottom: 40,
                                backgroundColor: "rgba(94,94,94,0.3)"
                            }} />
                        </>
                    )}
                />






            </View>

        </>
    )
}

export default FadeLoad