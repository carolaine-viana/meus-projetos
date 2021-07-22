import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
  Image
} from 'react-native';
import { Sacola } from '../../../../components/sacola';

const index = () => {
  const imSrc = require('../../../../assets/images/outraimagem5.jpg');
  const navigation = useNavigation();
  return (
    <View style={styles.bgContainer}>
      <ImageBackground
        resizeMode="cover"
        source={imSrc}
        style={styles.imagemFundo}>
        <View style={styles.headerContainer}>
              <Image
                source={require('../../../../assets/images/flecha-esquerda.png')}
                style={styles.imagemSeta}
              />
              <View style={styles.containerSacola}>
                <Sacola/>
              </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  bgContainer: {
    flex: 6, //60% da tela, dentro da descricao item tem os 40 restantes..
  },
  imagemFundo: {
    width: Dimensions.get('window').width, //pega o tamanho 100 da tela id do  tamanho
    height: '100%',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imagemSeta: {
      width: 24,
      height: 24,
      marginTop: 36,
      marginLeft: 24,
  },
  containerSacola: {
      padding: 18,
  }
});

export default index;

//rnstyle
//rnfe
