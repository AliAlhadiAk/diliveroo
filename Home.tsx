import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TextInput, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ChevronDownIcon } from 'react-native-heroicons/outline'; // Example import for outline ico
import { UserIcon,MagnifyingGlassIcon } from 'react-native-heroicons/outline'; // Example import for outline iconsns
import { AdjustmentsHorizontalIcon } from 'react-native-heroicons/outline';
import Categories from './componetns/Categories';
import FeaturedRow from './componetns/FeaturedRow';

// Example import for outline icons
const Home = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.searchbg}>

  
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://links.papareact.com/wru' }}
          style={styles.logo}
        />
        <View style={styles.addressContainer}>
          <Text style={styles.deliver}>Deliver Now!</Text>
          <Text style={styles.currentLocation}>Current Location
            <ChevronDownIcon size={20} color={'#00CCBB'}/>
          </Text>
        </View>
        <UserIcon color={'green'} size={20}/>
      </View>
      <View style={styles.searchcont}>
        <View style={styles.inputcontainer}>
            <MagnifyingGlassIcon color={'gray'} size={20} style={styles.magnify}/>
            <TextInput placeholder='Restaurants and clusines'
            keyboardType='default'/>
        </View>
        <AdjustmentsHorizontalIcon color={'#00CCBB'} style={styles.adjustment}/>

      </View>
      </View>
      <ScrollView>
        <Categories/>
        <FeaturedRow
        title={"Featured"}
        description={"Paid placements from our aprents"}
        />
                <FeaturedRow
        title={"Tasty Discounts"}
        description={"Paid placements from our aprents"}
        />
                <FeaturedRow
        title={"Featured"}
        description={"Paid placements from our aprents"}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
   // Set your desired background color
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
 // Add a bottom border for separation
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,


  },
  logo: {
    height: 28,
    width: 28,
    marginRight: 10,
    borderRadius: 50,
  },
  searchbg:{
    backgroundColor:"white"
  },
  addressContainer: {
    flex: 1,
  },
  deliver: {
    color: 'gray',
    fontSize: 16,
  },
  currentLocation: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  inputcontainer:{
    flexDirection:'row',
    flex:1,
    backgroundColor:'#edf2f7',
    padding:12,
    color:'black',

  },
  searchcont:{
    flexDirection:'row',
    alignItems:'center',
    paddingBottom:8,
    paddingHorizontal:16
  },
  magnify:{
    marginVertical:'auto',
    marginRight:5
  },
  adjustment:{
    textAlign:'center',
    marginHorizontal:'auto'
  }
});

export default Home;
