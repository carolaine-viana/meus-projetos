import React, {useContext} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {DataContext} from '../../provider';

const Sacola = props => {
  const {itensCheckout} = useContext(DataContext);
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.push('Checkout')}>
      <View style={styles.containerSacola}>
        <Image
          source={require('../../assets/icons/icone-sacola.png')}
          style={styles.iconeSacola}
        />
        {itensCheckout.length > 0 && (
          <View style={styles.containerQuantidade}>
            <Text style={styles.textoQuantidade}>
              {itensCheckout.reduce(
                (acumulado, atual) => acumulado + atual.quantidade,
                0,
              )}
            </Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconeSacola: {
    width: 30,
    height: 30,
  },
  containerSacola: {
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 30,
  },
  containerQuantidade: {
    backgroundColor: 'red',
    borderRadius: 100,
    marginTop: -22,
    marginLeft: 11,
  },
  textoQuantidade: {
    textAlign: 'center',
    padding: 4,
    fontSize: 10,
    color: 'white',
  },
});

export default Sacola;
