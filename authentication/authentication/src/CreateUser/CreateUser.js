import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import bkp from '../img/mobile.png';

const CreateUser = ({history}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({
    isVisible: false,
    message: '',
  });

  const isValidEmail = (emailToValidate) => {
    if (!emailToValidate) {
      setError({
        isVisible: true,
        message: 'O campo email é obrigatorio',
      });
      return false;
    }
    if (emailToValidate.length > 4) {
      setError({
        isVisible: true,
        message: 'Email invalido',
      });
      return true;
    }
    return false;
  };

  const isValidPassword = (passowrdToValidate) => {
    if (!passowrdToValidate) {
      setError({
        isVisible: true,
        message: 'O campo senha é obrigatorio',
      });
      return false;
    }
    if (passowrdToValidate.length < 4) {
      setError({
        isVisible: true,
        message: 'A senha tem que ser maior que 4 digitos',
      });
      return false;
    }

    return true;
  };

  const createUser = () => {
    if (isValidEmail(email) && isValidPassword(password)) {
      //criar usuario
      auth()
        .createUserWithEmailAndPassword(email, password) //chamada pro SDK
        .then(() => {
          console.log('User account created & signed in!');
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            // console.log('That email address is already in use!');
            setError({
              isVisible: true,
              message: 'email ja cadastrado',
            });
          }

          if (error.code === 'auth/invalid-email') {
            // console.log('That email address is invalid!');
            setError({
              isVisible: true,
              message: 'email invalido!',
            });
          }

          console.error(error);
        });
    }
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Image source={bkp} style={styles.image} />
        <Text style={styles.title}>Criar usuário</Text>
        <Text style={styles.text}>Email:</Text>

        <TextInput
          style={styles.inputs}
          color={'white'}
          label="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />

        <Text style={styles.text}>Senha</Text>
        <TextInput
          style={styles.inputs}
          color={'white'}
          label="senha"
          secureTextEntry
          value={password}
          onChangeText={(value) => setPassword(value)}
        />

        <Button title="CRIAR" onPress={createUser} />
        <Button title="VOLTAR" onPress={() => history.goBack()}>
          LOGIN
        </Button>
        
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    fontSize: 50,
    backgroundColor: 'black',
  },

  title: {
    fontSize: 30,
    marginBottom: 50,
    color: 'white',
  },

  text: {
    color: 'white',
  },

  botao: {
    width: '50%',
    height: 40,
    alignItems: 'center',
    padding: 5,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
  },

  inputs: {
    width: '50%',
    height: 35,
    marginBottom: 10,
    marginTop: 5,
    borderRadius: 5,
    borderColor: 'white',
    borderWidth: 1,
  },

  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    padding: 10,
  },
});

export default CreateUser;
