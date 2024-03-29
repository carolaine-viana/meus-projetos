import React, {useState} from 'react';
import {
  SafeAreaView,
  Button,
  TextInput,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {Auth} from 'aws-amplify';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../HomeScreen';
import {withAuthenticator} from 'aws-amplify-react-native';
import {NavigationContainer} from '@react-navigation/native';
import {whileStatement} from '@babel/types';
import logo from '../../assets/images/logo.png';
import SignUp from '../signUp/index';
import styles from './styles';
import Background from '../../components/Background';
import { ThemeColors } from 'react-navigation';

function LoginPage({navigation}) {
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
      navigation.navigate('HomeScreen');
    } catch (error) {
      console.warn('❌ Error signing in...', error);
      setOk(false);
      console.warn(isOk);
    }
  }

  return (
    <Background>
      {isActive ? (
        <SafeAreaView>
          <Image
            source={logo}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: 150,
              height: 100,
              marginLeft: '30%',
              resizeMode: 'contain',
            }}
          />
          <View style={styles.containerInput}>
            <TextInput
              style={styles.TextInput}
              value={username}
              onChangeText={text => setUsername(text)}
              autoFocus={true}
              leftIcon="account"
              placeholder="username"
              placeholderTextColor="black"
              autoCapitalize="none"
              keyboardType="email-address"
              textContentType="emailAddress"
              keyboardAppearance="dark"
            />

            <TextInput
              style={styles.TextInput}
              value={password}
              onChangeText={text => setPassword(text)}
              leftIcon="lock"
              placeholder="password"
              placeholderTextColor="black"
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              textContentType="password"
            />
          </View>
          <View style={styles.Button}>
            <Pressable onPress={signIn}>
              <Text style={styles.ButtonText}>Login</Text>
            </Pressable>
          </View>

          <View style={styles.containerSignUpNavigation}>
            <TouchableOpacity onPress={() => navigation.navigate('signUp')}>
              <Text style={styles.textContainerSignUpNavigation}>Don't have an account? Sign Up</Text>
            </TouchableOpacity>
          </View>

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
    </Background>
  );
}

export default LoginPage;
