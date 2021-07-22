import * as React from 'react';
import { Image, FlatList, SafeAreaView} from 'react-native';
import {Text} from '../../components/Themed';

import styles from './styles'
import categories from '../../assets/data/categories';

const firstCategory = categories.items[0]

interface HomeCategoryProps{
    category: {
        id: string,
        title: string,
        movies: {id: string, poster: string}[]
    }
}

const HomeCategory = (props: HomeCategoryProps) => {
    const {category} = props;
  return (
    <SafeAreaView>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
            data={category.movies}
            renderItem={({item}) => (
              <Image style={styles.image} source={{uri: item.poster}} />
            )}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        />
    </SafeAreaView>
  );
}

export default HomeCategory;