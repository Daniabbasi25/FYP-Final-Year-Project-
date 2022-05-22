import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'

const ShopkeeperHeader = () => {
  return (
    <View style={styles.container}>
     <Image 
        source={{uri:'https://i.pravatar.cc/300?img=65'}}
        style={styles.profilepicture}
     />
     <Text style={styles.name}>
       Af Fresh Fruite & Vegitable
     </Text>
    </View>
  )
}

export default ShopkeeperHeader