import { View, Text ,TouchableOpacity,ScrollView,StatusBar} from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather';
import { Card } from 'react-native-paper';
import QRCode from 'react-native-qrcode-svg';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import RNPrint from 'react-native-print';

export default function PrintQR({navigation,route}) {

    const{data} = route.params;

    async function createPDF() {
        let options = {
          html: '<h1>PDF TEST</h1>',
          fileName: 'test',
          directory: 'Documents',
        };
        
        const file = await RNHTMLtoPDF.convert(options);
    }

    async function printPDF() {
        const results = await RNHTMLtoPDF.convert({
          html: `<h1 style="text-align:center;font-size:25px; color:#3498db">QR Code</h1>
          <hr></hr>
          <p style="font-weight:bold; font-size:12px; color:#2c3e50">Booking No: <span style="font-weight:normal; color:#7f8c8d">#${data && data.invoiceNumber}</span></p>
          <p style="font-weight:bold; font-size:12px; color:#2c3e50">Invoice No: <span style="font-weight:normal; color:#7f8c8d">#${data && data.invoiceNumber}</span></p>

          
        />
          `,
          fileName: 'test',
          base64: true,
        })
    
        await RNPrint.print({ filePath: results.filePath })
      }

  return (
    <View style={{ height: "100%", backgroundColor: "#fff" }}>
    <ScrollView>
        <StatusBar barStyle="light-content" hidden={false} backgroundColor="#3498DB" translucent={true} />
        <View style={{ backgroundColor: "#3498DB", height: 150, borderBottomLeftRadius: 30, borderBottomRightRadius: 30 }}>

            <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: 70 }}>
                <View style={{ flexDirection: "row", width: "90%" }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Feather name="arrow-left" size={25} style={{ color: "#fff" }} />
                    </TouchableOpacity>
                </View>
            </View>

           
        </View>
        <View style={{flexDirection:"column",alignItems:"center",justifyContent:"center"}}>

         <Card style={{width:"90%",height:550,marginBottom:5,marginTop:20}}>
            <View style={{flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
         <Text style={{marginTop:20,color:"#000",fontFamily:"Poppins-SemiBold"}}>Booking No :  </Text>
         <Text style={{marginTop:3,color:"#000",fontFamily:"Poppins-SemiBold"}}>Invoice No :  </Text>

      <View style={{flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:30}}>
         <QRCode
          value="Just some string value"
        
        
          size={150}
         
        />

        <TouchableOpacity onPress={()=>printPDF()}>
        <View style={{width:150,backgroundColor:"#3498DB",height:40,marginTop:50,borderRadius:5,flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
          <Text style={{color:"#fff",fontFamily:"Poppins-SemiBold"}}>Print</Text>
          <Feather name="printer" size={20} style={{ color: "#fff",marginLeft:5 }} />
        </View>
        </TouchableOpacity>
</View>

         </View>
         </Card>
         </View>

        


        </ScrollView>
    



    </View>
  )
}