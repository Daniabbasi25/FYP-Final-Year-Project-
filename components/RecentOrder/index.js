import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Order from '../Order';
import styles from './styles';
import Orders from './Orders';

const orderurl = 'http://192.168.1.113/apiv1/api/Orders/Allorders';
const RecentOrder = () => {
  const [isloading, setloading] = useState(true);
  const [result, orderlist] = useState([]);

  useEffect(() => {
    fetch(orderurl, {
      method: 'Get',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(resp => resp.json())
      .then(resp => orderlist(resp))
      .catch(error => alert(error))
      .finally(setloading(false));
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={Orders}
        // keyExtractor={({id}, index) => order_id}
        // data={this.state.itemList.slice(0, 2)}
        renderItem={({item}) => <Order ord={item} />}
        // renderItem={({item})=>{
        //   <Text>
        //     {item.order_id}
        //   </Text>
        // }}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
        style={styles.flatList}
      />
    </View>
  );
};

export default RecentOrder;
