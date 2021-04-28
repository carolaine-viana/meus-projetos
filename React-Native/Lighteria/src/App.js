import React from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet} from 'react-native';
import ListaProdutos from './Views/ListaProdutos';
import Produto from '../src/Views/ListaProdutos/Componentes/Produto';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { COR_DE_FUNDO } from './styles/styles';
import DetalhesProduto from './Views/DetalhesProduto';

const Stack = createStackNavigator() //cra uma nova nagevacao

const App = () => {
  return (
    <>
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Stack.Navigator initialRouteName="ListaProdutos">
          <Stack.Screen 
            name="ListaProdutos"
            component={ListaProdutos}
            options={{headerShown: false}}
            />

          <Stack.Screen 
            name="DetalhesProduto"
            component={DetalhesProduto}
            options={{headerShown: false}}
            />
            
        </Stack.Navigator>
          
      </SafeAreaView>
    </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COR_DE_FUNDO
    }
    
})

export default App;
