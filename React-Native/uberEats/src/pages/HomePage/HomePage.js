import React, { useEffect } from "react";
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
import bkp from '../../img/bkp1.png';
import style from './style';


export default ({history})  => {
  const image = { uri: "https://mir-s3-cdn-cf.behance.net/project_modules/disp/b8e36d86639179.5d9f5beba23b6.png" };
  
  return (
    <>
      <Image source={bkp} style={style.image}/>
     <SafeAreaView style={style.container}>

        <Text style={style.title}>BEM VINDO</Text>
        <Button title="LOGIN" onPress={() => history.push("/login")}/>
        <Button title="CADASTRO" onPress={()=> history.push("/create")}/>
     </SafeAreaView>
    </>
  );
};



