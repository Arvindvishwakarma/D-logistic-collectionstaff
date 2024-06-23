import { View, Text, StatusBar, ScrollView, TouchableOpacity, TextInput, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import { Card } from 'react-native-paper';
import { useMutation, useQuery } from '@apollo/client';
import { GET_PAYMENT_COLLECTION_BOY, QUERY_GET_INVIOCE_FREETOWN_ON_WAY } from '../Graphql/Query';
import Moment from 'react-moment';
import AsyncStorage from '@react-native-async-storage/async-storage';
import found from "../../assets/Image/nofound.jpg"
import { MUTATION_INVOICE_EDIT } from '../Graphql/Mutation';
import { Modal } from 'react-native-paper';
import alert from "../../assets/Icon/danger.png"
import moment from 'moment'

export default function FreetownPayment({navigation}) {
    const [userId, setUserId] = useState()
    useEffect(() => {
        AsyncStorage.getItem('userId').then(id => setUserId(id));
    }, [])


    const { data, loading } = useQuery(GET_PAYMENT_COLLECTION_BOY, {
        variables: {
            "collectionBoyFreetownId": `${userId}`
        },
        pollInterval: 300,
    })

   const[editInvoice,{loading:loadingEdit}] =    useMutation(MUTATION_INVOICE_EDIT)



    const [visible, setVisible] = React.useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    
    const[getId,setGetId] =useState('')

    const containerStyle = { padding: 20};

 
    const handleOpenBox =(id)=>{
        setGetId(id)
        showModal()
    }

    const handlePay =() =>{
        editInvoice({
            variables:{
                "editInvoiceInput": {
                    "invoiceId": `${getId}`,
                    "paymentStatus": "Success"
                  }
                
            }
        }).then(()=>{
            hideModal()
        })
    }

    const handleClose =()=>{
        setGetId('')
        hideModal()
    }

    const [search, setSearch] = useState("")
    const[activeFilter,setActiveFilter] =useState("InvoiceNo")

    const [foundValue, setFoundValue] = useState();

    useEffect(() => {
      if (data) {
        setFoundValue(data.getPaymentCollectionBoyId)
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
      const results = data.getPaymentCollectionBoyId.filter((data) => {
        const dateMom = moment(data.createdDateTime);
        const dateMomFormat = dateMom.format('DD/MM/YYYY')
        console.log("dateMomFormat",dateMomFormat)
        return dateMomFormat.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundValue(results);
    }
    else {
      setFoundValue(data.getPaymentCollectionBoyId);
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
      const results = data.getPaymentCollectionBoyId.filter((data) => {
        return data.phoneOne.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundValue(results);
    }
    else {
      setFoundValue(data.getPaymentCollectionBoyId);
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
      const results = data.getPaymentCollectionBoyId.filter((data) => {
        return data.invoiceNumber.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundValue(results);
    }
    else {
      setFoundValue(data.getPaymentCollectionBoyId);
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
      const results = data.getPaymentCollectionBoyId.filter((data) => {
        return data.area.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundValue(results);
    }
    else {
      setFoundValue(data.getPaymentCollectionBoyId);
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
      const results = data.getPaymentCollectionBoyId.filter((data) => {
        return data.status.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundValue(results);
    }
    else {
      setFoundValue(data.getPaymentCollectionBoyId);
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
      const results = data.getPaymentCollectionBoyId.filter((data) => {
        return data.recipientName.toLowerCase().startsWith(keyword.toLowerCase());
      });
      setFoundValue(results);
    }
    else {
      setFoundValue(data.getPaymentCollectionBoyId);
    }
    setSearchRecipeint(keyword);
  };
  function clearSearch() {
    setFoundValue(data.getPaymentCollectionBoyId)
  }
 




  return (
    <View style={{ backgroundColor: "#fff", height: "100%" }}>
    <View style={{ backgroundColor: "#3498DB", height: 200, borderBottomLeftRadius: 30, borderBottomRightRadius: 30, flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%" }}>
        <StatusBar barStyle="light-content" hidden={false} backgroundColor="#3498DB" translucent={true} />
        <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: 70 }}>
            <View style={{ flexDirection: "row", width: "100%" }}>

                <Text style={{ fontSize: 20, fontFamily: "Poppins-SemiBold", color: "#fff", marginLeft: 10 }}>Pending Payment</Text>
            </View>
        </View>
    </View>
    {
                 data && data.getPaymentCollectionBoyId.length === 0 ?
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
                    <ActivityIndicator size="large" color="#000" />
                </View>
                :
                data && data.getPaymentCollectionBoyId.length === 0 ?
                    <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: 50 }}>
                        <Image source={found} style={{ width: 200, height: 150 }} />
                        <Text style={{ color: "#000", fontFamily: "Poppins-SemiBold" }}>No Data Available</Text>
                    </View>
                    :
                    <>
                        {
                           foundValue && foundValue.slice().reverse().map(item => {
                                return (
                                    <Card style={{ width: "90%", height: 130, marginTop: 10, marginBottom: 10, elevation: 5, borderRadius: 10 }}>
                                        <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
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
                                            <View style={{ width: "50%" }}>
                                                <Text style={{ marginLeft: 10, color: "#34495E", fontSize: 12, marginTop: 7, fontFamily: "Poppins-SemiBold" }}><Moment element={Text} format='DD MMM YYYY'>{item.createdDateTime}</Moment> , <Moment element={Text} format='hh:mm A'>{item.createdDateTime}</Moment> </Text>
                                               
                                                <View style={{flexDirection:"row",marginLeft:10}}>
                                                   <Text style={{fontFamily: "Poppins-SemiBold",fontSize:10,color:"#2980B9"}}>Payment :</Text>
                                                   {
                                                    item.paymentStatus === "pending" ?
                                                    <Text style={{fontFamily: "Poppins-SemiBold",fontSize:10,color:"#e74c3c",marginLeft:5}}>Pending</Text>
                                                    :
                                                    <Text style={{fontFamily: "Poppins-SemiBold",fontSize:10,color:"#2ecc71",marginLeft:5}}>Complete</Text>
                                                   }
                                                </View>
                                                <Text style={{ marginLeft: 10, color: "#34495E", fontSize: 8, marginTop: 0, fontFamily: "Poppins-Medium" }}><Moment element={Text} format='DD MMM YYYY'>{item.createdDateTime}</Moment> , <Moment element={Text} format='hh:mm A'>{item.createdDateTime}</Moment></Text>
                                            </View>
                                        </View>
                                        <View style={{flexDirection:"column",width:"100%",justifyContent:"center",alignItems:"center",marginTop:10}}>
                                           <View  style={{flexDirection:"row",justifyContent:"space-between",width:"90%",height:30}}>
                                            <View style={{width:"50%",justifyContent:"center",alignItems:"center"}}>
                                            <View style={{ flexDirection: "column", width: "90%", justifyContent: "center", alignItems: "center", backgroundColor: "#1ABC9C", height: 30, borderRadius: 50, marginTop: 5 }}>
                                                    <TouchableOpacity onPress={() => navigation.navigate("FreetownBooking", { data: item })}>
                                                        <View style={{ width: "100%", flexDirection: "row", }}>
                                                            <Text style={{ color: "#fff", fontSize: 11, fontFamily: "Poppins-SemiBold", }}>View Detail</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                               <View style={{width:"50%",justifyContent:"center",alignItems:"center"}}>
                                               <View style={{ flexDirection: "column", width: "90%", justifyContent: "center", alignItems: "center", backgroundColor: "#3498DB", height: 30, borderRadius: 50, marginTop: 5,opacity: 1 }}>
                                                    <TouchableOpacity onPress={()=>handleOpenBox(item.id)}>
                                                        <View style={{ width: "100%", flexDirection: "row", }}>
                                                            <Text style={{ color: "#fff", fontSize: 11, fontFamily: "Poppins-SemiBold", }}>Payment Done</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                </View>
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

    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>

        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
            <Card style={{width:270,height:200,borderRadius:20}}>
                <View style={{width:"100%",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                    <Image source={alert} style={{width:70,height:70,marginTop:15}}/>
                   
                </View>
                <Text style={{textAlign:"center",fontFamily: "Poppins-SemiBold",fontSize:15,color:"#000"}}>Are you sure</Text>
                <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",width:"100%"}}>
                    <View style={{width:"90%",flexDirection:"row",justifyContent:"space-between",marginTop:20}}>
                        <View style={{width:"50%",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                            <View style={{width:"70%",flexDirection:"row",alignItems:"center",justifyContent:"center",height:30}}>
                            <View style={{width:"100%",backgroundColor:"#2ecc71",height:30,borderRadius:10,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                                <TouchableOpacity onPress={()=>handlePay()}>
                                <View style={{width:"100%",backgroundColor:"#2ecc71",height:30,borderRadius:10,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                                    <Text style={{fontFamily: "Poppins-SemiBold",color:"#fff"}}>Yes</Text>

                                </View>
                                </TouchableOpacity>
                                </View>

                            </View>
                        </View>

                        <View style={{width:"50%",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                        <View style={{width:"70%",flexDirection:"row",alignItems:"center",justifyContent:"center",height:30}}>
                        <View style={{width:"100%",backgroundColor:"#e74c3c",height:30,borderRadius:10,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                            <TouchableOpacity onPress={()=>handleClose()}>
                        <View style={{width:"100%",backgroundColor:"#e74c3c",height:30,borderRadius:10,flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
                                    <Text style={{fontFamily: "Poppins-SemiBold",color:"#fff"}}>No</Text>

                                </View>
                                </TouchableOpacity>
                                </View>
        </View>
                        </View>

                    </View>

                </View>



            </Card>

        </View>
   


        </Modal>
</View>
  )
}