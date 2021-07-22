import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, Pressable, TouchableOpacity} from 'react-native';
import styles from '../StyledButton/styles';

const StyledButton = props => {
  const navigation = useNavigation();
  const backgroundColor = props.type == 'primary' ? '#171A20CC' : '#d4d4d4';
  const textColor = props.type == 'primary' ? 'white' : 'black';

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigation.navigate('CustomOrder', props.cars)}
        style={[styles.button, {backgroundColor: backgroundColor}]}>
        <Text style={[styles.text, {color: textColor}]}>{props.content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
