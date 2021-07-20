import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  Pressable,
  ImageBackground,
  ScrollView,
  Modal,
} from 'react-native';
import {useHistory} from 'react-router-native';
import styles from './styles';
import RNPickerSelect from 'react-native-picker-select';
import cars from '../../components/CarsList/cars';


const CustomOrderPage = props => {

  const history = useHistory();
  const [modalVisible, setModalVisible] = useState(false);
  const close = 'https://img.icons8.com/windows/64/000000/macos-close.png';
  const [cliquei, setCliquei] = useState(false);
  console.warn(cliquei);
  const textColor = cliquei == true ? 'blue' : 'black';
  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const backgroundColor = option1 == true ? 'blue' : 'grey';
  const backgroundColor2 = option2 == true ? 'blue' : 'grey';

  const selectColor = {
    color: 'Selected color item',
  };

    console.warn(Object.keys(props))



  const goback = {uri: 'https://img.icons8.com/ios-glyphs/30/000000/back.png'};

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <SafeAreaView style={styles.containerCentralize}>
          <Text style={styles.title}>Model</Text>
        </SafeAreaView>

        <View>
            {cars.map(p =>{
              return <Text>{p.name}</Text>
            })}
        </View>

        <View>
          <Pressable style={[styles.settings, {color: backgroundColor}]}>
            <Text
              style={[styles.text, {color: textColor}]}
              onPress={() => setCliquei(!cliquei)}>
              155mph
            </Text>
            <Text
              style={[styles.text, {color: textColor}]}
              onPress={() => setCliquei(!cliquei)}>
              405mi
            </Text>
            <Text style={[styles.text]}>3.1sec</Text>
          </Pressable>
        </View>

        <View>
          <ImageBackground
            source={require('../../assets/ModelXPictures/front.png')}
            style={styles.containerImages}
          />
        </View>

        <View style={styles.containerChoiceMotor}>
          <Text style={styles.subText}>Dual Motor All-Wheel Drive</Text>

          <Pressable
            onPress={() => setOption1(!option1)}
            style={[
              styles.containerBorderBlue,
              {borderColor: backgroundColor},
            ]}>
            <Text style={styles.textBorder}>Long Range</Text>
            <Text>$79,990</Text>
          </Pressable>

          <Pressable
            onPress={() => setOption2(!option2)}
            style={[
              styles.containerBorderBlue,
              {borderColor: backgroundColor2},
            ]}>
            <Text style={styles.textBorder}>Plaid</Text>
            <Text>$129,990</Text>
          </Pressable>
        </View>

        <View style={styles.containerCentralize}>
          <Text style={styles.subTitle}>
            Prices shown without the $1,500 California Clean Fuel Reward and
            potential incentives and gas savings for a total of $7,000.
            Customize
          </Text>

          {/* botao de abrir do modal*/}
          <Pressable
            style={[styles.featureButton]}
            onPress={() => setModalVisible(true)}>
            <Text>FEATURE DETAILS</Text>
          </Pressable>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            console.warn('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            {/* botao de fechar do modal*/}
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Image source={{uri: close}} style={styles.closeModal} />
            </Pressable>

            <View style={styles.modalView}>
              <ImageBackground
                source={require('../../assets/ModelXPictures/carInside.jpeg')}
                style={styles.backgroundModal}
              />
              <Text style={{fontSize: 25}}>Three Displays</Text>
              <Text style={styles.modalText}>
                With 2200x1300 resolution, ultra-bright colors and exceptional
                responsiveness, the new center display is an ideal touchscreen
                for entertainment.
              </Text>
            </View>
          </View>
        </Modal>

        <View style={styles.containerLabel}>
          <Text style={{color: 'black', fontSize: 20}}>Paint</Text>
          <View style={styles.label}>
            <RNPickerSelect
              style={styles.containerChoice}
              onValueChange={value => console.log(value)}
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
          <Text style={{color: 'black', fontSize: 20}}>Wheels</Text>
          <View style={styles.wheelsContainer}>
            <Pressable onPress={() => console.warn('19" Tempest Wheels')}>
              <ImageBackground
                source={require('../../assets/wheels1.png')}
                style={{width: 100, height: 100}}
              />
              <Text style={{marginTop: 10}}>19" Tempest Wheel</Text>
              <Text>Included</Text>
            </Pressable>

            <Pressable onPress={() => console.warn('19" Tempest Wheels')}>
              <ImageBackground
                source={require('../../assets/wheels2.png')}
                style={{width: 100, height: 100}}
              />

              <Text style={{marginTop: 10}}>21" Arachnid Wheels</Text>
              <Text>$4,500</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.containerLabel}>
          <Text style={{color: 'black', fontSize: 20}}>Interior</Text>
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
          <Text style={{color: 'black', fontSize: 20}}>Plaid Upgrades</Text>
          <Text style={styles.subTitle}>INCLUDED</Text>
          <Text style={{fontSize: 10, color: 'grey', marginBottom: 10}}>
            The currently enabled features require active driver supervision and
            do not make the vehicle autonomous. The activation and use of these
            features are dependent on achieving reliability far in excess of
            human drivers as demonstrated by billions of miles of experience, as
            well as regulatory approval, which may take longer in some
            jurisdictions. As these self-driving features evolve, your car will
            be continuously upgraded through over-the-air software updates.
          </Text>
        </View>

        <View style={styles.containerPayment}>
          <Text style={{color: 'black', fontSize: 20}}>
            Order Your Model xxx
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 14,
              fontWeight: 'bold',
              marginBottom: 10,
            }}>
            Est. Delivery: June
          </Text>
          <Pressable style={styles.payment}>
            <Text style={{color: 'white', fontSize: 13}}>
              CONTINUE TO PAYPMENT
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default CustomOrderPage;
