import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import * as Animatable from 'react-native-animatable'
import * as Progress from 'react-native-progress'
import { useNavigation } from '@react-navigation/native'



const PreparingOrderScreen = () => {


   const navigation = useNavigation();

   useEffect(() => {
     setTimeout(() => {
       navigation.navigate("Dilivery")
     }, 4000);
   },[])

  return (
    <SafeAreaView style={{backgroundColor:"#00CCBB",flex:1,justifyContent:'center',alignItems:'center'}}>
      <Animatable.Image
       source={{uri:"https://th.bing.com/th/id/OIP.nQCwyBl1X0k-NpX4d1zNfwHaHa?w=199&h=199&c=7&r=0&o=5&pid=1.7"}}
       animation="slideInUp"
       iterationCount={1}
       style={{height:370,width:370}}

       />
       <Animatable.Text
     animation="slideInUp"
     iterationCount={1}
     style={{marginVertical:10,fontWeight:'bold',alignContent:'center',color:'white',fontSize:15
     }}

     >
     Waiting for restaurant to accept your order!
</Animatable.Text>
  <Progress.Circle  size={60} indeterminate={true} color='white'  />
    </SafeAreaView>
  )
}

export default PreparingOrderScreen