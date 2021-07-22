import React from "react";
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import Background from './components/background';
import DescricaoItem from './components/descricaoItem'

const DetalhesProduto = ({route}) => { //route = esta vindo dentro do navigation container
    const {imagem, estudio, itemDesc, itemName, titulo, preco, id} = route.params;

    return(
        <View style={styles.container}>
            <Background />
            <DescricaoItem 
                imagem = {imagem}
                estudio = {estudio}
                itemDesc = {itemDesc}
                itemName = {itemName}
                titulo = {titulo}
                preco = {preco}
                id = {id}
            /> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
})

export default DetalhesProduto;