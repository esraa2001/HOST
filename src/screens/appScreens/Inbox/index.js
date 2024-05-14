import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    FlatList,
    TouchableOpacity,
    ImageBackground,
    TextInput,
    TouchableWithoutFeedback,
    ToastAndroid,
    Modal,
    Platform,
    PermissionsAndroid,
    Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';
// import { icons, images, SIZES } from './Constant';
// import { colors as COLORS, colors } from '../../../theme/colors';
// import { fonts as FONTS } from '../../../theme/fonts';
// import database from '@react-native-firebase/database';
// import { useSelector } from 'react-redux';
import Clipboard from '@react-native-clipboard/clipboard';
// import { useAppDispatch, useAppSelector } from 'store/store'
// import AppThunks from 'store/app/thunks'
// import { selectUserData } from 'store/auth'
// import uuid from 'react-native-uuid';
import {
    ActivityIndicator,
    Avatar,
    Button,
    IconButton,
    ProgressBar,
} from 'react-native-paper';
import { MsgComponent } from './Component';
import * as Animatable from 'react-native-animatable';
import ImagePicker from 'react-native-image-crop-picker';
// import storage from '@react-native-firebase/storage';
import AudioRecorderPlayer, {
    AudioEncoderAndroidType,
    AudioSourceAndroidType,
    AVEncoderAudioQualityIOSType,
    AVEncodingOption,
} from 'react-native-audio-recorder-player';
import RNFetchBlob from 'rn-fetch-blob';
import LinearGradient from 'react-native-linear-gradient';
// import { Arrow } from 'assets/icons';
import Images from './Constant/Images';
import { COLORS, FONTS, icons, SIZES } from './Constant';

