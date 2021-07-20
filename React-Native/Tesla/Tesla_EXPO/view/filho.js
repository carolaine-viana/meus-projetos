import React from 'react'
import {View, Text} from 'react-native'

const Filho = (props) => {
    return (
          <View>
              <Text>{props.a}</Text>
              <Text>{props.b}</Text>
          </View>
      )
}
export default Filho