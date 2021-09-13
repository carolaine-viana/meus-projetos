import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  StatusBar,
} from 'react-native';
import {NavigationContainer, DarkTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CustomOrder from './src/views/CustomOrder/index';
import FlatListCars from './src/views/FlatListCars/index';
import Header from './src/components/Header/index';
import menu from './src/assets/logo.png';
import ExistingInventory from './src/views/ExistingInventory/index';
import Home from './src/views/Home';
import {ThemeProvider} from 'styled-components';
import {useColorScheme} from 'react-native';
import themes from './src/themes';

const Stack = createStackNavigator();

const App = () => {
  const deviceTheme = useColorScheme(); //retorna dark, light ou null (qnd n encontra a cor)
  const theme = themes[deviceTheme] || theme.dark; //vai tentar encontrar o dark ou light na config do cel
  //caso n encontre nada retorna o preto como default

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen
            name="HomeScreen"
            component={Home}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="FlatListCars"
            component={FlatListCars}
            options={{
              headerShown: false
            }}
          />

          <Stack.Screen
            name="CustomOrder"
            component={CustomOrder}
            options={{
              headerTitle: (
                <Image
                  source={menu}
                  style={{width: 100, height: 50, resizeMode: 'contain'}}
                />
              ),
            }}
          />
          <Stack.Screen
            name="ExistingInventory"
            component={ExistingInventory}
            options={{
              headerTitle: (
                <Image
                  source={menu}
                  style={{width: 100, height: 50, resizeMode: 'contain'}}
                />
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('window').height,
  },
});

export default App;
