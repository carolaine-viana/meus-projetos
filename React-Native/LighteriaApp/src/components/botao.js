import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { LIGHT_BLUE } from '../styles/styles'

export const Botao = ({titulo, onPress}) => {
    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.botaoContainer}>
                <Text style={styles.botaoTexto}>
                    {titulo}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    botaoContainer: {
        backgroundColor: 'black',
        padding: 5,
        borderRadius: 6,
        borderWidth:  0,
    },
    botaoTexto: {
        fontSize: 20,
        color: "white"
    }
})

