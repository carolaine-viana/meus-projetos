import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {theme} from './theme';

export function Background({children}) {
  const {primary, secondary100, secondary90, secondary80, secondary85} =
    theme.colors;

  return (
    <LinearGradient
      style={linearGradient.container}
      colors={[primary, secondary100, secondary90, secondary80, secondary85]}>
      {children}
    </LinearGradient>
  );
}
const linearGradient = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Background;
