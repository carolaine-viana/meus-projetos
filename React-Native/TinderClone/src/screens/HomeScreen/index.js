import React, {useState} from 'react';
import {View, StyleSheet, Pressable, SafeAreaView} from 'react-native';

import Card from '../../components/TinderCard/index';
import users from '../../assets/data/users';
import AnimatedStack from '../../components/AnimatedStack/index';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MatchesScreen from '../MatchesScreen';

const HomeScreen = navigation => {
  const [activeScreen, setActiveScreen] = useState('HOME');
  const color = '#b5b5b5';
  const activeColor = '#F75C6B';

  const onSwipeLeft = user => {
    console.warn('swipe left', user.name);
  };

  const onSwipeRight = user => {
    console.warn('swipe right', user.name);
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.pageContainer}>
        <View style={styles.topNavigation}>
          <Pressable onPress={() => setActiveScreen('HOME')}>
            <Fontisto
              name="tinder"
              size={30}
              color={activeScreen === 'HOME' ? activeColor : color}
            />
          </Pressable>

          <Pressable onPress={() => setActiveScreen('STAR')}>
            <MaterialCommunityIcons
              name="star-four-points"
              size={30}
              color={activeScreen === 'STAR' ? activeColor : color}
            />
          </Pressable>

          <Pressable onPress={() => setActiveScreen('CHAT')}>
            <Ionicons
              name="ios-chatbubbles"
              size={30}
              color={activeScreen === 'CHAT' ? activeColor : color}
            />
          </Pressable>

          <Pressable onPress={() => setActiveScreen('PROFILE')}>
            <FontAwesome
              name="user"
              size={30}
              color={activeScreen === 'PROFILE' ? activeColor : color}
            />
          </Pressable>
        </View>

        <AnimatedStack
          data={users}
          renderItem={({item}) => <Card user={item} />} //criou uma funcao com um parametro chamado item
          onSwipeLeft={onSwipeLeft}
          onSwipeRight={onSwipeRight}
        />
        <View style={styles.icons}>
          <View style={styles.button}>
            <FontAwesome name="undo" size={30} color="#FBD88B" />
          </View>

          <View style={styles.button}>
            <Entypo name="cross" size={30} color="#F76C6B" />
          </View>

          <View style={styles.button}>
            <FontAwesome name="star" size={30} color="#3AB4CC" />
          </View>

          <View style={styles.button}>
            <FontAwesome name="heart" size={30} color="#4FCC94" />
          </View>

          <View style={styles.button}>
            <Ionicons name="flash" size={30} color="#A65CD2" />
          </View>
        </View>
      </View>

      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  pageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    backgroundColor: '#ededed',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 10,
  },
  button: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 50,
    alignItems: 'center',
    paddingHorizontal: 50,
  },
});

export default HomeScreen;
