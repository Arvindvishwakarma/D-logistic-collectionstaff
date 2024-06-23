import { Text, View, StatusBar, TouchableOpacity,Image } from "react-native"
import React, { useEffect, useState } from "react"
import Feather from 'react-native-vector-icons/Feather';
import { QUERY_GET_COLLECTION_BY_ID } from './Graphql/Query'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useQuery } from '@apollo/client'
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

export default function Profile({ navigation }) {

  const [userId, setUserId] = useState("")

  const { logOut } = useContext(AuthContext)

  AsyncStorage.getItem("userId").then(id => setUserId(id))

  const { data, loading } = useQuery(QUERY_GET_COLLECTION_BY_ID, {
    variables: {
      "collectionBoyId": `${userId}`
    }
  })


  return (
    <View style={{ backgroundColor: "#fff", height: "100%" }}>
      <View style={{ backgroundColor: "#3498DB", height: 200, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>
        <StatusBar barStyle="light-content" hidden={false} backgroundColor="#3498DB" translucent={true} />
        <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: 70 }}>
          <View style={{ flexDirection: "row", width: "90%" }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Feather name="arrow-left" size={25} style={{ color: "#fff" }} />
            </TouchableOpacity>
            <Text style={{ fontSize: 18, fontFamily: "Poppins-SemiBold", color: "#fff", marginLeft: 10 }}>Profile</Text>
          </View>
        </View>
      </View>

      <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
      <Image source={{uri:"https://static.vecteezy.com/system/resources/previews/003/013/197/non_2x/pizza-delivery-boy-vector.jpg"}} style={{width:150,height:150,marginTop:-80,borderRadius:100}}/>

      </View>


      <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 20 }}>
        <Text style={{ fontFamily: "Poppins-SemiBold", color: "#000" }}> Username :</Text>
        <Text style={{ fontFamily: "Poppins-Light", color: "#000", marginLeft: 5 }}>{data && data.getCollectionBoyId.userName} </Text>
      </View>

      <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 2 }}>
        <Text style={{ fontFamily: "Poppins-SemiBold", color: "#000" }}> Name :</Text>
        <Text style={{ fontFamily: "Poppins-Light", color: "#000", marginLeft: 5 }}>{data && data.getCollectionBoyId.fName} {data && data.getCollectionBoyId.lName}</Text>
      </View>

      <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 2 }}>
        <Text style={{ fontFamily: "Poppins-SemiBold", color: "#000" }}> Id :</Text>
        <Text style={{ fontFamily: "Poppins-Light", color: "#000", marginLeft: 5 }}>{data && data.getCollectionBoyId.uniqueId}</Text>
      </View>

      <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 2 }}>
        <Text style={{ fontFamily: "Poppins-SemiBold", color: "#000" }}>Email :</Text>
        <Text style={{ fontFamily: "Poppins-Light", color: "#000", marginLeft: 5 }}>{data && data.getCollectionBoyId.email}</Text>
      </View>

      <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 2 }}>
        <Text style={{ fontFamily: "Poppins-SemiBold", color: "#000" }}>Contact :</Text>
        <Text style={{ fontFamily: "Poppins-Light", color: "#000", marginLeft: 5 }}>{data && data.getCollectionBoyId.phone}</Text>
      </View>

      <View style={{ flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity onPress={() => logOut()}>
          <View style={{ width: 120, justifyContent: "center", alignItems: "center", backgroundColor: "#E74C3C", height: 40, marginTop: 20, borderRadius: 10 }}>
            <Text style={{ fontFamily: "Poppins-SemiBold", color: "#fff" }}>Log Out</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ position: "absolute", bottom: 0 }}>
        <View style={{ width: "100%" }}>
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", width: "100%", }}>

          </View>

        </View>
      </View>
    </View>

  )

}

