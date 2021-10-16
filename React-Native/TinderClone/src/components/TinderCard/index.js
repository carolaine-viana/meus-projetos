import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import styles from './styles';

const Card = props => {
    const {name, image, bio} = props.user;
    // console.warn(Object.keys(props.name))
    // console.warn(props.name)
  return (
    <View style={styles.card}>
      <ImageBackground
        source={{
          uri: image,
        }}
        style={styles.image}>
        <View styles={styles.cardInner}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.bio}>
           {bio}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Card;
