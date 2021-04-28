import React from "react";
import { View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import { COR_CONTAINER_SACOLA } from "../styles/styles";
import {useNavigation} from '@react-navigation/native';

export const Sacola = () => {
    const navigation = useNavigation();
    return(
        //criando uma nova navegacao, da sacola para confirmar pagamento
        <TouchableOpacity onPress={() => navigation.push('Checkout')}>
        <View style={styles.containerSacola}>
        <Image
          source={require('../assets/images/icone-sacola.png')}
          style={styles.imagem}
        />
       </View>
       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    imagem: {
        height: 30,
        width: 30,
      },
      containerSacola: {
        backgroundColor: COR_CONTAINER_SACOLA,
        padding: 18,
        borderRadius: 30,
      }
})

