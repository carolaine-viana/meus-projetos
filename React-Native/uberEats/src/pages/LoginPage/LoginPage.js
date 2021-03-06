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
import style from './style';

const LoginPage = ({history}) => {
  const image = {
    uri:
      'https://mir-s3-cdn-cf.behance.net/project_modules/disp/b8e36d86639179.5d9f5beba23b6.png',
  };

  //hooks
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [error, setError] = useState({visivel: false, mensagem: ''});


  return (
    <>
      <ImageBackground source={image} style={style.image} />
      <SafeAreaView style={style.container}>
        <Text style={style.text}>E-MAIL</Text>

        <TextInput color={"white"}
          style={style.inputs}
          label="Email"
          value={email}
          keyboardType="email-address"
          onChangeText={(value) => setemail(value)}
        />

        <Text style={style.text}>SENHA</Text>
        <TextInput color={"white"}
          style={style.inputs}
          label="Senha"
          value={password}
          onChangeText={(value) => setpassword(value)}
        />

        <Button
          mode="contained"
          title="LOGAR"
          style={style.button}
          // onPress={sign}
        />

        <Text style={style.text}>Nao possui cadastro?</Text>

        <Button title="CADASTRAR" onPress={() => history.push('/create')} />

        <Button title="VOLTAR" onPress={() => history.goBack()}>
          LOGIN
        </Button>
      </SafeAreaView>
    </>
  );
};

export default LoginPage;
