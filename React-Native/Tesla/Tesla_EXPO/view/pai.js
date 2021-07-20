import React from 'react'
import {View, Text} from 'react-native'
import Filho from './filho';

const Pai = () => {
    let x = 13
    let y = 100
    return (
          <View>
              <Filho a={x} b={y} />
              <Filho a={x+100} b={y+200} />
          </View>
      )
}
export default Pai