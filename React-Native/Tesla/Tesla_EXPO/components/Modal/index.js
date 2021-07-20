import React, { useState } from 'react';
import {View, Text, Button, SafeAreaView, Pressable, ImageBackground, ScrollView, Alert, Modal} from 'react-native';
import styles from './styles';


const ModalSettings = () => {
  const history = useHistory();
 
  return (
    <View>
     <Modal
          animationType='slide'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
          console.warn("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
      </Modal>
    </View>
  );
};

export default ModalSettings;
