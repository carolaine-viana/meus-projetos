import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Pressable,
  Button,
  Modal,
  Image,
} from 'react-native';
import styles from './styles';
import StyledButton from '../../components/StyledButton/index';
import {Picker} from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import compositor from '../../assets/ModelSPictures/compositor.png';

export default ({route, navigation}) => {
  const [list, setList] = useState(route.params ? route.params : {});
  const [modalVisible, setModalVisible] = useState(false);
  const close = 'https://img.icons8.com/windows/64/000000/macos-close.png';
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.containerCar}>
          <View style={styles.containerImagesCar}>
            <ImageBackground source={list.image} style={styles.imageCars} />
          </View>
          <Text style={{fontSize: 25, color: 'grey'}}>{list.name}</Text>
        </View>

        <View style={styles.containerRangerGlobal}>
          <Pressable style={styles.containerRange}>
            <Text style={{fontSize: 15}}>405mi</Text>
            <Text style={{fontSize: 15}}>155mph</Text>
            <Text style={{fontSize: 15}}>3.1sec</Text>
          </Pressable>
        </View>

        <View style={styles.containerChoiceMotorGlobal}>
          <View style={styles.containerTeste}>
            <Text style={{fontSize: 18}}>Dual Motor All-Wheel Drive</Text>
            <Pressable style={styles.containerBorderBlue}>
              <Text style={styles.textBorder}>Long Range</Text>
              <Text>$79,990</Text>
            </Pressable>
          </View>

          <View style={styles.containerTeste}>
            <Text style={{fontSize: 18}}>Tri Motor All-Wheel Drive</Text>

            <Pressable style={styles.containerBorderBlue}>
              <Text>Plaid</Text>
              <Text>$129,990</Text>
            </Pressable>
          </View>

          <Text style={{top: 10, fontSize: 13, color: 'grey'}}>
            * Prices shown include the $1,500 California Clean Fuel Reward and
            potential incentives and gas savings for a total of $7,000.
          </Text>
        </View>

        <View style={styles.containerFeatureButton}>
          <Pressable
            onPress={() => setModalVisible(true)}
            style={styles.featureButton}>
            <Text
              style={{
                color: 'white',
                fontSize: 15,
                textTransform: 'uppercase',
              }}>
              Feature Details
            </Text>
          </Pressable>
        </View>

        <View style={styles.modalContainer}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              console.warn('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.modalView}>
              <ImageBackground
                source={require('../../assets/ModelXPictures/carInside.jpeg')}
                style={styles.backgroundModal}
              />
              <Text style={{fontSize: 25, bottom: 50}}>Three Displays</Text>
              <Text style={{paddingHorizontal: 20, bottom: 40}}>
                With 2200x1300 resolution, ultra-bright colors and exceptional
                responsiveness, the new center display is an ideal touchscreen
                for entertainment.
              </Text>
            </View>

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Image source={{uri: close}} style={styles.closeModal} />
            </Pressable>
          </Modal>
        </View>

        <View style={styles.containerPaint}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              marginBottom: 10,
              textTransform: 'uppercase',
            }}>
            Paint
          </Text>
          <View style={styles.label}>
            <RNPickerSelect
              placeholder={{
                label: 'Select a color...',
                value: null,
              }}
              onValueChange={value => console.warn(value)}
              items={[
                {label: 'Solid Black $1,500', value: 'SolidBlack'},
                {label: 'Silver Metalic $1,500', value: 'SilverMetalic'},
                {label: 'Blue Metalic $1,500', value: 'BlueMetalic'},
                {label: 'Red Multi Coat $2,500', value: 'RedMulti'},
                {label: 'White Multi Coat Included', value: 'WhiteMulti'},
              ]}
            />
          </View>
        </View>

        <View styles={styles.wheelsContainerGlobal}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{textTransform: 'uppercase', fontSize: 20, marginTop: 5}}>Wheels</Text>
          </View>
          <View style={styles.wheelsContainer}>
            <Pressable onPress={() => console.warn('19" Tempest Wheels')}>
              <ImageBackground
                source={require('../../assets/wheels1.png')}
                style={{width: 100, height: 100}}
              />
              <Text>19" Tempest Wheel</Text>
              <Text>Included</Text>
            </Pressable>

            <Pressable onPress={() => console.warn('19" Tempest Wheels')}>
              <ImageBackground
                source={require('../../assets/wheels2.png')}
                style={{width: 100, height: 100}}
              />
              <Text>21" Arachnid Wheels</Text>
              <Text>$4,500</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.containerInterior}>
          <Text
            style={{
              color: 'black',
              fontSize: 20,
              marginBottom: 10,
              textTransform: 'uppercase',
            }}>
            Interior
          </Text>
          <View style={styles.label}>
            <RNPickerSelect
              style={styles.containerChoice}
              onValueChange={value => console.log(value)}
              items={[
                {label: 'All Black Included', value: 'SolidBlack'},
                {label: 'Black and White $2,000', value: 'SilverMetalic'},
                {label: 'Blue Metalic $1,500', value: 'BlueMetalic'},
                {label: 'Cream $2,000', value: 'WhiteMulti'},
              ]}
            />
          </View>
        </View>

        <View style={styles.containerPayment}>
          <Text style={{color: 'black', fontSize: 20}}>Order Your Model {list.name}</Text>
          <Text style={{color: 'grey', fontSize: 15}}>Est. Delivery: September-October</Text>

          <View style={styles.containerFeatureButton}>
            <Pressable style={styles.featureButton}>
              <Text style={{color: 'white', fontSize: 15, textTransform: 'uppercase'}}>
                Continue To Payment
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
