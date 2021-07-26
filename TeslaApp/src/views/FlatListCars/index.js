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
  Pressable,
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
          <Text style={{fontSize: 15, color: 'black'}}>
            {cars.tagline} {cars.taglineCTA}
          </Text>
        </View>

        {/* <StyledButton cars={cars} type="primary" content={'Custom Order'}
          onPress={() => navigation.navigate('CustomOrder', cars)}
        /> */}

        <View style={styles.buttonsContainer}>
          <Pressable
            onPress={() => navigation.navigate('CustomOrder', cars)}
            style={styles.button}>
            <Text style={{color: 'white'}}>Custom Order</Text>
          </Pressable>

          <Pressable
            onPress={() => navigation.navigate('ExistingInventory', cars)}
            style={styles.buttonInventory}>
            <Text style={{color: 'black'}}>Existing Inventory</Text>
          </Pressable>
        </View>

       
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
