import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root: {
      width: '100%',
      flex: 1,
      padding: 10,
    },
  
    container: {
      padding: 10,
    },

    subText: {
        fontSize: 20,
        textAlign: 'center',
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

  export default styles;