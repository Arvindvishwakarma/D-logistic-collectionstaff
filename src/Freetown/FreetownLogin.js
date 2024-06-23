/* eslint-disable prettier/prettier */
import { View, Text,Image, TextInput, StatusBar, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import logo from "../../assets/Image/mobile.png"
import Feather from 'react-native-vector-icons/Feather';
import { Checkbox,Card } from 'react-native-paper';
export default function FreetownLogin({navigation}) {
  return (
    <View style={{ backgroundColor: "#fff", height: "100%" }}>
        <ScrollView>
    <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#fff" translucent={true} />

    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
      <Image source={logo} style={{ width: 250, height: 250, marginTop: 50 }} />
    </View>
    <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <Text style={{ marginTop: 20, fontSize: 20, fontWeight: "700", color: "#34495E",fontFamily:"Poppin-Bold" }}>Freetown Staff Login</Text>
    </View> 
    <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: 20 }}>
      <Card style={{width:"80%",marginTop:5,height:50,elevation:5,borderRadius:10}}>
        <TextInput placeholder='Username' style={{marginLeft:5,color:"#000"}}  placeholderTextColor="#95A5A6"/>
      </Card>
      
      <Card style={{width:"80%",marginTop:15,height:50,elevation:5,borderRadius:10}}>
        <TextInput placeholder='Password' style={{marginLeft:5,color:"#000"}}  placeholderTextColor="#95A5A6"/>
      </Card>
    
    </View>
    <View style={{ flexDirection: "row",justifyContent:"center",alignItems:"center" }}>
     
    </View>
    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
      <View style={{ width: "40%", backgroundColor: "#3498DB", flexDirection: "column", alignItems: "center", justifyContent: "center", height: 45, marginTop: 30, borderRadius: 10 }}>
        <TouchableOpacity onPress={()=>navigation.navigate("FreetownHome")}>
        <View style={{width:"50%", backgroundColor: "#3498DB", flexDirection: "column", alignItems: "center", justifyContent: "center", borderRadius: 50}}>
        <Text style={{ color: "#fff",fontFamily:"Poppins-SemiBold" }}>Login</Text>
        </View>
        </TouchableOpacity>
      </View>
    </View>
{/*   
  <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:15}}>
    <TouchableOpacity onPress={()=>navigation.navigate("SignUp")}>
    <Text style={{color:"#3498DB",fontFamily:"Poppins-SemiBold"}}>Collection Staff Login</Text>
    </TouchableOpacity>
  </View> */}


    </ScrollView>
  </View>
  )
}