import {StyleSheet} from 'react-native'; 
import { theme } from '../../global/styles/theme';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';


export const styles = StyleSheet.create({
     container: {
        flex: 1,
        backgroundColor: theme.colors.ink01
      },
      textContent: {
        flex: 1,
        alignItems: 'center',
        top: 16,
        marginTop: getStatusBarHeight() + 10,
      },
      title: {
          fontFamily: theme.fonts.title700,
          fontSize: 32,
          color: theme.colors.ink06,
          fontWeight: 'bold',
      },
      subtitle: {
          fontFamily: theme.fonts.text400,
          fontSize: 15,
          color: theme.colors.ink06,
          alignSelf: 'stretch',
          paddingHorizontal: 20,
          textAlign: 'center',
          marginTop: 10,
      },
      imageContainer: {
        alignItems: 'center',
      }
})