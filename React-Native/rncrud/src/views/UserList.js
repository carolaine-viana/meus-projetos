import {useRoute} from '@react-navigation/core';
import React, { useContext } from 'react';
import {View, Text, Image, FlatList, Button, SafeAreaView, Alert, ImageBackground} from 'react-native';
import users from '../data/users';
import {Avatar, ListItem, Icon} from 'react-native-elements';
import ListItemSwipeable from 'react-native-elements/dist/list/ListItemSwipeable';
import UsersContext from '../Context/usersContext';


export default (props) => {

 const ctx = useContext(UsersContext)
  //  console.warn(Object.keys(ctx))
  // console.warn(Object.keys(ctx.state))
  // const { state } = useContext(UsersContext)

 
  function confirmUserDeletion(user){
    Alert.alert('Excluir usuário', 'Deseja excluir o usuário?', [
      {
        text: 'Sim',
        onPress() {
          console.warn('Usuario', user.name, 'excluido')
        }
      },
      {
        text: 'Nao'
      }
    ])
  }

  function getActions(user) {
    return(
      <>
      
      <View style={{flexDirection: "row", resizeMode: "cover", alignItems: "center", justifyContent: "center", padding: 30}}>
      <ImageBackground source={require('../assets/editar.png')} style={{width: 30, height: 30}}>
        <Button
            title=""
            onPress={() => props.navigation.navigate('UserForm', user)}
            type="clear"
            color="orange"
            // Icon={<Image source ={{uri: del}} style={{width: 50, height: 50}}/>}
        />
        </ImageBackground>
        
        <ImageBackground source={require('../assets/lixeira.png')} style={{width: 30, height: 30}}>
          <Button
            title=""
            onPress={() => confirmUserDeletion(user)}
            type="clear"
            color="red"
        />
      </ImageBackground>
      </View>
      </>
    )
  }

  function getUserItem({item: user}) {
    return (
      <>
     
        <ListItemSwipeable
          key={user.id}
          rightContent={getActions(user)}
          bottomDivider
          onPress={() => props.navigation.navigate('UserForm', user)}
        >
          <Avatar
            source={{uri: user.avatarUrl}}
            activeOpacity={0.7}
            size={60}
            rounded
            onPress={() => console.warn('Clicou')}
            containerStyle={{paddingHorizontal: 5, marginTop: 5}}
          />

            <ListItem.Content>
                <ListItem.Title>{user.name}</ListItem.Title>
                <ListItem.Subtitle>{user.email}</ListItem.Subtitle>
              </ListItem.Content>
        </ListItemSwipeable>
      </>
    );
  }
  return (
    <View>
      <FlatList
        keyExtractor={(user) => user.id.toString()}
        // data={state.users}
        data={ctx.state}
        renderItem={getUserItem}
      />
    </View>
  );
};
