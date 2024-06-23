import { View, Text, StatusBar, ScrollView, TouchableOpacity, TextInput, Image, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather';

import { Card } from 'react-native-paper';
import Moment from 'react-moment';
import { useMutation, useQuery } from '@apollo/client';
import { MUTATION_INVOICE_DELIVERED } from '../Graphql/Mutation';
import { QUERY_GET_INVOICE_BY_ID } from '../Graphql/Query';
export default function FreetownBooking({ navigation, route }) {

    const { data } = route.params;

    const [state, setState] = useState(false)

    const { data: dataInvoice, loading } = useQuery(QUERY_GET_INVOICE_BY_ID, {
        variables: {
            "invoiceId": `${data && data.id}`
        }
    })

    let count = 1;

    const [invoiceItemIntoDelivered,{loading:loadingDelivery}] = useMutation(MUTATION_INVOICE_DELIVERED, {
        refetchQueries: [
            QUERY_GET_INVOICE_BY_ID,
            "getInvoiceById"
        ]


    })

    const [getId, setGetId] = useState()

    function handleClick(id) {
        setGetId(id)
        let date = new Date()
        invoiceItemIntoDelivered({
            variables: {
                "invoiceId": `${data && data.id}`,
                "itemId": `${id}`,
                "itemDeliveredDateAndTime": `${date}`,
                "itemStatus": "Delivered"
            }

        })
    }
    const [search, setSearch] = useState("null")

    return (
        <View style={{ backgroundColor: "#fff", height: "100%" }}>
            <ScrollView>
                <View style={{ backgroundColor: "#3498DB", height: 200, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                    <StatusBar barStyle="light-content" hidden={false} backgroundColor="#3498DB" translucent={true} />
                    <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: 70 }}>
                        <View style={{ flexDirection: "row", width: "90%" }}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <Feather name="arrow-left" size={25} style={{ color: "#fff" }} />
                            </TouchableOpacity>
                            <Text style={{ fontSize: 18, fontFamily: "Poppins-SemiBold", color: "#fff", marginLeft: 10 }}>Booking  Detail</Text>
                        </View>
                    </View>
                </View>

                {
                    loading ?
                        <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                            <ActivityIndicator color="#000" size="large" />
                        </View>

                        :
                        <>
                            <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>

                                <Card style={{ width: "95%", marginTop: 10, marginBottom: 10, elevation: 5, borderRadius: 10 }}>
                                    <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", marginBottom: 10 }}>
                                        <View style={{ width: "60%", flexDirection: "column", }}>
                                            <Text style={{ marginLeft: 10, color: "#34495E", fontSize: 12, marginTop: 7, fontFamily: "Poppins-SemiBold" }}>#{dataInvoice && dataInvoice.getInvoiceById.invoiceNumber}</Text>
                                            <View style={{ flexDirection: "row", marginLeft: 10, width: "50%" }}>
                                                <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#2980B9" }}>Recipient : </Text>
                                                <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#34495E" }}>{dataInvoice && dataInvoice.getInvoiceById.recipientName} </Text>
                                            </View>
                                        

                                        </View>
                                        <View style={{ width: "40%" }}>
                                            <Text style={{ marginLeft: 10, color: "#34495E", fontSize: 10, marginTop: 7, fontFamily: "Poppins-SemiBold" }}><Moment element={Text} format='DD MMM YYYY'>{dataInvoice && dataInvoice.getInvoiceById.createdDateTime}</Moment> , <Moment element={Text} format='hh:mm A'>{dataInvoice && dataInvoice.getInvoiceById.createdDateTime}</Moment></Text>
                                            {
                                                dataInvoice && dataInvoice.getInvoiceById.status === "Delivered" ?
                                                    <Text style={{ fontSize: 11, marginLeft: 10, fontFamily: "Poppins-SemiBold", color: "#F1C40F" }}>Delivered</Text>
                                                    :
                                                    <></>
                                            }

                                            <Text style={{ marginLeft: 10, color: "#34495E", fontSize: 8, marginTop: 0, fontFamily: "Poppins-Medium" }}><Moment element={Text} format='DD MMM YYYY'>{dataInvoice && dataInvoice.getInvoiceById.createdDateTime}</Moment> , <Moment element={Text} format='hh:mm A'>{dataInvoice && dataInvoice.getInvoiceById.createdDateTime}</Moment></Text>

                                        </View>
                                    </View>
                                    <View style={{ flexDirection: "row", marginLeft: 10, width: "50%" }}>
                                                <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#2980B9" }}>Email : </Text>
                                                <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#34495E" }}>{dataInvoice && dataInvoice.getInvoiceById.email}</Text>
                                            </View>
                                            <View style={{ flexDirection: "row", marginLeft: 10, width: "50%" }}>
                                                <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#2980B9" }}>Phone 1: </Text>
                                                <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#34495E" }}>{dataInvoice && dataInvoice.getInvoiceById.phoneOne}</Text>
                                            </View>

                                            <View style={{ flexDirection: "row", marginLeft: 10, width: "50%" }}>
                                                <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#2980B9" }}>Phone 2: </Text>
                                                <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#34495E" }}>{dataInvoice && dataInvoice.getInvoiceById.phoneTwo}</Text>
                                            </View>
                                            <View style={{ flexDirection: "row", marginLeft: 10, width: "50%" }}>
                                                <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#2980B9" }}>Phone 3: </Text>
                                                <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#34495E" }}>{dataInvoice && dataInvoice.getInvoiceById.phoneThree}</Text>
                                            </View>

                                            <View style={{ flexDirection: "row", marginLeft: 10, width: "50%" }}>
                                                <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#2980B9" }}>Address 1: </Text>
                                                <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#34495E" }}  >{dataInvoice && dataInvoice.getInvoiceById.addressOne}</Text>
                                            </View>

                                            <View style={{ flexDirection: "row", marginLeft: 10, width: "50%" }}>
                                                <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#2980B9" }}>Address 2: </Text>
                                                <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#34495E" }}  >{dataInvoice && dataInvoice.getInvoiceById.addressTwo} </Text>
                                            </View>


                                            <View style={{ flexDirection: "row", marginLeft: 10, width: "50%" }}>
                                                <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#2980B9" }}>Pincode: </Text>
                                                <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#34495E" }}  >{dataInvoice && dataInvoice.getInvoiceById.postCode} </Text>
                                            </View>
                                    {
                                        dataInvoice && dataInvoice.getInvoiceById.status === "Delivered" ?
                                        <>
                                       
                                            <Image source={{ uri: `https://byaahlagan-profile-image.s3.us-east-2.amazonaws.com/${dataInvoice && dataInvoice.getInvoiceById.imgSignature}` }} style={{ width: 120, height: 120, marginLeft: 10,marginTop:20 }} />
                                            <Text style={{fontSize:10,color:"#000",marginTop:5,marginBottom:5,marginLeft:12}}>Verification Signature</Text>
                                            </>
                                            :
                                            <></>
                                    }
                                </Card>
                                <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%" }}>
                                    {
                                        dataInvoice && dataInvoice.getInvoiceById.items.map(it => {
                                            return (
                                                <Card style={{ width: "95%", height: 50, elevation: 5, borderRadius: 10,marginTop:5,marginBottom:5 }}>
                                                    <View style={{ width: "100%", flexDirection: "row", justifyContent: "space-between", height: 50 }}>
                                                        <View style={{ flexDirection: "column", width: "10%", justifyContent: "center", alignItems: "center" }}>

                                                            <Text style={{ color: "#34495E", fontFamily: "Poppins-SemiBold", fontSize: 12 }}>{count++}</Text>
                                                        </View>
                                                        <View style={{ flexDirection: "column", width: "25%", justifyContent: "center", alignItems: "center" }}>
                                                            <Text style={{ color: "#2980B9", fontFamily: "Poppins-SemiBold", fontSize: 12, marginTop: 3 }}>Item No</Text>
                                                            <Text style={{ color: "#34495E", fontFamily: "Poppins-SemiBold", fontSize: 12 }}>{it.itemId}</Text>
                                                        </View>
                                                        <View style={{ flexDirection: "column", width: "55%", justifyContent: "center", alignItems: "center", }}>
                                                            {
                                                                it.id === getId && loadingDelivery ?
                                                                    <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                                                                        <ActivityIndicator size="small" color="#000" />
                                                                    </View>

                                                                    :
                                                                    <>
                                                                        {
                                                                            it.ItemStatus === "Delivered" ?
                                                                                <View style={{ width: "80%", backgroundColor: "#2ecc71", height: 40, borderRadius: 10 }}>
                                                                                    <View style={{ width: "100%", backgroundColor: "#2ecc71", height: 40, borderRadius: 10 }}>
                                                                                        <View style={{ width: "100%", backgroundColor: "#2ecc71", height: 40, borderRadius: 10, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                                                                                            <Feather name="check-circle" color="#fff" />
                                                                                        </View>
                                                                                    </View>
                                                                                </View>
                                                                                :
                                                                                <View style={{ width: "80%", backgroundColor: "#3498DB", height: 40, borderRadius: 10 }}>
                                                                                    <TouchableOpacity onPress={() => handleClick(it.id)}>
                                                                                        <View style={{ width: "100%", backgroundColor: "#3498DB", height: 40, borderRadius: 10 }}>
                                                                                            <View style={{ width: "100%", backgroundColor: "#3498DB", height: 40, borderRadius: 10, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                                                                                                <Text style={{ color: "#fff" }}>Delivered</Text>
                                                                                            </View>
                                                                                        </View>
                                                                                    </TouchableOpacity>
                                                                                </View>
                                                                        }

                                                                    </>
                                                            }
                                                        </View>
                                                    </View>
                                                </Card>
                                            )
                                        })
                                    }

                                </View>


                                {
                                  dataInvoice && dataInvoice.getInvoiceById.items.filter((getAllUsers) => getAllUsers.ItemStatus.includes(search)).length != 0 ?
                                        <>
                                           <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                                                <View style={{ width: "50%", backgroundColor: "#1ABC9C", flexDirection: "row", alignItems: "center", justifyContent: "center", height: 40, borderRadius: 10, marginTop: 15,opacity:0.5 }}>
                                                    <TouchableOpacity onPress={() => alert("All Item not delivered")}>
                                                        <View style={{ width: "100%", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                                            <Text style={{ fontFamily: "Poppins-SemiBold", color: "#fff" }}>Update</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                </View>
                                            </View></>
                                        :
                                        <>
                                            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                                                <View style={{ width: "50%", backgroundColor: "#1ABC9C", flexDirection: "row", alignItems: "center", justifyContent: "center", height: 40, borderRadius: 10, marginTop: 15 }}>
                                                    <TouchableOpacity onPress={() => navigation.navigate("DrawSignture", { invoiceId: dataInvoice && dataInvoice.getInvoiceById.id })}>
                                                        <View style={{ width: "100%", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                                                            <Text style={{ fontFamily: "Poppins-SemiBold", color: "#fff" }}>Update</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </>
                                }
                            </View>
                        </>
                }
            </ScrollView>
        </View>
    )
}