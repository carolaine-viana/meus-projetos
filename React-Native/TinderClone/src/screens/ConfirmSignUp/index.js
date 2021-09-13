import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Auth } from 'aws-amplify';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function ConfirmSignUp({ navigation }) {
  const [username, setUsername] = useState('');
  const [authCode, setAuthCode] = useState('');

  async function confirmSignUp() {
    try {
      await Auth.confirmSignUp(username, authCode);
      console.warn('✅ Code confirmed');
      navigation.navigate('LoginPage');
    } catch (error) {
      console.warn(
        '❌ Verification code does not match. Please enter a valid verification code.',
        error.code
      );
    }
  }

  return (
    <SafeAreaView >
      <View >
        <Text >Confirm Sign Up</Text>
        <TextInput
          value={username}
          onChangeText={text => setUsername(text)}
          leftIcon="account"
          placeholder="Enter username"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <TextInput
          value={authCode}
          onChangeText={text => setAuthCode(text)}
          leftIcon="numeric"
          placeholder="Enter verification code"
          keyboardType="numeric"
        />
        <Button title="Confirm Sign Up" onPress={confirmSignUp} />
      </View>
    </SafeAreaView>
  );
}