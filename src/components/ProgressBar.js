import { View, Text, TouchableOpacity, Animated } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import { COLORS, FONTS, SIZES } from '../constants';
import { RFValue } from 'react-native-responsive-fontsize';


const ProgressBar = ({ trackStyle, progressStyle, progressVal, minVal, maxVal,containerStyle }) => {

    // const [progress, setProgress] = useState(progressVal?progressVal:0);
    const progressAnim = useRef(new Animated.Value(0)).current;
    const animateProgress = () => {
        Animated.timing(progressAnim, {
            toValue: progressVal?progressVal:0,
            duration: 1000,
        }).start();
    };


    useEffect(() => {
        animateProgress();
        return () => { };
    }, [progressVal]);


    return (
        <View style={{

            alignItems: 'center',
            // justifyContent: 'center',
            // backgroundColor: '#E0EAE9',
            // maxWidth:RFValue(300),
            width:"80%",

            flexDirection: "row",
            ...containerStyle
        }}>


            <View style={{
                width: '90%',
                height: RFValue(10),
                backgroundColor: '#C4CDD5',
                // marginHorizontal: 25,
                borderRadius: RFValue(10),
                 ...trackStyle
            }}>
                <Animated.View
                    style={[
                        { 
                        width: '50%',
                        height: RFValue(10),
                        backgroundColor: '#00AB55',
                        borderRadius: RFValue(10)
                        ,...progressStyle
                    },
                        {
                            width: progressAnim.interpolate({
                                inputRange: [minVal?minVal:0,maxVal?maxVal:100],
                                outputRange: ['0%', '100%'],
                            }),
                        },
                    ]}
                />
            </View>


        </View>
    );
};

export default ProgressBar;
