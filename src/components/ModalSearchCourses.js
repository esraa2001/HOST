// import {
//   View,
//   Text,
//   Modal,
//   TextInput,
//   TouchableOpacity,
//   FlatList,
// } from 'react-native';
// import React, {useState, useEffect} from 'react';
// import Header from './Header';
// import {COLORS, FONTS, SIZES, icons, lotties} from '../constants';
// import {RFValue} from 'react-native-responsive-fontsize';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import AntDesign from 'react-native-vector-icons/AntDesign';
// import lodash from 'lodash/lodash';
// import Auth from '../Services';
// import AnimatedLottieView from 'lottie-react-native';
// const ModalSearchCourses = ({visable, onPress}) => {
//   const [txtInput, setTxtInput] = useState('');
//   const [historyData, setHistoryData] = useState([]);
//   const [showHistory, setShowHistory] = useState(true);
//   const [historyDataOriginal, setHistoryDataOriginal] = useState([]);

//   useEffect(() => {
//     _getStoredData();
//   }, []);
//   async function _getStoredData() {
//     let data = await Auth.gethistorySearch();
//     if (data != null) {
//       setHistoryData(data);
//       setHistoryDataOriginal(data);
//     }
//   }

//   function renderHeader() {
//     return <Header onPress={onPress} title={'Search'} />;
//   }

//   async function _searchFun(e) {
//     setTxtInput(e);
//     const formattedQuery = e.toLowerCase();
//     const filteredData = lodash.filter(historyDataOriginal, item => {
//       return contains(item, formattedQuery);
//     });
//     setHistoryData(filteredData);
//   }

//   const contains = (items, query) => {
//     // const {} = items;
//     if (items?.toLowerCase().includes(query)) {
//       return true;
//     }

//     return false;
//   };
//   function renderBody() {
//     return (
//       <View
//         style={{
//           marginTop: SIZES.radius,
//           paddingHorizontal: SIZES.padding,
//           paddingBottom: SIZES.padding,
//         }}>
//         <View
//           style={{
//             backgroundColor: COLORS.gray3,
//             flexDirection: 'row',
//             // paddingVertical: SIZES.base,
//             paddingHorizontal: SIZES.radius,
//             borderRadius: RFValue(100),
//             alignItems: 'center',
//           }}>
//           <Ionicons
//             name="search-sharp"
//             size={RFValue(24)}
//             color={COLORS.gray}
//           />
//           <TextInput
//             value={txtInput}
//             onChangeText={e => {
//               _searchFun(e);
//             }}
//             onSubmitEditing={async () => {
//               await Auth.setHistorySearch([
//                 ...new Set([...historyData, txtInput.trim()]),
//               ]).finally(() => {
//                 _getStoredData();
//               });
//             }}
//             style={{
//               ...FONTS.h3,
//               marginLeft: SIZES.base,
//               flex: 1,
//             }}
//             placeholder="Search"
//           />
//           {txtInput.length > 0 && (
//             <TouchableOpacity
//               onPress={() => {
//                 setTxtInput('');
//               }}>
//               <AntDesign
//                 name="closecircle"
//                 size={RFValue(20)}
//                 color={COLORS.primary}
//               />
//             </TouchableOpacity>
//           )}
//         </View>

//         <View
//           style={{
//             marginVertical: SIZES.radius,
//           }}>
//           <FlatList
//             data={historyData}
//             keyExtractor={(_, index) => `searchHistory-${index}`}
//             ListHeaderComponent={
//               historyData?.length > 0 && (
//                 <View
//                   style={{
//                     flexDirection: 'row',
//                     alignItems: 'center',
//                     justifyContent: 'space-between',
//                   }}>
//                   <Text
//                     style={{
//                       ...FONTS.body3,
//                       color: COLORS.black,
//                     }}>
//                     Recent
//                   </Text>
//                   <TouchableOpacity
//                     onPress={async () => {
//                       await Auth.setHistorySearch([]).finally(() => {
//                         _getStoredData();
//                       });
//                     }}>
//                     <Text
//                       style={{
//                         ...FONTS.h3,
//                         color: COLORS.primary,
//                       }}>
//                       Clear All
//                     </Text>
//                   </TouchableOpacity>
//                 </View>
//               )
//             }
//             renderItem={({item, index}) => {
//               return (
//                 <View
//                   style={{
//                     flexDirection: 'row',
//                     alignItems: 'center',
//                     justifyContent: 'space-between',
//                     marginVertical: RFValue(6),
//                   }}>
//                   <TouchableOpacity
//                     style={{
//                       flex: 1,
//                     }}>
//                     <Text
//                       style={{
//                         ...FONTS.h3,
//                       }}>
//                       {item}
//                     </Text>
//                   </TouchableOpacity>

