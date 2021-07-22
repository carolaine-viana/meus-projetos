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
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import CustomOrder from './src/views/CustomOrder/index';
import FlatListCars from './src/views/FlatListCars/index';
import Header from './src/components/Header/index';
import menu from './src/assets/logo.png';

const Stack = createStackNavigator();

const App = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="FlatListCars"
          screenOptions={
            {
              // headerStyle: {backgroundColor: 'black'}
            }
          }>
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
              // headerShown: false
            }}
          />
          <Stack.Screen
            name="FlatListCars"
            component={FlatListCars}
            options={{
              headerTitle: <Header />,
              // headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('window').height,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default App;
