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
import bkp from '../../img/mobile.png';

const CreateUser = ({history}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({
    isVisible: false,
    message: '',
  })


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
          // value={email}
          // onChangeText={(value) => setEmail(value)}
        />

        <Text style={styles.text}>Senha</Text>
        <TextInput
          style={styles.inputs}
          color={'white'}
          label="senha"
          secureTextEntry
          value={password}
          // onChangeText={(value) => setPassword(value)}
        />

        <Button title="CRIAR" />
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
