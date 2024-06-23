/* eslint-disable prettier/prettier */
import { View, Text,Image, TextInput, StatusBar, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import React from 'react';
import logo from '../assets/Image/mobile.png';
import Feather from 'react-native-vector-icons/Feather';
import { Checkbox,Card } from 'react-native-paper';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_GET_ALL_INVOICE } from './Graphql/Query';

export default function SignUp({navigation}) {

   const {loginHandel,userLoginLoading,loginError} = useContext(AuthContext);
   const [username,setUsername] = useState("")
   const [password,setPassword] = useState("")


  const{data}= useQuery(QUERY_GET_ALL_INVOICE)

  return (
    <View style={{ backgroundColor: "#fff", height: "100%" }}>
        <ScrollView>
    <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#fff" translucent={true} />

    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
      <Image source={logo} style={{ width: 250, height: 250, marginTop: 50 }} />
    </View>
    <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <Text style={{ marginTop: 20, fontSize: 20, fontWeight: "700", color: "#34495E",fontFamily:"Poppin-Bold" }}>Collection Staff Login</Text>
    </View> 
    <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: 20 }}>

      <Card style={{width:"80%",marginTop:5,height:50,elevation:5,borderRadius:10}}>
        <TextInput placeholder='Username' style={{marginLeft:5,color:"#000"}}  placeholderTextColor="#95A5A6"  onChangeText={(e)=>setUsername(e)}/>
      </Card>
      
      <Card style={{width:"80%",marginTop:15,height:50,elevation:5,borderRadius:10}}>
        <TextInput placeholder='Password' style={{marginLeft:5,color:"#000"}}  placeholderTextColor="#95A5A6"  onChangeText={(e)=>setPassword(e)}/>
      </Card>

    </View>
    <View style={{ flexDirection: "row",justifyContent:"center",alignItems:"center" }}>
    </View>

    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "center",marginTop:10 }}>
      {
         userLoginLoading ?
        <ActivityIndicator color="#000" size="large" />
         :
         <View style={{ width: "40%", backgroundColor: "#3498DB", flexDirection: "column", alignItems: "center", justifyContent: "center", height: 45, marginTop: 30, borderRadius: 10 }}>
         <TouchableOpacity onPress={()=>loginHandel(username,password)}>
         <View style={{width:"50%", backgroundColor: "#3498DB", flexDirection: "column", alignItems: "center", justifyContent: "center", borderRadius: 50}}>
         <Text style={{ color: "#fff",fontFamily:"Poppins-SemiBold" }}>Login</Text>
         </View>
         </TouchableOpacity>
       </View>
      }
    </View>
    {
       loginError ?
       <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:10}}>
        <Text style={{color:"red",fontFamily:"Poppins-SemiBold"}}>Username & Password not Match !!!</Text>
       </View>
       :
       <></>
    }
  {/* <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:15}}>
    <TouchableOpacity onPress={()=>navigation.navigate("FreetownLogin")}>
    <Text style={{color:"#3498DB",fontFamily:"Poppins-SemiBold"}}>Freetown Staff Login</Text>
    </TouchableOpacity>
  </View> */}


    </ScrollView>
  </View>
  )
}