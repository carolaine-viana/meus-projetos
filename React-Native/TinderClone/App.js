import React, {useEffect, useState} from 'react';

//pages
import HomeScreen from './src/screens/HomeScreen/index';
import MatchesScreen from './src/screens/MatchesScreen';
import LoginPage from './src/screens/LoginPage';
import signUp from './src/screens/signUp';
import ConfirmSignUp from './src/screens/ConfirmSignUp';
import ProfileScreen from './src/screens/ProfileScreen';

//css
import {StyleSheet} from 'react-native';

//navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//aws
import Amplify from 'aws-amplify';
import config from './src/aws-exports';
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});
import {withAuthenticator} from 'aws-amplify-react-native';

function App() {
  const Stack = createStackNavigator();

  return (
    <>
      <NavigationContainer style={styles.root}>
        <Stack.Navigator initialRouteName="LoginPage">
          <Stack.Screen
            name="LoginPage"
            component={LoginPage}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="signUp"
            component={signUp}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="ConfirmSignUp"
            component={ConfirmSignUp}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="MatchesScreen"
            component={MatchesScreen}
            options={{
              headerShown: false,
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
});

export default App;
