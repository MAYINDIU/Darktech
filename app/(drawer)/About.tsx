import { View, Text, Image } from 'react-native'
import React from 'react'

const About = () => {
  return (
    <View>
      <Text>About</Text>
      <Image
      
        source={require('../../assets/images/favicon.png')}
      />
    </View>
  )
}

export default About