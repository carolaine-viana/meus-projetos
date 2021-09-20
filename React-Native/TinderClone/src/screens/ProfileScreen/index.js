import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Pressable,
  TextInput,
  Alert,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {Auth, DataStore} from 'aws-amplify';
import {User} from '../../models/';
import Amplify from 'aws-amplify';
import config from '../../../src/aws-exports';
Amplify.configure(config);

const ProfileScreen = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [gender, setGender] = useState();
  const [lookingFor, setLookingFor] = useState();


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
      const dbUser = dbUsers[0];
      setUser(dbUser);

      setName(dbUser.name);
      setBio(dbUser.bio);
      setGender(dbUser.gender);
      setLookingFor(dbUser.lookingFor);
    };
    getCurrentUser();
  }, []);

  const isValid = () => {
    //se nao for null nosso form ta valido
    return name && bio && gender && lookingFor;
  };

  //sempre que pressionar salvar vai salvar no banco de dados
  async function save() {
    if (!isValid()) {
      console.warn('not valid');
      return;
    }

    if (user) {
      //se usuario existir
      const updateUser = User.copyOf(user, updated => {
        updated.name = name;
        updated.bio = bio;
        updated.gender = gender;
        updated.lookingFor = lookingFor;
      });
      await DataStore.save(updateUser);
    } else {
      //se o user for null create a new user
      const authUser = await Auth.currentAuthenticatedUser();
      try {
        const newUser = new User({
          sub: authUser.attributes.sub,
          name,
          bio,
          gender,
          lookingFor,
          image:
            'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim1.JPG',
        });
        console.warn(newUser);
        await DataStore.save(newUser);
        console.warn('✅ Created Success!');
      } catch (error) {
        console.warn('❌ Error in...', error);
      }
    }

    Alert.alert('User saved sucessfully ✅ ');
  }

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={text => setName(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Bio"
          multiline //pular de linha
          numberOfLines={3} //3 linhas
          value={bio}
          onChangeText={text => setBio(text)}
        />

        <Text>Gender</Text>
        <Picker
          label="Gender"
          selectedValue={gender}
          onValueChange={itemValue => setGender(itemValue)}>
          <Picker.Item label="Male" value="MALE" />
          <Picker.Item label="Female" value="FEMALE" />
          <Picker.Item label="Other" value="OTHER" />
        </Picker>

        <Text>Looking For</Text>
        <Picker
          label="Looking For"
          selectedValue={lookingFor}
          onValueChange={itemValue => setLookingFor(itemValue)}>
          <Picker.Item label="Male" value="MALE" />
          <Picker.Item label="Female" value="FEMALE" />
          <Picker.Item label="Other" value="OTHER" />
        </Picker>

        <Pressable onPress={save} style={styles.button}>
          <Text>Save</Text>
        </Pressable>

        <Pressable onPress={() => Auth.signOut()} style={styles.button}>
          <Text>SignOut</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    width: '100%',
    flex: 1,
    padding: 10,
  },

  container: {
    padding: 10,
  },

  button: {
    backgroundColor: '#F63A6E',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    margin: 10,
  },

  input: {
    margin: 10,
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
  },
});
export default ProfileScreen;