//                   <TouchableOpacity
//                     onPress={async () => {
//                       let allData = [...historyData].filter(
//                         (item, innerIndex) => index != innerIndex,
//                       );
//                       await Auth.setHistorySearch(allData).finally(() => {
//                         _getStoredData();
//                       });
//                     }}>
//                     <AntDesign
//                       name="closecircleo"
//                       size={RFValue(24)}
//                       color={COLORS.primary}
//                     />
//                   </TouchableOpacity>
//                 </View>
//               );
//             }}
//             ListEmptyComponent={
//               <View>
//                 <AnimatedLottieView
//                   source={lotties.emptyData}
//                   loop
//                   autoPlay
//                   style={{
//                     width: RFValue(100),
//                     height: RFValue(100),
//                     alignSelf: 'center',
//                   }}
//                   resizeMode="contain"
//                 />
//                 <Text
//                   style={{
//                     ...FONTS.h3,
//                     fontFamily: FONTS.fontFamilySemiBold,
//                     color: COLORS.black,
//                     textAlign: 'center',
//                   }}>
//                   No Search History
//                 </Text>
//               </View>
//             }
//           />
//         </View>
//       </View>
//     );
//   }
//   return (
//     <Modal animationType="slide" visible={visable} onRequestClose={onPress}>
//       <View style={{
//         marginTop:RFValue(10)
//       }} >
//     {renderHeader()}
//       {renderBody()}

//       </View>

//     </Modal>
//   );
// };

// export default ModalSearchCourses;

import {
  View,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from './Header';
import {COLORS, FONTS, SIZES, icons, lotties} from '../constants';
import {RFValue} from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import lodash from 'lodash/lodash';
import Auth from '../Services';
import * as Animatable from 'react-native-animatable';
import AnimatedLottieView from 'lottie-react-native';
import {useSelector} from 'react-redux';
const ModalSearchCourses = ({visable, onPress, onNavigate}) => {
  const [txtInput, setTxtInput] = useState('');
  const {homeData, homeLoading} = useSelector(s => s.AppDataReducer);
  const [allData, setAllData] = useState([]);
  const [allDataOriginal, setAllDataOriginal] = useState([]);

  useEffect(() => {
    _getStoredData();
  }, []);

  async function _getStoredData() {
    setAllData(homeData?.courses);
    setAllDataOriginal(homeData?.courses);
  }

  function renderHeader() {
    return <Header onPress={onPress} title={'Search'} />;
  }

  async function _searchFun(e) {
    setTxtInput(e);
    const formattedQuery = e.toLowerCase();
    const filteredData = lodash.filter(allDataOriginal, item => {
      return contains(item, formattedQuery);
    });
    setAllData(filteredData);
  }

  const contains = (items, query) => {
    const {course_name} = items;
    if (course_name?.toLowerCase().includes(query)) {
      return true;
    }

    return false;
  };
  function renderBody() {
    return (
      <View
        style={{
          marginTop: SIZES.radius,
          paddingHorizontal: SIZES.padding,
          paddingBottom: SIZES.padding,
        }}>
        <View
          style={{
            backgroundColor: COLORS.gray3,
            flexDirection: 'row',
            // paddingVertical: SIZES.base,
            paddingHorizontal: SIZES.radius,
            borderRadius: RFValue(100),
            alignItems: 'center',
          }}>
          <Ionicons
            name="search-sharp"
            size={RFValue(24)}
            color={COLORS.gray}
          />
          <TextInput
            value={txtInput}
            onChangeText={e => {
              _searchFun(e);
            }}
            style={{
              ...FONTS.h3,
              marginLeft: SIZES.base,
              flex: 1,
            }}
            placeholder="Search"
          />
          {txtInput.length > 0 && (
            <TouchableOpacity
              onPress={() => {
                setTxtInput('');
              }}>
              <AntDesign
                name="closecircle"
                size={RFValue(20)}
                color={COLORS.primary}
              />
            </TouchableOpacity>
          )}
        </View>

        <View
          style={{
            marginVertical: SIZES.radius,
          }}>
          <FlatList
            data={allData}
            keyExtractor={(_, index) => `searchHistory-${index}`}
            renderItem={({item, index}) => {
              return (
                <Animatable.View
                  delay={50 * index}
                  animation={'fadeInRight'}
                  useNativeDriver
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginVertical: RFValue(6),
                    borderWidth: 0.4,
                    borderColor: COLORS.gray4,
                    padding: SIZES.radius,
                    borderRadius: SIZES.radius,
                  }}>
                  <TouchableOpacity
                    onPress={() => {
                      onNavigate(item);
                    }}
                    style={{
                      flex: 1,
                    }}>
                    <Text
                      style={{
                        ...FONTS.h3,
                        fontFamily: FONTS.fontFamilyBold,
                        color: COLORS.black,
                      }}>
                      {item.course_name}
                    </Text>
                  </TouchableOpacity>
                </Animatable.View>
              );
            }}
            ListEmptyComponent={
              <View>
                <AnimatedLottieView
                  source={lotties.emptyData}
                  loop
                  autoPlay
                  style={{
                    width: RFValue(100),
                    height: RFValue(100),
                    alignSelf: 'center',
                  }}
                  resizeMode="contain"
                />
                <Text
                  style={{
                    ...FONTS.h3,
                    fontFamily: FONTS.fontFamilySemiBold,
                    color: COLORS.black,
                    textAlign: 'center',
                  }}>
                  The course you are looking for was not found
                </Text>
              </View>
            }
          />
        </View>
      </View>
    );
  }
  return (
    <Modal animationType="slide" visible={visable} onRequestClose={onPress}>
      <View
        style={{
          marginTop: RFValue(10),
        }}>
        {renderHeader()}
        {renderBody()}
      </View>
    </Modal>
  );
};

export default ModalSearchCourses;
