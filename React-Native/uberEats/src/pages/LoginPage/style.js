import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      fontSize: 50,
      backgroundColor: 'black',
      color: "white"
    },
  
    title: {
      fontSize: 30,
      marginBottom: 50,
      color: 'white',
    },
  
    text: {
      color: 'white',
      marginTop: 10,
    },
  
    inputs: {
      width: '50%',
      height: 35,
      marginBottom: 10,
      marginTop: 5,
      borderRadius: 5,
      borderColor: 'white',
      borderWidth: 1,
    },
  
    image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      width: '100%',
    },
  });
  

export default style;