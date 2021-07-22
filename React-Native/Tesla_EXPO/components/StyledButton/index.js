import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {View, Text, Pressable} from 'react-native';
import {useHistory} from 'react-router-native';
import styles from './styles';

//Pressable = pressionar algo na tela

const StyledButton = props => {
  const Stack = createStackNavigator();
    console.warn(Object.keys(props))


  //const type = props.type; //ou const {type} = props;
  //const content = props.content; //criando o titulo dos botoes
  //const onPress = props.onPress;

  const {type} = props;
  const {content} = props;
  const {onPress} = props;
  

  const backgroundColor = type == 'primary' ? '#171A20CC' : '#d4d4d4';
  const textColor = type == 'primary' ? 'white' : 'black';

  //if color (color do texto) == branco (plano de fundo sera preto) se nao ao contrario

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, {backgroundColor: backgroundColor}]}
        onPress={() => props.navigation.navigate('CustomOrder')}>
        <Text style={[styles.text, {color: textColor}]}>{content}</Text>
      </Pressable>
      
    </View>
  );
};

{
  /* <Button title="EXERCICIO" onPress={() => history.push('/exercise')}/> */
}

export default StyledButton;
