import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
    
    container:{
        backgroundColor: 'black',
        flex: 1,
        color: "white",
        fontSize: 26,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    title: {
        color: "white",
        fontSize: 30
    },
    
    botao:{
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: 'red'
    },
    
    image: {
      resizeMode: "cover",
      height: '70%',
    },
  
})

export default style;