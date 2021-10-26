import {StyleSheet} from 'react-native'; 
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
     container: {
        flex: 1,
        backgroundColor: theme.colors.ink01
      },
      banner: {
          marginTop: 20,
          width: '100%',
          padding: 10,
          borderTopRightRadius: 100,
          borderBottomRightRadius: 100,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
          backgroundColor: theme.colors.utilityWarning,
      },
      containerCard: {
          width: '100%',
          paddingHorizontal: 20,
          padding: 10,
      },
      image: {
        width: 400,
        height: 100,
        resizeMode: 'contain',
      },
      title: {
          fontFamily: theme.fonts.title700,
          fontSize: 30,
          padding: 10,
      },
      subtitle: {
        fontFamily: theme.fonts.text500,
        fontSize: 15,
        padding: 10,
        paddingVertical: 30,
      }
})