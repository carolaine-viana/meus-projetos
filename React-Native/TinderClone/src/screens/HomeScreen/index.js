import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Pressable,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Modal,
  Button,
  Image,
  ImageBackground,
} from 'react-native';

import Card from '../../components/TinderCard/index';
import users from '../../assets/data/users';
import AnimatedStack from '../../components/AnimatedStack/index';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MatchesScreen from '../MatchesScreen';
import closeModalImage from '../../assets/images/close.png';

function HomeScreen({navigation}) {
  const [activeScreen, setActiveScreen] = useState('HOME');
  const [modalVisible, setModalVisible] = useState(true);
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

          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <FontAwesome
              name="user"
              size={30}
              color={activeScreen === 'PROFILE' ? activeColor : color}
            />
          </TouchableOpacity>
        </View>

        {/* <View style={styles.containerFeatureButton}>
          <Pressable
            onPress={() => setModalVisible(true)}
            style={styles.featureButton}>
            <Text
              style={{
                color: 'black',
                fontSize: 15,
                textTransform: 'uppercase',
              }}>
            </Text>
          </Pressable>
        </View> */}

        <View style={styles.modalContainer}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              console.warn('Modal has been closed.');
              // setModalVisible(!modalVisible);
            }}>
            <View style={styles.modalView}>
              <Pressable onPress={() => setModalVisible(false)}>
                <ImageBackground
                  source={require('../../assets/images/close.png')}
                  style={{width: 30, height: 30, top: '300%', padding: 20}}
                />
              </Pressable>
              <Text
                style={{
                  fontSize: 20,
                  bottom: 50,
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                }}>
                Welcome to TinderClone
              </Text>
              <Text style={{paddingHorizontal: 20, bottom: 40, fontSize: 15}}>
                So you can start using and getting matches, please, finish your
                setup.
              </Text>
              <Pressable onPress={() => navigation.navigate('Profile')}>
                <Text
                  style={{
                    color: 'blue',
                    fontSize: 18,
                    textTransform: 'uppercase',
                    bottom: 5,
                  }}>
                  Click here
                </Text>
              </Pressable>
            </View>
          </Modal>
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
}

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
  modalContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 30,
    backgroundColor: '#e3e5e7', //cor de fundo do modal
    borderRadius: 20,
    top: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: '30%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  closeModal: {
    marginLeft: '68%',
    width: 30,
    height: 30,
    resizeMode: 'cover',
  },
  
});

export default HomeScreen;
