import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { StarIcon } from 'react-native-heroicons/outline';
import { useNavigation } from '@react-navigation/native';



const RestaurantCart = ({imageurl,title,rating,genre,adress,shortdescription,dishes}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={style.container}
    onPress={()=>{
      navigation.navigate('Restaurant',{
        imageurl,
        title,
        rating,
        adress,
        shortdescription,
        dishes
      })
    }}>
      <Image
       source={{
        uri:imageurl
       }}
       style={style.img}
      />
      <View style={style.subcont}>
        <Text style={style.title}>{title}</Text>
        <View style={style.iconcont}>
         <StarIcon color={'green'} opacity={0.5} size={22}/>
         <Text style={style.textrate}>
            <Text style={{color:"green"}}>{rating}</Text> . {genre}
         </Text>
        </View>
        <View style={style.addresscont}>
          <Text style={style.address}>Nearby . {adress}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
const style = StyleSheet.create({
    img:{
       height:144,
       width:256,
       borderRadius:5
    },
    title:{
        fontWeight:'bold',
        fontSize:20,
        paddingTop:8
    },
    subcont:{
        paddingHorizontal:12,
        paddingBottom:16
    },
    iconcont:{
      flexDirection:'row',
      alignItems:'center'
    },
    textrate:{
        color: "#718096",

    },
    address:{
        color: "#718096",
    },
    addresscont:{
      flexDirection:'row',
      alignItems:'center',

    },
    container:{
        backgroundColor:'white',
        marginRight:12,
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5, // Android only
        marginTop: 20,
        
    }
})

export default RestaurantCart