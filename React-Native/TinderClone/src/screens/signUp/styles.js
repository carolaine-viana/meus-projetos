import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 50,
  },
  containerTitle: {
    alignItems: 'center',
  },
  containerMainTitle: {
    fontSize: 25,
  },
  containerSignUp: {
    flexDirection: 'column',
    margin: 10,
  },
  containerIconText: {
    alignItems: 'center',
  },
  textInputContainer: {
    paddingVertical: 50,
    alignItems: 'center',
  },
  titleInput: {
    fontSize: 20,
  },
  subtext: {
    textAlign: 'center',
    padding: 10,
  },
  labelInput: {
    margin: 10,
    borderBottomWidth: 1,
    color: 'black',
    textAlign: 'center',
  },
  containerButton: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FFC371',
    width: 100,
    height: 50,
    borderRadius: 10,
    textAlign: 'center',
    alignItems: 'center',
    paddingVertical: 5,
  },
  containerDescription: {
    padding: 20,
  },
});

export default styles;
