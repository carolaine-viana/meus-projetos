import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import Header from './components/Header/index';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Coordinator from './coordinator';
import CarsList from './components/CarsList';
import CustomOrderPage from './view/CustomOrder';


const Stack = createStackNavigator();


export default function App() {
  return (
    <View style={styles.container}>

      
      <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="Header"
       >
        <Stack.Screen
          name="CarsList" //nome da tela
          component={CarsList} //nome do component
  
        />

      <Stack.Screen
          name="CustomOrder" //nome da tela
          component={CustomOrderPage} //nome do component
  
        />
       
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});

const screenOptions = {
  headerStyle: {
    backgroundColor: 'white',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
