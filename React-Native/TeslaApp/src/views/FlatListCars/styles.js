import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  carContainer: {
    // width: '100%',
    // height: Dimensions.get('window').height,
    height: Dimensions.get('window').height,
  },

  imageCars: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
    marginTop: 10,
    marginBottom: 100,
  },

  //title car Home

  containerTitle: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 30,
    marginTop: '10%',
    fontWeight: '500',
  },
});

export default styles;
