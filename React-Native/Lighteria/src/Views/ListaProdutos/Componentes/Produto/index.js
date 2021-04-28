import { useNavigation } from "@react-navigation/core";
import React from "react";
import {View , Text, Image, StyleSheet, TouchableOpacity} from "react-native";
import { COR_PRECOS, COR_CONTAINER_PRODUTOS, FONT_FAMILY_REGULAR } from '../../../../styles/styles';


export const Item = ({imagem, titulo, preco, estudio, itemName, id, itemDesc}) => {
    const navigation = useNavigation()

    return(
        <>
        <TouchableOpacity style={styles.containerItem} onPress={()=> navigation.push('DetalhesProduto', {
            //apelido: itemDesc,
            //ou
            itemDesc,
            imagem,
            estudio,
            titulo,
            preco,
            id,
            itemName
            //vamos mandar todos esses parametros para a tela de detalhes de produto
        })}>
            <Image source={imagem}  style={styles.imagem} />
            <Text style={styles.texto}>{titulo}</Text>
            <Text>{preco}</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    containerItem: {
        height: 168,
        backgroundColor: COR_CONTAINER_PRODUTOS,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,

    },
    texto: {
        marginTop: 8,
        fontSize: 14,
        color: COR_PRECOS,
        padding: 10,
    },
    imagem: {
        height: 100,
        resizeMode: "contain",
    }
})