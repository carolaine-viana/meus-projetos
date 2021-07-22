import React from 'react';

import {View, Text, Image, StyleSheet} from 'react-native';
import { Sacola } from '../../../../components/sacola';
import { COR_CONTAINER_SACOLA, COR_DE_FUNDO, COR_LINHA_HEADER, FONT_SIZE_XX_LARGE } from '../../../../styles/styles';

const Cabecalho = () => {
  return (
    <>
      <View style={styles.containerTitulo}>
        <Text style={styles.titulo}>LIGHTERIA</Text>
        <Sacola/>
      </View>
      <View style={styles.containerDescricao}>
        <View style={styles.separador}></View>
        <View style={styles.containerTexto}>
          <Text style={styles.textoDescricao}>Categorias</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerTitulo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingHorizontal: 24,
    paddingVertical: 16,
    paddingHorizontal: 6,
  },
  titulo: {
    fontSize: FONT_SIZE_XX_LARGE,
    fontWeight: 'bold',
  },

  separador: {
    borderWidth: 0.5,
    borderColor: COR_LINHA_HEADER,
  },
  containerTexto: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -46,
  },
  textoDescricao: {
    padding: 34,
    marginTop: 15,
    backgroundColor: COR_DE_FUNDO,
    fontSize: 16,
    color: '#A1A5AA',
  },
});

export default Cabecalho;
