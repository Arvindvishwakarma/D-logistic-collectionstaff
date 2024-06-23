/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import React, { useContext, useState } from 'react'
import SignUp from "../SignUp"
import Home from '../Home'
import Invoice from '../Invoice'
import Payment from '../Payment'
import Customer from '../Customer'
import Booking from '../Booking'
import Qrscan from '../Qrscan'
import Profile from '../Profile'
import Successfull from '../Successfull'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddCustomer from '../AddCustomer'
import AddInvoice from '../AddInvoice'
import BookingDetail from '../BookingDetail'
import DrawSignture from '../DrawSignture'
import FreetownLogin from '../Freetown/FreetownLogin'
import FreetownHome from '../Freetown/FreetownHome'
import FreetownBooking from '../Freetown/FreetownBooking'
import InvoiceDetail from '../InvoiceDetail'
import { useQuery } from '@apollo/client'
import { QUERY_GET_COLLECTION_BY_ID } from '../Graphql/Query'
import AllQRInvoice from '../AllQRInvoice'
import PrintQR from '../PrintQR'
import AsyncStorage from '@react-native-async-storage/async-storage'
import FreetownOnWayBooking from '../Freetown/FreetownOnWayBooking'
import SplashScreen from '../SplashScreen'
import FreetownDelivered from '../Freetown/FreetownDelivered'
import Delivery from '../Delivery'
import AddCustomerInvoice from '../AddCustomerInvoice'
import FreetownPayment from '../Freetown/FreetownPayment'

const Stack = createNativeStackNavigator();
export default function AuthStack() {

  const { userInfo } = useContext(AuthContext);

  const [userId, setUserId] = useState("")

  AsyncStorage.getItem("userId").then(id => setUserId(id))

  const { data, loading } = useQuery(QUERY_GET_COLLECTION_BY_ID, {
    variables: {
      "collectionBoyId": `${userId}`
    }
  })


  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: true, gestureDirection: 'horizontal' }}>
        {
          userInfo ?
            <>
              {
                loading || data && data.getCollectionBoyId === null ?
                  <Stack.Screen name="SplashScreen" component={SplashScreen} />
                  :
                  <>
                    {
                      data && data.getCollectionBoyId.collectionStaffRole === "Collection_Boy_London" ?
                        <Stack.Screen name="Home" component={Home} />
                        :
                        <Stack.Screen name="FreetownHome" component={FreetownHome} />
                    }
                  </>
              }

              <Stack.Screen name="Invoice" component={Invoice} />
              <Stack.Screen name="Payment" component={Payment} />
              <Stack.Screen name="Customer" component={Customer} />
              <Stack.Screen name="Booking" component={Booking} />
              <Stack.Screen name="Qrscan" component={Qrscan} />
              <Stack.Screen name="Profile" component={Profile} />
              <Stack.Screen name="Successfull" component={Successfull} />
              <Stack.Screen name="AddCustomer" component={AddCustomer} />
              <Stack.Screen name="AddInvoice" component={AddInvoice} />
              <Stack.Screen name="BookingDetail" component={BookingDetail} />
              <Stack.Screen name="DrawSignture" component={DrawSignture} />
              <Stack.Screen name="Delivery" component={Delivery} />
              <Stack.Screen name="AddCustomerInvoice" component={AddCustomerInvoice} />

              <Stack.Screen name="FreetownBooking" component={FreetownBooking} />
              <Stack.Screen name="InvoiceDetail" component={InvoiceDetail} />
              <Stack.Screen name="AllQRInvoice" component={AllQRInvoice} />
              <Stack.Screen name="PrintQR" component={PrintQR} />
              <Stack.Screen name="FreetownOnWayBooking" component={FreetownOnWayBooking} />
              <Stack.Screen name="FreetownDelivered" component={FreetownDelivered} />
              <Stack.Screen name="FreetownPayment" component={FreetownPayment} />

            </>
            :
            <>
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen name="FreetownLogin" component={FreetownLogin} />
            </>



        }


      </Stack.Navigator>
    </NavigationContainer>
  )
}