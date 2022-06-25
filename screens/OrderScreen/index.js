import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import RecentOrder from '../../components/RecentOrder';
import styles from './styles';

const OrderScreen = () => {
  return (
    <View>
      <Text>Orders</Text>
      {/* <RecentOrder /> */}
      <View style={styles.buttoncontainer}>
        <TouchableOpacity >
          <Text>Pending</Text>
        </TouchableOpacity>
        <TouchableOpacity >
          <Text>Complete</Text>
        </TouchableOpacity>
        <TouchableOpacity >
          <Text>ON way</Text>
        </TouchableOpacity>
        <TouchableOpacity >
          <Text>Schedue</Text>
        </TouchableOpacity>
        <TouchableOpacity >
          <Text>Cancle</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OrderScreen;