import * as React from 'react';
import { Image, FlatList} from 'react-native';
import categories from '../assets/data/categories';
import HomeCategory from '../components/HomeCategory';
import {Text, View} from '../components/Themed';
import styles from './HomeScreen/styles';
 

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories.items}
        renderItem={({item}) => (
          <HomeCategory category={item}/>
        )}
        />
    </View>
  );
}

export default HomeScreen;