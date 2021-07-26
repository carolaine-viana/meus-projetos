import {Dimensions, StyleSheet} from 'react-native';
import {withSafeAreaInsets} from 'react-native-safe-area-context';

const styles = StyleSheet.create({
  carContainer: {
    // width: '100%',
    // height: Dimensions.get('window').height,
    height: Dimensions.get('window').height,
    bottom: 10,
  },

  imageCars: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    marginTop: 10,
    marginBottom: 100,
  },

  containerTitle: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
    marginTop: '20%',
    fontWeight: '500',
  },

  buttonsContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
    paddingHorizontal: 10,
  },

  container: {
    width: '100%',
    padding: 10,
    paddingHorizontal: 20,
  },

  button: {
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#171A20CC',
    color: 'white',
  },

  buttonInventory: {
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#d4d4d4',
  },
});

export default styles;
