import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    root: {
        flex: 1,
      },
      pageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        width: '100%',
        backgroundColor: '#ededed',
      },
      icons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        padding: 10,
      },
      button: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
      },
      topNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 50,
        alignItems: 'center',
        paddingHorizontal: 50,
      },
      modalContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalView: {
        margin: 30,
        backgroundColor: 'white', //cor de fundo do modal
        borderRadius: 20,
        top: '20%',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: '30%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
      },
    
      closeModal: {
        marginLeft: '68%',
        width: 30,
        height: 30,
        resizeMode: 'cover',
      },
});

export default styles;
