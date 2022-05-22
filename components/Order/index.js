import { View, Text ,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import Icon from 'react-native-vector-icons/AntDesign';
const myIcon = <Icon name="clockcircleo" size={30} color="#fff" />;
const Order = props => {
   const {order_time ,order_totalamount,order,c_name} =props.ord;
  return (
    <TouchableOpacity>

    
    <View style={styles.container}>
        {/* image */}
        <View style={styles.icon}>
        {myIcon}
        </View>
        <Text style={{color:'#748A9D'}}>
             {c_name}
        </Text>
        <Text style={{color:'#A6BCD0'}}>
            {order_time }
        </Text>
        <Text style={{color:'#748A9D'}}>
            RS {order_totalamount}
        </Text>
       
    </View>
    </TouchableOpacity>
  )
}

export default Order