const SingleChat = ({ navigation, route }) => {
    const audioRecorderPlayer = new AudioRecorderPlayer();
    const audioRecordRef = useRef();
    const dirs = RNFetchBlob.fs.dirs;
    const path = Platform.select({
        ios: 'hello.m4a',
        android: `${dirs.CacheDir}/hello.mp3`,
    });
    const galleryCamModalRef = useRef();
    const pressMessageModal = useRef();

    // const { receiverData } = route.params;
    // const userData = useAppSelector(selectUserData)
    const [msg, setMsg] = useState('');
    const [caption, setCaption] = useState('');

    const [disabled, setdisabled] = useState(false);
    const [allChat, setAllChat] = useState([{}, {}]);
    const [showGalleryImageModal, setShowGalleryImageModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [showSelectedImageModal, setShowSelectedImageModal] = useState(false);
    const [uploading, setUploading] = useState(false);

    // audio variables
    const [recordTime, setRecordTime] = useState('00:00:00');
    const [uploadingAudio, setUploadingAudio] = useState(false);

    //
    const [showOnlingPressMessageModal, setShowOnlongPressMessageModal] =
        useState(false);
    const [onLongPressMessageData, setOnLongPressMessageData] = useState(null);

    //

    const [isFocused, setIsFocused] = useState(false);

    const msgValid = txt => txt && txt.replace(/\s/g, '').length;

    useEffect(() => {
        // console.log(JSON.stringify(receiverData))
        checkPermission();
    }, []);

    // audio fun-----------------------------------------------------------------------------------
    const handlePressIn = () => {
        onStartRecord();
        setIsFocused(true);
    };
    const onStartRecord = useCallback(async () => {
        const audioSet: AudioSet = {
            AudioEncoderAndroid: AudioEncoderAndroidType.AAC,
            AudioSourceAndroid: AudioSourceAndroidType.MIC,
            AVEncoderAudioQualityKeyIOS: AVEncoderAudioQualityIOSType.high,
            AVNumberOfChannelsKeyIOS: 2,
            AVFormatIDKeyIOS: AVEncodingOption.aac,
        };
        const uri = await audioRecorderPlayer.startRecorder(undefined, audioSet);
        audioRecorderPlayer.addRecordBackListener((e: RecordBackType) => {
            setRecordTime(audioRecorderPlayer.mmssss(Math.floor(e.currentPosition)));
        });
    }, []);

    const onStopRecord = useCallback(async () => {
        const result = await audioRecorderPlayer.stopRecorder();
        sendMsgWithAudio(result);

        audioRecorderPlayer.removeRecordBackListener();
    }, []);

    const onCancelRecord = useCallback(async () => {
        const result = await audioRecorderPlayer.stopRecorder();
        // return () => {
        audioRecorderPlayer.removeRecordBackListener();
        setRecordTime('00:00:00');
        audioRecordRef.current.lightSpeedOut(300).then(() => {
            setIsFocused(false);
        });
    }, []);

    // audio fun-----------------------------------------------------------------------------------

    async function checkPermission() {
        if (Platform.OS === 'android') {
            try {
                const grants = await PermissionsAndroid.requestMultiple([
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
                    PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
                ]);

                if (
                    grants['android.permission.WRITE_EXTERNAL_STORAGE'] ===
                    PermissionsAndroid.RESULTS.GRANTED &&
                    grants['android.permission.READ_EXTERNAL_STORAGE'] ===
                    PermissionsAndroid.RESULTS.GRANTED &&
                    grants['android.permission.RECORD_AUDIO'] ===
                    PermissionsAndroid.RESULTS.GRANTED
                ) {
                    console.log('Permissions granted');
                } else {
                    console.log('All required permissions not granted');
                    return;
                }
            } catch (err) {
                console.warn(err);
                return;
            }
        }
    }

    // useEffect(() => {
    //     const onChildAdd = database()
    //         .ref('/messages/' + receiverData.roomId)
    //         .on('child_added', snapshot => {
    //             setAllChat(state => [snapshot.val(), ...state]);
    //         });

    //     return () =>
    //         database()
    //             .ref('/messages/' + receiverData.roomId)
    //             .off('child_added', onChildAdd);
    // }, [receiverData.roomId]);

    // const _deleteMessage = async () => {
    //     database()
    //         .ref(
    //             '/messages/' + receiverData?.roomId + '/' + onLongPressMessageData?.id,
    //         )
    //         .remove();
    //     let allCurrentData = [...allChat];
    //     let allData = allCurrentData.filter(
    //         it => it.id != onLongPressMessageData.id,
    //     );
    //     setAllChat(allData);
    //     Toast('تم حذف الرسالة');
    //     let chatListUpdate = {
    //         lastMsg: ' ',
    //     };
    //     database()
    //         .ref('/groups/' + receiverData.roomId)
    //         .update(chatListUpdate)
    //         .then(() => {
    //             console.log('data updated');
    //         });

    //     pressMessageModal.current.fadeOutDownBig(200).then(() => {
    //         setShowOnlongPressMessageModal(false);
    //     });
    // };
    function _openGallery() {
        ImagePicker.openPicker({
            includeBase64: true,
            compressImageQuality: 0.8,
            cropperActiveWidgetColor: COLORS.primary,
            freeStyleCropEnabled: true,
            cropperStatusBarColor: COLORS.primary,
            cropperToolbarColor: COLORS.primary,
            cropping: true,
        }).then(image => {
            galleryCamModalRef.current.fadeOutDownBig(200).then(() => {
                setShowGalleryImageModal(false);
            });
            setSelectedImage(image);
            setShowSelectedImageModal(true);
        });
    }
    function _openCamera() {
        ImagePicker.openCamera({
            includeBase64: true,
            compressImageQuality: 0.8,

            cropperToolbarColor: COLORS.primary,
            freeStyleCropEnabled: true,
            cropperActiveWidgetColor: COLORS.primary,
            cropperStatusBarColor: COLORS.primary,
            cropping: true,
            // FONTS
            // SIZES
        }).then(image => {
            galleryCamModalRef.current.fadeOutDownBig(200).then(() => {
                setShowGalleryImageModal(false);
            });
            setSelectedImage(image);
            setShowSelectedImageModal(true);
        });
    }

    const sorted = () => {
        return allChat.sort(function (a, b) {
            return new Date(b.sendTime) < new Date(a.sendTime)
                ? -1
                : new Date(b.sendTime) > new Date(a.sendTime)
                    ? 1
                    : 0;
        });
    };

    async function sendMsgWithPhoto() {
        setdisabled(true);
        setUploading(true);

        const uri = selectedImage?.path;
        const filename = uri.substring(uri.lastIndexOf('/') + 1);
        const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;

        const imageRef = storage().ref(`${"userData.student_id"}/${filename}`);
        await imageRef
            .putFile(uploadUri, { contentType: 'image/jpg' })
            .catch(error => {
                throw error;
            });
        const uploadedUrl = await imageRef.getDownloadURL().catch(error => {
            throw error;
        });

        setUploading(false);

        let msgData = {
            roomId: 1,
            //  receiverData.roomId,
            messagePhoto: uploadedUrl,
            messageCaption: caption.trim(),
            message: '',
            from: 1,
            // userData?.student_id,
            sendTime: moment().format(),
            msgType: 'image',
            name: " userData.student_name",
            img: " userData.img",
        };

        // const newRefrance = database()
        //     .ref('/messages/' + receiverData.roomId)
        //     .push();
        // msgData.id = newRefrance.key;
        // newRefrance.set(msgData).then(() => {
        //     let chatListUpdate = {
        //         lastMsg: caption.trim() == '' ? 'صورة' : caption.trim(),
        //     };
        //     database()
        //         .ref('/groups/' + receiverData.roomId)
        //         .update(chatListUpdate)
        //         .then(() => {
        //             console.log('data updated');
        //         });

        //     setMsg('');
        // });
        setdisabled(false);
        setShowSelectedImageModal(false);
        setSelectedImage(null);
    }
    async function sendMsgWithAudio(uri) {
        setUploadingAudio(true);

        let uid = Math.floor(Math.random() * 1000000)

        const filename = "userData?.student_id" + 'audio' + uid;
        const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;

        const audioRef = storage().ref(`${"userData.student_id"}/${filename}`);
        await audioRef
            .putFile(uploadUri, { contentType: 'audio/mp3' })
            .catch(error => {
                throw error;
            });
        const uploadedUrl = await audioRef.getDownloadURL().catch(error => {
            throw error;
        });

        let msgData = {
            roomId: 1,
            //  receiverData.roomId,
            messageAudio: uploadedUrl,
            message: '',
            from: 1,
            // userData?.student_id,
            sendTime: moment().format(),
            msgType: 'audio',
            name: "userData.student_name",
            // img: userData.img,
        };

        // const newRefrance = database()
        //     .ref('/messages/' + receiverData.roomId)
        //     .push();
        // msgData.id = newRefrance.key;
        // newRefrance.set(msgData).then(() => {
        //     let chatListUpdate = {
        //         lastMsg: 'صوت',
        //     };
        //     database()
        //         .ref('/groups/' + receiverData.roomId)
        //         .update(chatListUpdate)
        //         .then(() => {
        //             console.log('data updated');
        //         });

        //     setMsg('');
        // });
        setUploadingAudio(false);

        audioRecordRef.current.lightSpeedOut(300).then(() => {
            setIsFocused(false);
            setRecordTime('00:00:00');
        });
    }

    function Toast(msg) {
        ToastAndroid.showWithGravityAndOffset(
            msg,
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            50,
        );
    }
    function sendMsg() {
        let message = JSON.stringify(msg)
        setMsg("")
        if (message == '' || msgValid(message) == 0) {
            Toast('Enter Something ....');
            return;
        }

        setdisabled(true);
        let msgData = {
            roomId: 1,
            //  receiverData.roomId,
            message: message.trim().replaceAll("\"", ""),
            // from: userData?.student_id,

            sendTime: moment().format(),
            msgType: 'text',
            // name: userData.student_name,
            // img: userData.img,
        };

        // const newRefrance = database()
        //     .ref('/messages/' + receiverData.roomId)
        //     .push();
        // msgData.id = newRefrance.key;
        // newRefrance.set(msgData).then(() => {
        //     let chatListUpdate = {
        //         lastMsg: message.trim().replaceAll("\"", ""),
        //     };
        //     database()
        //         .ref('/groups/' + receiverData.roomId)
        //         .update(chatListUpdate)
        //         .then(() => {
        //             console.log('data updated');
        //         });

        //     setMsg('');
        // });
        setdisabled(false);
    }
    function renderHeader() {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: 55,
                    backgroundColor: COLORS.primary,
                    // borderBottomLeftRadius: 20,
                    // borderBottomRightRadius: 20,
                    paddingHorizontal: 10,
                    // marginBottom:30,
                    // position:"absolute",
                    // top:0
                }}

            // colors={[COLORS.secondery, COLORS.primary]}
            >
                <TouchableOpacity activeOpacity={.8} onPress={() => goBack()}>
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        activeOpacity={1}
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        {/* <Ionicons
              style={{
                // marginHorizontal: 10,
                color: COLORS.white,
              }}
              size={30}
              name="chevron-back"
            /> */}
                        {/* <Arrow fill={"#fff"} /> */}
                    </TouchableOpacity>
                </TouchableOpacity>
                <Text style={{
                    fontSize: 22,
                    fontWeight: '700',
                    color: COLORS.white
                }}>{"groupName"}</Text>
                {/* <Bell fill={'#fff'} /> */}
                <View style={{ width: 30 }}></View>
            </View>
            // <View style={styles.container}>
            // <TouchableOpacity
            //   onPress={() => navigation.goBack()}
            //   activeOpacity={1}
            //   style={{
            //     flexDirection: 'row',
            //     alignItems: 'center',
            //   }}>
            //   <Ionicons
            //     style={{
            //       marginHorizontal: 10,
            //       color: COLORS.white,
            //     }}
            //     size={30}
            //     name="chevron-back"
            //   />
            // </TouchableOpacity>
            //   <View style={{flex: 1, marginLeft: 10}}>
            //     <Text
            //       numberOfLines={1}
            //       style={{
            //         color: COLORS.white,
            //         ...FONTS.h3,
            //         textTransform: 'capitalize',
            //       }}>
            //       {receiverData.groupName}
            //     </Text>


            //   </View>


            // </View>
        );
    }

    function renderBody() {
        // console.log(JSON.stringify(sorted()))
        return (
            <ImageBackground
                style={{
                    flex: 1,
                }}
                source={{ uri: "https://wallpapers.com/images/hd/whatsapp-chat-letters-and-symbols-frohqsll7jrmil09.jpg" }}>
                <FlatList
                    style={{ flex: 1 }}
                    data={sorted()}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index}
                    inverted
                    renderItem={({ item, index }) => {
                        return (<>

                            {/* {receiverData?.roomId == "g0" ?
                                (item.from == "0" && item.to == userData.student_id) ?
                                    <MsgComponent
                                        sender={item.from == userData.student_id}
                                        item={item}
                                        index={index}
                                        msgType={item.msgType}
                                        onLongPress={(item, index) => {
                                            setOnLongPressMessageData(item);
                                            setShowOnlongPressMessageModal(true);
                                        }}
                                    />
                                    : item.from == userData.student_id ?
                                        <MsgComponent
                                            sender={item.from == userData.student_id}
                                            item={item}
                                            index={index}
                                            msgType={item.msgType}
                                            onLongPress={(item, index) => {
                                                setOnLongPressMessageData(item);
                                                setShowOnlongPressMessageModal(true);
                                            }}
                                        /> :
                                        null
                                : */}
                            <MsgComponent
                                sender={
                                    index > 0 && true
                                    //  userData.student_id
                                }
                                item={item}
                                index={index}
                                msgType={item.msgType}
                                onLongPress={(item, index) => {
                                    setOnLongPressMessageData(item);
                                    setShowOnlongPressMessageModal(true);
                                }}
                            />
                            {/* } */}

                        </>
                        );
                    }}
                />
            </ImageBackground>
        );
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: COLORS.white,
            }}>
            {/* {renderHeader()} */}
            {renderBody()}

            <View
                style={{
                    backgroundColor: COLORS.darkOverlayColor2,
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: 7,
                    justifyContent: 'space-evenly',
                }}>
                {!isFocused ? (
                    <Animatable.View
                        ref={audioRecordRef}
                        style={{
                            backgroundColor: COLORS.white,
                            width: '80%',
                            borderRadius: 10,
                            borderWidth: 0.5,
                            borderColor: COLORS.darkGray,
                            paddingHorizontal: 15,
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <TextInput
                            style={{
                                flex: 1,
                                color: COLORS.black,
                                ...FONTS.h3,
                            }}
                            placeholder="type a message"
                            placeholderTextColor={COLORS.black}
                            multiline={true}
                            value={msg}
                            onChangeText={val => setMsg(val)}
                        />
                        {msg == '' && (
                            <TouchableOpacity
                                activeOpacity={0.6}
                                onPress={() => {
                                    setShowGalleryImageModal(true);
                                }}>
                                <Avatar.Icon
                                    size={30}
                                    icon="camera"
                                    style={{
                                        backgroundColor: COLORS.accent,
                                    }}
                                />
                            </TouchableOpacity>
                        )}
                    </Animatable.View>
                ) : (
                    <Animatable.View
                        ref={audioRecordRef}
                        animation="lightSpeedIn"
                        duration={300}
                        style={{
                            flex: 1,
                            // backgroundColor:"red"
                        }}>
                        <View
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>
                            <Text
                                style={{
                                    ...FONTS.h3,
                                    color: COLORS.primary,
                                }}>
                                {recordTime}
                            </Text>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-around',
                            }}>
                            <IconButton
                                // style={{backgroundColor:colors.primary}}
                                disabled={uploadingAudio}
                                icon={() => {
                                    return (
                                        <Image
                                            source={icons.trash}
                                            style={{
                                                width: 30,
                                                height: 30,
                                            }}
                                            resizeMode='contain'
                                            tintColor={COLORS.primary}
                                        />
                                    );


                                }}
                                size={30}
                                onPress={() => {
                                    onCancelRecord();
                                }}
                            />

                            {uploadingAudio ? (
                                <View
                                    style={{
                                        width: 40,
                                        height: 40,
                                        borderRadius: 40 / 2,
                                        // backgroundColor: colors.white,
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    <ActivityIndicator color={COLORS.primary} />
                                </View>
                            ) : (
                                <IconButton
                                    disabled={uploadingAudio}
                                    icon={() => {
                                        return (
                                            <Image
                                                source={icons.send}
                                                style={{
                                                    width: 30,
                                                    height: 30,
                                                }}
                                                resizeMode='contain'
                                                tintColor={COLORS.white}
                                            />
                                        );
                                    }}
                                    size={35}
                                    onPress={() => {
                                        onStopRecord();
                                    }}
                                />
                            )}
                        </View>
                    </Animatable.View>
                )}

                {msg.trim() == '' ? (
                    !isFocused && (
                        <TouchableWithoutFeedback
                            pressRetentionOffset={300}
                            onPressIn={handlePressIn}>
                            <Ionicons
                                style={{
                                    color: COLORS.white,
                                }}
                                name="mic-circle-sharp"
                                size={50}
                            />
                        </TouchableWithoutFeedback>
                    )

                ) : (
                    <TouchableOpacity
                        disabled={disabled}
                        onPress={() => {
                            sendMsg();
                        }}>
                        <Ionicons
                            style={{
                                // marginHorizontal: 15,
                                color: COLORS.primary,
                            }}
                            name="paper-plane-sharp"
                            size={35}
                        />
                    </TouchableOpacity>
                )}
            </View>
            {/* open gallery & camera */}
            <Modal
                transparent
                visible={showGalleryImageModal}
                onRequestClose={() => {
                    galleryCamModalRef.current.fadeOutDownBig(200).then(() => {
                        setShowGalleryImageModal(false);
                    });
                }}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: COLORS.darkOverlayColor,
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                    }}>
                    <TouchableOpacity
                        onPress={() => {
                            galleryCamModalRef.current.fadeOutDownBig(200).then(() => {
                                setShowGalleryImageModal(false);
                            });
                        }}
                        style={{ ...StyleSheet.absoluteFill }}></TouchableOpacity>
                    <Animatable.View
                        ref={galleryCamModalRef}
                        animation="fadeInUpBig"
                        duration={600}
                        style={{
                            backgroundColor: COLORS.white,
                            width: '100%',

                            padding: SIZES.padding,
                            borderTopLeftRadius: 15,
                            borderTopRightRadius: 15,
                        }}>
                        <Button
                            onPress={() => {
                                _openGallery();
                            }}
                            mode="contained"
                            labelStyle={{
                                ...FONTS.h3,
                            }}>
                            فتح المعرض
                        </Button>
                        <Button
                            onPress={() => {
                                _openCamera();
                            }}
                            mode="contained"
                            labelStyle={{
                                ...FONTS.h3,
                            }}
                            style={{
                                marginVertical: SIZES.base,
                                backgroundColor: COLORS.third,
                            }}>
                            فتح الكاميرا
                        </Button>
                    </Animatable.View>
                </View>
            </Modal>

            {/* open Long Press Message */}

            <Modal
                transparent
                visible={showOnlingPressMessageModal}
                onRequestClose={() => {
                    pressMessageModal.current.fadeOutDownBig(200).then(() => {
                        setShowOnlongPressMessageModal(false);
                    });
                }}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: COLORS.darkOverlayColor,
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                    }}>
                    <TouchableOpacity
                        onPress={() => {
                            pressMessageModal.current.fadeOutDownBig(200).then(() => {
                                setShowOnlongPressMessageModal(false);
                            });
                        }}
                        style={{ ...StyleSheet.absoluteFill }}></TouchableOpacity>
                    <Animatable.View
                        ref={pressMessageModal}
                        animation="fadeInUpBig"
                        duration={600}
                        style={{
                            backgroundColor: COLORS.white,
                            width: '100%',

                            padding: SIZES.padding,
                            borderTopLeftRadius: 15,
                            borderTopRightRadius: 15,
                        }}>
                        <Button
                            onPress={() => {
                                if (onLongPressMessageData?.msgType == 'text') {
                                    Clipboard.setString(onLongPressMessageData?.message);
                                } else if (onLongPressMessageData?.msgType == 'image') {
                                    Clipboard.setString(onLongPressMessageData?.messageCaption);
                                }

                                Toast('تم نسخ النص');
                                pressMessageModal.current.fadeOutDownBig(200).then(() => {
                                    setShowOnlongPressMessageModal(false);
                                });
                            }}
                            mode="contained"
                            buttonColor={COLORS.green}
                            labelStyle={{
                                ...FONTS.h3,
                            }}>
                            نسخ النص
                        </Button>
                        {onLongPressMessageData?.from == 1
                            // userData?.student_id 
                            && (
                                <Button
                                    onPress={() => {
                                        _deleteMessage();
                                    }}
                                    mode="contained"
                                    labelStyle={{
                                        ...FONTS.h3,
                                    }}
                                    buttonColor={COLORS.red}
                                    style={{
                                        marginVertical: SIZES.base,
                                    }}>
                                    حذف الرسالة
                                </Button>
                            )}
                    </Animatable.View>
                </View>
            </Modal>

            <Modal
                visible={showSelectedImageModal}
                animationType={'fade'}
                onRequestClose={() => {
                    setShowSelectedImageModal(false);
                    setSelectedImage(null);
                }}>
                <View
                    style={{
                        backgroundColor: COLORS.black,
                        flex: 1,
                    }}>
                    <View
                        style={{
                            padding: SIZES.padding,
                        }}>
                        <IconButton
                            icon={() => {
                                return (
                                    <Image
                                        source={icons.cancel}
                                        style={{
                                            width: 40,
                                            height: 40,
                                            tintColor: COLORS.white,
                                        }}
                                    />
                                );
                            }}
                            iconColor={COLORS.white}
                            size={30}
                            onPress={() => {
                                setShowSelectedImageModal(false);
                                setSelectedImage(null);
                            }}
                        />
                    </View>

                    <View
                        style={{
                            flex: 1,
                            paddingHorizontal: SIZES.padding,
                        }}>
                        <Image
                            source={{ uri: selectedImage?.path }}
                            style={{
                                width: '100%',
                                height: '100%',
                            }}
                            resizeMode="contain"
                        />
                    </View>
                    <View
                        style={{
                            backgroundColor: COLORS.lightGray1,
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingVertical: 7,
                            justifyContent: 'space-evenly',
                        }}>
                        <View
                            style={{
                                backgroundColor: COLORS.white,
                                width: '80%',
                                borderRadius: 25,
                                borderWidth: 0.5,
                                borderColor: COLORS.darkGray,
                                paddingHorizontal: 15,
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}>
                            <TextInput
                                style={{
                                    flex: 1,
                                    color: COLORS.black,
                                    ...FONTS.h3,
                                }}
                                placeholder="type a caption"
                                placeholderTextColor={COLORS.black}
                                multiline={true}
                                value={caption}
                                onChangeText={val => setCaption(val)}
                            />
                        </View>
                        {uploading ? (
                            <ActivityIndicator color={COLORS.primary} size={24} />
                        ) : (
                            <TouchableOpacity
                                disabled={disabled}
                                onPress={() => {
                                    sendMsgWithPhoto();
                                }}>
                                <Ionicons
                                    style={{
                                        // marginHorizontal: 15,
                                        color: COLORS.white,
                                    }}
                                    name="paper-plane-sharp"
                                    size={35}
                                />
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            </Modal>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container: {
        height: 70,
        backgroundColor: COLORS.primary,
        elevation: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
});
export default SingleChat;
