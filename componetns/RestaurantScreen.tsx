import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import { ArrowLeftIcon, ChevronDownIcon, MinusCircleIcon, PlusIcon, QuestionMarkCircleIcon, StarIcon } from 'react-native-heroicons/outline';

const RestaurantScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [isPressed,setIsPressed] = useState<boolean>(false);
   const OnPress = () => {
    setIsPressed(!isPressed);
   }

  // Access imageUrl from route.params
  const { imageurl, title, rating, genre, shortdescription }: any = route.params;

  // Simulated menu data (replace with actual API integration)
  const menuItems = [
    { id: 1, name: 'Burger', price: '$10',    image: 'https://th.bing.com/th/id/OIP.lMWwVxOmq9pfmFqlF6dhdQHaHa?w=190&h=190&c=7&r=0&o=5&pid=1.7', },
    { id: 2, name: 'Pizza', price: '$12', image: 'data:image/jpeg;base64,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' },
    { id: 3, name: 'Salad', price: '$8', image: 'https://th.bing.com/th/id/OIF.Fni07abDHEq2znKLSe7KlA?w=278&h=173&c=7&r=0&o=5&pid=1.7' },
    { id: 4, name: 'Pasta', price: '$14', image: 'https://th.bing.com/th/id/OIP.ZYtpkWTwdybX_ZlM3-NVJQHaLH?w=129&h=193&c=7&r=0&o=5&pid=1.7' },
  ];

  return (
    <ScrollView>
      <View>
        <Image
          source={{ uri: imageurl }}
          style={styles.image}
        />
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.goBack()}>
          <ArrowLeftIcon size={20} color={'#00CCBB'} />
        </TouchableOpacity>
      </View>
      <View style={styles.info}>
        <View style={{ paddingHorizontal: 16, paddingTop: 16 }}>
          <Text style={{ fontSize: 25, fontWeight: 'bold' }}>{title}</Text>
          <View style={{ flexDirection: 'row', marginVertical: 4, alignItems: 'center' }}>
            <StarIcon size={22} color={'green'} opacity={0.5} />
            <Text style={{ color: "#718096", marginLeft: 4 }}>{rating} . {genre} Offers</Text>
          </View>
          <Text style={{ color: "#718096", paddingBottom: 16 }}>{shortdescription}</Text>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', borderColor: 'gray', borderWidth: 1, borderRadius: 8, padding: 10, marginBottom: 16 }}>
            <QuestionMarkCircleIcon color={'gray'} opacity={0.6} size={20} />
            <Text style={{ flex: 1, paddingLeft: 8, fontWeight: 'bold' }}>
              Have a food allergy?
            </Text>
            <ChevronDownIcon color={'#00CCBB'} size={20} />
          </TouchableOpacity>
          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18, marginBottom: 8 }}>Menu</Text>
          {/* Render menu items dynamically */}
          {menuItems.map(item => (
            <TouchableOpacity key={item.id} style={styles.menuItem} onPress={OnPress}>
              <Image source={{ uri: item.image }} style={styles.menuItemImage} />
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
                <Text>{item.price}</Text>
              </View>
            </TouchableOpacity>
         
          ))}
             {
              isPressed && (
                <>
                <View>
                  <View>
                    <TouchableOpacity>
                      <MinusCircleIcon size={20} color={'#00CCBB'}/>
                    </TouchableOpacity>
                  </View>
                </View>
                </>
              )
            }
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 224,
    width: '100%',
    position: 'relative',
  },
  iconContainer: {
    position: 'absolute',
    top: 30,
    left: 20,
    zIndex: 1,
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 10,
  },
  info: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    paddingHorizontal: 20,
    paddingTop: 20,
    minHeight: '100%',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingBottom: 12,
  },
  menuItemImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
});

export default RestaurantScreen;