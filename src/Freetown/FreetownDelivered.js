import { View, Text, StatusBar, ScrollView, TouchableOpacity, TextInput, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import { Card } from 'react-native-paper';
import { useQuery } from '@apollo/client';
import { QUERY_GET_INVIOCE_FREETOWN_ON_WAY, QUERY_GET_INVOICE_FREETOWN_DELIVERED } from '../Graphql/Query';
import Moment from 'react-moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import found from "../../assets/Image/nofound.jpg"
import moment from 'moment'


export default function FreetownDelivered({ navigation }) {

    const [userId, setUserId] = useState()
    useEffect(() => {
        AsyncStorage.getItem('userId').then(id => setUserId(id));
    }, [])

    const { data, loading } = useQuery(QUERY_GET_INVOICE_FREETOWN_DELIVERED, {
        variables: {
            "collectionBoyFreetownId": `${userId}`
        },
        pollInterval: 300,
    })

    const [search, setSearch] = useState("")
    const[activeFilter,setActiveFilter] =useState("InvoiceNo")

    const [foundValue, setFoundValue] = useState();

    useEffect(() => {
      if (data) {
        setFoundValue(data.getInvoiceByCollectionBoyFreetownIdonDelivered)
      }
    }, [data]);

    const [searchInvoiceNo, setSearchInvoiceNo] = useState("");
    const [searchRecipient, setSearchRecipeint] = useState("");
    const [searchDate, setSearchDate] = useState("");
    const [searchArea, setSearchArea] = useState("");
    const [searchStatus, setSearchStatus] = useState("");
    const [searchPhone, setSearchPhone] = useState("");
    
  // Filter By Pick Date
  const filterByDate = (e) => {
    setSearchInvoiceNo("")
    setSearchRecipeint("")
    setSearchDate("")
    setSearchArea("")
    setSearchStatus("")
    setSearchPhone("")
   
    const keyword = e;
    if (keyword !== '') {
      const results = data.getInvoiceByCollectionBoyFreetownIdonDelivered.filter((data) => {
        const dateMom = moment(data.createdDateTime);
        const dateMomFormat = dateMom.format('DD/MM/YYYY')
        console.log("dateMomFormat",dateMomFormat)
        return dateMomFormat.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundValue(results);
    }
    else {
      setFoundValue(data.getInvoiceByCollectionBoyFreetownIdonDelivered);
    }
    setSearchDate(keyword)

  };


  const filterByPhone = (e) => {
    setSearchInvoiceNo("")
    setSearchRecipeint("")
    setSearchDate("")
    setSearchArea("")
    setSearchStatus("")
    setSearchPhone("")
  
    const keyword = e;
    if (keyword !== '') {
      const results = data.getInvoiceByCollectionBoyFreetownIdonDelivered.filter((data) => {
        return data.phoneOne.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundValue(results);
    }
    else {
      setFoundValue(data.getInvoiceByCollectionBoyFreetownIdonDelivered);
    }
    setSearchPhone(keyword);
  };

  const filterByInvoice = (e) => {
    setSearchInvoiceNo("")
    setSearchRecipeint("")
    setSearchDate("")
    setSearchArea("")
    setSearchStatus("")
    setSearchPhone("")
  
    const keyword = e;
    if (keyword !== '') {
      const results = data.getInvoiceByCollectionBoyFreetownIdonDelivered.filter((data) => {
        return data.invoiceNumber.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundValue(results);
    }
    else {
      setFoundValue(data.getInvoiceByCollectionBoyFreetownIdonDelivered);
    }
    setSearchInvoiceNo(keyword);
  };

  const filterByArea = (e) => {
    setSearchInvoiceNo("")
    setSearchRecipeint("")
    setSearchDate("")
    setSearchArea("")
    setSearchStatus("")
    setSearchPhone("")
    const keyword = e;
    if (keyword !== '') {
      const results = data.getInvoiceByCollectionBoyFreetownIdonDelivered.filter((data) => {
        return data.area.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundValue(results);
    }
    else {
      setFoundValue(data.getInvoiceByCollectionBoyFreetownIdonDelivered);
    }
    setSearchArea(keyword);
  };

  const filterByStatus = (e) => {
    setSearchInvoiceNo("")
    setSearchRecipeint("")
    setSearchDate("")
    setSearchArea("")
    setSearchStatus("")
    setSearchPhone("")
    const keyword = e;
    if (keyword !== '') {
      const results = data.getInvoiceByCollectionBoyFreetownIdonDelivered.filter((data) => {
        return data.status.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundValue(results);
    }
    else {
      setFoundValue(data.getInvoiceByCollectionBoyFreetownIdonDelivered);
    }
    setSearchStatus(keyword);
  };

  const filterByRecipient = (e) => {
    setSearchInvoiceNo("")
    setSearchRecipeint("")
    setSearchDate("")
    setSearchArea("")
    setSearchStatus("")
    setSearchPhone("")
    const keyword = e;
    if (keyword !== '') {
      const results = data.getInvoiceByCollectionBoyFreetownIdonDelivered.filter((data) => {
        return data.recipientName.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundValue(results);
    }
    else {
      setFoundValue(data.getInvoiceByCollectionBoyFreetownIdonDelivered);
    }
    setSearchRecipeint(keyword);
  };
  function clearSearch() {
    setFoundValue(data.getInvoiceByCollectionBoyFreetownIdonDelivered)
  }
 

    return (
        <View style={{ backgroundColor: "#fff", height: "100%" }}>
            <View style={{ backgroundColor: "#3498DB", height: 200, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%" }}>
                <StatusBar barStyle="light-content" hidden={false} backgroundColor="#3498DB" translucent={true} />
                <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: 70 }}>
                    <View style={{ flexDirection: "row", width: "100%" }}>

                        <Text style={{ fontSize: 20, fontFamily: "Poppins-SemiBold", color: "#fff", marginLeft: 10 }}>Delivered</Text>
                    </View>
                </View>
            </View>
            {
                 data && data.getInvoiceByCollectionBoyFreetownIdonDelivered.length === 0 ?
                   <></>

                 :
                 <>
                 <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                 { 
                                 activeFilter === "InvoiceNo" ?
                                 <Card style={{ width: "90%", height: 50, marginTop: 10, marginBottom: 10, elevation: 5, borderRadius: 10 }}>
                                 <View style={{ flexDirection: "row", width: "100%" }}>
                                     <View style={{ width: "90%" }}>
                                         <TextInput placeholder='Invoice No..' style={{ marginLeft: 10, color: "#000" }} placeholderTextColor="#95A5A6" onChangeText={filterByInvoice}  value={searchInvoiceNo}/>
                                     </View>
                                     <Feather name="search" size={20} style={{ marginTop: 13, color: "#000" }} />
                                 </View>
                             </Card>
                                 :
                                 activeFilter === "Recipient" ?
                                 <Card style={{ width: "90%", height: 50, marginTop: 10, marginBottom: 10, elevation: 5, borderRadius: 10 }}>
                                 <View style={{ flexDirection: "row", width: "100%" }}>
                                     <View style={{ width: "90%" }}>
                                         <TextInput placeholder='Recipient' style={{ marginLeft: 10, color: "#000" }} placeholderTextColor="#95A5A6" onChangeText={filterByRecipient}  value={searchRecipient}  />
                                     </View>
                                     <Feather name="search" size={20} style={{ marginTop: 13, color: "#000" }} />
                                 </View>
                             </Card>
                             :
                             activeFilter === "Date" ?
                             <Card style={{ width: "90%", height: 50, marginTop: 10, marginBottom: 10, elevation: 5, borderRadius: 10 }}>
                             <View style={{ flexDirection: "row", width: "100%" }}>
                                 <View style={{ width: "90%" }}>
                                     <TextInput placeholder='Date..' style={{ marginLeft: 10, color: "#000" }} placeholderTextColor="#95A5A6" onChangeText={filterByDate} value={searchDate} />
                                 </View>
                                 <Feather name="search" size={20} style={{ marginTop: 13, color: "#000" }} />
                             </View>
                         </Card>
                         :
                         activeFilter === "Area" ?
                         <Card style={{ width: "90%", height: 50, marginTop: 10, marginBottom: 10, elevation: 5, borderRadius: 10 }}>
                         <View style={{ flexDirection: "row", width: "100%" }}>
                             <View style={{ width: "90%" }}>
                                 <TextInput placeholder='Area...' style={{ marginLeft: 10, color: "#000" }} placeholderTextColor="#95A5A6" onChangeText={filterByArea}  value={searchArea}/>
                             </View>
                             <Feather name="search" size={20} style={{ marginTop: 13, color: "#000" }} />
                         </View>
                     </Card>
                     :
                   
                 activeFilter === "Phone" ?
         
                 <Card style={{ width: "90%", height: 50, marginTop: 10, marginBottom: 10, elevation: 5, borderRadius: 10 }}>
                 <View style={{ flexDirection: "row", width: "100%" }}>
                     <View style={{ width: "90%" }}>
                         <TextInput placeholder='Phone No..' style={{ marginLeft: 10, color: "#000" }} placeholderTextColor="#95A5A6" onChangeText={filterByPhone}  value={searchPhone}/>
                     </View>
                     <Feather name="search" size={20} style={{ marginTop: 13, color: "#000" }} />
                 </View>
             </Card>
             :
         
         <></>
         }
                 </View>
                 <View style={{flexDirection:"row"}}>
               <Text style={{marginLeft:10,marginTop:5,fontFamily: 'Poppins-Medium',color:"#3498DB"}}>Filter</Text>
                 <ScrollView  horizontal={true}  showsHorizontalScrollIndicator={false}>
                <Card style={{width:100,height:30,marginTop:2,marginLeft:10,marginBottom:2,borderWidth:1,borderColor:activeFilter==="InvoiceNo"?"#3498DB":"#000",}}>
                 <TouchableOpacity onPress={()=>setActiveFilter("InvoiceNo")}>
                 <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"}}>
                 <Text style={{color:activeFilter==="InvoiceNo"?"#3498DB":"#000", fontFamily: 'Poppins-SemiBold',fontSize:12}}>Invoice No.</Text>
                 </View>
                 </TouchableOpacity>
                </Card>
                <Card style={{width:100,height:30,marginTop:2,marginLeft:10,marginBottom:2,borderWidth:1,borderColor:activeFilter==="Recipient"?"#3498DB":"#000",}}>
                <TouchableOpacity onPress={()=>setActiveFilter("Recipient")}>
                 <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"}}>
                 <Text style={{color:activeFilter==="Recipient"?"#3498DB":"#000", fontFamily: 'Poppins-SemiBold',fontSize:12}}>Recipient</Text>
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
         
                <Card style={{width:100,height:30,marginTop:2,marginLeft:10,marginBottom:2,borderWidth:1,borderColor:activeFilter==="Area"?"#3498DB":"#000"}}>
                <TouchableOpacity  onPress={()=>setActiveFilter("Area")}>
                 <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"}}>
                 <Text style={{color:activeFilter==="Area"?"#3498DB":"#000", fontFamily: 'Poppins-SemiBold',fontSize:12}}>Area</Text>
                 </View>
                 </TouchableOpacity>
                </Card>
         
         
                <Card style={{width:100,height:30,marginTop:2,marginLeft:10,marginBottom:2,borderWidth:1,borderColor:activeFilter==="Phone"?"#3498DB":"#000",}}>
                <TouchableOpacity  onPress={()=>setActiveFilter("Phone")}>
                 <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"}}>
                 <Text style={{color:activeFilter==="Phone"?"#3498DB":"#000", fontFamily: 'Poppins-SemiBold',fontSize:12}}>Phone</Text>
                 </View>
                 </TouchableOpacity>
                </Card>
                 </ScrollView>
         
         
               </View>

               </>

            }
            <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                {
                    loading ?
                        <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <ActivityIndicator color="#000" size="large" />
                        </View>
                        :
                        data && data.getInvoiceByCollectionBoyFreetownIdonDelivered.length === 0 ?
                            <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                <Image source={found} style={{ width: 200, height: 150 }} />
                                <Text style={{ color: "#000", fontFamily: "Poppins-SemiBold" }}>No data Available</Text>
                            </View>
                            :
                            <>
                                {
                                   foundValue && foundValue.slice().reverse().map(item => {
                                        return (
                                            <Card style={{ width: "90%", marginTop: 10, marginBottom: 10, elevation: 5, borderRadius: 10 }}>
                                                <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", marginBottom: 13 }}>
                                                    <View style={{ width: "50%" }}>
                                                        <Text style={{ marginLeft: 10, color: "#34495E", fontSize: 12, marginTop: 7, fontFamily: "Poppins-SemiBold" }}>#{item.invoiceNumber}</Text>
                                                        <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                                            <Text style={{ fontSize: 9, fontFamily: "Poppins-SemiBold", color: "#2980B9" }}>Recipient : </Text>
                                                            <Text style={{ fontSize: 9, fontFamily: "Poppins-SemiBold", color: "#34495E" }}>{item.recipientName}</Text>
                                                        </View>
                                                        <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                                            <Text style={{ fontSize: 9, fontFamily: "Poppins-SemiBold", color: "#2980B9" }}>Email : </Text>
                                                            <Text style={{ fontSize: 9, fontFamily: "Poppins-SemiBold", color: "#34495E" }}>{item.email} </Text>
                                                        </View>
                                                        <View style={{ flexDirection: "row", marginLeft: 10 }}>
                                                            <Text style={{ fontSize: 9, fontFamily: "Poppins-SemiBold", color: "#2980B9" }}>Phone : </Text>
                                                            <Text style={{ fontSize: 9, fontFamily: "Poppins-SemiBold", color: "#34495E" }}>{item.phoneOne} </Text>
                                                        </View>
                                                    </View>
                                                    <View style={{ width: "50%", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                                        <Text style={{ color: "#34495E", fontSize: 10, marginTop: 7, fontFamily: "Poppins-SemiBold" }}><Moment element={Text} format='DD MMM YYYY'>{item.createdDateTime}</Moment> , <Moment element={Text} format='hh:mm A'>{item.createdDateTime}</Moment> </Text>
                                                        {
                                                            item.status === "Delivered" ?
                                                                <Text style={{ fontSize: 10, fontFamily: "Poppins-SemiBold", color: "#F1C40F" }}>Delivered</Text>
                                                                :
                                                                <></>
                                                        }
                                                        <Text style={{ color: "#34495E", fontSize: 8, marginTop: 0, fontFamily: "Poppins-Medium" }}><Moment element={Text} format='DD MMM YYYY'>{item.createdDateTime}</Moment> , <Moment element={Text} format='hh:mm A'>{item.createdDateTime}</Moment></Text>
                                                        <View style={{ flexDirection: "column", width: "60%", justifyContent: "center", alignItems: "center", backgroundColor: "#1ABC9C", height: 25, borderRadius: 50, marginTop: 1 }}>
                                                            <TouchableOpacity onPress={() => navigation.navigate("FreetownBooking", { data: item })}>
                                                                <View style={{ width: "100%", flexDirection: "row", }}>
                                                                    <Text style={{ color: "#fff", fontSize: 11, fontFamily: "Poppins-SemiBold", }}>View Detail</Text>
                                                                </View>
                                                            </TouchableOpacity>
                                                        </View>
                                                    </View>
                                                </View>
                                            </Card>
                                        )
                                    })

                                }

                            </>
                }
            </View>
        </View>
    )
}