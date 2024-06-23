import { View, Text ,StatusBar, ScrollView, TouchableOpacity, TextInput} from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import { Card } from 'react-native-paper';


export default function Payment({navigation}) {
  return (
    <View style={{height:"100%",backgroundColor:"#fff"}}>
    <ScrollView>
     <StatusBar barStyle="light-content" hidden={false} backgroundColor="#3498DB" translucent={true} />
    <View style={{backgroundColor:"#3498DB",height:200,borderBottomLeftRadius:30,borderBottomRightRadius:30}}>
   
      <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:70}}>
      <View style={{flexDirection:"row",width:"90%"}}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
      <Feather name="arrow-left" size={25} style={{color:"#fff"}}/>
      </TouchableOpacity>
      <Text style={{fontSize:18,fontFamily:"Poppins-SemiBold",color:"#fff",marginLeft:10}}>Payment</Text>
      </View>
      </View>
 </View>

 <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center"}}>
    <Card style={{width:"90%",height:50,marginTop:10,marginBottom:10,elevation:5,borderRadius:10}}>
        <View style={{flexDirection:"row",width:"100%"}}>
        <View style={{width:"90%"}}>
            <TextInput placeholder='Invoice No..' style={{marginLeft:10,color:"#000"}} placeholderTextColor="#95A5A6" />
        </View>
        <Feather name="search" size={20} style={{marginTop:13,color:"#000"}}/>
        </View>
    </Card>
 </View>



 <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
  
 <Card style={{width:"90%",height:100,marginTop:10,marginBottom:10,elevation:5,borderRadius:10}}>
        <View style={{flexDirection:"row",width:"100%",justifyContent:"space-between"}}>
            <View style={{width:"50%"}}>
                <Text style={{marginLeft:10,color:"#34495E",fontSize:12,marginTop:7,fontFamily:"Poppins-SemiBold"}}>#554455544</Text>
                <View style={{flexDirection:"row",marginLeft:10}}>
                    <Text style={{ fontSize:11,fontFamily:"Poppins-SemiBold",color:"#2980B9"}}>Recipient : </Text>
                    <Text style={{ fontSize:11,fontFamily:"Poppins-SemiBold",color:"#34495E"}}>Laurie H. Smith </Text>
                </View>
                <View style={{flexDirection:"row",marginLeft:10}}>
                    <Text style={{ fontSize:11,fontFamily:"Poppins-SemiBold",color:"#2980B9"}}>Email : </Text>
                    <Text style={{ fontSize:11,fontFamily:"Poppins-SemiBold",color:"#34495E"}}>invoice@gmail.com </Text>
                </View>
                <View style={{flexDirection:"row",marginLeft:10}}>
                    <Text style={{ fontSize:11,fontFamily:"Poppins-SemiBold",color:"#2980B9"}}>Phone : </Text>
                    <Text style={{ fontSize:11,fontFamily:"Poppins-SemiBold",color:"#34495E"}}>859-485-582 </Text>
                </View>

            </View>
            <View style={{width:"50%"}}>
            <Text style={{marginLeft:10,color:"#34495E",fontSize:12,marginTop:7,fontFamily:"Poppins-SemiBold"}}>06 Jul 2023, 10:50AM</Text>
            <Text style={{fontSize:11,marginLeft:10,fontFamily:"Poppins-SemiBold",color:"#2ECC71"}}>Complete</Text>
            <Text style={{marginLeft:10,color:"#34495E",fontSize:8,marginTop:0,fontFamily:"Poppins-Medium"}}>06 Jul 2023, 10:50AM</Text>
            <View style={{flexDirection:"column",width:"60%",justifyContent:"center",alignItems:"center",backgroundColor:"#1ABC9C",marginLeft:10,height:25,borderRadius:50,marginTop:1}}>
               <Text style={{color:"#fff",fontSize:12}}>View Detail</Text>
                </View>
            </View>

           
     
        </View>
    </Card>

    <Card style={{width:"90%",height:100,marginTop:10,marginBottom:10,elevation:5,borderRadius:10}}>
        <View style={{flexDirection:"row",width:"100%",justifyContent:"space-between"}}>
            <View style={{width:"50%"}}>
                <Text style={{marginLeft:10,color:"#34495E",fontSize:12,marginTop:7,fontFamily:"Poppins-SemiBold"}}>#554455544</Text>
                <View style={{flexDirection:"row",marginLeft:10}}>
                    <Text style={{ fontSize:11,fontFamily:"Poppins-SemiBold",color:"#2980B9"}}>Recipient : </Text>
                    <Text style={{ fontSize:11,fontFamily:"Poppins-SemiBold",color:"#34495E"}}>Laurie H. Smith </Text>
                </View>
                <View style={{flexDirection:"row",marginLeft:10}}>
                    <Text style={{ fontSize:11,fontFamily:"Poppins-SemiBold",color:"#2980B9"}}>Email : </Text>
                    <Text style={{ fontSize:11,fontFamily:"Poppins-SemiBold",color:"#34495E"}}>invoice@gmail.com </Text>
                </View>
                <View style={{flexDirection:"row",marginLeft:10}}>
                    <Text style={{ fontSize:11,fontFamily:"Poppins-SemiBold",color:"#2980B9"}}>Phone : </Text>
                    <Text style={{ fontSize:11,fontFamily:"Poppins-SemiBold",color:"#34495E"}}>859-485-582 </Text>
                </View>

            </View>
            <View style={{width:"50%"}}>
            <Text style={{marginLeft:10,color:"#34495E",fontSize:12,marginTop:7,fontFamily:"Poppins-SemiBold"}}>06 Jul 2023, 10:50AM</Text>
            <Text style={{fontSize:11,marginLeft:10,fontFamily:"Poppins-SemiBold",color:"#E74C3C"}}>Due</Text>
            <Text style={{marginLeft:10,color:"#34495E",fontSize:8,marginTop:0,fontFamily:"Poppins-Medium"}}>06 Jul 2023, 10:50AM</Text>
            <View style={{flexDirection:"column",width:"60%",justifyContent:"center",alignItems:"center",backgroundColor:"#1ABC9C",marginLeft:10,height:25,borderRadius:50,marginTop:1}}>
               <Text style={{color:"#fff",fontSize:12}}>View Detail</Text>
                </View>
            </View>

           
     
        </View>
    </Card>
 </View>





 </ScrollView>

</View>
  )
}