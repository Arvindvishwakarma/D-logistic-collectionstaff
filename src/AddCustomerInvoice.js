import { View, Text, StatusBar, TouchableOpacity, ScrollView, Image, ActivityIndicator, TextInput } from 'react-native'
import React, { useEffect } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Card } from 'react-native-paper';
import addCus from "../assets/Image/addCus.png"
import allCus from "../assets/Image/allCus.png"
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_ALL_CUSTOMER } from './Graphql/Query';

import { useState } from 'react';

export default function AddCustomerInvoice({ navigation }) {
  const { data, loading, refetch } = useQuery(QUERY_ALL_CUSTOMER)

  useEffect(() => {
    setInterval(() => {
      refetch();
    }, 3000);
  }, []);

  // const [deleteCustomer, { loading: deleteLoading }] = useMutation(MUTATION_DELETE_CUSTOMER, {
  //   refetchQueries: [
  //     QUERY_ALL_CUSTOMER,
  //     "getAllCustomer"
  //   ]
  // })

  const [customerId, setCustomerId] = useState()

  const [search, setSearch] = useState("");

  return (
    <View style={{ backgroundColor: "#fff", height: "100%" }}>
      <ScrollView>
        <StatusBar barStyle="light-content" hidden={false} backgroundColor="#3498DB" translucent={true} />
        <View style={{ backgroundColor: "#3498DB", height: 200, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
          <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: 70 }}>
            <View style={{ flexDirection: "row", width: "90%" }}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Feather name="arrow-left" size={25} style={{ color: "#fff" }} />
              </TouchableOpacity>
              <Text style={{ fontSize: 18, fontFamily: "Poppins-SemiBold", color: "#fff", marginLeft: 10 }}>Select Customer</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
          {
            loading ?
              <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: 20 }}>
                <ActivityIndicator color="#000" size="large" />
                <Text style={{ color: "#777", fontFamily: "Poppins-Medium", fontSize: 12 }}>Please wait Loading</Text>
              </View>
              :
              <>
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                  <Card style={{ width: "95%", height: 50, marginTop: 10, marginBottom: 10, elevation: 5, borderRadius: 10 }}>
                    <View style={{ flexDirection: "row", width: "100%" }}>
                      <View style={{ width: "90%" }}>
                        <TextInput placeholder='Customer name..' style={{ marginLeft: 10, color: "#000" }} placeholderTextColor="#95A5A6" onChangeText={(e) => setSearch(e)} />
                      </View>
                      <Feather name="search" size={20} style={{ marginTop: 13, color: "#000" }} />
                    </View>
                  </Card>
                </View>
                {
                  search === "" ?
                    <>
                      {
                        data && data.getAllCustomer.map(item => {
                          return (
                            <Card style={{ width: "95%", height: 100, marginTop: 10, marginBottom: 5, elevation: 3, borderRadius: 15 }}>
                              <View style={{ flexDirection: "row", justifyContent: "space-between", height: "100%" }}>
                                <View style={{ width: "70%", height: "100%", flexDirection: "column", justifyContent: "center" }}>
                                  <View style={{ width: "100%", marginTop: 5, marginLeft: 15, flexDirection: "row" }}>
                                    <Text style={{ color: "#2980B9", fontFamily: "Poppins-SemiBold", fontSize: 10 }}>Name : </Text>
                                    <Text style={{ color: "#34495E", fontFamily: "Poppins-SemiBold", fontSize: 10 }} numberOfLines={1}>{item.fName} {item.lName} </Text>
                                  </View>
                                  <View style={{ width: "100%", marginTop: 3, marginLeft: 15, flexDirection: "row" }}>
                                    <Text style={{ color: "#2980B9", fontFamily: "Poppins-SemiBold", fontSize: 10 }}>Email : </Text>
                                    <Text style={{ color: "#34495E", fontFamily: "Poppins-SemiBold", fontSize: 10 }} numberOfLines={1}>{item.email} </Text>
                                  </View>

                                  <View style={{ width: "100%", marginTop: 3, marginLeft: 15, flexDirection: "row" }}>
                                    <Text style={{ color: "#2980B9", fontFamily: "Poppins-SemiBold", fontSize: 10 }}>Phone : </Text>
                                    <Text style={{ color: "#34495E", fontFamily: "Poppins-SemiBold", fontSize: 10 }} numberOfLines={1}>{item.phoneOne}</Text>
                                  </View>
                                </View>
                                <View style={{ width: "30%", height: "100%", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                  <TouchableOpacity onPress={() => navigation.navigate("AddInvoice", { customerId: item.id })}>
                                    <View style={{ width: "90%", backgroundColor: "#feca57", height: 30, borderRadius: 50, flexDirection: "row", alignItems: "center", justifyContent: "center", marginRight: 10 }}>
                                      <View style={{ width: "100%", height: 30, borderRadius: 50, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                                        <FontAwesome name="plus" size={15} color="#fff" />
                                        <Text style={{ marginLeft: 5, fontFamily: "Poppins-SemiBold", marginTop: 2, color: "#fff", fontSize: 12 }}>Invoice</Text>
                                      </View>
                                    </View>
                                  </TouchableOpacity>

                                </View>
                              </View>
                            </Card>
                          )
                        })
                      }
                    </>
                    :
                    <>
                      {
                        data && data.getAllCustomer.filter((obj) => obj.fName.includes(search)).slice().reverse().map(item => {
                          return (
                            <Card style={{ width: "95%", height: 100, marginTop: 10, marginBottom: 5, elevation: 3, borderRadius: 15 }}>
                              <View style={{ flexDirection: "row", justifyContent: "space-between", height: "100%" }}>
                                <View style={{ width: "70%", height: "100%", flexDirection: "column", justifyContent: "center" }}>
                                  <View style={{ width: "100%", marginTop: 5, marginLeft: 15, flexDirection: "row" }}>
                                    <Text style={{ color: "#2980B9", fontFamily: "Poppins-SemiBold", fontSize: 10 }}>Name : </Text>
                                    <Text style={{ color: "#34495E", fontFamily: "Poppins-SemiBold", fontSize: 10 }} numberOfLines={1}>{item.fName} {item.lName} </Text>
                                  </View>
                                  <View style={{ width: "100%", marginTop: 3, marginLeft: 15, flexDirection: "row" }}>
                                    <Text style={{ color: "#2980B9", fontFamily: "Poppins-SemiBold", fontSize: 10 }}>Email : </Text>
                                    <Text style={{ color: "#34495E", fontFamily: "Poppins-SemiBold", fontSize: 10 }} numberOfLines={1}>{item.email} </Text>
                                  </View>
                                  <View style={{ width: "100%", marginTop: 3, marginLeft: 15, flexDirection: "row" }}>
                                    <Text style={{ color: "#2980B9", fontFamily: "Poppins-SemiBold", fontSize: 10 }}>Phone : </Text>
                                    <Text style={{ color: "#34495E", fontFamily: "Poppins-SemiBold", fontSize: 10 }} numberOfLines={1}>{item.phoneOne}</Text>
                                  </View>
                                </View>
                                <View style={{ width: "30%", height: "100%", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                                  <TouchableOpacity onPress={() => navigation.navigate("AddInvoice", { customerId: item.id })}>
                                    <View style={{ width: "90%", backgroundColor: "#feca57", height: 30, borderRadius: 50, flexDirection: "row", alignItems: "center", justifyContent: "center", marginRight: 10 }}>
                                      <View style={{ width: "100%", height: 30, borderRadius: 50, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
                                        <FontAwesome name="plus" size={15} color="#fff" />
                                        <Text style={{ marginLeft: 5, fontFamily: "Poppins-SemiBold", marginTop: 2, color: "#fff", fontSize: 12 }}>Invoice</Text>
                                      </View>
                                    </View>
                                  </TouchableOpacity>

                                </View>
                              </View>
                            </Card>
                          )
                        })

                      }
                    </>
                }
              </>
          }
        </View>
      </ScrollView>
    </View>
  )
}