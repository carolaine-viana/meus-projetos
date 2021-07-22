import React, { useState } from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

export default ({route, navigation}) => {

  // console.warn(Object.keys(props.route.params))
  // console.warn(Object.keys(route.params))

  const [user, setUser] = useState(route.params ? route.params : {}) //se ele existir 

  // console.warn(route.params)

  return (
    <SafeAreaView style={style.form}>
      <Text style={{fontSize: 20}}>Nome: </Text>
      <TextInput
        style={style.input}
        onChangeText={name => setUser({...user, name})} //vai pegar o obj user e sobrescrever o nome
        placeholder="Informe o nome"
        value={user.name}
      />

    <Text style={{fontSize: 20}}>Email: </Text>
      <TextInput
        style={style.input}
        onChangeText={name => setUser({...user, email})} //vai pegar o obj user e sobrescrever o nome
        placeholder="Informe o E-mail"
        value={user.email}
      />

    <Text style={{fontSize: 20}}>Url do avatar: </Text>
      <TextInput
        style={style.input}
        onChangeText={avatarUrl => setUser({...user, avatarUrl})} //vai pegar o obj user e sobrescrever o nome
        placeholder="Informe a URL do avatar"
        value={user.avatarUrl}
      />

    <View style={style.button}>

      <Button
        style={{marginLeft: 300}}
        title="Salvar"
        onPress={() => {
          navigation.goBack()
        }}
      />

    </View>

    </SafeAreaView>
  );
};

const style = StyleSheet.create({
    form: {
        padding: 12,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
      marginBottom: 20,
      color: 'black',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
    },

    button: {
      width: '100%',
      // backgroundColor: 'grey',
      // color: 'black',
    }
})
