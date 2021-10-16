import React, {useState} from 'react';
import {
  SafeAreaView,
  Button,
  TextInput,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import {Auth} from 'aws-amplify';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../HomeScreen';
import {withAuthenticator} from 'aws-amplify-react-native';
import {NavigationContainer} from '@react-navigation/native';
import { whileStatement } from '@babel/types';
import logo from '../../assets/images/logo.png';
import SignUp from '../signUp/index';
import styles from './styles';

function LoginPage ({navigation}) {
  const color = '#b5b5b5';
  const activeColor = '#F75C6B';
  const [activeScreen, setActiveScreen] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isOk, setOk] = useState(false);
  const [isActive, setisActive] = useState(true);
  const Stack = createStackNavigator();


  async function signIn() {
    try {
      await Auth.signIn(username, password);
      setOk(true);
      console.warn('✅ Success');
      // navigation.push('HomeScreen')
      navigation.navigate('HomeScreen')
    } catch (error) {
      console.warn('❌ Error signing in...', error);
      setOk(false);
      console.warn(isOk);
    }
  }

  return (
    <>
    
      {isActive ? (
        <SafeAreaView style={styles.root}>
          <Image
          source={logo}
          style={{width: 150, height: 100, marginLeft: '30%', resizeMode: 'contain'}}
        />
          <View style={styles.containerInput}>
            <TextInput
              style={styles.TextInput}
              value={username}
              onChangeText={text => setUsername(text)}
              leftIcon="account"
              placeholder="username"
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            <TextInput
              style={styles.TextInput}
              value={password}
              onChangeText={text => setPassword(text)}
              leftIcon="lock"
              placeholder="password"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              textContentType="password"
            />
          </View>
          <View style={styles.Button}>
            <Button title="Login" onPress={signIn} />
          </View>

          <TouchableOpacity onPress={() => navigation.navigate('signUp')}>
            <Text>
              Don't have an account? Sign Up
            </Text>
          </TouchableOpacity>


          <View style={styles.descriptionContainer}>
            <Text style={styles.description}>
              Essa é para solteiros e solteiras, preste atenção: se você estiver
              procurando um relacionamento, quiser começar a sair para encontros
              ou deixar tudo numa vibe mais casual, você precisa estar no
              Tinder. Com mais de 55 bilhões de Matches, o Tinder é o lugar
              certo para conhecer seu próximo Match perfeito. Vamos mandar a
              real, o cenário de encontros está diferente hoje e a maioria das
              pessoas estão se conhecendo online. Com o Tinder, o app gratuito
              mais popular do mundo, você tem acesso a milhões de solteiros, na
              palma da sua mão, que estão loucos para paquerar e conhecer alguém
              como você. Não importa se você é hétero ou membro da comunidade
              LGBTQIA, o Tinder existe para te ajudar a encontrar Matches perto
              de você.
            </Text>
          </View>
        </SafeAreaView>
      ) : (
        <></>
      )}
    </>
  );
};

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     backgroundColor: '#fa4f6b',
//   },

//   containerInput: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//     marginTop: 50,
//     color: 'red',
//   },

//   TextInput: {
//     width: '100%',
//     height: 40,
//     borderRadius: 10,
//     paddingHorizontal: 30,
//     fontWeight: 'bold',
//     fontSize: 20,
//     textAlign: 'center',
//     backgroundColor: 'white',
//     marginBottom: 10,
//   },

//   Button: {
//     width: '50%',
//     backgroundColor: 'white',
//     borderWidth: 1,
//     borderColor: 'white',
//     marginLeft: '25%',
//     borderRadius: 10,
//   },

//   descriptionContainer: {
//       padding: 30,
//   },

//   description: {
//     color: "white",
//     fontSize: 10,
//   }

// });
export default LoginPage;
