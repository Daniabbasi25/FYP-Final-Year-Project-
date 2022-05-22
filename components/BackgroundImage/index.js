import { View,ImageBackground } from 'react-native'
import React from 'react'
import styles from './style';
const image = require('../../assets/images/splash.jpg');
const BackgroundImage = () => {
  return (
   
       <ImageBackground
            resizeMode="cover"
            source={image}
            style={styles.image}
        />
    
  )
}

export default BackgroundImage