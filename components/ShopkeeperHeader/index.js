import {View, Text, Image} from 'react-native';
import React from 'react';
import {useState, useEffect} from 'react';
import styles from './styles';
import API from '../../API';
const orderurl = `http://${API}/API/api/Orders/OneShopkeeper`;

const ShopkeeperHeader = props => {
  const id = props.id;
  const [isloading, setloading] = useState(true);
  const [result, orderlist] = useState('');

  // useEffect(() => {
  //   fetch(`http://${API}/API/api/Shopkeeper/OneShopkeeper?id=${id}`, {
  //     method: 'Get',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then(resp => resp.json())
  //     .then(resp => orderlist(resp))
  //     .catch(error => alert(error))
  //     .finally(setloading(false));
  // });
  return (
    <View style={styles.container}>
      {/* <Image 
        source={{uri:'https://i.pravatar.cc/300?img=65'}}
        style={styles.profilepicture}
     /> */}
      <Text style={styles.name}>Kohistan Fruit seller</Text>
    </View>
  );
};

export default ShopkeeperHeader;
