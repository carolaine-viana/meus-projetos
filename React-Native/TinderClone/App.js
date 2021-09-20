import React, {useEffect, useState} from 'react';
import HomeScreen from './src/screens/HomeScreen/index';
import MatchesScreen from './src/screens/MatchesScreen';
import LoginPage from './src/screens/LoginPage';
import signUp from './src/screens/signUp';
import ConfirmSignUp from './src/screens/ConfirmSignUp';

import {
  View,
  StyleSheet,
  Pressable,
  SafeAreaView,
  Button,
  TextInput,
  Text,
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Amplify from 'aws-amplify';
import config from './src/aws-exports';
Amplify.configure(config);
import {withAuthenticator} from 'aws-amplify-react-native';
import {Auth} from 'aws-amplify';
import ProfileScreen from './src/screens/ProfileScreen';

function App() {
  const Stack = createStackNavigator();

  return (
    <>
      <NavigationContainer style={styles.root}>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen name="signUp" component={signUp} />

          <Stack.Screen name="ConfirmSignUp" component={ConfirmSignUp} />

          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              headerShown: true,
            }}
            />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  topNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '150%',
    padding: 5,
    height: 50,
    alignItems: 'center',
    marginLeft: '40%',
  },
});

export default withAuthenticator(App)
