import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: Dimensions.get('window').height,
  },

  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
  },

  title: {
    fontSize: 40,
    fontWeight: '500',
  },

  subtitle: {
    fontSize: 16,
    color: '#5c5e62',
  },

  subtitleCTA: {
    textDecorationLine: 'underline',
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute', //
  },

  buttonsContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
  },

  gif: {
    width: 20,
    height: 20,
    resizeMode: 'cover',
    marginLeft: '50%',
    top: 10,
    bottom: Dimensions.get('window').height,
  },
});

export default styles;
