//imports
import React, {useState, useEffect} from 'react';
import {
  View,
  Pressable,
  SafeAreaView,
  TouchableOpacity,
  Text,
  Modal,
  ImageBackground,
} from 'react-native';

//pages
import Card from '../../components/TinderCard/index';
import AnimatedStack from '../../components/AnimatedStack/index';
import MatchesScreen from '../MatchesScreen';
import Background from '../../components/Background';

//imagens
import closeModalImage from '../../assets/images/close.png';

//css
import styles from './styles';

//vector icons
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//aws
import {DataStore, Auth} from 'aws-amplify';
import {User, Match} from '../../models';

function HomeScreen({navigation}) {
  const [activeScreen, setActiveScreen] = useState('HOME');
  const [modalVisible, setModalVisible] = useState(true);
  const color = '#b5b5b5';
  const activeColor = '#F75C6B';

  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [me, setMe] = useState(null);

  useEffect(() => {
    //vai mostrar nosso usuario atual pelo sub (id da aws)

    const getCurrentUser = async () => {
      //vai verificar se ja existe um usario com aquele id para nao criar outro
      const user = await Auth.currentAuthenticatedUser();

      const dbUsers = await DataStore.query(
        User,
        u => u.sub === user.attributes.sub,
      );
      if (dbUsers.length < 0) {
        //nao ha usuario no database
        return;
      }

      //se houver
      setMe(dbUsers[0]);
    };
    getCurrentUser();
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      const fetchUsers = await DataStore.query(User); //ta pegando os usuarios
      console.warn(fetchUsers);
      setUsers(fetchUsers);
    };
    fetchUsers();
  }, []);

  const onSwipeLeft = () => {
    if (!currentUser || !me) {
      return;
    }
    console.warn('swipe left', currentUser.name);
  };
  const onSwipeRight = async () => {
    if (!currentUser || !me) {
      return;
    }

    const myMatches = await DataStore.query(Match, match =>
      match.user1ID('eq', me.id).user1ID('eq', currentUser.id),
    );

    if (myMatches.length > 0) {
      console.warn('you already swiped right to this user');
      return;
    }

    //verificando se
    const hisMatches = await DataStore.query(Match, match =>
      match.user1ID('aq', currentUser.id).User2ID('aq', me.id),
    );

    if (hisMatches.length > 0) {
      console.log('Yah! this is a new match');
      const hisMatch = hisMatches[0];
      DataStore.save(
        Match.copyOf(hisMatch, updated => (updated.isMatch = true)),
      );
      return;
    }

    console.warn('sending him a match request!');

    DataStore.save(
      new Match({
        user1ID: me.id,
        User2ID: currentUser.id,
        isMatch: false,
      }),
    );
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.pageContainer}>
        {/* ===================== ICONS ACIMA ================================= */}

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

          <Pressable onPress={() => navigation.navigate('MatchesScreen')}>
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

        {/* ===================== ANIMTED STACK ================================= */}

        <AnimatedStack
          data={users}
          renderItem={({item}) => <Card user={item} />} //criou uma funcao com um parametro chamado item
          setCurrentUser={setCurrentUser}
          onSwipeLeft={onSwipeLeft} //aqui vai dizer se vc ta movendo pra esquerda
          onSwipeRight={onSwipeRight}
        />

        {/* ===================== M O D A L ================================= */}

        <View style={styles.containerFeatureButton}></View>
        <View style={styles.modalContainer}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible} //variavel pra desligar o modal da tela
          >
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
                    color: 'red',
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

        {/* ===================== ICONS ABAIXO ================================= */}

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

export default HomeScreen;
