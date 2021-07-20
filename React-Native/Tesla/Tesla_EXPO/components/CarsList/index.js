import React from 'react';
import {View, FlatList, Dimensions, Text} from 'react-native';
import styles from './styles';
import cars from './cars';
import CarItem from '../CarItem/index';
import CustomOrderPage from '../../view/CustomOrder';


const CarsList = props => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars} //a lista que quero pegar (tem que ser um array)
        renderItem={({item}) => <CarItem car={item}/>} //uma funcao pra cada item, qnd for renderizar. cada item da lista
        // renderItem={({item2}) => <CustomOrderPage car2={item2}/>}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  );
};

export default CarsList;
