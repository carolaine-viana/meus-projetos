import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    backgroundColor: '#f2f2f2',
  },

  containerImageCar: {
    width: '100%',
    height: '40%',
  },

  containerText: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerDescription: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 5,
      padding: 5,
  },

  containerRanger: {
      width: '100%',
      paddingHorizontal: 20,
      marginBottom: 20,
  },

  rangerConfig: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      marginTop: 10,
      height: 30,
      alignItems: 'center',
      marginBottom: 5,
      borderBottomWidth: 1,
      borderTopWidth: 1,
      borderColor: 'grey',
  },
  
  containerKeys: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerButton: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },

  buyButton: {
    backgroundColor: '#406ce4',
    width: 200,
    height: 40,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: '#406ce4',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 13,
  },

});

export default styles;
