import React, { useState ,useRef} from 'react';
import { View , Dimensions, Image, Text, TouchableOpacity,
     ScrollView , TextInput, Animated , FlatList} from 'react-native';
const {width , height} = Dimensions.get('screen')
import { SIZES, icons , images } from '../../../constants';
import { COLORS,FONTS } from '../../../constants';
import { Icon } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';

function HOME(props) {
  const scrollViewRef = useRef();
 const [Where , setWhere] =useState('')
 const [Adult , setAdult] = useState('')
 const [selectedDate , setselectedDate] = useState('')
 const [currentPage, setCurrentPage] = useState(0);
 
 const Data =[
  {
    id:0,
    title:'Paris-France',
    description : "stay with David",
    image :[  images.Bedroom,
   images.LivingRoom,
   images.Living2
    ],
    fav:true,
    date:'13-14 june',
    price:400,
    rate :2.9
  },
  {
    id:0,
    title:'Paris-France',
    description : "stay with David",
    image :[  images.Bedroom,
   images.LivingRoom,
   images.Living2
    ],
    fav:true,
    date:'13-14 june',
    price:400,
    rate :2.9
  }
 ]
 const [current_Page, setCurrent_Page] = useState(0);
 const scrollRef = useRef();

 const handlePageChange = (event) => {
   const { contentOffset } = event.nativeEvent;
   const currentIndex = Math.round(contentOffset.x / scrollViewRef);
   setCurrent_Page(currentIndex);}
  return(
    <>
      <View style={{
      flex: 1,
      padding: SIZES.padding,
      backgroundColor: COLORS.white
    }}>
      <ScrollView>
        <View style={{
          width: '100%',
          marginTop: '5%',
          alignSelf: 'center',
          borderColor: "#ccc",
          borderWidth: 1,
          borderRadius: 20,
          paddingHorizontal: '3%',
          flexDirection: 'row',
          alignItems: 'center'
        }}>
          <Image style={{
            width: '8%',
            height: '34%',
          }}
            source={images.search}></Image>

          <TextInput
            style={{
              backgroundColor: null,
              fontSize: 15
            }}
            placeholder='Where to?'
            placeholderTextColor={"#aaa"}
            value={Where}
            onChangeText={text => {
              setWhere(text);
            }}
          />
        </View>

        <View style={{
          backgroundColor: '#fff',
          alignItems: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <View style={{
            width: '48%',
            alignSelf: 'center',
            borderColor: "#ccc",
            borderWidth: 1,
            borderRadius: 20,
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: '3%',
            marginTop: '3%'
          }}>
            <Image style={{
              width: '15%',
              height: RFValue(15)
            }}
              source={icons.user}></Image>

            <TextInput
              style={{
                backgroundColor: null,
                fontSize: 15
              }}
              placeholder='adults'
              placeholderTextColor={"#aaa"}
              value={Adult}
              onChangeText={text => {
                setAdult(text);
              }}
            />
          </View>
          <View style={{
            width: '48%',
            marginTop: '3%',
            alignSelf: 'center',
            borderColor: "#ccc",
            borderWidth: 1,
            borderRadius: 20,
            paddingHorizontal: '3%',
            flexDirection: 'row',
            alignItems: 'center'
          }}>
            <Image style={{
              width: '15%',
              height: RFValue(18)
            }}
              source={icons.date}></Image>

            <TextInput
              style={{
                backgroundColor: null,
                fontSize: 15
              }}
              placeholder='select date'
              placeholderTextColor={"#aaa"}
              value={selectedDate}
              onChangeText={text => {
                setselectedDate(text);
              }}
            />
          </View>
        </View>

        <TouchableOpacity style={{
          marginTop: '5%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: COLORS.primary,
          borderRadius: RFValue(20),
          height: RFValue(40)
        }}
          onPress={() => {
            // Implement search functionality here
          }}
        >
          <Text style={{
            ...FONTS.body3,
            color: COLORS.white
          }}>Search</Text>
        </TouchableOpacity>

        <FlatList
          data={Data}
          renderItem={({ item, index }) =>
            <View style={{
              marginTop: RFValue(20),
              borderRadius: 40,
            }}>
              <ScrollView
                ref={scrollRef}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={handlePageChange}
                scrollEventThrottle={16}
              >
                {item.image.map((image, index) => (
                  <Image
                    key={index}
                    style={{
                      width: RFValue(308),
                      height: RFValue(308),
                      borderRadius: 40,
                      backgroundColor: index === current_Page ? '#1976D2' : '#ccc',
                      marginHorizontal: -.3,
                    }}
                    source={image}
                    resizeMode='cover'
                  />
                ))}
              </ScrollView>
              <View style={{
                position: 'absolute',
                zIndex: 1,
                marginLeft: '5%',
                marginTop: '10%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '90%'
              }}>
                <Image style={{
                  width: RFValue(20),
                  height: RFValue(20),
                  tintColor: item.fav ? '#f00' : COLORS.white,
                }}
                  source={icons.heart}
                ></Image>
                <View style={{
                  backgroundColor: COLORS.white,
                  borderRadius: 30,
                  paddingHorizontal: '5%',
                  width: '57%',
                  alignItems: 'center'
                }}>
                  <Text style={{
                    color: COLORS.black,
                    ...FONTS.h5
                  }}
                    numberOfLines={1}
                  >Favorite to customers</Text>
                </View>
              </View>
              <View style={{
                paddingHorizontal: '5%'
              }}>
                <View style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',

                }}>
                  <Text style={{
                    ...FONTS.body4,
                    color: COLORS.black
                  }}>{item.rate} ★</Text>
                  <Text style={{
                    ...FONTS.body4,
                    color: COLORS.black
                  }}>{item.title}</Text>
                </View>
                <Text style={{
                  ...FONTS.body4,
                  color: COLORS.black,
                  textAlign: 'right'
                }}>{item.date} </Text>
                <Text style={{
                  ...FONTS.body4,
                  color: COLORS.black,
                  textAlign: 'right'
                }}>{item.price} $ per night</Text>
              </View>
            </View>
          }
        />
      </ScrollView>
    </View>
    </>
  )
//     const MyImages ={
//        sea : icons.sea,
//         beach : icons.beach,
//         windmills: icons.windmills,
//         rooms : icons.beds 
//     }
//     const data = Object.keys(MyImages).map((i)=>({
//         key :i,
//         title : i,
//         image : MyImages[i],
//         ref : React.createRef()
//     }))
//     const Tab =React.forwardRef(({item , onItemPress} ,ref) => {
//         return (
//         <>
//         <TouchableOpacity onPress={onItemPress}>
//         <View ref={ref}>
//             <Text style={{
//                 color:'#f00',
//                 fontSize:15,
//                 // textTransform:'uppercase'
//             }}>{item.title}</Text>
//         </View>
//         </TouchableOpacity>
//         </>)
//     });
//     const Tabs = ({ data, scrollX , onItemPress}) => {
//         const [measures, setMeasures] = React.useState([]);
//         const containerRef = React.useRef();
      
//         React.useEffect(() => {
//           const m = [];
//           data.forEach((item) => {
//             if (item.ref.current) {
//               item.ref.current.measureLayout(containerRef.current, (x, y, width, height) => {
//                 m.push({ x, y, width, height });
//                 if (m.length === data.length) {
//                   setMeasures(m);
//                 }
//               });
//             }
//           });
//         }, [data]);
      
//         return (
//           <View style={{ position: 'absolute', top: 50, width }}>
//             <View style={{ justifyContent: 'space-evenly', flex: 1, flexDirection: 'row' }}>
//               {data.map((item , index) => {
//                 return <Tab key={item.key} item={item} ref={item.ref} onItemPress={
//                   ()=>{
//                     onItemPress(index)
//                   }
//                 }></Tab>;
//               })}
//             </View>
//            {measures.length >0&& <Indecator measures={measures} scrollX={scrollX} />}
//           </View>
//         );
//       };
//     const [Where,setWhere] = useState("")
//    const scrollX = React.useRef(new Animated.Value(0)).current;
// const Indecator =({measures , scrollX})=>{
//     const InputRange = data.map((_,i) => i*width);
//     const indicatorWidth = scrollX.interpolate({
//         InputRange,
//         outputRange : measures.map((measure)=>measure.width)
//     })
//     const translateX = scrollX.interpolate({
//         InputRange,
//         outputRange : measures.map((measure)=>measure.x)
//     })
// return(

//     <Animated.View style={{
//         position:'absolute',
//         height:4,
//         width:measures[0].width,
//         backgroundColor:'#f00',
//         bottom:-10,
//         left :measures[0].x
        
//     }}/>
// )
// }
// const onItemPress = React.useCallback(itemIndex =>{
//    ref.current?.scrollToOffset({
//   offset : itemIndex*width
//    }) 
// })
//     return (
//         <>
//         <View style={{
//             flex:1,
//             backgroundColor:'#fff',
//             alignItems:'center',
//             justifyContent:'center'
//         }}>
//             <Animated.FlatList data={data}
//             keyExtractor={item => item.key}
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             pagingEnabled
//             bounces={false}
//             onScroll={Animated.event(
//                 [{nativeEvent :{contentOffset :{x:scrollX}}}],
//                 {useNativeDriver:false}
//             )}
//             renderItem={({item})=>{
//                 return <View style={{
//                 width,height
//                 }}>
//                     <Image source={item.image} 
//                      style={{
//                         flex:1,
//                         resizeMode:'cover'
//                     }}></Image>
//                 </View>
//             }}
//             >

//             </Animated.FlatList>
            /*{ <View style={{
                width:width,
                height:height*.1,
                backgroundColor:'#fff',
                flexDirection:'row',
                paddingHorizontal:'4%',
                borderBottomColor:'#ccc',
                borderBottomWidth:1,
                justifyContent:'space-between',
                alignItems:'center',
                paddingTop:'3%'

            }}> 
                <ScrollView horizontal>
               {TopCategories.map((item,index)=>(
                <>
                <TouchableOpacity style={{
                    backgroundColor:'#fff',
                    justifyContent:'space-around',
                    width:70,
                    height:60,
                    alignItems:'center'

                }}
                onPress={()=>{
                  
                handleSelectedTap(index);
                }}
                >
                    <Image source={item.icon} style={{
                      width:'40%',
                      height:'40%'
                    }}></Image>
                    <Text style={{
                        fontSize:SIZES.h5,
                        color:item.selected?"#000":'#aaa',
                        fontWeight:item.selected?"900":"100",
                    }}>{item.name}</Text>
                </TouchableOpacity>
                </>
               ))}
               </ScrollView>
            </View> }*/
           /* { <ScrollView>
            <View style={{
                 width:width,
                 height:height*.3,
                 backgroundColor:'#fff',
                 paddingHorizontal:'4%',
                 alignItems:'center'
                
            }}>
                <View style={{
                    width:'100%',
                    height:'30%',
                    marginTop:'5%',
                    alignSelf:'center',
                    borderColor:"#ccc",
                    borderWidth:1,
                    borderRadius:20,
                    paddingHorizontal:'3%',
                    flexDirection:'row',
                    alignItems:'center'
                }}>
                    <Image style={{
                        width:'8%',
                        height:'30%',
                    }} 
                    source={images.search}></Image>
                   
                 <TextInput
            style={{
              width:'80%',
              height:'100%',
              backgroundColor: null,
              fontSize:15 
            }}
           
           placeholder='Where to?'
           placeholderTextColor={"#aaa"}
            value={Where} 
            onChangeText={text => {
              setWhere(text); 
            }}
            
          />
          </View>
            </View>
            </ScrollView>} */
            // <Tabs scrollX={scrollX} data={data} onItemPress={onItemPress}></Tabs>
        
 
}

export default HOME;