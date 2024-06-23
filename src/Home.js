import { View, Text,StatusBar, ScrollView,Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import profile from "../assets/Image/Vector.png"
import Feather from 'react-native-vector-icons/Feather';
import { Card } from 'react-native-paper';
import booking from "../assets/Image/booking.png"
import customer from "../assets/Image/customer.png"
import invoice from "../assets/Image/invoice.png"
import money from "../assets/Image/money.png"
import scan from "../assets/Image/scan.png"
import print from "../assets/Image/print.png"
import delivered from "../assets/Image/delivered.png"
import Invoice from './Invoice';

export default function Home({navigation}) {
  return (
    <View style={{height:"100%",backgroundColor:"#fff"}}>
    <ScrollView>
     <StatusBar barStyle="light-content" hidden={false} backgroundColor="#3498DB" translucent={true} />
     <View style={{backgroundColor:"#3498DB",height:200,borderBottomLeftRadius:30,borderBottomRightRadius:30}}>
        <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:70}}>
            <View style={{flexDirection:"row"}}>
            <Text style={{fontSize:20,marginLeft:20,fontFamily:"Poppins-Bold",color:"#fff"}}>Collection Staff</Text>
            <Text style={{marginTop:6,marginLeft:5,fontFamily:"Poppins-SemiBold",color:"#fff"}}>(London)</Text>
            </View>
            <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>
            <Image source={profile} style={{marginRight:20}}/>
            </TouchableOpacity>
        </View>
        <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:10}}>
          
        </View>
     </View>
     <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center"}}>

     <View style={{flexDirection:"row",justifyContent:"space-between",width:"95%"}}>
        <View style={{width:"50%",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:10,marginBottom:5}}>
        <Card style={{width:"80%" , height:120,flexDirection:"row",justifyContent:"center",alignItems:"center",elevation:5,borderRadius:10}}>
            <TouchableOpacity onPress={()=>navigation.navigate("Booking")}>
            <View style={{flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%"}}>
            <Image source={booking}  />
            </View>
            </TouchableOpacity>
        </Card>
        <Text style={{marginTop:10,fontFamily:"Poppins-SemiBold",color:"#000"}}>Booking</Text>
        </View>
        <View style={{width:"50%",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:10,marginBottom:5}}>
        <Card style={{width:"80%" , height:120,flexDirection:"row",justifyContent:"center",alignItems:"center",elevation:5,borderRadius:10}}>
        <TouchableOpacity onPress={()=>navigation.navigate("Invoice")}>
            <View style={{flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%"}}>
            <Image source={invoice}  />
            </View>
            </TouchableOpacity>
        </Card>
        <Text style={{marginTop:10,fontFamily:"Poppins-SemiBold",color:"#000"}}>Invoice</Text>
        </View>
     </View>

   

     <View style={{flexDirection:"row",justifyContent:"space-between",width:"95%"}}>
        <View style={{width:"50%",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:10,marginBottom:5}}>
        <Card style={{width:"80%" , height:120,flexDirection:"row",justifyContent:"center",alignItems:"center",elevation:5,borderRadius:10}}>
            <TouchableOpacity onPress={()=>navigation.navigate("Qrscan")}>
            <View style={{flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%"}}>
            <Image source={scan}  />
            </View>
            </TouchableOpacity>
        </Card>
        <Text style={{marginTop:10,fontFamily:"Poppins-SemiBold",color:"#000"}}>QR Scan</Text>
        </View>
        <View style={{width:"50%",justifyContent:"center",alignItems:"center",flexDirection:"column",marginRight:0,marginTop:10,marginBottom:5}}>
        <Card style={{width:"80%" ,height:120,flexDirection:"row",justifyContent:"center",alignItems:"center",elevation:5,borderRadius:10}}>
        <TouchableOpacity onPress={()=>navigation.navigate("AllQRInvoice")}>
        <View style={{flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%"}}>
        <Image source={print}  />
            </View>
            </TouchableOpacity>
        </Card>
        <Text style={{marginTop:10,fontFamily:"Poppins-SemiBold",color:"#000"}}>Print QR</Text>
        </View>
     </View>


     <View style={{flexDirection:"row",justifyContent:"space-between",width:"95%"}}>
      
        <View style={{width:"50%",justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:10,marginBottom:5}}>
        <Card style={{width:"80%" , height:120,flexDirection:"row",justifyContent:"center",alignItems:"center",elevation:5,borderRadius:10}}>
        <TouchableOpacity onPress={()=>navigation.navigate("Delivery")}>
            <View style={{flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%"}}>
            <Image source={delivered}  />
            </View>
            </TouchableOpacity>
        </Card>
        <Text style={{marginTop:10,fontFamily:"Poppins-SemiBold",color:"#000"}}>Delivered</Text>
        </View>
     </View>

   

     </View>

    
      </ScrollView>
    </View>
  )
}