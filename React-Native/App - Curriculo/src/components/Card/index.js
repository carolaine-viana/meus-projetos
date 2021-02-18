import React from 'react';
import {View, Text} from 'react-native';
import style from './style';

const Card = ({titulo, children}) => {
  return (
//   const {titulo} = props
    <>
    <View style={style.card_container}>
      <View style={style.card}>
        <View style={style.card_container_text}>
          <Text style={style.title}>{titulo}</Text>
        </View>
        <View style={style.card_content}>
            {children}
        </View>
      </View>
    </View>
  
    
    </>
    
  );
};

export default Card;
