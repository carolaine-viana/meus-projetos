import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, Pressable} from 'react-native';
import {Auth} from 'aws-amplify';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionic from 'react-native-vector-icons/Ionicons';

import Background from '../../../src/components/Background';

export default function SignUp({navigation}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  async function signUp() {
    try {
      await Auth.signUp({username, password, attributes: {email}});
      console.warn('✅ Sign-up Confirmed');
      navigation.navigate('ConfirmSignUp');
    } catch (error) {
      console.warn('❌ Error signing up...', error);
      alert(error.message)
    }
  }

  function ErrorMessage() {

  }

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Pressable
          onPress={() => navigation.goBack()}
          >
            <Ionic
              name="chevron-back-outline"
              size={30}
              style={{paddingHorizontal: 20}}
            />
        </Pressable>
        <View style={styles.containerTitle}>
          <Text style={styles.containerMainTitle}>Create a new account</Text>
        </View>

        <View style={styles.textInputContainer}>
          <View style={styles.containerSignUp}>
            <View style={styles.containerIconText}>
              <Feather
                name="user"
                size={40}
                color={'#000'}
              />
              <Text style={styles.titleInput}>Username: </Text>
            </View>

            <TextInput
              value={username}
              onChangeText={text => setUsername(text)}
              leftIcon="account"
              placeholder="Enter username"
              placeholderTextColor='black'
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              style={styles.labelInput}
            />
          </View>

          <View style={styles.containerSignUp}>
            <View style={styles.containerIconText}>
              <Ionicons
                name="lock-closed-outline"
                size={40} color={'#000'}
              />
              <Text style={styles.titleInput}>Choice Password: </Text>
            </View>

            <TextInput
              value={password}
              onChangeText={text => setPassword(text)}
              leftIcon="lock"
              placeholder="Enter password"
              placeholderTextColor='black'
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              textContentType="password"
              style={styles.labelInput}
            />
          </View>

          <View style={styles.containerSignUp}>
            <View style={styles.containerIconText}>
              <Fontisto
                name="email"
                size={40}
                color={'#000'}
              />
              <Text style={styles.titleInput}>Choice an e-mail: </Text>
            </View>

            <TextInput
              value={email}
              onChangeText={text => setEmail(text)}
              leftIcon="email"
              placeholder="Enter email"
              placeholderTextColor='black'
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              style={styles.labelInput}
            />
          </View>
        </View>

        <View style={styles.containerButton}>
          <Pressable onPress={signUp} style={styles.button}>
            <Text style={styles.subtext}>Sign Up</Text>
          </Pressable>
        </View>

        <View style={styles.containerDescription}>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('LoginPage')}
              >
              <Text>Already have an account? Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </Background>
  );
}
