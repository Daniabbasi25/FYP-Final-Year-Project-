import { View, Text ,TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './styles'
import Icon from 'react-native-vector-icons/AntDesign';
import * as RootNavigation  from '../../RootNavigation';

const myIcon = <Icon name="clockcircleo" size={30} color="#fff" />;
const Order = props => {
   const {customername ,deliveryaddress,status,customerid,mainid,isAssgin,deliveryboyname} =props.ord;
  return (
    <TouchableOpacity onPress={()=>{RootNavigation.navigate("OrderDetail",{mainid:mainid,customername:customername,deliveryaddress:deliveryaddress,customerid:customerid,isAssgin:isAssgin,deliveryboyname:deliveryboyname})}} >

    
    <View style={styles.container}>
        {/* image */}
        <View style={styles.icon}>
        {myIcon}
        </View>
        <Text style={{color:'#748A9D'}}>
             {/* {customer_id} */}
             {customername}
        </Text>
        <Text style={{color:'#A6BCD0'}}>
            {deliveryaddress}
        </Text>
        <Text style={{color:'#748A9D'}}>
             {status}
        </Text>
       
    </View>
    </TouchableOpacity>
  )
}

export default Order