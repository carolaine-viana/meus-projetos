import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    width: '100%',
    flex: 1,
    padding: 10,
  },
  container: {
    padding: 10,
  },
  users: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  user: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 50,
    borderWidth: 4,
    borderColor: '#F63A6E',
    padding: 2,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
});

export default styles;
