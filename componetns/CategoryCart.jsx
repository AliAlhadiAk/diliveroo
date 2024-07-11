import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { StyleSheet } from 'react-native'

const CategoryCart = ({imageUrl,title}) => {
  return (
    <TouchableOpacity style={style.conatiner}>
      <Image source={{
        uri:imageUrl
      }}
      style={style.image}/>
      <Text style={style.absolute}>{title}</Text>
    </TouchableOpacity>
  )
}
const style = StyleSheet.create({
  image:{
    height:80,
    width:80,
    marginLeft:5,
    borderRadius:5
  },
  container:{
    marginRight:8,
    position:'relative',
    
  },
  absolute:{
    position:'absolute',
    bottom:2,
    left:6,
    color:'white',
    fontWeight:'bold'
}
})
export default CategoryCart