import React from 'react';
import {View, Text, Image, ImageBackground, Button} from 'react-native';
import styles from './styles';
import StyleButton from '../StyledButton/index';
import CustomOrderPage from '../../view/CustomOrder';
import {createStackNavigator} from '@react-navigation/stack';


const CarItem = props => {
  const Stack = createStackNavigator();

  const {name, tagline, taglineCTA, image} = props.car;
  const gif = 'https://img.icons8.com/ios-glyphs/30/000000/double-down--v2.png';

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyleButton
          type="primary"
          content={'Custom Order'}
          onPress={() => Stack.push('CustomOrder')}
        />

          <Button
            title="aaaa"
            onPress={() => Stack.push('CustomOrder')}
            type="clear"
            color="orange"
            // Icon={<Image source ={{uri: del}} style={{width: 50, height: 50}}/>}
        />



        <StyleButton
          type="secondary"
          content={'Existing Inventory'}
          // onPress={() => console.warn('Existing Inventory was pressed')}
        />
        
      </View>
      <View>
        <Image source={{uri: gif}} style={styles.gif} />
      </View>
    </View>
  );
};

export default CarItem;
