import React from "react";
import {FlatList, View, StyleSheet, Image} from 'react-native';
import { DATA } from "../../utils/data";
import Cabecalho from './Componentes/Cabecalho'
import { Item } from "./Componentes/Produto";

const ListaProdutos = () =>{
    return (
        <>
        <View style={styles.container}>
             
            <FlatList
                numColumns={2} //o numero de colunas da lista
                data={DATA} //a fonte dos dados
                renderItem={({item}) => <Item {...item}/> } //cada produto da lista. //tudo que tiverd e propri vai ser injetada
                keyExtractor= {item => item.id}     //um identificador dos produos
                ListHeaderComponent={
                    <Cabecalho/>
                }
                
            />
           
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 24,
    }
})

export default ListaProdutos;