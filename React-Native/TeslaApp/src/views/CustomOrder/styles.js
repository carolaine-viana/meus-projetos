import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: Dimensions.get('window').height,
  },

  scrollView: {
    marginHorizontal: 20,
    height: Dimensions.get('window').height,
    zIndex: 100,
  },

  containerCar: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  containerImagesCar: {
    width: '100%',
    height: 200,
  },

  imageCars: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  containerRangerGlobal: {
    width: '100%',
    paddingHorizontal: 20,
    padding: 20,
  },

  containerRange: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 100,
    height: 30,
    alignItems: 'center',
  },

  containerChoiceMotorGlobal: {
    width: '100%',
    paddingHorizontal: 15,
  },

  containerTeste: {
    width: '100%',
    paddingHorizontal: 5,
    padding: 5,
  },

  containerBorderBlue: {
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
    top: 10,
    bottom: 30,
    borderColor: 'grey',
    borderColor: 'blue',
  },

  containerFeatureButton: {
    width: '100%',
    padding: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  featureButton: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    width: 280,
    height: 50,
    borderRadius: 100,
    padding: 5,
    backgroundColor: '#406ce4',
  },

  modalContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white', //cor de fundo do modal
    borderRadius: 20,
    top: '20%',
    justifyContent: 'center',
    // padding: 35,
    width: '80%',
    height: '60%',
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
    marginLeft: '70%',
    width: 30,
    height: 30,
    resizeMode: 'cover',
  },

  backgroundModal: {
    width: '100%',
    height: '80%',
  },

  containerPaint: {
    width: '100%',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },

  label: {
    width: '100%',
    borderWidth: 1,
    height: 30,
    borderRadius: 50,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerChoice: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },

  wheelsContainerGlobal: {
    width: '100%',
    paddingHorizontal: 10,
  },

  wheelsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    padding: 20,
  },

  containerInterior: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },

  containerPayment: {
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Open sans',
  },

  buttonPayment: {
    width: '100%',
  },
});

export default styles;
