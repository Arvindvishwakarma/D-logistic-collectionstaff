import { View, Text, StatusBar, ScrollView, TouchableOpacity, TextInput, Image } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import { Card } from 'react-native-paper';
import create from "../assets/Image/create.png"
import pending from "../assets/Image/pending.png"
import booking12 from "../assets/Image/way.png"
import delivered from "../assets/Image/delivered.png"
import cancel from "../assets/Image/cancelled.png"
import print from "../assets/Image/print.png"

export default function BookingDetail({ navigation }) {
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

                <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <Card style={{ width: "95%", height: 200, marginTop: 10, marginBottom: 10, elevation: 5, borderRadius: 10 }}>
                        <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                            <View style={{ width: "60%", flexDirection: "column", }}>
                                <Text style={{ marginLeft: 10, color: "#34495E", fontSize: 12, marginTop: 7, fontFamily: "Poppins-SemiBold" }}>#554455544</Text>
                                <View style={{ flexDirection: "row", marginLeft: 10, width: "50%" }}>
                                    <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#2980B9" }}>Recipient : </Text>
                                    <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#34495E" }}>Laurie H. Smith </Text>
                                </View>
                                <View style={{ flexDirection: "row", marginLeft: 10, width: "50%" }}>
                                    <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#2980B9" }}>Email : </Text>
                                    <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#34495E" }}>invoice@gmail.com </Text>
                                </View>
                                <View style={{ flexDirection: "row", marginLeft: 10, width: "50%" }}>
                                    <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#2980B9" }}>Phone : </Text>
                                    <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#34495E" }}>859-485-582 </Text>
                                </View>

                                <View style={{ flexDirection: "row", marginLeft: 10, width: "50%" }}>
                                    <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#2980B9" }}>Address : </Text>
                                    <Text style={{ fontSize: 11, fontFamily: "Poppins-SemiBold", color: "#34495E" }} numberOfLines={5} >Shubhas nagar pagara road sagar(m.p) </Text>
                                </View>

                            </View>
                            <View style={{ width: "40%" }}>
                                <Text style={{ marginLeft: 10, color: "#34495E", fontSize: 10, marginTop: 7, fontFamily: "Poppins-SemiBold" }}>06 Jul 2023, 10:50AM</Text>
                                <Text style={{ fontSize: 11, marginLeft: 10, fontFamily: "Poppins-SemiBold", color: "#F1C40F" }}>Wait For Pickup</Text>
                                <Text style={{ marginLeft: 10, color: "#34495E", fontSize: 8, marginTop: 0, fontFamily: "Poppins-Medium" }}>06 Jul 2023, 10:50AM</Text>

                            </View>
                        </View>
                    </Card>
                </View>
            </ScrollView>
        </View>
    )
}