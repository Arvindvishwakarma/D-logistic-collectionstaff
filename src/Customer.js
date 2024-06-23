import { View, Text,StatusBar,TouchableOpacity, ScrollView,Image } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Card } from 'react-native-paper';
import addCus from "../assets/Image/addCus.png"
import allCus from "../assets/Image/allCus.png"

export default function Customer({navigation}) {
  return (
    <View style={{backgroundColor:"#fff",height:"100%"}}>
        <ScrollView>
        <StatusBar barStyle="light-content" hidden={false} backgroundColor="#3498DB" translucent={true} />
       <View style={{backgroundColor:"#3498DB",height:200,borderBottomLeftRadius:30,borderBottomRightRadius:30}}>
       
       <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:70}}>
       <View style={{flexDirection:"row",width:"90%"}}>
         <TouchableOpacity onPress={()=>navigation.goBack()}>
       <Feather name="arrow-left" size={25} style={{color:"#fff"}}/>
       </TouchableOpacity>
       <Text style={{fontSize:18,fontFamily:"Poppins-SemiBold",color:"#fff",marginLeft:10}}>Customer</Text>
       </View>
       </View>
  </View>


  <View style={{flexDirection:"column",justifyContent:"center",alignItems:"center"}}>

    <Card style={{width:"95%",height:100,marginTop:10,marginBottom:5,elevation:3,borderRadius:15}}>
      <View style={{flexDirection:"row",justifyContent:"space-between",height:"100%"}}>
        <View style={{width:"70%",height:"100%",flexDirection:"column"}}>
          <View style={{width:"100%",marginTop:10,marginLeft:15,flexDirection:"row"}}>
          <Text  style={{color:"#2980B9",fontFamily:"Poppins-SemiBold",fontSize:12}}>Name : </Text>
          <Text  style={{color:"#34495E",fontFamily:"Poppins-SemiBold",fontSize:12}} numberOfLines={1}>Laurie H. Smith </Text>
          </View>
          <View style={{width:"100%",marginTop:3,marginLeft:15,flexDirection:"row"}}>
          <Text  style={{color:"#2980B9",fontFamily:"Poppins-SemiBold",fontSize:12}}>Email : </Text>
          <Text  style={{color:"#34495E",fontFamily:"Poppins-SemiBold",fontSize:12}} numberOfLines={1}>sharadkum9@gmail.com </Text>
          </View>

          <View style={{width:"100%",marginTop:3,marginLeft:15,flexDirection:"row"}}>
          <Text  style={{color:"#2980B9",fontFamily:"Poppins-SemiBold",fontSize:12}}>Phone : </Text>
          <Text  style={{color:"#34495E",fontFamily:"Poppins-SemiBold",fontSize:12}} numberOfLines={1}>315-278-5173</Text>
          </View>
        </View>
        <View style={{width:"30%",height:"100%",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <View style={{width:"90%",backgroundColor:"#66FC87",height:40,borderRadius:50,flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
            <FontAwesome name="pencil" size={18} color="#fff"/>
              <Text style={{marginLeft:5,fontFamily:"Poppins-SemiBold",marginTop:5,color:"#fff",fontSize:12}}>Edit</Text>
          </View>
          <View style={{width:"90%",backgroundColor:"#E74C3C",height:40,marginTop:6,borderRadius:50,flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
          <FontAwesome name="trash-o" size={18} color="#fff"/>
          <Text style={{marginLeft:5,fontFamily:"Poppins-SemiBold",marginTop:5,color:"#fff",fontSize:12}}>Delete</Text>
        </View>
        </View>
      </View>
    </Card>


    <Card style={{width:"95%",height:100,marginTop:10,marginBottom:5,elevation:3,borderRadius:15}}>
      <View style={{flexDirection:"row",justifyContent:"space-between",height:"100%"}}>
        <View style={{width:"70%",height:"100%",flexDirection:"column"}}>
          <View style={{width:"100%",marginTop:10,marginLeft:15,flexDirection:"row"}}>
          <Text  style={{color:"#2980B9",fontFamily:"Poppins-SemiBold",fontSize:12}}>Name : </Text>
          <Text  style={{color:"#34495E",fontFamily:"Poppins-SemiBold",fontSize:12}} numberOfLines={1}>Laurie H. Smith </Text>
          </View>
          <View style={{width:"100%",marginTop:3,marginLeft:15,flexDirection:"row"}}>
          <Text  style={{color:"#2980B9",fontFamily:"Poppins-SemiBold",fontSize:12}}>Email : </Text>
          <Text  style={{color:"#34495E",fontFamily:"Poppins-SemiBold",fontSize:12}} numberOfLines={1}>sharadkum9@gmail.com </Text>
          </View>

          <View style={{width:"100%",marginTop:3,marginLeft:15,flexDirection:"row"}}>
          <Text  style={{color:"#2980B9",fontFamily:"Poppins-SemiBold",fontSize:12}}>Phone : </Text>
          <Text  style={{color:"#34495E",fontFamily:"Poppins-SemiBold",fontSize:12}} numberOfLines={1}>315-278-5173</Text>
          </View>
        </View>
        <View style={{width:"30%",height:"100%",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <View style={{width:"90%",backgroundColor:"#66FC87",height:40,borderRadius:50,flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
            <FontAwesome name="pencil" size={18} color="#fff"/>
              <Text style={{marginLeft:5,fontFamily:"Poppins-SemiBold",marginTop:5,color:"#fff",fontSize:12}}>Edit</Text>
          </View>
          <View style={{width:"90%",backgroundColor:"#E74C3C",height:40,marginTop:6,borderRadius:50,flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
          <FontAwesome name="trash-o" size={18} color="#fff"/>
          <Text style={{marginLeft:5,fontFamily:"Poppins-SemiBold",marginTop:5,color:"#fff",fontSize:12}}>Delete</Text>
        </View>
        </View>
      </View>
    </Card>

    <Card style={{width:"95%",height:100,marginTop:10,marginBottom:5,elevation:3,borderRadius:15}}>
      <View style={{flexDirection:"row",justifyContent:"space-between",height:"100%"}}>
        <View style={{width:"70%",height:"100%",flexDirection:"column"}}>
          <View style={{width:"100%",marginTop:10,marginLeft:15,flexDirection:"row"}}>
          <Text  style={{color:"#2980B9",fontFamily:"Poppins-SemiBold",fontSize:12}}>Name : </Text>
          <Text  style={{color:"#34495E",fontFamily:"Poppins-SemiBold",fontSize:12}} numberOfLines={1}>Laurie H. Smith </Text>
          </View>
          <View style={{width:"100%",marginTop:3,marginLeft:15,flexDirection:"row"}}>
          <Text  style={{color:"#2980B9",fontFamily:"Poppins-SemiBold",fontSize:12}}>Email : </Text>
          <Text  style={{color:"#34495E",fontFamily:"Poppins-SemiBold",fontSize:12}} numberOfLines={1}>sharadkum9@gmail.com </Text>
          </View>

          <View style={{width:"100%",marginTop:3,marginLeft:15,flexDirection:"row"}}>
          <Text  style={{color:"#2980B9",fontFamily:"Poppins-SemiBold",fontSize:12}}>Phone : </Text>
          <Text  style={{color:"#34495E",fontFamily:"Poppins-SemiBold",fontSize:12}} numberOfLines={1}>315-278-5173</Text>
          </View>
        </View>
        <View style={{width:"30%",height:"100%",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <View style={{width:"90%",backgroundColor:"#66FC87",height:40,borderRadius:50,flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
            <FontAwesome name="pencil" size={18} color="#fff"/>
              <Text style={{marginLeft:5,fontFamily:"Poppins-SemiBold",marginTop:5,color:"#fff",fontSize:12}}>Edit</Text>
          </View>
          <View style={{width:"90%",backgroundColor:"#E74C3C",height:40,marginTop:6,borderRadius:50,flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
          <FontAwesome name="trash-o" size={18} color="#fff"/>
          <Text style={{marginLeft:5,fontFamily:"Poppins-SemiBold",marginTop:5,color:"#fff",fontSize:12}}>Delete</Text>
        </View>
        </View>
      </View>
    </Card>


    <Card style={{width:"95%",height:100,marginTop:10,marginBottom:5,elevation:3,borderRadius:15}}>
      <View style={{flexDirection:"row",justifyContent:"space-between",height:"100%"}}>
        <View style={{width:"70%",height:"100%",flexDirection:"column"}}>
          <View style={{width:"100%",marginTop:10,marginLeft:15,flexDirection:"row"}}>
          <Text  style={{color:"#2980B9",fontFamily:"Poppins-SemiBold",fontSize:12}}>Name : </Text>
          <Text  style={{color:"#34495E",fontFamily:"Poppins-SemiBold",fontSize:12}} numberOfLines={1}>Laurie H. Smith </Text>
          </View>
          <View style={{width:"100%",marginTop:3,marginLeft:15,flexDirection:"row"}}>
          <Text  style={{color:"#2980B9",fontFamily:"Poppins-SemiBold",fontSize:12}}>Email : </Text>
          <Text  style={{color:"#34495E",fontFamily:"Poppins-SemiBold",fontSize:12}} numberOfLines={1}>sharadkum9@gmail.com </Text>
          </View>

          <View style={{width:"100%",marginTop:3,marginLeft:15,flexDirection:"row"}}>
          <Text  style={{color:"#2980B9",fontFamily:"Poppins-SemiBold",fontSize:12}}>Phone : </Text>
          <Text  style={{color:"#34495E",fontFamily:"Poppins-SemiBold",fontSize:12}} numberOfLines={1}>315-278-5173</Text>
          </View>
        </View>
        <View style={{width:"30%",height:"100%",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <View style={{width:"90%",backgroundColor:"#66FC87",height:40,borderRadius:50,flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
            <FontAwesome name="pencil" size={18} color="#fff"/>
              <Text style={{marginLeft:5,fontFamily:"Poppins-SemiBold",marginTop:5,color:"#fff",fontSize:12}}>Edit</Text>
          </View>
          <View style={{width:"90%",backgroundColor:"#E74C3C",height:40,marginTop:6,borderRadius:50,flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
          <FontAwesome name="trash-o" size={18} color="#fff"/>
          <Text style={{marginLeft:5,fontFamily:"Poppins-SemiBold",marginTop:5,color:"#fff",fontSize:12}}>Delete</Text>
        </View>
        </View>
      </View>
    </Card>


    <Card style={{width:"95%",height:100,marginTop:10,marginBottom:5,elevation:3,borderRadius:15}}>
      <View style={{flexDirection:"row",justifyContent:"space-between",height:"100%"}}>
        <View style={{width:"70%",height:"100%",flexDirection:"column"}}>
          <View style={{width:"100%",marginTop:10,marginLeft:15,flexDirection:"row"}}>
          <Text  style={{color:"#2980B9",fontFamily:"Poppins-SemiBold",fontSize:12}}>Name : </Text>
          <Text  style={{color:"#34495E",fontFamily:"Poppins-SemiBold",fontSize:12}} numberOfLines={1}>Laurie H. Smith </Text>
          </View>
          <View style={{width:"100%",marginTop:3,marginLeft:15,flexDirection:"row"}}>
          <Text  style={{color:"#2980B9",fontFamily:"Poppins-SemiBold",fontSize:12}}>Email : </Text>
          <Text  style={{color:"#34495E",fontFamily:"Poppins-SemiBold",fontSize:12}} numberOfLines={1}>sharadkum9@gmail.com </Text>
          </View>

          <View style={{width:"100%",marginTop:3,marginLeft:15,flexDirection:"row"}}>
          <Text  style={{color:"#2980B9",fontFamily:"Poppins-SemiBold",fontSize:12}}>Phone : </Text>
          <Text  style={{color:"#34495E",fontFamily:"Poppins-SemiBold",fontSize:12}} numberOfLines={1}>315-278-5173</Text>
          </View>
        </View>
        <View style={{width:"30%",height:"100%",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <View style={{width:"90%",backgroundColor:"#66FC87",height:40,borderRadius:50,flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
            <FontAwesome name="pencil" size={18} color="#fff"/>
              <Text style={{marginLeft:5,fontFamily:"Poppins-SemiBold",marginTop:5,color:"#fff",fontSize:12}}>Edit</Text>
          </View>
          <View style={{width:"90%",backgroundColor:"#E74C3C",height:40,marginTop:6,borderRadius:50,flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
          <FontAwesome name="trash-o" size={18} color="#fff"/>
          <Text style={{marginLeft:5,fontFamily:"Poppins-SemiBold",marginTop:5,color:"#fff",fontSize:12}}>Delete</Text>
        </View>
        </View>
      </View>
    </Card>

    <Card style={{width:"95%",height:100,marginTop:10,marginBottom:5,elevation:3,borderRadius:15}}>
      <View style={{flexDirection:"row",justifyContent:"space-between",height:"100%"}}>
        <View style={{width:"70%",height:"100%",flexDirection:"column"}}>
          <View style={{width:"100%",marginTop:10,marginLeft:15,flexDirection:"row"}}>
          <Text  style={{color:"#2980B9",fontFamily:"Poppins-SemiBold",fontSize:12}}>Name : </Text>
          <Text  style={{color:"#34495E",fontFamily:"Poppins-SemiBold",fontSize:12}} numberOfLines={1}>Laurie H. Smith </Text>
          </View>
          <View style={{width:"100%",marginTop:3,marginLeft:15,flexDirection:"row"}}>
          <Text  style={{color:"#2980B9",fontFamily:"Poppins-SemiBold",fontSize:12}}>Email : </Text>
          <Text  style={{color:"#34495E",fontFamily:"Poppins-SemiBold",fontSize:12}} numberOfLines={1}>sharadkum9@gmail.com </Text>
          </View>

          <View style={{width:"100%",marginTop:3,marginLeft:15,flexDirection:"row"}}>
          <Text  style={{color:"#2980B9",fontFamily:"Poppins-SemiBold",fontSize:12}}>Phone : </Text>
          <Text  style={{color:"#34495E",fontFamily:"Poppins-SemiBold",fontSize:12}} numberOfLines={1}>315-278-5173</Text>
          </View>
        </View>
        <View style={{width:"30%",height:"100%",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
          <View style={{width:"90%",backgroundColor:"#66FC87",height:40,borderRadius:50,flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
            <FontAwesome name="pencil" size={18} color="#fff"/>
              <Text style={{marginLeft:5,fontFamily:"Poppins-SemiBold",marginTop:5,color:"#fff",fontSize:12}}>Edit</Text>
          </View>
          <View style={{width:"90%",backgroundColor:"#E74C3C",height:40,marginTop:6,borderRadius:50,flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
          <FontAwesome name="trash-o" size={18} color="#fff"/>
          <Text style={{marginLeft:5,fontFamily:"Poppins-SemiBold",marginTop:5,color:"#fff",fontSize:12}}>Delete</Text>
        </View>
        </View>
      </View>
    </Card>

</View>
</ScrollView>
   
   <View style={{position:"absolute",bottom:0,height:60,width:"100%"}}>
    <View style={{width:"100%",flexDirection:"row",justifyContent:"flex-end"}}>
    <TouchableOpacity onPress={()=>navigation.navigate("AddCustomer")}>
      <View style={{backgroundColor:"#E74C3C",width:50,height:50,marginRight:10,flexDirection:"column",alignItems:"center",justifyContent:"center",borderRadius:50}} >
       <Feather name="plus" size={25} color="#fff"/>
      </View>
      </TouchableOpacity>
      

    </View>

   </View>
    </View>
  )
}