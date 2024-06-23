import { View, Text,StatusBar,TouchableOpacity, ScrollView,Image } from 'react-native'
import React ,{useState}from 'react'
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Card,TextInput } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';


export default function AddCustomer() {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Apple', value: 'apple'},
      {label: 'Banana', value: 'banana'}
    ]);
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
       <Text style={{fontSize:18,fontFamily:"Poppins-SemiBold",color:"#fff",marginLeft:10}}>Add Customer</Text>
       </View>
       </View>
  </View>

    <View style={{flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        <View style={{width:"90%",marginTop:10}}>
        <TextInput
      mode="outlined"
      label="First Name"
      placeholder="First Name"
      
    />
    </View>

    <View style={{width:"90%",marginTop:10}}>
        <TextInput
      mode="outlined"
      label="Last Name"
      placeholder="Last Name"
  style={{fontFamily:"Poppins-SemiBold"}}
      
    />
    </View>

    <View style={{width:"90%",marginTop:10}}>
        <TextInput
      mode="outlined"
      label="Company"
      placeholder="Company"
      
    />
    </View>

    <View style={{width:"90%",marginTop:10}}>
        <TextInput
      mode="outlined"
      label="Email"
      placeholder="Email"
      
    />
    </View>

    <View style={{width:"90%",marginTop:10}}>
        <TextInput
      mode="outlined"
      label="Phone 1"
      placeholder="Phone 1"
      
    />
    </View>

    <View style={{width:"90%",marginTop:10}}>
        <TextInput
      mode="outlined"
      label="Phone 2"
      placeholder="Phone 2"
      
    />
    </View>

    <View style={{width:"90%",marginTop:10}}>
        <TextInput
      mode="outlined"
      label="Address 1"
      placeholder="Address 1"
      multiline={true}
      numberOfLines={4}
      
    />
    </View>

    <View style={{width:"90%",marginTop:10}}>
        <TextInput
      mode="outlined"
      label="Address 2"
      placeholder="Address 2"
      multiline={true}
      numberOfLines={4}
      
    />
    </View>

    <View style={{width:"90%",marginTop:10}}>
        <TextInput
      mode="outlined"
      label="Post Code"
      placeholder="Post Code"
     
      
    />
    </View>

    <View style={{width:"90%",marginTop:10}}>
        <TextInput
      mode="outlined"
      label="Web Page"
      placeholder="Post Code"
     
      
    />
    </View>

    <View style={{width:"90%",marginTop:10}}>
        <TextInput
      mode="outlined"
      label="Notes"
      placeholder="Notes"
      multiline={true}
      numberOfLines={4}
     
      
    />
    </View>

    
    <View style={{width:"90%",marginTop:10}}>
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
    </View>


    <View style={{width:"90%",marginTop:15,flexDirection:"row",alignItems:"center",justifyContent:"center",}}>
    <View style={{width:"50%",backgroundColor:"#3498DB",flexDirection:"row",alignItems:"center",justifyContent:"center",height:50,marginBottom:10,borderRadius:10}}>
        <TouchableOpacity >
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"}}>
            <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"}}>
       <Text style={{fontSize:20,color:"#fff",fontFamily:"Poppins-SemiBold"}}>Add</Text>
       </View>
       </View>
       </TouchableOpacity>
    </View>
    </View>


    </View>


  </ScrollView>
    </View>
  )
}