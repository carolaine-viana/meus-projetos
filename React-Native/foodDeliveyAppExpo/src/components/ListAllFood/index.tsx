import React from 'react'; 
import {View, FlatList} from 'react-native';
import {Menu} from '../../utils/foodMenu';
import {AllFoodCard} from '../AllFoodCard';

export function List({}){
    return (
      <>
        <FlatList
          numColumns={2}
          data={Menu}
          renderItem={({item}) => <AllFoodCard {...item} />}
          keyExtractor={item => item.id}
        />
      </>
    );
  };

