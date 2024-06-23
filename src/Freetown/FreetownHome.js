import { View, Text, StatusBar, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import profile from "../../assets/Image/Vector.png"
import Feather from 'react-native-vector-icons/Feather';
import { Card } from 'react-native-paper';
import booking from "../../assets/Image/booking.png"
import customer from "../../assets/Image/customer.png"
import invoice from "../../assets/Image/invoice.png"
import pending from "../../assets/Image/pending.png"
import delivered from "../../assets/Image/delivered.png"
import print from "../../assets/Image/print.png"
import Money from "../../assets/Image/money.png"



export default function FreetownHome({ navigation }) {
    return (
        <View style={{ height: "100%", backgroundColor: "#fff" }}>
            <ScrollView>
                <StatusBar barStyle="light-content" hidden={false} backgroundColor="#3498DB" translucent={true} />
                <View style={{ backgroundColor: "#3498DB", height: 200, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 70 }}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: 20, marginLeft: 20, fontFamily: "Poppins-Bold", color: "#fff" }}>Collection Staff</Text>
                            <Text style={{ marginTop: 6, marginLeft: 5, fontFamily: "Poppins-SemiBold", color: "#fff" }}>(Freetown)</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
                            <Image source={profile} style={{ marginRight: 20 }} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: 10 }}>
                       
                    </View>
                </View>
                <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: "95%" }}>
                        <View style={{ width: "50%", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: 10, marginBottom: 5 }}>
                            <Card style={{ width: "80%", height: 120, flexDirection: "row", justifyContent: "center", alignItems: "center", elevation: 5, borderRadius: 10 }}>
                                <TouchableOpacity onPress={() => navigation.navigate("FreetownOnWayBooking")}>
                                    <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%" }}>
                                        <Image source={pending} />
                                    </View>
                                </TouchableOpacity>
                            </Card>
                            <Text style={{ marginTop: 10, fontFamily: "Poppins-SemiBold", color: "#000" }}>Pending</Text>
                        </View>
                        <View style={{ width: "50%", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: 10, marginBottom: 5 }}>
                            <Card style={{ width: "80%", height: 120, flexDirection: "row", justifyContent: "center", alignItems: "center", elevation: 5, borderRadius: 10 }}>
                                <TouchableOpacity onPress={() => navigation.navigate("FreetownDelivered")}>
                                    <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%" }}>
                                        <Image source={delivered} />
                                    </View>
                                </TouchableOpacity>
                            </Card>
                            <Text style={{ marginTop: 10, fontFamily: "Poppins-SemiBold", color: "#000" }}>Delivered</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: "95%" }}>
                        <View style={{ width: "50%", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop: 10, marginBottom: 5 }}>
                            <Card style={{ width: "80%", height: 120, flexDirection: "row", justifyContent: "center", alignItems: "center", elevation: 5, borderRadius: 10 }}>
                                <TouchableOpacity onPress={() => navigation.navigate("FreetownPayment")}>
                                    <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%" }}>
                                        <Image source={Money} />
                                    </View>
                                </TouchableOpacity>
                            </Card>
                            <Text style={{ marginTop: 10, fontFamily: "Poppins-SemiBold", color: "#000" }}>Payment</Text>
                        </View>
                       
                       
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}