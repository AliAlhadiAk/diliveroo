import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { XMarkIcon } from 'react-native-heroicons/outline';
import * as Progress from 'react-native-progress';
import MapView, { Marker } from 'react-native-maps';

const Delivery = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <XMarkIcon color={'white'} size={25} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Order Help</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Estimated Arrival</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.timeText}>45-55 Minutes</Text>
            <Image
              source={{ uri: 'https://links.papareact.com/fls' }}
              style={styles.image}
            />
          </View>
          <Progress.Bar style={styles.progressBar} progress={0.6} width={null} color='#00CCBB' indeterminate={true}/>
          <Text style={styles.statusText}>
            Your order is being prepared
          </Text>
        </View>
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}
          >
            <Marker
              coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
              title="Delivery Location"
              description="Your order is on its way!"
            />
          </MapView>
          <View style={styles.driverInfo}>
            <Text style={styles.driverName}>John Doe</Text>
            <Text style={styles.driverVehicle}>Car</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00CCBB',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 10,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  card: {
    marginBottom: 20,
  },
  cardTitle: {
    color: "#718096",
    fontSize: 18,
    marginBottom: 12,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  timeText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginRight: 12,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  progressBar: {
    marginTop: 12,
  },
  statusText: {
    color: "#718096",
    marginTop: 12,
  },
  mapContainer: {
    flex: 1,
    marginTop: 20,
    borderRadius: 10,
    overflow: 'hidden', // Ensure contents don't overflow map boundaries
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  driverInfo: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  driverName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  driverVehicle: {
    fontSize: 14,
    color: '#718096',
  },
});

export default Delivery;
