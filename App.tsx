import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import RestaurantScreen from './componetns/RestaurantScreen';
import PreparingOrderScreen from './componetns/PreparingOrderScreen';
import Dilivery from'./componetns/Dilivery';
import Login from './componetns/Login';
import Register from './componetns/Register';
import { Provider } from 'react-redux'
import store from './ReduxStore/store';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Provider store={store}>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} options={{headerShown:false}}/>
        <Stack.Screen name='Restaurant' component={RestaurantScreen} options={{headerShown:false}}/>
        <Stack.Screen name='PreparingOrder' component={PreparingOrderScreen} options={{headerShown:false}}/>
        <Stack.Screen name='Dilivery' component={Dilivery} options={{headerShown:false}}/>
      </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
