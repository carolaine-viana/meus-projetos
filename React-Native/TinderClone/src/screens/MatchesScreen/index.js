import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';
import users from '../../assets/data/users';
import styles from './styles';
import {DataStore, Auth} from 'aws-amplify';
import {Match, User} from '../../models';

const MatchesScreen = () => {
  const [matches, setMatches] = useState([]);
  const [me, setMe] = useState(null);

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

  useEffect(() => getCurrentUser(), []);

  useEffect(() => {
    if(!me){
      return ;
    }
     
    const fetchMatches = async () => {
      const result = await DataStore.query(Match, m =>
        m.isMatch('eq', true).or(m => m.user1ID('eq', me.id).User2ID('eq', me.id)),
      );
      setMatches(result)
      console.warn(result);
    };
    fetchMatches();
  }, [me]);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold', fontSize: 24, color: '#F63A6E'}}>
          New Matches
        </Text>

        <View style={styles.users}>
          {matches.map(match => (
            <View style={styles.user} key={match.User1.id}>
              <Image source={{uri: match.User1.image}} style={styles.image} />
            </View>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MatchesScreen;
