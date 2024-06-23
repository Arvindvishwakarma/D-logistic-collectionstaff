/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  View,
  Text,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {Card} from 'react-native-paper';
import create from '../assets/Image/create.png';
import pending from '../assets/Image/pending.png';
import booking12 from '../assets/Image/way.png';
import delivered from '../assets/Image/delivered.png';
import cancel from '../assets/Image/cancelled.png';
import print from '../assets/Image/print.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useState} from 'react';
import {useMutation, useQuery} from '@apollo/client';
import Moment from 'react-moment';
import {GET_AREA, QUERY_GET_BOOKING_COLLECTION_BY_ID} from './Graphql/Query';
import {MUTATION_UPDATE_BOOKING} from './Graphql/Mutation';
import DropDownPicker from 'react-native-dropdown-picker';
import moment from 'moment';

export default function Booking({navigation}) {
  const [userId, setUserId] = useState('');
  AsyncStorage.getItem('userId').then(id => setUserId(id));

  useEffect(() => {
    setInterval(() => {
      refetch();
    }, 3000);
  }, []);

  const [search, setSearch] = useState('');

  const {data, loading, refetch} = useQuery(
    QUERY_GET_BOOKING_COLLECTION_BY_ID,
    {
      variables: {
        collectionBoyId: `${userId}`,
      },
    },
  );

  const [bookingId, setBookingId] = useState();

  const [editBooking, {loading: bookingLoading}] = useMutation(
    MUTATION_UPDATE_BOOKING,
    {
      refetchQueries: [
        QUERY_GET_BOOKING_COLLECTION_BY_ID,
        'getBookingByCollectionBoyId',
      ],
    },
  );

  function handleClick(id) {
    setBookingId(id);
    editBooking({
      variables: {
        editBookingInput: {
          bookingId: `${id}`,
          status: 'confirm',
        },
      },
    });
  }

  console.log('data', data);

   const[activeFilter,setActiveFilter] =useState("Booking")

   const [searchArea, setSearchArea] = useState("")
   const [searchBookingId, setSearchBookingId] = useState("")

   const [searchLocation, setSearchLoaction] = useState("")
   const [searchPickDate, setSearchPickDate] = useState("")

   const [foundValue, setFoundValue] = useState();

   useEffect(() => {
     if (data) {
       setFoundValue(data.getBookingByCollectionBoyId)
     }
   }, [data]);


 



  // Filter By Pick Date
  const filterByPickDate = (e) => {
    setSearchArea('')
    setSearchLoaction('')
    setSearchPickDate('')
    setSearchBookingId('')
   
    const keyword = e;
    if (keyword !== '') {
      const results = data.getBookingByCollectionBoyId.filter((data) => {
        const dateMom = moment(data.pickUpDate);
        const dateMomFormat = dateMom.format('DD/MM/YYYY')
        console.log("dateMomFormat",dateMomFormat)
        return dateMomFormat.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundValue(results);
    }
    else {
      setFoundValue(data.getBookingByCollectionBoyId);
    }
    setSearchPickDate(keyword)

  };


  const filterByLocation = (e) => {
    setSearchArea('')
    setSearchLoaction('')
    setSearchPickDate('')
    setSearchBookingId('')
  
    const keyword = e;
    if (keyword !== '') {
      const results = data.getBookingByCollectionBoyId.filter((data) => {
        return data.allocation.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundValue(results);
    }
    else {
      setFoundValue(data.getBookingByCollectionBoyId);
    }
    setSearchLoaction(keyword);
  };

  const filterByBookingId = (e) => {
    setSearchArea('')
    setSearchLoaction('')
    setSearchPickDate('')
    setSearchBookingId('')
  
    const keyword = e;
    if (keyword !== '') {
      const results = data.getBookingByCollectionBoyId.filter((data) => {
        return data.bookingUniqueId.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundValue(results);
    }
    else {
      setFoundValue(data.getBookingByCollectionBoyId);
    }
    setSearchBookingId(keyword);
  };

  const filterByArea = (e) => {
    setSearchArea('')
    setSearchLoaction('')
    setSearchPickDate('')
    setSearchBookingId('')
    const keyword = e;
    if (keyword !== '') {
      const results = data.getBookingByCollectionBoyId.filter((data) => {
        return data.area.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundValue(results);
    }
    else {
      setFoundValue(data.getBookingByCollectionBoyId);
    }
    setSearchArea(keyword);
  };

  function clearSearch() {
    setFoundValue(data.getBookingByCollectionBoyId)
  }

  const{data:DataAr,loading:loadingArea} =useQuery(GET_AREA)

  const [openArea, setOpenArea] = useState(false);
  const [valueArea, setValueArea] = useState(null);
  const[itemsArea,setItemsArea] =useState([])

  console.log("dataA",DataAr)


  useEffect(()=>{
    DataAr && DataAr.getAllArea.map(item=>{
       return(
           setItemsArea(items => [...items,{
               label:`${item.areaAddress}`,
               value:`${item.areaAddress}`
           }]) 
       )
     
    })
  },[data])

  return (
    <View style={{backgroundColor: '#fff', height: '100%'}}>
      <ScrollView>
        <View
          style={{
            backgroundColor: '#3498DB',
            height: 200,
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}>
          <StatusBar
            barStyle="light-content"
            hidden={false}
            backgroundColor="#3498DB"
            translucent={true}
          />
          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 70,
            }}>
            <View style={{flexDirection: 'row', width: '90%'}}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Feather name="arrow-left" size={25} style={{color: '#fff'}} />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 18,
                  fontFamily: 'Poppins-SemiBold',
                  color: '#fff',
                  marginLeft: 10,
                }}>
                All Booking{' '}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>

            {
                activeFilter ==="Booking" ?
                <Card
                style={{
                  width: '90%',
                  height: 50,
                  marginTop: 10,
                  marginBottom: 10,
                  elevation: 5,
                  borderRadius: 10,
                }}>
                <View style={{flexDirection: 'row', width: '100%'}}>
                  <View style={{width: '90%'}}>
                    <TextInput
                      placeholder="Booking No.."
                      style={{marginLeft: 10, color: '#000'}}
                      placeholderTextColor="#95A5A6"
                      onChangeText={filterByBookingId}
                      value={searchBookingId}
                    />
                  </View>
                  <Feather
                    name="search"
                    size={20}
                    style={{marginTop: 13, color: '#000'}}
                  />
                </View>
              </Card>

                :

                activeFilter ==="Area" ?
                <Card
                style={{
                  width: '90%',
                  height: 50,
                  marginTop: 10,
                  marginBottom: 10,
                  elevation: 5,
                  borderRadius: 10,
                }}>
                <View style={{flexDirection: 'row', width: '100%'}}>
                  <View style={{width: '90%'}}>
                    <TextInput
                      placeholder="Area"
                      style={{marginLeft: 10, color: '#000'}}
                      placeholderTextColor="#95A5A6"
                      onChangeText={filterByArea}
                      value={searchArea}
                    />
                  </View>
                  <Feather
                    name="search"
                    size={20}
                    style={{marginTop: 13, color: '#000'}}
                  />
                </View>
              </Card>


                :

                activeFilter ==="Date" ?
                <Card
                style={{
                  width: '90%',
                  height: 50,
                  marginTop: 10,
                  marginBottom: 10,
                  elevation: 5,
                  borderRadius: 10,
                }}>
                <View style={{flexDirection: 'row', width: '100%'}}>
                  <View style={{width: '90%'}}>
                    <TextInput
                      placeholder="Date"
                      style={{marginLeft: 10, color: '#000'}}
                      placeholderTextColor="#95A5A6"
                      onChangeText={filterByPickDate}
                      value={searchPickDate}
                    />
                  </View>
                  <Feather
                    name="search"
                    size={20}
                    style={{marginTop: 13, color: '#000'}}
                  />
                </View>
              </Card>
              :

              activeFilter ==="Address" ?
              <Card
              style={{
                width: '90%',
                height: 50,
                marginTop: 10,
                marginBottom: 10,
                elevation: 5,
                borderRadius: 10,
              }}>
              <View style={{flexDirection: 'row', width: '100%'}}>
                <View style={{width: '90%'}}>
                  <TextInput
                    placeholder="Address"
                    style={{marginLeft: 10, color: '#000'}}
                    placeholderTextColor="#95A5A6"
                    onChangeText={filterByLocation}
                    value={searchLocation}
                  />
                </View>
                <Feather
                  name="search"
                  size={20}
                  style={{marginTop: 13, color: '#000'}}
                />
              </View>
            </Card>
            :
            <></>


            }



        </View>

      <View style={{flexDirection:"row"}}>
      <Text style={{marginLeft:10,marginTop:5,fontFamily: 'Poppins-Medium',color:"#3498DB"}}>Filter</Text>
        <ScrollView  horizontal={true}  showsHorizontalScrollIndicator={false}>
       <Card style={{width:100,height:30,marginTop:2,marginLeft:10,marginBottom:2,borderWidth:1,borderColor:activeFilter==="Booking"?"#3498DB":"#000",}}>
        <TouchableOpacity onPress={()=>setActiveFilter("Booking")}>
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"}}>
        <Text style={{color:activeFilter==="Booking"?"#3498DB":"#000", fontFamily: 'Poppins-SemiBold',fontSize:12}}>Booking No.</Text>
        </View>
        </TouchableOpacity>
       </Card>
       <Card style={{width:100,height:30,marginTop:2,marginLeft:10,marginBottom:2,borderWidth:1,borderColor:activeFilter==="Area"?"#3498DB":"#000",}}>
       <TouchableOpacity onPress={()=>setActiveFilter("Area")}>
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"}}>
        <Text style={{color:activeFilter==="Area"?"#3498DB":"#000", fontFamily: 'Poppins-SemiBold',fontSize:12}}>Area</Text>
        </View>
        </TouchableOpacity>
       </Card>
       <Card style={{width:100,height:30,marginTop:2,marginLeft:10,marginBottom:2,borderWidth:1,borderColor:activeFilter==="Date"?"#3498DB":"#000"}}>
       <TouchableOpacity  onPress={()=>setActiveFilter("Date")}>
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"}}>
        <Text style={{color:activeFilter==="Date"?"#3498DB":"#000", fontFamily: 'Poppins-SemiBold',fontSize:12}}>Date</Text>
        </View>
        </TouchableOpacity>
       </Card>

       <Card style={{width:100,height:30,marginTop:2,marginLeft:10,marginBottom:2,borderWidth:1,borderColor:activeFilter==="Address"?"#3498DB":"#000",}}>
       <TouchableOpacity  onPress={()=>setActiveFilter("Address")}>
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"}}>
        <Text style={{color:activeFilter==="Address"?"#3498DB":"#000", fontFamily: 'Poppins-SemiBold',fontSize:12}}>Address</Text>
        </View>
        </TouchableOpacity>
       </Card>
        </ScrollView>


      </View>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
             
         
                  {foundValue &&
               foundValue.slice().reverse().map(item => {
                    return (
                      <Card
                        style={{
                          width: '90%',
                          marginTop: 10,
                          marginBottom: 10,
                          elevation: 5,
                          borderRadius: 10,
                          borderWidth: 1,
                          borderColor:
                            item.status === 'pending' ? '#e74c3c' : '#2ecc71',
                        }}>
                        <View
                          style={{
                            flexDirection: 'row',
                            width: '100%',
                            justifyContent: 'space-between',
                          }}>
                          <View style={{width: '90%', height: '100%'}}>
                            <Text
                              style={{
                                marginLeft: 10,
                                color: '#34495E',
                                fontSize: 12,
                                marginTop: 7,
                                fontFamily: 'Poppins-SemiBold',
                              }}>
                              #{item.bookingUniqueId}
                            </Text>
                            <View
                              style={{flexDirection: 'row', marginLeft: 10}}>
                              <Text
                                style={{
                                  fontSize: 11,
                                  fontFamily: 'Poppins-SemiBold',
                                  color: '#2980B9',
                                }}>
                                Pickup Date :{' '}
                              </Text>
                              <Text
                                style={{
                                  fontSize: 11,
                                  fontFamily: 'Poppins-SemiBold',
                                  color: '#34495E',
                                }}>
                                <Moment element={Text} format="DD-MM-YYYY">
                                  {item.pickUpDate}
                                </Moment>{' '}
                              </Text>
                            </View>
                            <View
                              style={{flexDirection: 'row', marginLeft: 10}}>
                              <Text
                                style={{
                                  fontSize: 11,
                                  fontFamily: 'Poppins-SemiBold',
                                  color: '#2980B9',
                                }}>
                                Pickup Time :{' '}
                              </Text>
                              <Text
                                style={{
                                  fontSize: 11,
                                  fontFamily: 'Poppins-SemiBold',
                                  color: '#34495E',
                                }}>
                                {item.pickUpTime}
                              </Text>
                            </View>
                            <View
                              style={{flexDirection: 'row', marginLeft: 10}}>
                              <Text
                                style={{
                                  fontSize: 11,
                                  fontFamily: 'Poppins-SemiBold',
                                  color: '#2980B9',
                                }}>
                               Area name :{' '}
                              </Text>
                              <Text
                                style={{
                                  fontSize: 11,
                                  fontFamily: 'Poppins-SemiBold',
                                  color: '#34495E',
                                }}>
                                {item.area}
                              </Text>
                            </View>
                            <View
                              style={{
                                flexDirection: 'row',
                                marginLeft: 10,
                                width: '70%',
                              }}>
                              <Text
                                style={{
                                  fontSize: 11,
                                  fontFamily: 'Poppins-SemiBold',
                                  color: '#2980B9',
                                }}>
                                Pickup Address :{' '}
                              </Text>
                              <Text
                                style={{
                                  fontSize: 11,
                                  fontFamily: 'Poppins-SemiBold',
                                  color: '#34495E',
                                }}>
                                {item.allocation}
                              </Text>
                            </View>

                            <View
                              style={{
                                flexDirection: 'row',
                                marginLeft: 10,
                                width: '90%',
                                marginBottom: 5,
                              }}>
                              <Text
                                style={{
                                  fontSize: 11,
                                  fontFamily: 'Poppins-SemiBold',
                                  color: '#2980B9',
                                }}>
                                Notes :{' '}
                              </Text>
                              <Text
                                style={{
                                  fontSize: 11,
                                  fontFamily: 'Poppins-SemiBold',
                                  color: '#34495E',
                                }}>
                                {item.notes}
                              </Text>
                            </View>

                            <View
                              style={{
                                flexDirection: 'row',
                                marginLeft: 10,
                                width: '90%',
                                marginBottom: 5,
                              }}>
                              <Text
                                style={{
                                  fontSize: 11,
                                  fontFamily: 'Poppins-SemiBold',
                                  color:
                                    item.status === 'pending'
                                      ? '#e74c3c'
                                      : '#2ecc71',
                                }}>
                                {item.status}
                              </Text>
                            </View>
                          </View>
                        </View>

                        <View
                          style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: '100%',
                            marginBottom: 10,
                          }}>
                          <View
                            style={{
                              width: '90%',
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                            }}>
                            <View
                              style={{
                                width: '50%',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}>
                              {item.id === bookingId && bookingLoading ? (
                                <View
                                  style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: 7,
                                  }}>
                                  <ActivityIndicator
                                    color="#000"
                                    size="small"
                                  />
                                </View>
                              ) : item.status === 'pending' ? (
                                <View
                                  style={{
                                    width: '90%',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#3498DB',
                                    height: 35,
                                    borderRadius: 100,
                                  }}>
                                  <View
                                    style={{
                                      width: '100%',
                                      flexDirection: 'row',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                    }}>
                                    <TouchableOpacity
                                      onPress={() => handleClick(item.id)}>
                                      <View
                                        style={{
                                          width: '100%',
                                          flexDirection: 'row',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                        }}>
                                        <Text
                                          style={{
                                            color: '#fff',
                                            fontFamily: 'Poppins-SemiBold',
                                            fontSize: 11,
                                          }}>
                                          Confirm
                                        </Text>
                                      </View>
                                    </TouchableOpacity>
                                  </View>
                                </View>
                              ) : (
                                <View
                                  style={{
                                    width: '90%',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#3498DB',
                                    height: 35,
                                    borderRadius: 100,
                                    opacity: 0.5,
                                  }}>
                                  <View
                                    style={{
                                      width: '100%',
                                      flexDirection: 'row',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                    }}>
                                    <View
                                      style={{
                                        width: '100%',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                      }}>
                                      <Text
                                        style={{
                                          color: '#fff',
                                          fontFamily: 'Poppins-SemiBold',
                                          fontSize: 11,
                                        }}>
                                        Confirm
                                      </Text>
                                    </View>
                                  </View>
                                </View>
                              )}
                            </View>
                            <View
                              style={{
                                width: '50%',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}>
                              {item.status === 'confirm' ? (
                                <View
                                  style={{
                                    width: '90%',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#fdcb6e',
                                    height: 35,
                                    borderRadius: 100,
                                  }}>
                                  <View
                                    style={{
                                      width: '100%',
                                      flexDirection: 'row',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                    }}>
                                    <TouchableOpacity
                                      onPress={() =>
                                        navigation.navigate('AddInvoice', {
                                          bookingId: item.id,
                                          bookingUniqueId: item.bookingUniqueId,
                                          customerId: item.customerId,
                                        })
                                      }>
                                      <View
                                        style={{
                                          width: '100%',
                                          flexDirection: 'row',
                                          alignItems: 'center',
                                          justifyContent: 'center',
                                        }}>
                                        <Text
                                          style={{
                                            color: '#fff',
                                            fontFamily: 'Poppins-SemiBold',
                                            fontSize: 11,
                                          }}>
                                          Add Invoice
                                        </Text>
                                      </View>
                                    </TouchableOpacity>
                                  </View>
                                </View>
                              ) : (
                                <View
                                  style={{
                                    width: '90%',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#fdcb6e',
                                    height: 35,
                                    borderRadius: 100,
                                    opacity: 0.5,
                                  }}>
                                  <View
                                    style={{
                                      width: '100%',
                                      flexDirection: 'row',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                    }}>
                                    <View
                                      style={{
                                        width: '100%',
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                      }}>
                                      <Text
                                        style={{
                                          color: '#fff',
                                          fontFamily: 'Poppins-SemiBold',
                                          fontSize: 11,
                                        }}>
                                        Add Invoice
                                      </Text>
                                    </View>
                                  </View>
                                </View>
                              )}
                            </View>
                          </View>
                        </View>
                      </Card>
                    );
                  })}
                
            




             


      
        </View>
      </ScrollView>
    </View>
  );
}
