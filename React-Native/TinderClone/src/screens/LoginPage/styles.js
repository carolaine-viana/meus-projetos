import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fa4f6b',
  },

  containerInput: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 50,
    color: 'red',
  },

  TextInput: {
    width: '100%',
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 30,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'white',
    marginBottom: 10,
  },

  Button: {
    width: '50%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'white',
    marginLeft: '25%',
    borderRadius: 10,
  },

  descriptionContainer: {
    padding: 30,
  },

  description: {
    color: 'white',
    fontSize: 10,
  },
});

export default styles;
