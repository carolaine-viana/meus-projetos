import {Dimensions, StyleSheet} from 'react-native';
import {theme} from '../../components/Background/theme';

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
  },

  TextInput: {
    width: '100%',
    height: 40,
    borderRadius: 10,
    paddingHorizontal: 30,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#FF8C00',
    marginBottom: 10,
  },

  Button: {
    width: '50%',
    height: 40,
    backgroundColor: '#FFC371',
    borderWidth: 1,
    borderColor: '#FFC371',
    marginLeft: '25%',
    borderRadius: 10,
  },

  ButtonText: {
    textAlign: 'center',
    alignItems: 'center',
    padding: 10,
    fontSize: 18,
  },

  containerSignUpNavigation: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },

  textContainerSignUpNavigation: {
    color: 'white',
    fontSize: 15,
  },

  descriptionContainer: {
    padding: 10,
  },

  description: {
    color: 'white',
    fontSize: 10,
  },
});

export default styles;
