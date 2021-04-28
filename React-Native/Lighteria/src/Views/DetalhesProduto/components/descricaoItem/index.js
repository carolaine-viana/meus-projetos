import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import { Botao } from '../../../../components/botao';
import { COR_LINHA_HEADER } from '../../../../styles/styles';
import { formataValor } from '../../../../utils/utils';

export const index = ({
  imagem, estudio, itemDesc, itemName, titulo, preco, id
}) => {
  return (
    //40% da tela
    <View style={styles.itemContainer}>
      <View style={styles.itemPosicao}>
        <View style={styles.item}>
          <View style={styles.textoPosicao}>
            <View>
            <Text style={styles.textoSuperior}>{titulo}</Text>
              <Text style={styles.textoMedio}>{estudio}</Text>
              <Text style={styles.textoMedio}>{itemName}</Text>
            </View>
            <Image source={imagem} style={styles.imagemItem}/>
          </View>
          <View style={styles.separador}></View>

          <Text style={styles.textoInferior}>{itemDesc}</Text>

          <View style={styles.rodape}>
              <Text style={styles.moeda}>{formataValor(preco)}</Text>
              <View style={styles.botao}>
                {/* <Button title={'COMPRAR'} width={'100%'} color={'white'} /> */}
                <Botao titulo={"COMPRAR"} onPress={()=> true}/>
              </View>
          </View>

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 4,
    marginTop: -60,
  },

  itemPosicao: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },

  item: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 28,
    width: '80%',
    elevation: 4,
    marginTop: 30,
  },

  textoPosicao: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  imagemItem: {
        width: 30,
        height: 70,
        resizeMode: "contain",
    },

  textoSuperior: {
      fontSize: 20,
      marginBottom: 4
  },

  textoMedio: {
    fontSize: 15,
    marginBottom: 4
  },

  textoInferior: {
    marginTop: 10,
    fontSize: 15,
    marginBottom: 4,
    color: '#CACACA',
    marginTop: 15
  },

  separador: {
    marginTop: 20,
    borderWidth: 0.5,
    borderColor: COR_LINHA_HEADER,
  },

  rodape: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
  },

  moeda: {
      fontSize: 20,
  },

  botao: {
      backgroundColor: 'black',
      padding: 5,
      borderRadius: 6,
  }

});

export default index;
