import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
  },

  scrollView: {
    marginHorizontal: 10,
    height: '100%',
  },

  containerCentralize: {
    fontSize: 30,
    alignItems: 'center',
    marginTop: 100,
  },

  title: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: 35,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Courier',
    marginTop: '10%',
  },

  subTitle: {
    width: '100%',
    fontSize: 14,
    color: 'grey',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  subText: {
    width: '100%',
    padding: 5,
    fontSize: 15,
    color: 'grey',
    fontWeight: 'bold',
  },

  containerCentralize: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  settings: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 50,
    fontSize: 40,
  },

  containerBorder: {
    width: '100%',
    paddingHorizontal: 20,
  },

  containerBorderBlue: {
    borderWidth: 2,
    borderRadius: 20,
    // borderColor: 'blue',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },

  featureButton: {
    backgroundColor: '#f4f4f4',
    borderRadius: 20,
    width: '50%',
    height: 35,
    marginTop: 10,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerPayment: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Open sans',
  },

  payment: {
    color: 'white',
    backgroundColor: '#3e6ae1',
    borderRadius: 20,
    width: '50%',
    height: 40,
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
  },


  containerImages: {
    width: 400,
    height: 200,
    resizeMode: 'cover',
  },

  containerChoice: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  
  containerLabel: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    marginBottom: 10,
  },

  label: {
    width: '100%',
    borderWidth: 1,
    height: 30,
    borderRadius: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },

  

  wheelsContainerGlobal: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
  },  

  wheelsContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
      marginBottom: 10,
      padding: 10,      
  },

  //codigo do modal

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    // backgroundColor: 'red',
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white', //cor de fundo do modal
    borderRadius: 20,
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

  modalText: {
    paddingHorizontal: 10,
  },

  backgroundModal: {
    width: '100%',
    height: '80%',
  },

  closeModal: {
    marginLeft: '80%',
    width: 30,
    height: 30,
    resizeMode: 'cover',
  },

  //slide
  slideContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: 'row',
    width: Dimensions.get('window').width,
},

containerImageSlide: {
  width: Dimensions.get('window').width,
  height: 200,
},

titleslide: {
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 20,
  marginLeft: '30%',
  marginTop: 20,
}


});

export default styles;
