import React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {Pressable, Text, Button, Image} from 'react-native';
import UserList from './views/UserList';
import UserForm from './views/UserForm';
import Icon from 'react-native-vector-icons/AntDesign';
import {createStackNavigator} from '@react-navigation/stack';
import { UsersProvider } from './Context/usersContext';



//initialRoute = qual minha rota inicial (meu home page)

export default (prop) => {
  const Stack = createStackNavigator();

  return (
    <UsersProvider>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="UserList"
        screenOptions={screenOptions}>
        <Stack.Screen
          name="UserList" //nome da tela
          component={UserList} //nome do component
          options={({navigation}) => {
            return {
              title: 'Lista de Usuários',
              headerRight: () => (
                <Button
                  type="clear"
                  title="+"
                  onPress={() => navigation.navigate('UserForm')}
                  // icon={<Icon name="add" size={25} color='yellow' />}
                />
              ),
            };
          }}
        />
        <Stack.Screen
          name="UserForm" //nome da tela
          component={UserForm} //nome do component
          options={{
            title: 'Formuláio de Usuários',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </UsersProvider>
  );
};

const screenOptions = {
  headerStyle: {
    backgroundColor: 'orange',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};
