import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
// import {} from ''

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

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    shadowColor: '#000',
    backgroundColor: '#fefefe',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
  },

  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },

  cardInner: {
    padding: 10,
    backgroundColor: 'orange',
  },

  name: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    padding: 5,
  },

  bio: {
    fontSize: 18,
    color: 'white',
    lineHeight: 25,
    padding: 5,
  }
});

export default Card;
