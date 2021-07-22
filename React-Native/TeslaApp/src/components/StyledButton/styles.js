import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    top: '70%',
    paddingHorizontal: 20,
  },

  button: {
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 12,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
});

export default styles;
