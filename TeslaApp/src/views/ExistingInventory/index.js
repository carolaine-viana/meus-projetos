import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  SafeAreaView,
  Picker,
  Pressable,
} from 'react-native';
import cars from '../../data/cars';
import styles from './styles';
// import modelS from '../../assets/ModelSPictures/container.png';
import {ScrollView} from 'react-native-gesture-handler';

export default ({route, navigation}) => {
  const [list, setList] = useState(route.params ? route.params : {});

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.containerImageCar}>
          <Image
            source={list.usedModel}
            style={{width: '100%', height: '100%', resizeMode: 'contain', borderRadius: 20}}
          />
        </View>

        <View style={styles.containerText}>
          <Text
            style={{
              fontSize: 25,
              fontFamily: 'Poppins-Regular',
              color: 'grey',
            }}>
            {list.name}
          </Text>
          <Text style={{fontSize: 15, marginBottom: 10}}>
            Standard Range Rear-Wheel Drive
          </Text>
        </View>

        <View style={styles.containerRange}>
          <View style={styles.rangerConfig}>
            <Text style={{fontSize: 20}}>5.3sec</Text>
            <Text style={{fontSize: 20}}>135mph</Text>
            <Text style={{fontSize: 20}}>244mi</Text>
          </View>
        </View>

        <View style={styles.containerDescription}>
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 20,
                marginBottom: 5,
                fontFamily: 'Poppins-Regular',
              }}>
              Key Features
            </Text>
            <Text style={styles.text}>Pearl White Paint</Text>
            <Text style={styles.text}>19 Gemini Wheels</Text>
            <Text style={styles.text}>ALL Black Premium Interior</Text>
            <Text style={styles.text}>Autopilot</Text>
            <Text style={styles.text}>Five Seat Interior</Text>
          </View>

          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                fontSize: 20,
                textTransform: 'uppercase',
                fontFamily: 'Poppins-Regular',
                marginBottom: 5,
              }}>
              Price
            </Text>
            <Text style={styles.text}>R$ 39,90</Text>
            <Text style={styles.text}>R$ 549/mo</Text>
            <Text style={styles.text}>Excluding Taxe and fees</Text>
            <Text style={styles.text}>R$100 order fee due today</Text>
          </View>
        </View>

        <View style={styles.containerButton}>
          <Pressable style={styles.buyButton}>
            <Text style={{color: 'white'}}>BUY</Text>
          </Pressable>
        </View>

        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 20,
              marginBottom: 5,
              textTransform: 'uppercase',
              marginBottom: 5,
              fontFamily: 'Poppins-Regular',
            }}>
            Warranties
          </Text>
          <Text style={styles.text}>
            Limited Warranty | 4 years / 50,000 total miles
          </Text>
          <Text style={styles.text}>Battery and Drive Unit Limited</Text>
          <Text style={styles.text}>8 Years / 100,000 total miles</Text>
        </View>

        <View style={{marginTop: 10, paddingHorizontal: 25}}>
          <Text style={{color: 'grey'}}>
            For more information on this modal {list.name}, request a callback.
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};
