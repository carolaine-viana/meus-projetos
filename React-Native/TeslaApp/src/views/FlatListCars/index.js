import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  FlatList,
  Dimensions,
  Text,
  StyleSheet,
  ImageBackground,
  Button,
  TouchableOpacity,
  Sidebar,
} from 'react-native';
import cars from '../../data/cars';
import CarItem from '../CustomOrder';
import {useRoute} from '@react-navigation/core';
import styles from './styles';
import StyledButton from '../../components/StyledButton';

export default props => {
  const navigation = useNavigation();

  function getCars({item: cars}) {
    return (
      <View style={styles.carContainer}>
        <ImageBackground source={cars.image} style={styles.imageCars} />

        <View style={styles.containerTitle}>
          <Text style={styles.title}>{cars.name}</Text>
          <Text style={{fontSize: 15, color: 'black'}}>{cars.tagline} {cars.taglineCTA}</Text>
        </View>
        <StyledButton cars={cars} type="primary" content={'Custom Order'}/>
      </View>
    );
  }

  return (
    <FlatList
      data={cars}
      renderItem={getCars}
      // keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      snapToAlignment={'start'}
      decelerationRate={'fast'}
      snapToInterval={Dimensions.get('window').height}
    />
  );
};
