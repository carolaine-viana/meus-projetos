import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    View,
    Image,
    Text,
    SafeAreaView,
    Alert,
    TouchableOpacity,
    Button,
  } from 'react-native';
import style from './style';
import logo from '../../img/logo.png'

const Loading = ({history}) => {

  useEffect(() => {
    const timer = setTimeout(() => {
      history.push("/home")
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

    return(
        <View style={style.container}>
        <SafeAreaView style={style.container}>
          <Image source={logo} />
        </SafeAreaView>
        </View>
    )
}


export default Loading;