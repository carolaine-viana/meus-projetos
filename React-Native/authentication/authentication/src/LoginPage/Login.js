import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity,
  ImageBackground,
  Snackbar,
} from 'react-native';
// import {Snackbar, Text, TextInput} from 'react-native-paper';
import auth from '@react-native-firebase/auth';

const LoginPage = ({history}) => {
  const image = {
    uri:
      'https://mir-s3-cdn-cf.behance.net/project_modules/disp/b8e36d86639179.5d9f5beba23b6.png',
  };

  //hooks
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [error, setError] = useState({visivel: false, mensagem: ''});

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

  const sign = () => {
    if (isValidEmail(email) && isValidPassword(password)) {
      //fazer login
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          console.log('User account created & signed in!');
        })
        .catch((error) => {
          if (error.code === 'auth/email-already-in-use') {
            console.log('Email ja está em uso');
          }

          if (error.code === 'auth/invalid-email') {
            console.log('Esse email é invalido!!');
          }

          console.error(error);
        });
    }
  };

  return (
    <>
      <ImageBackground source={image} style={styles.image} />
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>E-MAIL</Text>

        <TextInput color={"white"}
          style={styles.inputs}
          label="Email"
          value={email}
          keyboardType="email-address"
          onChangeText={(value) => setemail(value)}
        />

        <Text style={styles.text}>SENHA</Text>
        <TextInput color={"white"}
          style={styles.inputs}
          label="Senha"
          value={password}
          onChangeText={(value) => setpassword(value)}
        />

        <Button
          mode="contained"
          title="LOGAR"
          style={styles.button}
          onPress={sign}
        />

        <Text style={styles.text}>Nao possui cadastro?</Text>

        <Button title="CADASTRAR" onPress={() => history.push('/create')} />

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
    color: "white"
  },

  title: {
    fontSize: 30,
    marginBottom: 50,
    color: 'white',
  },

  text: {
    color: 'white',
    marginTop: 10,
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
    width: '100%',
  },
});

export default LoginPage;
