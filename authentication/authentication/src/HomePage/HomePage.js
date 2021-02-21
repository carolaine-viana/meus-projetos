import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar, Button,
  ImageBackground,
  Image
} from 'react-native';
import bkp from '../img/bkp1.png';


export default ({history})  => {
  const image = { uri: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/b8e36d86639179.5d9f5beba23b6.png" };


  return (
    <>
      <Image source={bkp} style={styles.image}/>
     <SafeAreaView style={styles.container}>

        <Text style={styles.title}>BEM VINDO</Text>
        <Button title="LOGIN" onPress={() => history.push("/login")}/>
        <Button title="CADASTRO" onPress={()=> history.push("/create")}/>
     </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
    
    container:{
        backgroundColor: 'black',
        flex: 1,
        color: "white",
        fontSize: 26,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    title: {
        color: "white",
        fontSize: 30
    },
    
    botao:{
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: 'red'
    },
    
    image: {
      resizeMode: "cover",
      height: '70%',
    },
  
});

