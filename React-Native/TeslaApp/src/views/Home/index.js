import React, {useEffect} from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import {Wrapper, Title} from './styles';
import logo from '../../assets/tesla-logo.png';
import {useNavigation} from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('FlatListCars');
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Wrapper>
      <Title>TESLA</Title>
      <Image source={logo}
        style={{width: 100, height: 100}}
      />
    </Wrapper>
  );
}
