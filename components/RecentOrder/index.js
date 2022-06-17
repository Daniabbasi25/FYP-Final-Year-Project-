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
import API from '../../API';
const orderurl = `http://${API}/apiv1/api/Orders/Allorders`;
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
      .finally(setlod=>setloading(false));
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={result.slice(0, 3)}
        // keyExtractor={({id}, index) => order_id}
        //  data={this.state.itemList.slice(0, 30)}
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
