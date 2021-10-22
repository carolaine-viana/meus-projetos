import React from 'react';
import { Routes } from './src/routes';
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';
import {Raleway_700Bold, Raleway_500Medium, Raleway_400Regular} from '@expo-google-fonts/raleway'


export default function App() {
  const [fontsLoaded] = useFonts({
    Raleway_700Bold,
    Raleway_500Medium,
    Raleway_400Regular,
  });

  if(!fontsLoaded){
    return <AppLoading/>
  }

  return (
      <Routes/>
  );
}

