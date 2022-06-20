import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import {Card} from 'react-native-elements';
import styles from './styles';
import API from '../../API';
import CartContext from '../../Context/Cart/CartContext';
import Cartitem from '../../components/Cartitem';
const Cart = ({navigation}) => {
  // start
  // global.t=0;
  const [isloading, setloading] = useState(true);
  const [result, productlist] = useState([{}]);
  //  const [total,settotal]=useState(0)
  const t = useContext(CartContext);

  const getDataUsingGet = async () => {
    //GET request

    try {
      const apiurl = `http://${API}/API/api/CartItem/Allcart?customerid=${global.userId}`;
      const response = await fetch(apiurl);
      const json = await response.json();
      //  settotal(0)
      console.log('hiii' + JSON.stringify(json));
      productlist(json);
      console.log("Product List Data:", result)
      //  const t=json.map((num)=>{
      //     console.log(`total=${total} and num.ttl=${num.ttl}`)

      //     let n=parseInt(num.ttl)
      //     // settotal( parseInt(total)+parseInt(n));
      //   })
    } catch (error) {
      console.error(error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    getDataUsingGet();
  }, []);
  const Completelist = () => {
    if (!isloading) {
      return (
        <View>
          <View style={styles.flatlistcontainer}>
            <FlatList
              data={result}
              renderItem={({item}) => <Cartitem cartdata={item} />}
            />
          </View>
        </View>
      );
    } else {
      return <ActivityIndicator size="large" color="#00ff00" />;
    }
  };
  // end

  return (
    <View>
      <Completelist />
      <View style={styles.lowercontainer}>
        <TouchableOpacity
          onPress={() => {
            t.update(1);
            navigation.navigate('CheckOut');
          }}>
          <Text style={styles.checkoutbutton}>checkout Rs={t.total}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Cart;
