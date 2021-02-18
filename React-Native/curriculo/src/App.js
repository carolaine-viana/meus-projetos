import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import foto from '../src/assets/profile.png';
import Icon from 'react-native-vector-icons/Feather';
import Card from './components/Card/index';

const App = () => {

  function handleSocialNetworkin(rede_social) {
    switch (rede_social) {
      case 'linkedin':
        Alert.alert('Meu linkedin', 'https://linkedin.com/in/carolaine-viana');
        break;

      case 'github':
        Alert.alert('Meu github', 'htpps://github.com/carolaine-viana');
        break;
    }
  }

  return (
    <>
      <View style={style.page}>
        <View style={style.container_head}>
          <SafeAreaView>
            <Image source={foto} style={style.foto} />
          </SafeAreaView>
          <Text style={style.nome}>Carolaine Viana</Text>
          <Text style={style.cargo}>Desenvolvedora Mobile</Text>
        </View>

        <View style={style.card_container_text}></View>

        <View style={style.icones}>
          <TouchableOpacity onPress={() => handleSocialNetworkin('github')}>
            <Icon name="github" size={30} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSocialNetworkin('linkedin')}>
            <Icon name="linkedin" size={30} color="black" />
          </TouchableOpacity>
        </View>

        <Card titulo="FORMAÇÃO ACADEMICA">
           <Text style={style.title}>Formação 01</Text>
            <Text style={style.title}>Formação 02</Text>
            <Text style={style.title}>Formação 03</Text>
        </Card>
        
        <Card titulo="EXPERIENCIAS PROFISSIONAIS">
            <Text style={style.title}>Experiencia 01</Text>
            <Text style={style.title}>Experiencia 02</Text>
            <Text style={style.title}>Experiencia 03</Text>
        </Card>
        
      </View>
    </>
  );
};

const style = StyleSheet.create({
  page: {
    backgroundColor: '#FFC438',
    flex: 1,
  },

  container_head: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },

  foto: {
    width: 100,
    height: 100,
    alignItems: 'center',
    borderRadius: 300,
  },

  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },

  cargo: {
    color: 'white',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },

  icones: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '20%',
    marginTop: 20,
  },
  
  title: {
    color: 'white',
  },
  
});

export default App;
